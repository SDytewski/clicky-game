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

  
  


  

  //Shuffles our friends
  clickCount = id => {

 
    let friends = this.state.friends;
  //  console.log(this.state.friends)


    this.setState({ friends, score: friends.length, status: " " });



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
            clickCount={this.clickCount}
         
            findFriend={this.findFriend}
            removeFriend={this.removeFriend}

          />
        ))}
      </Wrapper>
    );
  }
}
export default App;



//Tutor session Code





// class App extends Component {
//   // Setting this.state.friends to the friends json array
//   state = {

//     friends,
//     score: 0,
//     highscore: 0
//   };

//   componentDidMount(){
//     this.setState({friends: this.shuffle(this.state.friends)})
//   }

  
 
//   //Updates our score
//   incrementCount() {
//     console.log('pressme');

//     this.setState({
//       score: this.state.score + 1
//     });
//   }

// //Shuffles our friends
//   shuffle = id => {
//     let friends = this.state.friends;
//   //  console.log(this.state.friends)


//     this.setState({ friends, score: friends.length, status: " " });


//     this.setState({
//       score: this.state.score + 1
//     });

  

//     if (this.state.score === 12) {

//       this.setState({ score: 0 })

//     }

//     for (let i = friends.length - 1; i > 0; i--) {
//       let j = Math.floor(Math.random() * (i + 1));
//       // [friends[i], friends[j]] = [friends[j], friends[i]];
//       const temp = friends[i]
//       friends[i] = friends[j]
//       friends[j] = temp

//     }


//   }
//   handleItemClick = id => {
//     let guessedCorrectly = false;
//     const newFriend = this.state.friends.map(item =>{
//       const newItem = {...item };
//       if(newItem.id === id){
//           if(!newItem.clicked){
//             newItem.clicked = true;
//             guessedCorrectly = true;
//           }
//       }
//       return newItem;

//     })
//     guessedCorrectly ? this.handleCorrectGuess(newFriend) : this.handleIncorrectGuess(newFriend);

//   }
//   handleCorrectGuess = newFriend => {
//     const { highscore, score } = this.state;
//     const newScore = score+1;
//     const newTopScore = newScore > highscore ? newScore  :  highscore;
//     this.setState({
//       friends: this.shuffle(newFriend),
//       score: newScore,
//       highscore: newTopScore
     
//     })
 
//   }
//   handleIncorrectGuess = newFriend => {
//     this.setState({
//       friends: this.reSet(newFriend),
//       score: 0
//     })
//   }
//   reSet = newFriend => {
//     const resetData = newFriend.map(item => ({...item, clicked: false}));
//     return this.shuffle(resetData);
//   }



//   // Map over this.state.friends and render a FriendCard component for each friend object
//   render() {
//     return (
//       <Wrapper>
//         <Title>Friends List</Title>
//         <h2>score: {this.state.score} </h2>
//         <h2>High Score: {this.state.highscore} </h2>
//         {this.state.friends.map(friend => (
//           <FriendCard

//             id={friend.id}
//             key={friend.id}
//             name={friend.name}
//             image={friend.image}
//             shuffle={this.shuffle}
//             // findFriend={this.findFriend}
//             // removeFriend={this.removeFriend}
//             handleClick = {this.handleItemClick}

//           />
//         ))}
//       </Wrapper>
//     );
//   }
// }

// export default App;

