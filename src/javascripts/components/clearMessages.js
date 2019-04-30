import util from '../helpers/util.js';
import messageArray from './messages.js';

const clearMessages = () => {
  
};

const checkMessagesArray = () => {
  if (messageArray.length !== 0) {
    document.getElementById('clearButton').addEventListener('click', clearMessages);
  } else if (messageArray.length === 0) {
    document.getElementById('clearButton').style.display = 'none';
  }
};

export default { checkMessagesArray, clearMessages };
