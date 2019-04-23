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

  
  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  console.log(this.setState)
  };


  //Updates our score
  incrementCount() {
    console.log('pressme');

    this.setState({
      score: this.state.score + 1
    });
  }

//Shuffles our friends
  shuffle = id => {
    let friends = this.state.friends;
  //  console.log(this.state.friends)


    this.setState({ friends, score: friends.length, status: " " });


    this.setState({
      score: this.state.score + 1
    });

  

    if (this.state.score === 12) {

      this.setState({ score: 0 })

    }

    for (let i = friends.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      // [friends[i], friends[j]] = [friends[j], friends[i]];
      const temp = friends[i]
      friends[i] = friends[j]
      friends[j] = temp

    }

  
   var randomFriends = friends[Math.floor(Math.random() * friends.length)];
    console.log(randomFriends)

   // if(randomFriends===)
    


  }



  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        <h2>Score: {this.state.score} </h2>
        {this.state.friends.map(friend => (
          <FriendCard

            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            shuffle={this.shuffle}
            findFriend={this.findFriend}
            removeFriend={this.removeFriend}

          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
