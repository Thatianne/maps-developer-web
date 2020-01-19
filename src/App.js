import React, { useState } from 'react'

import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

function App() {
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
              <input name="latitude" id="latitude" required />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
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

export default App