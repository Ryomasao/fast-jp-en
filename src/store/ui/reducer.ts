interface UI {
  isLoading: boolean
}

const initialState: UI = {
  isLoading: false,
}

export default (state = initialState, action: any) => {
  return state
}
