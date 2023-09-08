import { useState } from 'react'
import './Style.css'


function Crud(){
    const [todo, setTodo] = useState("")
    const [listTodo, setListTodo] = useState([])
    return(
        <div>
            <div class="input-group m-3 container">
            <input type="text" onChange={(event)=>{ setTodo(event.target.value)}} class="form-control" placeholder="To Do" aria-label="Recipient's username" aria-describedby="button-addon2"/>
            <button class="btn btn-outline-secondary" onClick={()=>{setListTodo([...listTodo, todo]);}} type="button" id="button-addon2">Button</button>
        </div>
        {listTodo.map((data, index)=>{
            return (
                <div class="alert alert-info container" role="alert">
                    {data}
                </div>

            ) 
            
            })}
        </div>
    )
}

export default Crud

