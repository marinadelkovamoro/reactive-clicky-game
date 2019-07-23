import React from "react";
//import CardBody from "./CardBody";
import pictures from "../../pictures.json";
import Nav from "../Navbar";

// By extending the React.Component class, Counter inherits functionality from it
class Game extends React.Component {
    // Setting the initial state of the Game component
    state = {
      score: 0,
      topScore: 0,
      pictures
    };
    

    componentDidMount(){
        this.setState({pictures: this.shufflePictures(this.state.pictures)});
    }
    
    shufflePictures = pictures => {
        let i = pictures.length-1;

        while(i>0){
            const j = Math.floor(Math.random() *(i+1));
            // swapping 
            const temp = pictures[i];
            pictures[i] = pictures[j];
            pictures[j] = temp;
            i--;       
        }
        return pictures;
    }
    
  
    // The render method returns the JSX that should be rendered
    render() {
      return (
        <div className="card text-center">
          <Nav score={this.state.score} topScore ={this.state.topScore} />
          {/* <CardBody
            count={this.state.count}
            handleIncrement={this.handleIncrement}
            handleDecrement={this.handleDecrement}
          /> */}
        </div>
      );
    }
  }
  
  export default Game;
  