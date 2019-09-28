# 環境について

- `create-react-app@3.1.1`で作成した
- `prettier`、`eslint`、`.vscode`の設定は何も理解せず[このリポジトリ](https://github.com/Ryomasao/react-typescript-template)のものを持ってきた

## emotion

https://www.dkrk-blog.net/javascript/emotion_css

https://msakamaki.github.io/clean-code-typescript/
https://github.com/petkaantonov/bluebird/wiki/Optimization-killers

## import を絶対パスにする

tsconfig.json

```json
  "compilerOptions": {
    "baseUrl": "src"
  },
  "include": ["src"]
```

.eslint.js

```javascript
  settings: {
    'import/resolver': {
      node: {
        // 以下を追加
        moduleDirectory: ['node_modules', 'src'],
        //
        extensions: ['.js', 'jsx', '.ts', '.tsx'],
      },
    },
```

## 型の書き方メモ

一旦、Redux の typescript で試してみて、その後に、React で始める Typescript もやってみた。

Redux のアクションの型を書くとき、Redux チュートリアルでは、`interface`を使っていた。

types.ts

```javascript
// action createtorが増えたら SetWordList | で足してくっぽい
interface SetWordList {
  type: typeof SET_WORD_LIST
  payload: WordContainer[]
}

export type WordActionType =
  | SetWordList
  | UpdateStatus
```

actions.ts

```javascript
export const setWordList = (wordList: WordContainer[]): WordActionType => {
  return {
    type: SET_WORD_LIST,
    payload: wordList,
  };
};
```

一方、React で始める〜は`intarface`を使わずに、ReturnType で型定義をしている。
https://github.com/oukayuka/ReactBeginnersBook-2.0/blob/master/11-async/03-saga/src/actions/github.ts

こっちのほうがシンプルでよさそう。

## 名称を見直す

## React のイベントの型

https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/index.d.ts#L485
