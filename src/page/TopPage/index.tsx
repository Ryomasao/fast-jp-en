import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import TopPageContainer from 'page/TopPage/TopPageContainer'

// RouterComponent以外にメンバーはいないので、ひとまずdisabled
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface TopPageProps extends RouteComponentProps {}

const TopPage: React.FC<TopPageProps> = props => <TopPageContainer {...props} />

export default TopPage
