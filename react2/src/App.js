import React from "react";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Container,Row,Col} from "react-bootstrap";

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Navi/>
        </Row>
        <Row>
          <Col xs="3">
            <CategoryList title="Kategoriler1"/>
          </Col>
          <Col xs="9">
            <ProductList title="Ürünler1"/>
          </Col>
         
        </Row>
      </Container>     
    </div>
  )
}

export default App;






