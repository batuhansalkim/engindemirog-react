import React, {Component} from "react";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Container,Row,Col} from "react-bootstrap";

export default class App extends Component{
  
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName })
  }
  render(){
    let productInfo = { title: "Ürünler" }
    let categoryInfo = { title: "Kategoriler" }
    return (
      <div>
        <Container>
          <Row>
            <Navi />
          </Row>
          <Row>
            <Col xs="3">
              <CategoryList changeCategory={this.changeCategory} info={categoryInfo} />
            </Col>
            <Col xs="9">
              <ProductList info={productInfo} />
            </Col>

          </Row>
        </Container>
      </div>
    )
  }
}








