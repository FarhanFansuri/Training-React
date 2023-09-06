//useState Hooks 
// const [var,setVar] = useState(nilai)

import { useState } from "react"

function StateMaterial(){
    const [age,setAge] = useState(15)
    const [value, setValue] = useState("")
    const [show, setShow] = useState(true)
    return (
    <>
        <h1>{age}</h1>
         {show && <h1>{value}</h1>}
        <input type="text" onChange={(event)=>{setValue(event.target.value)}}/>
        <button onClick={()=>{setAge(age + 1)}}>add</button>
        <button onClick={()=>{setAge(age - 1)}}>sub</button>
        <button onClick={()=>{setAge(0)}}>set to zero</button>
        <button onClick={()=>{setShow(!show)}}>Show/Hide</button>
    </>
    )
}

export default StateMaterial