const fontSize = document.getElementById('largeText');
const darkBackground = document.getElementById('darkTheme');
const messagesDiv = document.getElementById('messages');
const card = document.getElementsByClassName('card');

const largeText = () => {
  if (fontSize.checked === true) {
    messagesDiv.style.fontSize = '20px';
  } else {
    messagesDiv.style.fontSize = '12px';
  }
};

const darkTheme = () => {
  console.error(darkBackground === true);
  if (darkBackground.checked === true) {
    messagesDiv.style.backgroundColor = '#000000';
    messagesDiv.style.color = '#FFFFFF';
    cardBackground();
  } else {
    messagesDiv.style.backgroundColor = '##FFFFFF';
    messagesDiv.style.color = '#000000';
    cardBackground();
  }
};


const cardBackground = () => {
  const cardDark = document.getElementsByClassName('card');
  for (let i = 0; i < cardDark.length; i++) {
    console.error(darkBackground.checked === true);
    if (darkBackground.checked === true) {
      cardDark[i].style.backgroundColor = '#000000';
      cardDark[i].style.color = '#FFFFFF';
    } else {
      cardDark[i].style.backgroundColor = '#FFFFFF';
      cardDark[i].style.color = '#000000';
    }

}
}

const checkBoxEvents = () => {
  fontSize.addEventListener('click', largeText);
  darkBackground.addEventListener('click', darkTheme);
};

export default { checkBoxEvents };
