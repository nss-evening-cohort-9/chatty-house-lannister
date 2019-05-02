// import domString from './messages';
const getRandomPhraseIndex = max => Math.floor(Math.random() * Math.floor(max));

const howdyBot = (keyword) => {
  let botPhrase = '';
  const phraseList = [
    'You gotta lotta nerve talkin\' to the sheriff\'s deputy that way.',
    'That the whiskey talkin\', or \'re you lookin\' fer trouble?',
    'Let\'s settle this... AT HIGH NOON',
    'Watch yer tongue, boy.',
  ];
  const listLength = phraseList.length;
  switch (keyword) {
    case 'Howdy':
      botPhrase = 'Howdy pardner!';
      break;
    case 'This town ain\'t big enough for the two of us':
      botPhrase = phraseList[getRandomPhraseIndex(listLength)];
      break;
    default:
      botPhrase = 'The hell you talkin\' \'bout boy?';
  }
  return botPhrase;
};

const gangstaBot = (keyword) => {
  let botPhrase = '';
  const phraseList = [
    'East side fools got NOTHIN\' on us.',
    'BIGGIE KILLED TUPAC',
    'The hologram\'s bitchin\'... but it just ain\'t the same, y\'know?',
  ];
  const listLength = phraseList.length;
  switch (keyword) {
    case 'Suh':
      botPhrase = 'What\'s up man?';
      break;
    case 'What\'s poppin\' B?':
      botPhrase = phraseList[getRandomPhraseIndex(listLength)];
      break;
    default:
      botPhrase = 'The f***?';
  }
  return botPhrase;
};

const normalBot = (keyword) => {
  let botPhrase = '';
  const phraseList = [
    'THis is the first phrase',
    'SECOND PHRASE ACTIVATED',
    'THird phrase workin m8',
    'Did you know ',
  ];
  const listLength = phraseList.length;
  switch (keyword) {
    case 'Hello':
      botPhrase = 'Greetings.';
      break;
    case 'Tell me a fact':
      botPhrase = phraseList[getRandomPhraseIndex(listLength)];
      break;
    default:
      botPhrase = 'Huh?';
  }
  return botPhrase;
};

export default {
  gangstaBot,
  howdyBot,
  normalBot,
};
