import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent Mounted");
  }

  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h1>About Class Component</h1>
        <div>
          LoggedIn User:
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2>This is Good Food by Shauryaa</h2>
        <UserClass name={"Shaurya Pratap Singh"} location={"Dehradun"} />
      </div>
    );
  }
}

export default About;