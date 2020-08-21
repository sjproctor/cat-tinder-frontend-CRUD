import React, { Component } from 'react'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import { NavLink, Redirect } from 'react-router-dom'
import { Button, Card, CardTitle, CardText, Col } from 'reactstrap'

class CatShow extends Component{
  constructor(props){
    super(props)
    this.state = {
      success: false
    }
  }

  render(){
    const { cat } = this.props
    return(
      <React.Fragment>
        <Header />
        <Col sm="6" id="show-body">
          <Card body >
            <CardTitle>Hi, my name is { this.props.cat.name }!</CardTitle>
            <CardText>I am { this.props.cat.age } years old. I enjoy { this.props.cat.enjoys }.</CardText>
            <NavLink
              to={`/catedit/${this.props.cat.id}`}
            >
              <Button color="secondary">
                Edit Cat Profile
              </Button>
            </NavLink>
            <br />
            <NavLink
              to={"/catindex"}
            >
              <Button color="secondary"
                onClick={ () => { this.props.deleteCat(cat.id) }}
              >
                Delete Cat Profile
              </Button>
            </NavLink>
          </Card>
        </Col>
        <Footer />
        { this.state.success && <Redirect to="/catindex" />}
      </React.Fragment>
    )
  }
}
export default CatShow
