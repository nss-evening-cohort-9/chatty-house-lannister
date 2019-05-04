import messages from './messages';
import messageData from '../helpers/messagesData';


const messageFormBuilder = (message) => {
  const form = `<div class="modal-dialog modal-dialog-centered" role="document">
    <div class="form-group">
      <label for="form-event-location">Location:</label>
      <input type="text" class="form-control-sm" value ="${message.messageText}" id="form-event-location"
</div>`;
  return form;
};

const gettingMessageFromForm = () => {
  const message = {
    username: document.getElementById('username').val(),
    messageText: document.getElementById('messageText').val(),
    timeStamp: document.getElementById('timestamp').val(),
    id: document.getElementById('Message ID').val(),
  };
  return message;
};

const showEditForm = (e) => {
  const idToEdit = e.target.dataset.editId;
  messageData.getMessageData(idToEdit)
    .then((singleMessage) => {
      let domString = '<h2>Edit Message</h2>';
      domString += messages.messageFormBuilder(singleMessage);
      domString += `<button id="edit" data-single-edit-id=${messages.id} >Save Event</button>`;
      document.getElementById('#messages').html(domString).show();
    })
    .catch((error) => {
      console.error('error in getting single for edit', error);
    });
};

const updateEvents = (e) => {
  const updatedMessage = gettingMessageFromForm();
  const messageId = e.target.dataset.singleEditId;
  messageData.updateEvents(updatedMessage, messageId)
    .then(() => {
      $('#add-edit-event').html('').hide();
      $('#single-container').html('').hide();
      messages.getData();
    })
    .catch((error) => {
      console.error('error', error);
    });
};

const buttonEditEvents = () => {
  document.getElementById('body').addEventListener('click', '#edit', showEditForm);
};

// end of edit

export default { updateEvents, buttonEditEvents };
