const checkBoxDark = (x, y) => {
  if (y.checked === true) {
    x.style.backgroundColor = '#000000';
    x.style.color = '#FFFFFF';
  } else {
  x.style.backgroundColor = '#FFFFFF';
  x.style.color = '#000000';
  }
};

export default { checkBoxDark }
