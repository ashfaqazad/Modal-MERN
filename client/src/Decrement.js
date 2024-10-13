
import React, { useReducer } from 'react'


const initialState = { count: 0 }; // Initial state as an object
const reducer = (state, action) => {
    // console.log(state, action);
    switch (action.type) {
        case "Increment":
            return { count: state.count + 1 };
        case "Decrement":
            return state.count > 0 ? { count: state.count - 1 } : state;
        default:
            return state;


    }


}

export const Decrement = () => {

    // useReducer(Reducer, 0);
    // or

    const [state, dispetch] = useReducer(reducer, initialState);


    return (
        <>
            <h1>Count: {state.count}</h1>
            <button onClick={() => dispetch({ type: 'Increment' })}>Increment</button>
            <button onClick={() => dispetch({ type: 'Decrement' })}>Decrement</button>

        </>

    )
}

export default Decrement;

// count > 0 && 