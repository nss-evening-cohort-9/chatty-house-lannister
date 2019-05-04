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
    'All animals require oxygen to breathe.',
    'The hypotenuse is the longest side of a triangle.',
    'In approximately 218 BCE, a Carthaginian general named Hannibal Barca successfully led an army through the snowy peaks of The Alps to launch a sneak attack against the Roman city of Trebia, where the garrisoned Roman forces suffered a crushing defeat at the hands of Hannibal\'s weary, yet motivated troops.',
    'Repeatedly being knocked unconscious results in significant brain damage.',
  ];
  const listLength = phraseList.length;
  switch (keyword) {
    case 'Hello':
      botPhrase = 'Greetings.';
      break;
    case 'Tell me something cool':
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
