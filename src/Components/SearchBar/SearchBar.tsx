import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (term: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [term, setTerm] = useState<string>('');
  const [searchError, setSearchError] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (term.trim() === '') {
      setSearchError('Please enter a word to search');
      return;
    }
    onSearch(term);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={term}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTerm(e.target.value)}
      />
      <button type="submit">Search</button>

      {searchError && <p>{searchError}</p>}
    </form>
  );
};

export default SearchBar;