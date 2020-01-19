import React from 'react'

import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      latitude: 0,
      longitude: 0,
      githubUsername: '',
      techs: ''
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords
        this.setState({
          latitude,
          longitude
        })
      },
      err => console.log(err),
      {
        timeout: 30000
      })
  }

  render() {
    return (
      <div id="app">
        <aside>
          <strong>Cadastrar</strong>
          <form>
            <div className="input-block">
              <label htmlFor="username">Usuário do Github</label>
              <input name="username" id="username" required />
            </div>

            <div className="input-block">
              <label htmlFor="techs">Tecnologias</label>
              <input name="techs" id="techs" required />
            </div>

            <div className="input-group">
              <div className="input-block">
                <label htmlFor="latitude">Latitude</label>
                <input
                  type="number"
                  name="latitude"
                  id="latitude"
                  value={this.state.latitude}
                  onChange={e => this.setState({ latitude: e.target.value })}
                  required
                />
              </div>

              <div className="input-block">
                <label htmlFor="longitude">Longitude</label>
                <input
                  type="number"
                  name="longitude"
                  id="longitude"
                  value={this.state.longitude}
                  onChange={e => this.setState({ longitude: e.target.value })}
                  required
                />
              </div>
            </div>

            <button type="submit">Salvar</button>

          </form>
        </aside>
        <main>
          <ul>
            <li className="dev-item">
              <header>
                <img src="https://avatars3.githubusercontent.com/u/14905849?v=4" alt="Thatianne Carvalho" />
                <div className="user-info">
                  <strong>Thatianne Carvalho</strong>
                  <span>Javascript, Vue, PHP</span>
                </div>
              </header>
              <p>Desenvolvedora web e estudante de Engenharia de computação </p>
              <a href="https://github.com/Thatianne">Acessar perfil no Github</a>
            </li>

            <li className="dev-item">
              <header>
                <img src="https://avatars3.githubusercontent.com/u/14905849?v=4" alt="Thatianne Carvalho" />
                <div className="user-info">
                  <strong>Thatianne Carvalho</strong>
                  <span>Javascript, Vue, PHP</span>
                </div>
              </header>
              <p>Desenvolvedora web e estudante de Engenharia de computação </p>
              <a href="https://github.com/Thatianne">Acessar perfil no Github</a>
            </li>

            <li className="dev-item">
              <header>
                <img src="https://avatars3.githubusercontent.com/u/14905849?v=4" alt="Thatianne Carvalho" />
                <div className="user-info">
                  <strong>Thatianne Carvalho</strong>
                  <span>Javascript, Vue, PHP</span>
                </div>
              </header>
              <p>Desenvolvedora web e estudante de Engenharia de computação </p>
              <a href="https://github.com/Thatianne">Acessar perfil no Github</a>
            </li>

            <li className="dev-item">
              <header>
                <img src="https://avatars3.githubusercontent.com/u/14905849?v=4" alt="Thatianne Carvalho" />
                <div className="user-info">
                  <strong>Thatianne Carvalho</strong>
                  <span>Javascript, Vue, PHP</span>
                </div>
              </header>
              <p>Desenvolvedora web e estudante de Engenharia de computação </p>
              <a href="https://github.com/Thatianne">Acessar perfil no Github</a>
            </li>
          </ul>
        </main>
      </div>
    );
  }
}