import React from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import card from "./cards.json";
import "./App.css";

class App extends React.Component{
constructor(props){
  super(props);
  this.state={
    clicked:[],
    positions:[0,1,2,3,4,5,6,7,8,9],
    score:0
  }
  this.handleClick=this.handleClick.bind(this);
  this.append = this.append.bind(this);
}
rand(){
  return Math.floor(Math.random()*10);
};

handleClick = (e)=>{
  
  var positions= [];
  while(positions.length<10){
    var rand =Math.floor(Math.random()*10);
    if(positions.indexOf(rand)===-1){
      positions.push(rand);
    }
  };
  this.setState({positions:positions});
  positions=[];
  if(this.state.clicked.indexOf(e.target.getAttribute("data"))===-1){
    
  var arr=this.state.clicked;
  arr.push(e.target.getAttribute("data"));
  var score=this.state.score;
  this.setState({clicked:arr,score:score+1});
  }else{
    alert("game over");
    score=0;
    this.setState({clicked:[],score:0});
  }
  
}

append(){
var arr=[];

  this.state.positions.map((id)=>(
    
   arr.push(
   <Card
       image = {card[this.state.positions[id]].image}
       id = {this.state.positions[id]}
       name = {card[this.state.positions[id]].name}
       handleClick={this.handleClick}
  />)
    
))
return arr;

}



render(){
  return(
    <Wrapper>
      <h1 className="title">Cards</h1>
      <h2>Score:{this.state.score}</h2>
      {
       this.append()
       };
      }
    </Wrapper>
  );
}

}



export default App;
