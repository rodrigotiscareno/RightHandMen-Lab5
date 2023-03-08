import React, { useState } from 'react';

function IncrementByAmount(props) {
    const [counter, setInputAmount] = useState(0);

    function handleChange(event) {
        setInputAmount(event.target.value)
    }

    function submitCount() {
        const value = counter
        console.log("value", value);
        props.dispatchFunction(value);
    }


    return (
        <div>
            <input type="number" value={counter} onChange={handleChange} />

            <button onClick={submitCount}>Increment by Amount</button>
        </div>
    );
}

export default IncrementByAmount;
