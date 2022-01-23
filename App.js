import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import { Container,Row,Col } from 'reactstrap';
import { toast,ToastContainer } from 'react-toastify';

import Cart from './Components/Cart';
import BuyPage from './Components/BuyPage';

function App() {
  const [cartItem,setCardItem]=useState([])

  const addInCart=item=>{
    const isAllreadyAdded=cartItem.findIndex(function(array){
      return array.id=== item.id;
    })
    if(isAllreadyAdded !== -1){
      toast("already added in cart",{
        type:"error"
      })
      return
    }
    setCardItem([...cartItem,item])
  }

  const buyNow =()=>{
    setCardItem([])
    toast("purchase complete",{
      type:"success"})
  }

  const removeItem=item=>(
    setCardItem(cartItem.filter(singleItem=>singleItem.id !== item.id))
  )
  return (
    <Container fluid>
    <ToastContainer />
    <Row>
      <Col md="8">
        <BuyPage addInCart={addInCart} />
      </Col>
      <Col md="4">
        <Cart cartItem={cartItem} removeItem={removeItem} buyNow={buyNow} />
      </Col>
    </Row>
    

  </Container>
   
  );
}

export default App;
