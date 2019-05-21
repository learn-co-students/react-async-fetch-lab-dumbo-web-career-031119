// create your App component here

import React from 'react'

export default class App extends React.Component{

    state = {
        peeps: []
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(resp=>resp.json())
        .then(json=>{
            this.setState({
                peeps: json.people
            })
        })
    }

    render(){
        return this.state.peeps.map(peep=>{
            <div>
                <p>Name: {peep.name}</p>
                <p>Spacecraft: {peep.craft}</p>
            </div>
        })
    }
}