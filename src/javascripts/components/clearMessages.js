import util from '../helpers/util.js';

const clearMessages = () => {
  
};

const checkMessagesArray = () => {
  if (messageArray.length !== 0) {
    document.getElementById('clearButton').addEventListener('click', clearMessages);
  } else if (messageArray.length === 0) {
    document.getElementById('clearButton').style.display = 'none';
  }
};
