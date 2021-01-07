import React, { Component } from 'react'

class CatShow extends Component {
  render() {
    console.log(this.props.cat)
    let { cat } = this.props
    return (
      <>
        <h3>This is the Cat show page</h3>
        <p>Hi, I'm { cat.name }</p>
        <p>I am { cat.age }</p>
        <p>I enjoy { cat.enjoys }</p>
      </>
    )
  }
}
export default CatShow
