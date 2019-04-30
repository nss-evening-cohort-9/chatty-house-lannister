let fontSize = document.getElementById('largeText')
let darkBackground = document.getElementById('darkTheme')
let messagesDiv = document.getElementById('messages');


const largeText = () => {
    if (fontSize.checked === true) {
      messagesDiv.style.fontSize = '20px';
    }
    else {
      messagesDiv.style.fontSize = '12px';
    }
}

const darkTheme = () => {
  if (darkBackground.checked === true) {
    messagesDiv.style.backgroundColor = '#000000';
    messagesDiv.style.color = '#FFFFFF';
  }
  else {
    messagesDiv.style.backgroundColor = '#000000';
    messagesDiv.style.color = '#FFFFFF';
  }
}

const checkBoxEvents = () => {
  fontSize.addEventListener('click', largeText);
  darkTheme.addEventListener('click', darkTheme);
}

export default { checkBoxEvents }
