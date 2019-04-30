import messages from './components/messages';
import checkbox from './components/checkbox';
import '../styles/main.scss';
import 'bootstrap';

const init = () => {
  messages.getData();
  checkbox.checkBoxDarkEvents();
  messages.buttonEvents();
};

init();
