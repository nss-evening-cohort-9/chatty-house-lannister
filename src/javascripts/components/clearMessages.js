// import util from '../helpers/util';
import arrayImport from './messages';

let messageArray = [];

const clearMessages = () => {
  console.error(arrayImport.getMessageArray());
};

const checkMessagesArray = () => {
  messageArray = arrayImport.getMessageArray();
  if (messageArray.length !== 0) {
    document.getElementById('clearButton').addEventListener('click', clearMessages);
  } else if (messageArray.length === 0) {
    document.getElementById('clearButton').style.display = 'none';
  }
};

export default { checkMessagesArray, clearMessages };
