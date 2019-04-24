# clicky-game

In this game I used REACT.

This application renders different images to the screen. Each image listens for click events.  The great thing about REACT is there is no need for http requests.  All of the movement is happening dynamically by using several components.  This way the app moves quicker.

*Future Development*

1. The application should keep track of the user's score. The user's score should be incremented when clicking an image for the first time. The user's score should be reset to 0 if they click the same image more than once.

2. Once the user's score is reset after an incorrect guess, the game should restart.

3. There will also be a "highscore" that tracks the users best score without clicking the same image twice.


Right now the score resets to 0 after 12 clicks.  You can click any of the characters or "friends" on the screen on the "x" and the score goes up by "1."  Each time a character is clicked then the friends get shuffled.  


*In the App.JS I have left my tutor session code and commented it out below my code that was working (I grabbed my old working code from an earlier commit on GitHUB). She tried to help me, but we got stuck and I ran out of time. I could not figure out the problem I was receiving after she helped me. I kept getting this problem in the browser from REACT -"type error cannot read property map ofundefined- " This was pointing to my highscore on line 205 of my App.js file.  

