// create your App component here
import React from 'react'

class App extends React.Component {
  state = {
    people: []
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(res => res.json())
    // .then(people => console.log(people))
    .then(resObj => this.setState({
      people: resObj.people
    }))
  }
  render() {
    return(
      <div>{this.state.people.map((person, i) => <h1 key={i}>{person.name}</h1>)}</div>
    )
  }
}

export default App
