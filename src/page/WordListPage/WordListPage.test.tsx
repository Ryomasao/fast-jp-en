import './matchMedia.mock'
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import WordListPage from './index'

const store = createStore(() => {
  return {}
})

// https://qiita.com/markey/items/134386ee98b277f181f7

const renderWithRedux = (page: React.FC) => {
  const utils = render(<Provider store={store}>{page}</Provider>)

  return utils
}

describe('test', () => {
  it('renders without crashing', () => {
    const { getByTestId } = renderWithRedux(<WordListPage />)
    expect(getByTestId('hoge')).toBeInTheDocument()
  })
})
