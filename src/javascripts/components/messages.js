import messageData from '../helpers/messagesData';
import util from '../helpers/util';
import timestamp from '../helpers/timestamp';

let messages = [];
let id = 6;

const getId = () => id;
const domStringBuilder = () => {
  let domString = '';
  messages.forEach((message) => {
    domString += '<div class="card">';
    domString += `<h2 id="username">${message.username}</h2>`;
    domString += `<p id="messageText">${message.messageText}</p>`;
    domString += `<p id="id">${message.id} </p>`;
    domString += `<h6 id="timestamp">${message.timestamp} </h6>`;
    domString += `<button type="button" id="${message.id}" class="btn btn-danger delete">Delete</button>`;
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('messages', domString);
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
  messages.push(newMessage);
  domStringBuilder();
  id += 1;
  document.getElementById('message-input').value = '';
};

const deleteMessage = (e) => {
  const buttonId = e.target.id;
  // console.error(buttonId);
  for (let i = 0; i < messages.length; i += 1) {
    const messageIndex = i;
    // console.error(index);
    if (buttonId === messages[i].id) {
      console.error(`message ID ${messages[i].id}`);
      console.error(`Button ID ${buttonId}`);
      console.error(messageIndex);
      // console.error(index);
      // messages.splice(i, 1);
    }
  }
  // domStringBuilder();
};

const deleteButtonEvents = () => {
  const deleteButtons = document.getElementsByClassName('delete');
  for (let i = 0; i < deleteButtons.length; i += 1) {
    deleteButtons[i].addEventListener('click', deleteMessage);
  }
};

const buttonEvents = () => {
  document.getElementById('add-button').addEventListener('click', addMessage);
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
};
