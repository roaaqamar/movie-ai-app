type SearchBarProps = {
  value: string
  onChange: (value: string) => void
}

function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Search for a movie..."
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  )
}

export default SearchBar