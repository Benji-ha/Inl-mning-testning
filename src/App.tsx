import React, { useState } from 'react';
import useDictionaryAPI from './hooks/useDictionaryAPI';
import SearchBar from './Components/SearchBar/SearchBar';
import WordDefinition from './Components/WordDefinition/WordDefinition';
import './App.css';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { data, loading, error } = useDictionaryAPI(searchTerm);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <h2>Benji's dictionary</h2>

      <SearchBar onSearch={handleSearch} />

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <WordDefinition wordData={data} />
    </div>
  );
};

export default App;

// use context för att spara favoritord