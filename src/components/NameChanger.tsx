import {useState} from "react";
import * as React from "react";

const NameChanger = () => {
    const [name, setName] = useState("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    return (
        <>
            <h1 className="text-center text-xl pt-4">Hello, {name || "Stranger"}</h1>
            <div className="text-center mt-4">
                <input type="text" value={name} className="border px-4 py-2" onChange={handleChange}
                       placeholder="Give a name..."/>
            </div>
        </>
    )
}

export default NameChanger