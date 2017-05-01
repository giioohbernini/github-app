'use strict'

import React, { PropTypes } from 'react'
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'

/* Explicações

- o '!!' usado força a variável a retornar o valor em boolean
- {isFetching && <div>Carregando...</div>} nesse trecho, usamos {logica && elemento}
  para somente renderizar o elemento caso a logica seja verdadeira
*/

const AppContent = ({ userinfo, repos, starred, handleSearch, getRepos, getStarred, isFetching }) => (
  <div className='app'>
    <Search isDisabled={isFetching} handleSearch={handleSearch} />
    {isFetching && <div>Carregando...</div>}
    {!!userinfo && <UserInfo userinfo={userinfo} />}
    {!!userinfo && <Actions getRepos={getRepos} getStarred={getStarred} />}

    {!!repos.length &&
      <Repos
        title='Repositórios:'
        className='repos'
        repos={repos}
      />
    }

    {!!starred.length &&
      <Repos
        title='Favoritos:'
        className='starred'
        repos={starred}
      />
    }
  </div>
)

AppContent.propTypes = {
  userinfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired,
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired
}

export default AppContent
