import { UPDATE_LOADING_STATUS } from './const'

export const updateLoadingStatus = (isLoading: boolean) => {
  return {
    type: UPDATE_LOADING_STATUS,
    payload: isLoading
  }
}
