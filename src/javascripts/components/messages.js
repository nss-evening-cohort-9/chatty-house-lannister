import messageData from '../helpers/messagesData';
import util from '../helpers/util';
import timestamp from '../helpers/timestamp';
import botMsg from './chatBot';

let messages = [];
let id = 6;
let username = '';

const getMessageArray = () => messages;
const getId = () => id;

// checks to see if clear button should be visible or hidden
const checkMessagesArray = () => {
  if (messages.length === 0) {
    document.getElementById('clearButton').style.display = 'none';
  } else if (messages.length !== 0) {
    document.getElementById('clearButton').style.display = 'block';
  }
};

// allows users to select the username for their message
const usernameSelector = () => {
  const usernameButtons = document.getElementsByClassName('usernameButtons');
  for (let i = 0; i < usernameButtons.length; i += 1) {
    if (usernameButtons[i].checked === true) {
      username = usernameButtons[i].id;
    }
  }
};

// const showEdit = (divId) => {
//   document.getElementById(divId).style.display = 'block';
// };

// const hideEdit = () => {
//   document.getElementsByClassName('editBox').style.display = 'none';
// };

// build domString
const domStringBuilder = () => {
  let domString = '';
  messages.forEach((message) => {
    domString += '<div class="card">';
    domString += `<h2 id="username">${message.username}</h2>`;
    domString += '<div class="input-group editStuff">';
    domString += `<textarea class="form-control editBox" id=${message.id} aria-label="With textarea">${message.messageText}</textarea>`;
    domString += '</div>';
    domString += `<div id=${message.id}><p>${message.messageText}</p></div>`;
    domString += `<button type="button" id="${message.id}" class="btn btn-danger edit">Edit</button>`;
    domString += `<button type="button" id="${message.id}" class="btn btn-danger save">Save</button>`;
    domString += `<p id="id">Message ID: ${message.id} </p>`;
    domString += `<h6 id="timestamp">${message.timestamp} </h6>`;
    domString += `<button type="button" id="${message.id}" class="btn btn-danger delete">Delete</button>`;
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('messages', domString);
  checkMessagesArray();
};

// clear button - clears all the elements from the array and prints empty array to DOM
const clearAll = () => {
  const msgLength = messages.length;
  messages.splice(0, msgLength);
  domStringBuilder();
};

// delete button - deletes targeted message from array and reprints the updated array
const deleteMessage = (e) => {
  const buttonId = e.target.id;
  for (let i = 0; i < messages.length; i += 1) {
    if (e.target.classList.contains('delete')) {
      if (buttonId === messages[i].id.toString()) {
        messages.splice(i, 1);
      }
      domStringBuilder();
    }
  }
};

const deleteButtonEvents = () => {
  document.getElementById('messages').addEventListener('click', deleteMessage);
};

const saveMessage = (e) => {
  const buttonId = e.target.id;
  for (let i = 0; i < messages.length; i += 1) {
    if (e.target.classList.contains('edit')) {
      if (buttonId === messages[i].id.toString()) {
        document.getElementsByClassName('editBox').style.display = 'none';
        domStringBuilder();
      }
    }
  }
};

// edit function
const editMessage = (e) => {
  const buttonId = e.target.id;
  for (let i = 0; i < messages.length; i += 1) {
    if (e.target.classList.contains('edit')) {
      if (buttonId === messages[i].id.toString()) {
        document.getElementById(`${messages[i].id}`).style.visibility = 'visible';
        messages[i].messageText = document.getElementById(`${messages[i].id}`).value;
        console.error(messages[i].messageText);
        console.error(messages);
        domStringBuilder();
      }
    }
  }
};

const editEvents = () => {
  document.getElementById('messages').addEventListener('click', editMessage);
};

const buildBotMessage = (botPersonality, textInput) => {
  let newBotMessage = {};
  let messageText = '';
  const userInput = textInput;
  switch (botPersonality) {
    case 'howdyBot':
      messageText = botMsg.howdyBot(userInput);
      break;
    case 'gangstaBot':
      messageText = botMsg.gangstaBot(userInput);
      break;
    case 'normalBot':
      messageText = botMsg.normalBot(userInput);
      break;
    default:
      messageText = 'No bot personality detected';
      break;
  }
  newBotMessage = {
    username: `${botPersonality}`,
    id,
    messageText,
    timestamp: timestamp.getTimeStamp().toString(),
  };
  if (messages.length <= 19) {
    messages.push(newBotMessage);
    domStringBuilder();
    id += 1;
    deleteButtonEvents();
  } else {
    console.error('Too many messages');
  }
};

// add message button - takes input from text field and adds it to the messages div
const addMessage = () => {
  usernameSelector();
  let newMessage = {};
  const messageText = document.getElementById('message-input').value;
  const selectedPersonality = document.querySelector('input[name="personality"]:checked').value;
  newMessage = {
    username: `${username}`,
    id,
    messageText,
    timestamp: timestamp.getTimeStamp().toString(),
  };

  if (messages.length <= 19) {
    usernameSelector();
    messages.push(newMessage);
    domStringBuilder();
    id += 1;
    document.getElementById('message-input').value = '';
    deleteButtonEvents();
    setTimeout(() => { buildBotMessage(selectedPersonality, messageText); }, 3000);
  } else {
    console.error('Too many messages');
  }
};

// edit function

// button events
const buttonEvents = () => {
  document.getElementById('add-button').addEventListener('click', addMessage);
  document.getElementById('clearButton').addEventListener('click', clearAll);
  document.getElementById('messages').addEventListener('click', deleteMessage);
  document.getElementById('messages').addEventListener('click', saveMessage);
};

const getData = () => {
  // If proper response, then return this
  messageData.getMessageData()
    .then((response) => {
      // prints out the array
      const messagesArray = response.data.messages;
      messages = messagesArray;
      // Because data has returned successfully
      domStringBuilder();
      editEvents();
    })
  // If wrong response, then return this
    .catch((error) => {
      console.error(error);
    });
};

export default {
  getData,
  buttonEvents,
  getId,
  getMessageArray,
  clearAll,
};
