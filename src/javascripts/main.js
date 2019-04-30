import messages from './components/messages';
import checkMsgArray from './components/clearMessages';
import '../styles/main.scss';
import 'bootstrap';

const init = () => {
  messages.getData();
  checkMsgArray.checkMessagesArray();
  messages.buttonEvents();
};

init();
