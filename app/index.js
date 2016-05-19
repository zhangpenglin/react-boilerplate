import React, {Component} from 'react'
import {render} from 'react-dom'
import {Router, Route, IndexRoute, Link, IndexLink, hashHistory} from 'react-router'

const ACTIVE = {color: 'red'}

class App extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

class Index extends React.Component {

    render() {
        return (
            <div style={{backgroundColor:'sandybrown',height:'600px'}}>
                <h2>当前页面:Index!</h2>
                <Link to="/users" activeStyle={ACTIVE}>/users</Link>
            </div>
        )
    }
}

class Users extends React.Component {
    back() {
        this.props.history.goBack(-1)
    }
    render() {
        return (
            <div style={{backgroundColor:'skyblue',height:'600px'}}>
            <h2> 当前页面:Users</h2>
                <button onClick={this.back.bind(this)}>back</button>
            </div>
        )
    }
}


var example = document.createElement('div')
document.body.appendChild(example)
render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Index}/>
            <Route path="users" component={Users}>
            </Route>
        </Route>
    </Router>
), example)