const editMessage = () => {
  const editButton = document.getElementsByClassName('edit');
  for (let i = 0; i < editButton.length; i++ 1) {
      const button = editButtons[i];
      button.addEventListener("click", (e) => {
          let buttonClickedId = e.target.parentNode.parentNode.childNodes[1].childNodes[0].id;
          editChange(buttonClickedId);
          let buttonId = e.target.parentNode.parentNode.childNodes[1].childNodes[0].innerHTML;
          myInput.value = buttonId;
      })
  }
}