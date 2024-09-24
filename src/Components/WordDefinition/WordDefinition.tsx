import AudioPlayer from '../AudioPlayer/AudioPlayer';
import './WordDefinition.css';

interface Definition {
    definition: string;
  }
  
  interface Meaning {
    partOfSpeech: string;
    definitions: Definition[];
  }
  
  interface WordData {
    word: string;
    meanings: Meaning[];
    phonetics: { audio: string }[];
  }


interface WordDefinitionProps {
  wordData: WordData | null;
}

const WordDefinition = ({ wordData }: WordDefinitionProps) => {
  if (!wordData) return null;

  const partOfSpeech1 = wordData.meanings[0]?.partOfSpeech;
  const partOfSpeech2 = wordData.meanings[1]?.partOfSpeech;
  const partOfSpeech3 = wordData.meanings[2]?.partOfSpeech;

  return (
    <div>
      <h2 className='word'>{wordData.word}</h2>

      {partOfSpeech1 && <p className='partofspeech'><strong>{partOfSpeech1}</strong></p>}

      {wordData.meanings[0]?.definitions[0]?.definition && (
        <p>Definition 1: {wordData.meanings[0].definitions[0].definition}</p>
      )}
        <hr />
      {partOfSpeech2 && <p className='partofspeech'><strong>{partOfSpeech2}</strong></p>}

      {wordData.meanings[1]?.definitions[0]?.definition && (
        <p>Definition 2: {wordData.meanings[1].definitions[0].definition}</p>
      )}
        <hr />
      {partOfSpeech3 && <p className='partofspeech'><strong>{partOfSpeech3}</strong></p>}

      {wordData.meanings[2]?.definitions[2]?.definition && (
        <p>Definition 3: {wordData.meanings[2].definitions[0].definition}</p>
      )}

        <hr />
      {wordData.phonetics[0]?.audio && (
        <AudioPlayer audioUrl={wordData.phonetics[0].audio} />
      )}
    </div>
  );
};

export default WordDefinition;