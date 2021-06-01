import React, { useState } from "react";
import List from "./List";
import "./App.css";

const App =()=>{
    const[item, setitem]=useState("");
    const[addItem, setaddItem]=useState([]);

    const ItemList =(event)=>{
        setitem(event.target.value);
    }



    const Add =()=>{
        setaddItem((oldItem) => {
            return [...oldItem, item];

           
        });

        setitem("");
    }

    
    return(
        <>
            <div className="main_div">
            <div className="center_div">
            <br/>
            <h1>ToDo List</h1>
            <br/>
            <input type="text" placeholder="Add items" onChange={ItemList} value={item} />
            <button onClick={Add}> + </button>

            <ol>
               { addItem.map( (itemval, index) => {
                    return (
                <List key={index} id={index} text={itemval} />
                )
                
                

                })}
            </ol>

            </div>

            </div>
        </>
    )
}

export default App;
