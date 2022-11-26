import React from "react";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Container,Row,Col} from "react-bootstrap";

function App() {
  let productInfo = {title:"Ürünler"}
  let categoryInfo = {title:"Kategoriler"}
  return (
    <div> 
      <Container>
        <Row>
          <Navi/>
        </Row>
        <Row>
          <Col xs="3">
            <CategoryList info={categoryInfo}/>
          </Col>
          <Col xs="9">
            <ProductList info={productInfo}/>
          </Col>
         
        </Row>
      </Container>     
    </div>
  )
}

export default App;






