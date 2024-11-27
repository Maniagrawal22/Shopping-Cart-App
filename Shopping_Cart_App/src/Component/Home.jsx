import { useEffect, useState } from "react";
import WebService from "../Service/WebServices.jsx";
import WebAPI from "../Service/WebApi.jsx";
import { useDispatch } from "react-redux";
import { addCartData } from "../Redux/Slice.jsx";

function Home()
{
    const [productData, setProductData] = useState([]);
    const dispatch = useDispatch();

    useEffect(()=>{
     loadProducts();  //call
    },[])

    /*
    var loadProducts =()=>{
       fetch('https://dummyjson.com/products?limit=100').then(resp=>resp.json()).then((data)=>{
        console.log("Data is : "+data);
        console.log("Strin Data is : "+JSON.stringify(data))
       }).catch((err)=>{
        console.log("Error is : "+err);
       })
    }
    */

    /* Axios : Replace fetch Function & Used to deal with API
      Install AXIOS : npm install axios
             : async & await
    */

    var loadProducts = async ()=>{
        var resp = await WebService.getAPICall(WebAPI.productAPI);
        console.log("Data is : "+resp);
        console.log("Strin Data is : "+JSON.stringify(resp))
        setProductData(resp.data.products);
    }
  return<div className="container">
    <h1 style={{textAlign:'center',color:'red'}}>Home Component Called....</h1>
    <div className="row">
        {productData.map((pData)=>{
              return<div className="col-md-3 well" style={{marginLeft:"50px"}}>
                <p><img src={pData.thumbnail} height={100} width={100}/></p>
                <div>
                    <b>Name : {pData.title}</b><br/><br/>
                    <b>Category : {pData.category}</b><br/><br/>
                    <b>Price : {pData.price}</b><br/><br/>
                    <b>Rating : {pData.rating}</b><br/><br/>
                    <b>Discount %: {pData.discountPercentage}</b><br/><br/>
                    <button className="btn btn-success" onClick={()=>dispatch(addCartData(pData))}>Add to Cart</button>
                </div>
              </div>
        })}
    </div>
  </div>
}
export default Home;


/**
 *  fetch() : Thsi function return promise Objects
 * 
 *   fetch().then().then().ctah()
 * 
 * 
 */