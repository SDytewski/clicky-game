import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
//import { on } from "cluster";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    highscore: 0
  };

  componentDidMount() {
    this.setState({ friends: this.shuffleData(this.state.friends) });
  }

  
  handleCorrectGuess = newData => {
    const { highscore, score } = this.state;
    const newScore = score + 1;
    const newTopScore = Math.max(newScore, highscore);

    this.setState({
      friends: this.shuffleData(newData),
      score: newScore,
      highscore: newTopScore
    });
  };

  handleIncorrectGuess = friends => {
    this.setState({
      friends: this.resetData(friends),
      score: 0
    });
  };

  

  resetData = friends => {
    const resetData = friends.map(item => ({ ...item, clicked: false }));
    return this.shuffleData(resetData);
  };


  //Shuffles our friends
  clickCount = id => {

 
    let friends = this.state.friends;
  //  console.log(this.state.friends)
    this.setState({ 
      friends,
      score: friends.length, 
      status: " "
     });
    this.setState({
      score: this.state.score + 1
    });

  //Resets if you reach 12 

    if (this.state.score === 12) {

      this.setState({ score: 0 })

    }

  };

    shuffleData = friends => {
      let i = friends.length - 1;
      while( i > 0) {
      let j = Math.floor(Math.random() * (i + 1));
      // [friends[i], friends[j]] = [friends[j], friends[i]];
      const temp = friends[i]
      friends[i] = friends[j]
      friends[j] = temp;
      i--;

    }
    return friends;

  };


  handleItemClick = id => {
    let guessedCorrectly = false;
    const newData = this.state.friends.map(item => {
      const newItem = { ...item };
      if (newItem.id === id) {
        if (!newItem.clicked) {
          newItem.clicked = true;
          guessedCorrectly = true;
        }
      }
      return newItem;
    });
    guessedCorrectly
      ? this.handleCorrectGuess(newData)
      : this.handleIncorrectGuess(newData);
  };

  //if you click on a friend that has already been selected, the game is reset and cards reordered

   

   // if(randomFriends===)




  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>CARTOON CLICKY GAME</Title>
        <h1>Click the "X" on an image to earn points, but don't click on any more than once!</h1>
        <h2>Score: {this.state.score} | highScore: {this.state.highscore}</h2>
        {this.state.friends.map(friend => (
          <FriendCard

            id={friend.id}
            
            key={friend.id}
            name={friend.name}
            image={friend.image}
            // clickCount={this.clickCount}
            handleClick={this.handleItemClick}
         
            findFriend={this.findFriend}
            removeFriend={this.removeFriend}

          />
        ))}
      </Wrapper>
    );
  }
}
export default App;


