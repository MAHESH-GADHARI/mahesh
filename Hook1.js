import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'


export default function Hook1() {
    var [category,setCategory] = useState("xyz");
    var [api,setApi] = useState([]);
    var x1=useRef()
    useEffect(()=>{
        console.log(category,"useEffect");
        axios.get(`https://fakestoreapi.com/products/category/${category}`).then((result)=>{
            console.log(result);
            console.log(result.data);
            setApi(result.data);
        })
    },[category])
    var myfun3=()=>{
        //alert()
        console.log(x1);
        console.log(x1.current.value);
        setCategory(x1.current.value)
    }
  return (
    <div>
        <h1>Hook1</h1>
        {category}<hr/>
        <input type="textbox" ref={x1}/>
        <button onClick={myfun3}>click</button>

        <div class= "conatiner">
              <div class="row">
                {
                  api.length>0 && api.map((xyz)=>
                  <div class="col-xl-3">
                    <img class="img-fluid" src={xyz.image}/>
                    <h2>{xyz.price}</h2>
                    <p>{xyz.title}</p>
                    </div>
                  )
                }
                </div>
            </div>
    </div>
    
  )
}
