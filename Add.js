import React from "react";

export default class Add extends React.Component {
  constructor() {
    super();
    this.x1 = React.createRef();
    this.x2 = React.createRef();
  }
  myFun1() {
    // console.log(this.x1);
    // console.log(this.x2);
    console.log(this.x1.current.value);
    console.log(this.x2.current.value);
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.x1}></input>
        <br />
        <input type="text" ref={this.x2}></input>
        <br />

        <button
          onClick={() => {
            this.myFun1();
          }}
        >
          ADD
        </button>
      </div>
    );
  }
}
