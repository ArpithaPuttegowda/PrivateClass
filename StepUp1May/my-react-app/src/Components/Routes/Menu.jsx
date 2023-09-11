import {lazy,Suspense} from "react"
import { Routes,Route,BrowserRouter,Link, Navigate } from "react-router-dom"
// import ExampleOfUseMemo from "../PerfomanceOptimisation/ExampleOfUseMemo"
// import Parent from "../ForwardRef"
// import ParentTimer from "../StartTimer"
// import  About  from "./About"
// import  Home  from "./Home"
import { PageNotFound } from "./PageNotFound"
import { WithourRedux } from "../Redux/WithoutRedux/WithourRedux"

const Parent=lazy(()=>import("../ForwardRef"))
const ParentTimer=lazy(()=>import("../StartTimer"))
const About=lazy(()=>import("./About"))
const Home=lazy(()=>import("./Home"))
const ExampleOfUseMemo=lazy(()=>import("../PerfomanceOptimisation/ExampleOfUseMemo"))

export const Menu = () => {
  const linkData=[{
    to:"/home",
    content:"Home Page"
  },
  {
    to:"/about",
    content:"About Us"
  },
  {
    to:"/ref",
    content:"Forward Ref"
  },
  {
    to:"/startTimer",
    content:"Start Timer"
  },{
    to:"/useMemo",
    content:"UseMemo"
  },{
    to:"/withoutRedux",
    content:"WRedux"
  }]
  return (
    <>
    <BrowserRouter>
    <Suspense fallback="...Loading">
    <div id="menu">
         {/* <a href="/home">Home</a>
         <a href="/about">About</a> */}
        {
          linkData?.map((linkObj,i)=>{
        return <Link key={linkObj.to+i} to={linkObj.to}>{linkObj.content}</Link>
          })
        }
    </div>
    <div id="comp">
    <Routes>
        <Route path="home" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="*" element={<PageNotFound/>}/>
        {/* <Route path="*" element={<Navigate to="/home"/>}/> */}
        <Route path="ref" element={<Parent/>}/>
        <Route path="startTimer" element={<ParentTimer/>}/>
        <Route path="useMemo" element={<ExampleOfUseMemo/>}/>
        <Route path="withoutRedux" element={<WithourRedux/>}/>
    </Routes>
    </div>
    </Suspense>
    </BrowserRouter>
    </>
  )
}


// const Link=({to,children})=>{
//     return <a href={to}>{children}</a>
// }