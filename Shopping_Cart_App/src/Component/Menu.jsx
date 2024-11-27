import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Menu()
{
  const data = useSelector(state=>state.myStoreData.value);
  return<div className="container">
     <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
         <Link className="navbar-brand" to="/">Shopping Cart App</Link>
       </div>
    <ul className="nav navbar-nav">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/cart">Cart : {data.length}</Link></li>
    </ul>
  </div>
</nav>  
  </div>
}
export default Menu;