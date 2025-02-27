import { WordContainer } from 'services/word/model'
import * as ActionType from 'store/sentences/const'

// sync
export const updateStatus = (id: number) => {
  return {
    type: ActionType.UPDATE_STATUS as typeof ActionType.UPDATE_STATUS,
    payload: id,
  }
}

// async
export const getSentences = {
  start: (uid: string) => {
    return {
      // typeの型にas typeofとすることで、typeはstring型ではなく、GET_WORD_LIST_STARTという文字列を持つ、専用の型になる
      // これをすることによりswitch文で、case句に応じてどんなpayloadが来るのかをts側で判断できるようになるみたい。たぶん。
      // 例えば、payloadが存在しないアクションとかこれがないとpayloadがないってエラーになる
      type: ActionType.GET_WORD_LIST_START as typeof ActionType.GET_WORD_LIST_START,
      payload: uid,
    }
  },
  // redux-sagaから{params, result}の形式でもらう
  // paramsいらない場合も定義しなきゃいけないのかしら
  succeed: (params: any, result: { sentences: WordContainer[] }) => {
    return {
      type: ActionType.GET_WORD_LIST_SUCCESS as typeof ActionType.GET_WORD_LIST_SUCCESS,
      payload: { params, result },
    }
  },
  fail: (params: any, error: any) => {
    return {
      type: ActionType.GET_WORD_LIST_FAIL as typeof ActionType.GET_WORD_LIST_FAIL,
      payload: { params, error },
      error: true,
    }
  },
}

export interface CreateSentenceParams {
  uid: string
  en: { sentence: string; note?: string }
  jp: { sentence: string; note?: string }
}

export const createSentence = {
  start: (params: CreateSentenceParams) => {
    return {
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
      type: ActionType.CREATE_SENTENCE_START as typeof ActionType.CREATE_SENTENCE_START,
      payload: params,
    }
  },
  succeed: () => {
    return {
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
      type: ActionType.CREATE_SENTENCE_SUCCESS as typeof ActionType.CREATE_SENTENCE_SUCCESS,
    }
  },
  fail: () => {
    return {
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
      type: ActionType.CREATE_SENTENCE_FAIL as typeof ActionType.CREATE_SENTENCE_FAIL,
    }
  },
}

export type SentencesAction =
  | ReturnType<typeof updateStatus>
  | ReturnType<typeof getSentences.start>
  | ReturnType<typeof getSentences.succeed>
  | ReturnType<typeof getSentences.fail>
  | ReturnType<typeof createSentence.start>
  | ReturnType<typeof createSentence.succeed>
  | ReturnType<typeof createSentence.fail>
