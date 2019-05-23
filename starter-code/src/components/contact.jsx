import React from "react";

class Contact extends React.Component {

  render() {

    let photoStyle = {
      width : 50,
      height : 60
    }

    return (
      
        <tr>
          <td><img src={this.props.pictureUrl} alt="contactPhoto" style={photoStyle}/></td>
          <td>{this.props.name}</td> 
          <td>{this.props.popularity}</td>
          <td><button onClick={() => this.props.deleteContact(this.props.index)}>Delete</button></td>
        </tr>
     
    )

  }
}

export default Contact