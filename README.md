# HTML Elements

-   shell image, ball, button for each shell
-   spans for win count, loss count, total

# State

-   wins
-   losses
-   total (derived)

# Events

onClick of button 1

-   reset all the shells
-   generate a random number between 1 and 3 to decide which shell the ball is under
-   grab the shell with that number and add the reveal class to it
-   if random number === 1 -- the user has won! increment the wins
-   else increment the losses
-   update the wins / losses / total spans

*   similar logic for buttons 2 and 3
