import React from 'react';
import { connect } from 'react-redux';
import Product from './Product';

const mapStateToProps = state => {
 return {
     addedItems: state.addedItems,
     total: state.total
 };
}

const mapDispatchToProps = dispatch => {

 return {
      
 };
}

class CartPage extends React.Component {
 render(){
  //debugger;
  return (
   <div className="page-content">
   {<h3> Added Items: </h3>}
   {this.props.addedItems.length > 0 ?
     this.props.addedItems.map(((product, i)=>
      <Product
       key={i}
       item={product}/>
     ))
     : <p> No Items Added</p>
   }
   </div>
  )
 }
}

export default connect(mapStateToProps, mapDispatchToProps) (CartPage);