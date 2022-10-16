import React from "react";
import axios from "axios";
export default class Show extends React.Component{
  constructor(){
    super()
    this.state= {
      apivalue: []
    }
  }  

  myfun2(){
    console.log("document click is wroking",Math.random());
  }
  componentDidMount(){ //life cycle
    document.body.addEventListener("click",this.myfun2)
    axios.get("https://fakestoreapi.com/products").then((res)=>{ console.log(res);console.log(res.value);
  this.setState({
    apivalue:res.data
  })
})  
  }
  componentWillUnmount(){
    console.log("will unmount working");
    document.body.removeEventListener("click",this.myfun2)
    this.setState({
      apivalue: []
    })
  }
  render(){
    var api= this.state.apivalue
        return(
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

                
            
        )
    }
}

