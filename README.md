# chatty-house-lannister

A message app that allows the user to write messages, clear and delete messages. The user may also increase font size and change themes

## Technologies
Javascript 
JSON 
XHR requests/ Axios
Modules

## Getting Started
```
$ To get started, please follow the instructions found here: https://github.com/nss-nightclass-projects/Night-Class-Resources/blob/master/book-2-patterns-and-tools/chapters/task-runners.md

```

## Running
```
$ npm start
```

## Functionality

The base functionality of this project is to print a user's input from a form, to the message box below said input form. Along with this, It also provides the user with the freedom to delete singular or multiple messages, and gives them the option to switch to a dark theme and/or larger text.

In addition to the above, several "**BONUS**" functionalities have been implemented. Including:

* Ability to include Emojis in messages.
* A "Chatbot" that responds to specific statements with statements of its own (See below for additional detail).
* Ability to "like" and "unlike" messages.
* Ability to select different users: The "username" of each user created message corresponds to the user that was selected when the message was inputted.
* 


Continue reading below for additional information on certain "**BONUS**" functionalities' usage.

## Chatbot
Depending on which chatbot personality is selected, and what the user inputs, there can be multiple outputs. 

The first listed input of each personality will reciprocate a greeting, while the second listed input will respond with a random statement befitting of the personality, and the context of the input. 

Inputs must be identical to those documented, otherwise the bot will not recognize the statement.
### Possible Inputs:
#### For "DARN TOOTIN'" personality:
* Howdy
* This town ain't big enough for the two of us

#### For "Normal" personality:
* Hello
* Tell me something cool

#### For "WEST SIDE" personality:
* Suh
* What's poppin' B?
