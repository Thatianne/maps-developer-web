import React from 'react'

import './style.css'

export default class DevItem extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { avatar_url, name, techs, bio, github_username } = this.props.dev

    return (
      <li className="dev-item">
        <header>
          <img src={avatar_url} alt={name} />
          <div className="user-info">
            <strong>{name}</strong>
            <span>{techs.join(', ')}</span>
          </div>
        </header>
        <p>{bio}</p>
        <a href={`https://github.com/${github_username}`} target="_blank">Acessar perfil no Github</a>
      </li>
    )
  }
}