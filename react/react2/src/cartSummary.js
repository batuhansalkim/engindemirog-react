import React, { Component } from 'react'
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Badge,
    NavItem,
    NavLink, 
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
                            <DropdownItem key={cartItem.product.id}>
                                <Badge color="danger" onClick={()=>this.props.removeFromCart(cartItem.product)}>Sil</Badge>
                            {cartItem.product.productName}
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
    renderEmptyCart(){
        return(
            <NavItem>
            <NavLink>Sepet Boş</NavLink>
        </NavItem>
        )
        
    }
    render() {
    
    return <div>{this.props.cart.length>0?this.renderSumary():this.renderEmptyCart()}</div>
  }
}
