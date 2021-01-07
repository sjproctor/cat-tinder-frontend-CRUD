import React, { Component } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'

import CatIndex from './pages/CatIndex'
import CatShow from './pages/CatShow'
import CatNew from './pages/CatNew'
import CatEdit from './pages/CatEdit'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import cats from './mockCats.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      cats: cats
    }
  }

  createCat = (newcat) => {
    console.log(newcat)
  }

  render() {
    console.log(this.state.cats)
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route
            path='/catindex'
            render={ (props) => <CatIndex cats={ this.state.cats } /> }
          />
          <Route
            exact path='/catshow/:id'
            render={ (props) => {
              let id = props.match.params.id
              let cat = this.state.cats.find(cat => cat.id === parseInt(id))
              return <CatShow cat={ cat } />
            }}
          />
          <Route
            path="/catnew"
            render={ (props) => <CatNew createCat={ this.createCat }/> }
          />
          <Route path='/catedit' component={ CatEdit } />
          <Route component={ NotFound } />
        </Switch>
        <Footer />
      </Router>
    )
  }
}
export default App
