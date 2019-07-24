import React from "react";
//import CardBody from "./CardBody";
import pictures from "../../pictures.json";
import Nav from "../Navbar";
import Card from "../Picture";

// By extending the React.Component class, Counter inherits functionality from it
class Game extends React.Component {
  // Setting the initial state of the Game component
  state = {
    score: 0,
    topScore: 0,
    pictures
  };


  componentDidMount() {
    this.setState({ pictures: this.shufflePictures(this.state.pictures) });
  }

  shufflePictures = pictures => {
    let i = pictures.length - 1;

    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      // swapping places of pictures
      const temp = pictures[i];
      pictures[i] = pictures[j];
      pictures[j] = temp;
      i--;
    }
    return pictures;
  }
  handleItemClick = id => {
    let guessedCorrect = false;
    const newData =this.state.pictures.map((item) => {
      const newItem = { ...item };
      console.log("newItem: " +JSON.stringify(newItem));
      if(newItem.id === id){
        if(!newItem.clicked){
          newItem.clicked = true;
          guessedCorrect = true;
        }
      }
      return newItem;
    });
    guessedCorrect ? this.correctGuess(newData) : this.incorrectGuess(newData);

  }

  correctGuess = newData => {
    const {topScore, score } = this.state;
    const newScore = score+1;
    const newTopScore = newScore > topScore ? newScore : topScore;
     this.setState({
       score: newScore,
       topScore: newTopScore,
       pictures: this.shufflePictures(newData)

     })
  }
  incorrectGuess = newData => {
    this.setState({
      pictures : this.resetData(newData),
      score: 0
    })
  }
  resetData = newData => {
    const resetData = newData.map(item => ({...item, clicked:false}));
    return this.shufflePictures(resetData);
  }


  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div className="card text-center">
        <Nav score={this.state.score} topScore={this.state.topScore} />
        <div className="container">
          {this.state.pictures.map((picture) => (
            <Card handleClick={this.handleItemClick}
              image={picture.image}
              id={picture.id}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Game;
