import React from 'react'
import api from './services/api'

import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

import DevItem from './components/DevItem'
import DevForm from './components/DevForm'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      devs: []
    }

    this.add = this.add.bind(this)
    this.loadDevs = this.loadDevs.bind(this)
  }

  componentDidMount() {
    this.loadDevs()
  }

  async add(data) {
    const res = await api.post('/devs', data)

    this.setState({
      devs: [
        ...this.state.devs,
        res.data
      ]
    })
  }

  async loadDevs() {
    const res = await api.get('/devs')
    this.setState({ devs: res.data })
  }

  render() {
    return (
      <div id="app">
        <aside>
          <strong>Cadastrar</strong>
          <DevForm onSubmit={this.add} />
        </aside>
        <main>
          <ul>
            {this.state.devs.map(dev => (
              <DevItem key={dev._id} dev={dev} />
            ))}
          </ul>
        </main>
      </div>
    );
  }
}