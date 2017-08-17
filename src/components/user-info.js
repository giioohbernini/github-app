'use strict'

import React, { PropTypes } from 'react'

const UserInfo = ({ userinfo }) => (
  <div className='user-info'>
    <div className='image'>
      <img width='150px' src={userinfo.photo} />
    </div>

    <div className='infos'>
      <div className='full-box'>
        <h1 className='username'>
          <a href={`https://github.com/${userinfo.login}`}>
            {userinfo.username}
          </a>
        </h1>
      </div>

      <div className='full-box'>
        <ul className='repos-info'>
          <li>Repositórios: {userinfo.repos}</li>
          <li>Seguidores: {userinfo.followers}</li>
          <li>Seguindo: {userinfo.following}</li>
        </ul>
      </div>
    </div>

  </div>
)

UserInfo.propTypes = {
  userinfo: PropTypes.shape({
    username: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired
  })
}

export default UserInfo
