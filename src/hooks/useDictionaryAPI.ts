import { useState, useEffect } from 'react';

// Definerar svaret från APIet
interface Phonetic {
  text: string;
  audio: string;
}

interface Definition {
  definition: string;
}

interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
}

interface WordData {
  word: string;
  phonetics: Phonetic[];
  meanings: Meaning[];

}

// Definerar hooken
const useDictionaryAPI = (word: string) => {
    const [data, setData] = useState<WordData | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      if (!word) return;
  
      const fetchData = async () => {
        setLoading(true);
        setError(null);
  
        try {
          const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
          if (!response.ok) throw new Error('Word not found');
  
          const result = await response.json();
          setData(result[0]);
        } catch (err: any) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      }; 
      
      fetchData();

    }, [word]);
  
    return { data, loading, error };
  };
  
  export default useDictionaryAPI;