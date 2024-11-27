import { useDispatch, useSelector } from "react-redux";
import { decrementQty, incrementQty, removeProduct } from "../Redux/Slice.jsx";

function Cart()
{
  const cartData = useSelector(state=>state.myStoreData.value);
  const dispatch = useDispatch(); 

  return<div className="container">
    <h1  style={{textAlign:'center',color:'red'}}>Cart Component Called....</h1>
   <div className="table-responsive">
   <table className="table table-striped table-hover table-bordered">
      <thead>
       <tr>
        <th>S.no</th>
        <th>Product Name</th>
        <th>Product Image</th>
        <th>Product Price</th>
        <th>Product Quatity</th>
        <th>Product Total Price</th>
        <th>Operation</th>
        </tr> 
      </thead>
    <tbody>
    {cartData.map((cData,index)=>{
        return<tr>
          <td>{index+1}</td>
          <td>{cData.productData.title}</td>
          <td><img src={cData.productData.thumbnail} height={100} width={100}/></td>
          <td>{cData.productData.price}</td>
          <td>
            <button className="btn btn-success" 
            onClick={()=>dispatch(decrementQty(cData.productData.id))}>-</button>
            &nbsp;&nbsp; {cData.qty} &nbsp;&nbsp;
            <button className="btn btn-danger" 
            onClick={()=>dispatch(incrementQty(cData.productData.id))}>+</button>
          </td>
          
          <td>{cData.productData.price * cData.qty}</td>
          <td>
            <button className="btn btn-success" 
            onClick={()=>dispatch(removeProduct(cData.productData.id))}>Remove Item</button>
          </td>
        </tr>
    })}
    </tbody>
   </table>
   </div>

    
  </div>
}
export default Cart;