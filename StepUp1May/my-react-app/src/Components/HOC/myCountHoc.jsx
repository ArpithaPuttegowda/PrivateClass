import { Component } from "react"

export const myHoc=(Comp)=>{
    class Logic extends Component{
        constructor(){
            super()
            this.state={
                count:0
            }
            this.name="hyderabad"
        }
        handleInc=()=>{
            this.setState({
                count:this.state.count+1
            })
        }
        
        render(){
            return <Comp count={this.state.count} fn={this.handleInc} name={this.name}/>
        }
    }
    return Logic
}
