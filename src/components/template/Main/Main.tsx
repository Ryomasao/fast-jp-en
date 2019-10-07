import React, {useEffect} from 'react'
/** @jsx jsx */
import { css, jsx, Global } from '@emotion/core'
import LoadingModal from 'components/organisms/LoadingModal'
import Header from 'components/organisms/Header'
import Footer from 'components/organisms/Footer'
import { Color } from 'const'
import { AuthState, User, UserStatus } from 'services/auth/model'
import { fireBaseAuthObserver } from 'services/auth'

interface MainProps {
  className?: string
  signIn: (user: User) => void
  signOut: () => void
  authState: AuthState
}

const Main: React.FC<MainProps> = ({ className, children,
  signIn,
  signOut,
  authState,
}) => {

  useEffect(() => {
    fireBaseAuthObserver(signIn, signOut)
    // eslint-disable-next-line
  }, [])

  return (
    <div className={className} css={css({ position: 'relative' })}>
      <Global styles={globalStyle} />
      <Header css={headerStyle} />
      <main css={mainStyle}>{children}</main>
      <Footer css={footerStyle} />
      {/** 認証状態を取得中のモーダル */}
      <LoadingModal isShow={authState.userStatus === UserStatus.unknown}/>
    </div>
  )
}

// TODO GlobalスタイルはApp.tsxに移行する
// body全体にはスクロールはさせないようにする
const globalStyle = css`
  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    overflow: 'hidden';
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
