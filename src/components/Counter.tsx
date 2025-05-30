import {useState} from "react";
import CounterButton from "./CounterButton.tsx";

const Counter = () => {
    const [count, setCount] = useState(0)

    const increaseCount = () => {
        setCount(count+1)
    }

    const decreaseCount = () => {
        if (count > 0) {
            setCount(count-1)
        }
    }

    const resetCount = () => {
        if (count > 0) {
            setCount(0)
        }
    }

    return (
        <>
            <div className="space-y-4 pt-12">
                <h1 className="text-center">Count is {count}</h1>
                <div className="text-center space-x-4">
                    {/*<button className="text-white bg-blue-500 py-2 space-x-4 px-4" onClick={increaseCount}>*/}
                    {/*    Increase*/}
                    {/*</button>*/}
                    {/*<button className="text-white bg-blue-500 py-2 space-x-4 px-4 disabled:bg-gray-400"*/}
                    {/*        disabled={count===0}*/}
                    {/*        onClick={decreaseCount}>*/}
                    {/*    Decrease*/}
                    {/*</button>*/}
                    {/*<button className="bg-red-600 text-white py-2 px-4 disabled:bg-gray-400"*/}
                    {/*        disabled={count===0}*/}
                    {/*        onClick={resetCount}>*/}
                    {/*    Reset*/}
                    {/*</button>*/}
                    <CounterButton onClick={increaseCount} label={"Increase"}/>
                    <CounterButton onClick={decreaseCount} disabled={count===0} label={"Decrease"} />
                    <CounterButton onClick={resetCount} disabled={count==0} label={"Reset"} addClass={"bg-cf-dark-red"}/>
                </div>
            </div>
        </>
    )
}

export default Counter