import messageData from '../helpers/messagesData';
import util from '../helpers/util';

let messages = [];

const domStringBuilder = () => {
  let domString = '';
  messages.forEach((message) => {
    domString += `<h2 id="username">${message.username}"</h2>`;
    domString += `<p id="messageText">${message.messageText}</p>`;
    domString += `<p id="id">${message.id} </p>`;
    domString += `<h6 id="timestamp">${message.timestamp} </h6>`;
    domString += '</div>';
  });
  util.printToDom('messages', domString);
};

const getData = () => {
  // If proper response, then return this
  messageData.getMessagesData()
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

export default { getData };
