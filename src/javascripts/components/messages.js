import messageData from '../helpers/messagesData';
import util from '../helpers/util';
import timestamp from '../helpers/timestamp';
import botMsg from './chatBot';

let messages = [];
let id = 6;

const getMessageArray = () => messages;
const getId = () => id;

const checkMessagesArray = () => {
  if (messages.length === 0) {
    document.getElementById('clearButton').style.display = 'none';
  } else if (messages.length !== 0) {
    document.getElementById('clearButton').style.display = 'block';
  }
};

const domStringBuilder = () => {
  let domString = '';
  messages.forEach((message) => {
    domString += '<div class="card">';
    domString += `<h2 id="username">${message.username}</h2>`;
    domString += `<p id="messageText">${message.messageText}</p>`;
    domString += `<p id="id">Message ID: ${message.id} </p>`;
    domString += `<h6 id="timestamp">${message.timestamp} </h6>`;
    domString += `<button type="button" id="${message.id}" class="btn btn-danger delete">Delete</button>`;
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('messages', domString);
  checkMessagesArray();
};

const clearAll = () => {
  const msgLength = messages.length;
  messages.splice(0, msgLength);
  domStringBuilder();
};

<<<<<<< HEAD
const buildBotMessage = (botPersonality) => {
  let newMessage = {};
  let messageText = '';
  const userInput = document.getElementById('message-input').value;
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
      return;
  }
  newMessage = {
    username: `${botPersonality}`,
    id,
    messageText,
    timestamp: timestamp.getTimeStamp().toString(),
  };
  if (messages.length <= 20) {
    messages.push(newMessage);
    domStringBuilder();
    id += 1;
  } else {
    console.error('Too many messages');
  }
};

const addMessage = () => {
  let newMessage = {};
  const messageText = document.getElementById('message-input').value;


=======
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
  // for (let i = 0; i < deleteButtons.length; i += 1) {
  //   deleteButtons[i].addEventListener('click', deleteMessage);
  // }
};

const addMessage = () => {
  let newMessage = {};
  const messageText = document.getElementById('message-input').value;
>>>>>>> master
  newMessage = {
    username: `user${id}`,
    id,
    messageText,
    timestamp: timestamp.getTimeStamp().toString(),
  };

  document.getElementById('message-input').value = '';
  if (messages.length <= 19) {
    messages.push(newMessage);
    domStringBuilder();
    id += 1;
<<<<<<< HEAD
    buildBotMessage();
=======
    deleteButtonEvents();
>>>>>>> master
  } else {
    console.error('Too many messages');
  }
  const selectedPersonality = document.querySelector('input[name="personality"]:checked').value;
  window.setTimeout(buildBotMessage(selectedPersonality), 3000);
};

const buttonEvents = () => {
  document.getElementById('add-button').addEventListener('click', addMessage);
  document.getElementById('clearButton').addEventListener('click', clearAll);
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
      deleteButtonEvents();
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
  deleteButtonEvents,
  getMessageArray,
  clearAll,
};
