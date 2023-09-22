// import { useRef } from "react"

// export const Registration = () => {
//     const nameRef=useRef(null)
//     const locRef=useRef(null)
//     const phRef=useRef(null)
//     const handleRegistration=()=>{
//         const name=nameRef?.current?.value;
//         const loc=locRef?.current?.value;
//         const ph=phRef?.current?.value;
//         const data={
//             name,loc,ph
//         }
//         console.log(data)
//     }
    
//   return (
//     <div>
//         <p><span>Name:</span><input ref={nameRef}/></p>
//         <p><span>Location:</span><input ref={locRef}/></p>
//         <p><span>Phone no:</span><input ref={phRef}/></p>
//         <button onClick={handleRegistration}>Registration</button>
//     </div>
//   )
// }




export const Registration = () => {
    let data={}
    const handleRegistration=()=>{
        console.log(data)
    }
    const handleChange=(event)=>{
       const val=event.target.value;
       const key=event.target.id;
       data={
        ...data,[key]:val
       }
       
    }
  return (
    <div>
        <p><span>Name:</span><input id="name" onChange={handleChange}/></p>
        <p><span>Location:</span><input id="loc" onChange={handleChange}/></p>
        <p><span>Phone no:</span><input id="pn" onChange={handleChange}/></p>
        <button onClick={handleRegistration}>Registration</button>
    </div>
  )
}
