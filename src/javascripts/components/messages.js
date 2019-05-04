import messageData from '../helpers/messagesData';
import util from '../helpers/util';
import timestamp from '../helpers/timestamp';
import darkCard from './checkbox';

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

// build domString
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
    domString += `<div id="${message.id}EditForm" class="${message.hide}CommentForm">`;
    domString += `<textarea class="newBodyText">${message.messageText}</textarea>`;
    domString += `<button id="${message.id}" class="btn btn-primary mb-2 saveBtn">Save</button>`;
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('messages', domString);
  checkMessagesArray();
  darkCard.cardBackground();
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

// add message button - takes input from text field and adds it to the messages div
const addMessage = () => {
  usernameSelector();
  let newMessage = {};
  const messageText = document.getElementById('message-input').value;
  newMessage = {
    username: `${username}`,
    id,
    messageText,
    timestamp: timestamp.getTimeStamp().toString(),
    edit: 'hide',
  };

  document.getElementById('message-input').value = '';
  if (messages.length <= 19) {
    usernameSelector();
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
      saveMessage();
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
  document.getElementById('messages').addEventListener('click', deleteMessage);
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
  getMessageArray,
  clearAll,
};
