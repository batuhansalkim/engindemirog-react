import React, { Component } from 'react'
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Badge,
} from 'reactstrap';

export default class CartSummary extends Component {
  renderSumary(){
    return(
        <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Sepetiniz - {this.props.cart.length}
                </DropdownToggle>
                <DropdownMenu right>
                    {
                        this.props.cart.map(cartItem => (
                            <DropdownItem key={cartItem.product.id}>{cartItem.product.productName}
                            <Badge color='success'>{cartItem.quantity}</Badge></DropdownItem>
                        ))
                    }
                    <DropdownItem divider />
                    <DropdownItem>
                        Reset
                    </DropdownItem>
                </DropdownMenu> 
            </UncontrolledDropdown>
    );
    }
    render() {
    
    return <div>{this.props.cart.length>0?this.renderSumary():<div></div>}</div>
  }
}
