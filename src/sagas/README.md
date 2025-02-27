# redux-saga に入る前に

`redux-saga`のサンプルを見ていて、`function*`をみた瞬間、これなんぞ！となったのでメモ。

## ジェネレーター

`function*`はジェネレータ関数。

他の言語でも、見たことはあったけど、ちゃんと使ったことがなかった。

こんな感じに使える。

```javascript
// ジェネレータ関数
function* basic() {
  yield 1;
  yield 2;
  yield 3;
}

// ジェネレータ関数を実行すると、コードの内容が実行されるのではなく、イテレータオブジェクトが返却される
const basicGenerator = basic();

// イテレータオブジェクトに対してnext()を実行すると、yieldが見つかるところまで実行する
console.log(basicGenerator.next()); // Object {value: 1, done: false}

// 再度実行すると、前回のyield以降から再度実行される
console.log(basicGenerator.next()); // Object {value: 2, done: false}

console.log(basicGenerator.next()); // Object {value: 3, done: false}
```

関数を途中で止めて、再開みたいな感じで、初めてみたときは衝撃的だった。

このジェネレータの機能を使うと、非同期処理をわかりやすく書けるとのこと。
とはいえ初めて見たとき、全然わかりやすくなかったので、順を追って書く。

まずは、非同期処理を順に追って実行したいけど、できていない処理

```javascript
// messageをms後にコンソールに出力するtimer関数
function timer(message, ms) {
  setTimeout(() => {
    console.log(message);
  }, ms);
}

// timer関数を順を追って実行したい
function execTimer() {
  timer('first', 3000);
  timer('second', 1000);
}

execTimer();
// 以下の順で出力したいけど
// first
// second
//
// 実際は以下の順で表示される
// seconde
// first
```

コールバック地獄 →Promise→aysnc await と学んできたけど、ジェネレータを使うという選択肢があった。

```javascript
//変更箇所のみ抜粋

// generatorに変更する
function* execTimer() {
  yield timer('first', 3000);
  yield timer('second', 1000);
}

// イテレータオブジェクトをもらって
const timerGenerator = execTimer();
// 実行すると
timerGenerator.next();

// 以下のみ出力される
// first
```

`timerGenerator.next()`を一回だけ実行すると、`execTimer`の最初の yield の処理が実行される。
今のままだと、`first`だけ出力されて終わってしまうので、`first`が終わった後に、再度`timerGenerator.next()`を実行すればいいはず。

ということでこんな感じに`timerGenerator.next()`を実行する関数を渡します。

```javascript
// next()を実行する関数を渡す！
// あれー、変数timerGeneratorにexecTimerの返り値をセットするたけど、
// その引数にtimerGeneratorを使うって、あれ？おや？と混乱するね！
// 関数だから、`() => timerGenerator.next()`はこの時点では実行されないんだよね
const timerGenerator = execTimer(() => timerGenerator.next());
timerGenerator.next();
```

受け取った関数を`timer`で実行するようにする。

```javascript
function timer(message, ms, next) {
  setTimeout(() => {
    console.log(message);
    next();
  }, ms);
}

function* execTimer(next) {
  yield timer('first', 3000, next);
  yield timer('second', 1000, next);
}
```

これで、ジェネレータを使って非同期処理を順列に書くことができるようになった。
最初わかりにくかったけど、こう書いてみるとわかりやすいと思うようになってきた。不思議。

## ジェネレータ + Promise + co

`co`というライブラリを使うと、上記のジェネレーターの非同期処理を`next`を渡さなくともできるようになるとのこと。
https://github.com/tj/co

```javascript
import co from 'co';

// Promiseを返すようにする
function timer(message, ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(message);
      resolve();
    }, ms);
  });
}

// generatorに変更する
function* execTimer() {
  yield timer('first', 3000);
  yield timer('second', 1000);
}

co(execTimer);
```

`next`を渡してないけど、想定通りの挙動になる。

`co`のコードをなんとなく読んでみると、ものすごく機能を抜粋するとこんな感じになっているのだと思う。  
本家だと`apply`とか`call`とか使っているけど、なぜそれが必要なのかわかってない。

```javascript
const myCo = generator => {
  // ジェネレーター関数を引数にとって、イテレータをつくる
  const iterator = generator();
  // イテレータを実行していく関数
  consumePromise(iterator);

  function consumePromise(iterator) {
    // yieldが返すのはPromsie前提で書いてる
    let promise = iterator.next();
    if (promise.done) return;
    // Promiseが解決したら、次のyieldを処理する
    promise.value.then(() => consumePromise(iterator));
  }
};
```
