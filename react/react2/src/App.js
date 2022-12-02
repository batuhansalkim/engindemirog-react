import React, {Component} from "react";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Container,Row,Col} from "react-bootstrap";

export default class App extends Component{
  
  state = {currentCategory:"",products:[],cart:[]};

  componentDidMount(){
    this.getProducts();
  }

  changeCategory = category => {
    this.setState({ currentCategory: category.categoryName })
    this.getProducts(category.id);
  }

  getProducts = (categoryId)=>{
    let url = "http://localhost:3000/products";
    if (categoryId){
      url += "?categoryId=" + categoryId;
    }
    fetch(url).then(response=>response.json()).then(data=>this.setState({products:data}));
  }

  addToCart=(product)=>{
    alert(product.productName);
  }


  render(){
    let productInfo = { title: "Ürünler" }
    let categoryInfo = { title: "Kategoriler" }
    return (
      <div>
        <Container>
          
            <Navi  />
          
          <Row>
            <Col xs="3">
              <CategoryList currentCategory = {this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo} />
            </Col>
            <Col xs="9">
              <ProductList
              products={this.state.products}
              currentCategory={this.state.currentCategory} info={productInfo} />
            </Col>

          </Row>
        </Container>
      </div>
    )
  }
}








