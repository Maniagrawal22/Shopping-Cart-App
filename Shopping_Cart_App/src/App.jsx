import { Route, Routes } from "react-router-dom";
import Menu from "./Component/Menu.jsx";
import Home from "./Component/Home.jsx";
import Cart from "./Component/Cart.jsx";

function App()
{
  return<>
   <Menu/>
   <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
   </Routes>
  </>
}
export default App;