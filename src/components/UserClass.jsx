import React from "react";

class UserClass extends React.Component {
     constructor(props) {
          super(props);

          this.state = {
            userInfo : {
            name: "Dummy",
            location: "Default",
          }
          };
          // console.log(this.props.name + "Child Constructor");
          
     }

    async componentDidMount() {
      // console.log(this.props.name + "Child Mounted");

      const data =  await fetch("https://api.github.com/users/shauryaa-tech")
      const json =  await data.json();

      this.setState({
        userInfo: json,
      })

      console.log(json);
     }

     componentDidUpdate() {
      console.log("updated");
      
     }

  render() {
    // console.log(this.props.name + "Child Render");

    const {name, location, avatar_url} = this.state.userInfo;
    
    return (
      <div className="user-card">
        <img src={avatar_url} alt="User Avatar"/>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact @shauryaimng</h4>
      </div>
    );
  }
}

export default UserClass;