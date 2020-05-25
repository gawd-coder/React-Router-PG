//useState holds the information that we are getting from API and useEffect runs the fetch call when our component mounts.
import React,{useState, useEffect} from 'react'; 
import {Link} from "react-router-dom";
//fetching data from API
function Shop(){
    // [] means it is only gonna run when component mounts
    useEffect(()=>{
        fetchItems();
    },[])

    //creating a state to put items in
    const [items, setItems] = useState([]);

    const fetchItems = async() => {
        const data = await fetch("http://dummy.restapiexample.com/api/v1/employees");
        const items = await data.json();
        console.log(items.data);
        setItems(items.data);
    }
    return (
        <div>
            {items.map(item => (
                <Link to = {`/shop/${item.id}`}>
                    <h1 key = {item.id}>{item.employee_name}</h1>
                </Link>
            ))}
        </div>
    );
}

export default Shop;
