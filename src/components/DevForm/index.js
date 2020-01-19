import React from 'react'

export default class DevForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      latitude: 0,
      longitude: 0,
      github_username: '',
      techs: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
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

  async handleSubmit(e) {
    e.preventDefault()
    await this.props.onSubmit({
      github_username: this.state.github_username,
      techs: this.state.techs,
      latitude: this.state.latitude,
      longitude: this.state.longitude
    })

    this.setState({
      github_username: '',
      techs: '',
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-block">
          <label htmlFor="username">Usuário do Github</label>
          <input
            name="username"
            id="username"
            value={this.state.github_username}
            onChange={e => this.setState({ github_username: e.target.value })}
            required
          />
        </div>

        <div className="input-block">
          <label htmlFor="techs">Tecnologias</label>
          <input
            name="techs"
            id="techs"
            value={this.state.techs}
            onChange={e => this.setState({ techs: e.target.value })}
            required
          />
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
    )
  }
}