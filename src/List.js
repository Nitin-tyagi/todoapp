import React from "react";





const List =(props)=>{

   
    return (
    <>
    <div className="todo_style">
    
    <li>
    {props.text}
    <br/>

    </li>
    </div>
    </>
    )
}

export default List;
