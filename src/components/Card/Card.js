import React from "react";
import "./Card.css";
class Card extends React.Component{
  constructor(props){
    super(props);
  };




render(){return (
  <div className="card" data ={this.props.id}>
    <div className='content' data ={this.props.id} onClick={this.props.handleClick}>
      <img data ={this.props.id} alt={this.props.name} src={this.props.image} />
    </div>
  </div>
)};
};
export default Card;
