import React from "react"
//hello
/*

*/
export default class counter extends React.Component{
    constructor(){
        super();
        this.state= {

            rec : 0
        }
    }
    myfun()
    {
        //alert("say hello")
      //  this.props.name="Gadhari" // this gives error
        this.setState({rec : this.state.rec+1})
    }
    render(){ 
        return(
            <>   <button onClick={()=>{this.myfun()}}> 
              click
             </button>
               <p>
                {
                    this.props.rec
                }
           </p>
           <p>
                {
                    this.props.age
                }
           </p>
           <p>
                {
                    this.state.rec
                }
           </p>
        </>
         
        )
    }
}