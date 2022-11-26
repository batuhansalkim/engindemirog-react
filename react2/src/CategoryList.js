import React, { Component } from 'react'
import { ListGroup,ListGroupItem } from 'react-bootstrap'


export default class CategoryList extends Component {
    constructor(props){
        super(props);
        
    }
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <ListGroup>
            <ListGroupItem>Batuhan</ListGroupItem>
            <ListGroupItem>Tuna</ListGroupItem>
            <ListGroupItem>Cenk</ListGroupItem>
            <ListGroupItem>Alper</ListGroupItem>
            <ListGroupItem>Murat</ListGroupItem>
        </ListGroup>
      </div>
    )
  }
}
