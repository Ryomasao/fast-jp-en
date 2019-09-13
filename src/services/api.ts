import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const api = axios.create()
// TODO devモードのときのみにする
const mock = new MockAdapter(api, { delayResponse: 500 })
mock.onGet('/sentences').reply(200, {
  sentences: [
    {
      id: 1,
      jp: {
        sentense: 'これは猫ですか？',
      },
      en: {
        sentense: 'is this a cat?',
      },
    },
    {
      id: 2,
      jp: {
        sentense: 'fuga',
      },
      en: {
        sentense: 'fuga',
      },
    },
  ],
})

export default api
