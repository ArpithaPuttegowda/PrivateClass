import React, { useContext } from 'react';
import { ctx, myCtx } from "./myCtx";


export const ContextAPIF = () => {
    const data = {
        name: "Sachin",
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


const A = () => {
    return (
        <div>
            <h1>I'm A</h1>
            <ctx.Consumer>
                {
                    (data) => <h2>{data.name}....{data.loc}</h2>
                }
            </ctx.Consumer>
            <B />
        </div>
    );
}

const B = () => {
    return (
        <div>
            <C />
        </div>
    );
}

const C = () => {
    const data = useContext(ctx)
    return <div><D />
        <h1>{data.name}...{data.loc}</h1>
    </div>
}

const D = () => {
    const data = useContext(myCtx)
    return <div>D::::
        <h1>{data.arr1[0]}</h1>
        <h2>{data.arr2[1]}</h2>
    </div>
}


