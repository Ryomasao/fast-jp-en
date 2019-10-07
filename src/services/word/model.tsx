export interface WordState {
  sentences: WordContainer[]
}

export interface WordContainer {
  id: number
  jp: Word
  en: Word
  status: number
}

export interface Word {
  sentence: string
  note: string
}
