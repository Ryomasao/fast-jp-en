import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const api = axios.create()
// TODO devモードのときのみにする
const mock = new MockAdapter(api, { delayResponse: 500 })
mock.onGet('/wordList').reply(200, {
  wordList: [
    {
      id: 1,
      jp: {
        text: 'hoge',
      },
      en: {
        text: 'hoge',
      },
    },
    {
      id: 2,
      jp: {
        text: 'fuga',
      },
      en: {
        text: 'fuga',
      },
    },
  ],
})

export default api
