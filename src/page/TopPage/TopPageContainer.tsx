import React from 'react'
import MainTemplate from 'components/template/Main'
import { Link } from 'react-router-dom'

const TopPageContainer: React.FC = () => (
  <MainTemplate>
    <div>TopPage</div>
    <ul>
      <Link to="/sentences">sentences</Link>
      <Link to="/admin/sentences">add sentences</Link>
    </ul>
  </MainTemplate>
)

export default TopPageContainer
