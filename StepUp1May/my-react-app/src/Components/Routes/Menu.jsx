import { Routes,Route,BrowserRouter,Link } from "react-router-dom"
import { About } from "./About"
import { Home } from "./Home"

export const Menu = () => {
  return (
    <>
    <BrowserRouter>
    <div id="menu">
         {/* <a href="/home">Home</a>
         <a href="/about">About</a> */}
         <Link to="/home">Home Page</Link>
         <Link to="/about">About Us Page</Link>
    </div>
    <Routes>
        <Route path="home" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}


// const Link=({to,children})=>{
//     return <a href={to}>{children}</a>
// }