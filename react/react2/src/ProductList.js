import React, { Component } from 'react'
import { Table } from 'react-bootstrap';

export default class ProductList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>{this.props.info.title} - {this.props.currentCategory}</h3>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map(product => (
              <tr key={product.id}>
                <th scope='row'>{product.id}</th>
                <td>{product.productName}</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
            ))}
            
          </tbody>
        </Table>
      </div>
    )
  }
}
