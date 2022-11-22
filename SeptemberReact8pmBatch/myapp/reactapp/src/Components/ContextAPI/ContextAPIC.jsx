import React, { Component } from 'react';
import { ctx, myCtx } from "./myCtx"

class ContextAPIC extends Component {
    render() {
        const data = {
            name: "Dhoni",
            loc: "Mumbai"
        }
        const arr = [1, 2, 3, 4]
        const ar = ["hyd", "karnataka"]
        return (
            <div>
                <myCtx.Provider value={{ arr1: arr, arr2: ar }}>
                    <ctx.Provider value={data}>
                        <A />
                    </ctx.Provider>
                </myCtx.Provider>

            </div>
        );
    }
}

class A extends Component {
    render() {
        return (
            <div>
                <B />
            </div>
        );
    }
}

class B extends Component {
    render() {
        return (
            <div>
                <C />
            </div>
        );
    }
}

class C extends Component {
    render() {
        console.log(this)
        let data = this.context
        return (
            <div>
                <D />
                <h1>I'm C</h1>
                <h1>{data.name}</h1>
                <h1>{data.loc}</h1>
                <myCtx.Consumer>{(data) => {
                    { console.log(data, "data") }
                    return <h1>I'm C:::{data.arr1}...{data.arr2[1]}</h1>
                }}</myCtx.Consumer>
            </div>
        );
    }
}
C.contextType = ctx


class D extends Component {
    render() {
        return (
            <div>
                <ctx.Consumer>{(data) => {
                    { console.log(data, "data") }
                    return <h1>I'm D:::{data.name}...{data.loc}</h1>
                }}</ctx.Consumer>
                <myCtx.Consumer>{(data) => {
                    { console.log(data, "data") }
                    return <h1>I'm D:::{data.arr1}...{data.arr2[1]}</h1>
                }}</myCtx.Consumer>
            </div>
        );
    }
}

export default ContextAPIC;
