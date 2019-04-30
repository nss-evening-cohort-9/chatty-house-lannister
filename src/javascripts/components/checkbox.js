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
    messagesDiv.style.backGroundColor = 'black';
    messagesDiv.style.color = 'white';
  }
  else {
    messagesDiv.style.backGroundColor = 'white';
    messagesDiv.style.color = 'black';
  }
}

const checkBoxEvents = () => {
  fontSize.addEventListener('click', largeText);
  darkTheme.addEventListener('click', darkTheme);
}

export default { checkBoxEvents }
