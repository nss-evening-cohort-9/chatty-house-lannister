
const clearMessages = () => {
  console.error('yeet');
};

const checkMessagesArray = (messagesArray) => {
  // use the parameter to pass the `messages` array to this imported function in messages.js
  if (messagesArray.length !== 0) {
    document.getElementById('clearButton').addEventListener('click', clearMessages);
  } else if (messagesArray.length === 0) {
    document.getElementById('clearButton').style.display = 'none';
  }
};

export default { checkMessagesArray, clearMessages };
