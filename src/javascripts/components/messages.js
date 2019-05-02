import messageData from '../helpers/messagesData';
import util from '../helpers/util';
import timestamp from '../helpers/timestamp';
import darkCard from './checkbox';

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
    domString += `<button type="button" id="${message.id}" class="btn btn-danger edit">Edit</button>`;
    domString += '</div>';
    domString += '</div>';
    domString += `<div id="${message.id}EditForm" class="${message.hide}CommentForm">`;
    domString += `<textarea rows="5" col="30" class="newBodyText">${message.messageText}</textarea>`;
    domString += `<button id="${message.id}" class="btn btn-primary mb-2 saveMessage">Save</button>`;
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('messages', domString);
  checkMessagesArray();
  darkCard.cardBackground();
};

const clearAll = () => {
  const msgLength = messages.length;
  messages.splice(0, msgLength);
  domStringBuilder();
};

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
  newMessage = {
    username: `user${id}`,
    id,
    messageText,
    timestamp: timestamp.getTimeStamp().toString(),
    edit: 'hide',
  };

  document.getElementById('message-input').value = '';
  if (messages.length <= 19) {
    messages.push(newMessage);
    domStringBuilder();
    id += 1;
    deleteButtonEvents();
    editButtonEvents();
  } else {
    console.error('Too many messages');
  }
};

// Edit Events Start

const editMessage = (e) => {
  const buttonId = e.target.id;
  for (let i = 0; i < messages.length; i += 1) {
    if (e.target.classList.contains('edit')) {
      if (buttonId === messages[i].id.toString()) {
        messages.edit = 'show';
      } else {
        messages.edit = 'hide';
      }
      domStringBuilder();
      // saveMessage();
      editButtonEvents();
    }
  }
};

const submitEdit = (e) => {
  const buttonId = e.target.id;
  messages.forEach((message) => {
    if (message.id === buttonId) {
      const newBodyTextForm = e.target.id;
      messages.messageText = newBodyTextForm.value;
      messages.edit = 'hidden';
    }
  });
  domStringBuilder(messages);
  saveMessage();
};

const saveMessage = () => {
  const savingMessage = document.getElementById('saveBtn');
  for (let i = 0; i < savingMessage.length; i = +1) {
    savingMessage[i].addEventListener('click', editMessage);
  }
};

const editButtonEvents = () => {
  const editButtons = document.getElementsByClassName('edit');
  for (let i = 0; i < editButtons.length; i += 1) {
    editButtons[i].addEventListener('click', submitEdit);
  }
};

// end of edit

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
      editButtonEvents();
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
