import messages from './components/messages';
import '../styles/main.scss';
import 'bootstrap';

const init = () => {
  messages.getData();
  messages.buttonEvents();
};

init();
