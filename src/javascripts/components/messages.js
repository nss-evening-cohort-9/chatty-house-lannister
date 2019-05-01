import messageData from '../helpers/messagesData';
import util from '../helpers/util';
import timestamp from '../helpers/timestamp';

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
    domString += `<h2 id="username">Username: ${message.username}</h2>`;
    domString += `<p id="messageText">${message.messageText}</p>`;
    domString += `<p id="id">Message ID: ${message.id} </p>`;
    domString += `<h6 id="timestamp">${message.timestamp} </h6>`;
    domString += `<button type="button" class="btn btn-danger" id = "${message.id}">Delete</button>`;
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

const addMessage = () => {
  let newMessage = {};
  const messageText = document.getElementById('message-input').value;

  newMessage = {
    username: `user${id}`,
    id,
    messageText,
    timestamp: timestamp.getTimeStamp().toString(),
  };
  if (newMessage.id <= 20) {
    messages.push(newMessage);
    domStringBuilder();
    id += 1;
  } else {
    console.error('Too many messages');
  }
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
    })
  // If wrong response, then return this
    .catch((error) => {
      console.error(error);
    });
};

export default {
  getData, buttonEvents, getId, getMessageArray, clearAll,
};
