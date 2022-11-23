import { Divider, Input } from 'antd';
import { useState } from 'react';

function Search({ searchFood }) {
  const [searchString, setSearchString] = useState('');
  const handleSearch = (e) => {
    setSearchString(e.target.value);
    searchFood(e.target.value);
  };
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={searchString} type="text" onChange={handleSearch} />
    </>
  );
}

export default Search;
