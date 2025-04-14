function SearchBar({ searchTerm, onSearch }) {
    return (
      <input
        type="text"
        placeholder="Search expenses..."
        value={searchTerm}
        onChange={e => onSearch(e.target.value)}
        className="border p-2 w-full mb-4"
      />
    )
  }
  
  export default SearchBar
  