import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
      console.log("Parent Mounted");
     }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About Class Component</h1>
        <h2>This is Good Food by Shauryaa</h2>
        <UserClass name={"Shaurya Pratap Singh"} location={"Dehradun"} />
      </div>
    );
  }
}

export default About;
