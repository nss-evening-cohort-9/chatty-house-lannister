const darkCheckbox = document.getElementById('darkTheme');
const containerDiv = document.getElementById('messages');

checkbox1 = document.getElementById('darkTheme');
checkbox2 = document.getElementById('darkTheme');

const checkBoxDarkEvents = () => {
checkbox1.addEventListener('change', e => {
  if (checkbox1.checked === true) {
    containerDiv.style.backgroundColor = 'black'; containerDiv.style.color = 'white';
  } else {
    containerDiv.style.backgroundColor = 'white';
    containerDiv.style.color = 'black';
  }

  export default { checkBoxDarkEvents }

   // const checkBoxDark = (x, y) => {
//   if (y.checked === true) {
//     x.style.backgroundColor = '#000000';
//     x.style.color = '#FFFFFF';
//   } else {
//   x.style.backgroundColor = '#FFFFFF';
//   x.style.color = '#000000';
//   }
// };

// const checkBoxFont = () => {
//   if (y.checked === true) {
//     x.style.font = '18px';
//   } else {
//     x.style.font = '12px';
//   }

