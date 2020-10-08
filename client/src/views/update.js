import React, {useEffect,useState} from 'react'
import axios from 'axios'
import{Link} from '@reach/router'
import Axios from 'axios';
export default props => {
    const{id} = props;
    const[title,setTitle] = useState();
    const[price,setPrice] = useState();
    const[description,setDescription] = useState();
    useEffect(() => {
        axios.get('http://localhost:8000/api/people/' +id)
            .then(res =>  {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
    },[])
    const updatePerson = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/people/' +id,{
            title,
            price,
            description
        })
        .then(res => console.log(res));
    }
    return(
        <div>
            <h1>Update a Person</h1>
            <form onSubmit ={updatePerson}>
                <p>
                    <label>Title</label><br />
                    <input type="text" name="title" value={title} onChange= {(e) => {setTitle(e.target.value)}}/>
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="text" name="price" value={price} onChange= {(e) => {setPrice(e.target.value)}}/>
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text" name="Description" value={description} onChange= {(e) => {setDescription(e.target.value)}}/>
                </p>
                <input type = "submit" value = "Update">
                </input>
            </form>
        </div>
    )
}