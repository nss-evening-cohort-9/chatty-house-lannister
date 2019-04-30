const fontSize = document.getElementById('largeText');
const darkBackground = document.getElementById('darkTheme');
const messagesDiv = document.getElementById('messages');

const largeText = () => {
  if (fontSize.checked === true) {
    messagesDiv.style.fontSize = '20px';
  } else {
    messagesDiv.style.fontSize = '12px';
  }
};

const darkTheme = () => {
  if (darkBackground.checked === true) {
    messagesDiv.style.backgroundColor = '#000000';
    messagesDiv.style.color = '#FFFFFF';
  } else {
    messagesDiv.style.backgroundColor = '##FFFFFF';
    messagesDiv.style.color = '#000000';
  }
};

const checkBoxEvents = () => {
  fontSize.addEventListener('click', largeText);
  darkBackground.addEventListener('click', darkTheme);
};

export default { checkBoxEvents };
