import React, { useState } from 'react'
/** @jsx jsx */
import { css, jsx, Global } from '@emotion/core'
// 型定義
// eslint-disable-next-line import/no-extraneous-dependencies
import * as H from 'history'
import LoadingModal from 'components/organisms/LoadingModal'
import Header from 'components/organisms/Header'
import SideMenu from 'components/organisms/SideMenu'
import Footer from 'components/organisms/Footer'
import { Color } from 'const'
import { AuthState, UserStatus } from 'services/auth/model'

interface MainProps {
  className?: string
  authState: AuthState
  history: H.History
  location: H.Location
  signOut: () => void
}

const Main: React.FC<MainProps> = ({
  className,
  children,
  authState,
  history,
  location,
  signOut,
}) => {
  const [showSideMenu, handleShowSideMenu] = useState(false)

  return (
    <div className={className} css={css({ position: 'relative' })}>
      <Global styles={globalStyle} />
      <Header
        css={headerStyle}
        history={history}
        location={location}
        handleShowSideMenu={() =>
          handleShowSideMenu(showSideMenu => !showSideMenu)
        }
      />
      <main css={mainStyle}>{children}</main>
      <Footer css={footerStyle} />
      {/** 認証状態を取得中のモーダル */}
      <LoadingModal isShow={authState.userStatus === UserStatus.unknown} />
      <SideMenu
        isShow={showSideMenu}
        closeSideMenu={() => handleShowSideMenu(false)}
        authState={authState}
        signOut={signOut}
        history={history}
      />
    </div>
  )
}

// body全体にはスクロールはさせないようにする
const globalStyle = css`
  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    overflow: hidden;
    font-size: 1.4rem;
  }

  p {
    margin: 0;
  }
`

const headerHeight = 60

const headerStyle = css({
  position: 'fixed',
  top: 0,
  height: `${headerHeight}px`,
  width: '100%',
})

const mainStyle = css({
  marginTop: `${headerHeight}px`,
  height: `calc(100vh - ${headerHeight}px)`,
  backgroundColor: Color.BACKGROUND_MAIN,
  overflow: 'scroll',
})

const footerStyle = css({
  position: 'fixed',
  bottom: 0,
  height: '95px',
  width: '100%',
})

export default Main
