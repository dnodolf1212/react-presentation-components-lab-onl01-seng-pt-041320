import React from 'react' 


class SimpleComponent extends React.Component {
  constructor(props) {
    super(props);

  this.state = {
    mood: "happy"
  };
 }

 handleClick = () => {
   const someMood = this.state.mood === 'happy' ? "sad" : "happy";
   this.setState({
     mood: someMood
   })
 }

  render() {
    return(
      <div onClick={this.handleClick}>{this.state.mood}</div>
    )
  }
}
export default SimpleComponent
