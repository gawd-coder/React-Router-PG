//useState holds the information that we are getting from API and useEffect runs the fetch call when our component mounts.
import React,{useState, useEffect} from 'react'; 
import {Link} from "react-router-dom";
//fetching data from API
function Item(){
    // [] means it is only gonna run when component mounts
    useEffect(()=>{
    },[])

    //creating a state to put items in
    const [items, setItems] = useState([]);
    return (
        <div>
            <h1>Item</h1>
        </div>
    );
}

export default Item;
