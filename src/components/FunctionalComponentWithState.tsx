import {useState} from "react";

const FunctionalComponentWithState = () => {
    const [count, setCount] = useState(0)

    const increaseCount = () => {
        setCount(count+1)
    }

    const reset = () => {
        setCount(0)
    }

    return (
        <>
            <div className="space-y-4 pt-12">
                <h1 className="text-center">Count is {count}</h1>
                <div className="text-center space-x-4">
                    <button className="text-white bg-black py-2 space-x-4 px-4" onClick={increaseCount}>
                        Increase
                    </button>
                    <button className="bg-red-500 text-white py-2 px-4" onClick={reset}>
                        Reset
                    </button>
                </div>
            </div>
        </>
    )
}

export default FunctionalComponentWithState