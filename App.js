import {Switch, Route} from 'react-dom'
import {Component} from 'react'

import SignUp from './components/SignUp'
import Login from './components/Login'
import MovieList from './components/MovieList'
import CompanyInfo from './components/CompanyInfo'

import './App.css'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/movies" component={MovieList} />
        <Route exact path="/company-info" component={CompanyInfo} />
      </Switch>
    )
  }
}

export default App
