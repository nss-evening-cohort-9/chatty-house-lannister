// import domString from './messages';
const getRandomPhraseIndex = max => Math.floor(Math.random() * max);

const gangstaBot = (keyword) => {
  let botPhrase = '';
  // const phraseList = ['0', '1', '2', '3'];
  switch (keyword) {
    case 'suh':
      botPhrase = 'BIGGIE KILLED TUPAC';
      break;
    default:
      botPhrase = 'WEST SIDE';
  }
  return botPhrase;
};

const howdyBot = (keyword) => {
  let botPhrase = '';
  // const phraseList = ['0', '1', '2', '3'];
  switch (keyword) {
    case 'howdy':
      botPhrase = 'Howdy pardner!';
      break;
    default:
      botPhrase = 'THERE\'S A SNAKE IN MY BOOT!';
  }
  return botPhrase;
};

const normalBot = (keyword) => {
  let botPhrase = '';
  const phraseList = ['0', '1', '2', '3'];
  switch (keyword) {
    case 'Hello':
      botPhrase = 'Greetings.';
      break;
    case 'When will I die?':
      botPhrase = 'Yes';
      break;
    case 'random':
      getRandomPhraseIndex(phraseList.length);
      break;
    default:
      botPhrase = 'Huh?';
  }
  return botPhrase;
};

export default { gangstaBot, howdyBot, normalBot };
