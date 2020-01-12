import React, { Component } from "react";
import State from "./data.js";
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
class CardRobot extends Component {
  constructor(){
    super();
    this.state = {
      search : ''
    };

  }
  upDate(event){
    this.setState({search : event.target.value.substr(0,20)});
  }
  render() {
    let filteredRobot = State.Data.filter((item) => {
     return item.nomUser.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    });
    return (
      <div>
        <label Style="color: green ">Search your Robot : </label>
         <input type="text" value={this.state.search} onChange={this.upDate.bind(this)}/>
        {filteredRobot.map(item => (
          <div key={item.id}>
            <Card
              style={{
                width: "30%",
                height:"30%",
                backgroundColor: "#CCFFCC",
                borderColor: "green",
                borderWidth: "medium",
                borderStyle: "dashed",
                position : "relative"
              }}
              className="text-center"
            >
              <CardBody>
                <CardImg
                  top
                  width="30%"
                  alt="Card image cap"
                  src={item.image + item.id}
                />
                <CardTitle >{item.nomUser}</CardTitle>
                <CardText>{item.email}</CardText>
              </CardBody>
            </Card>
          </div>
        ))}
       
      </div>
    );
  }
}

export default CardRobot;
