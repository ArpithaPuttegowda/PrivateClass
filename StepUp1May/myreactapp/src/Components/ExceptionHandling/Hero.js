import React, { Component } from 'react'

export const Hero = ({heroName,children}) => {
    // try{
    //     if(heroName==="joker"){
    //         throw new Error("joker is not a hero")
    //     }
    // }catch(e){
    //  console.log(e)
    // }
    if(heroName==="joker"){
        throw new Error("joker is not a hero")
    }
   
  return (
    <div>I'm {heroName}....{children}</div>
  )
}


// export class Hero extends Component{
//   render(){
//     if(this.props.heroName==="joker"){
//       throw new Error("Joker is not a hero")
//     }
//     return <div>I'm {this.props.heroName}....{this.props.children}</div>
//   }
// }
