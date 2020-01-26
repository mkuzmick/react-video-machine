import React,{ useState, useEffect } from 'react';
import axios from 'axios'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function FetchExample() {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState('redux');
  const [search, setSearch] = useState('redux');

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://hn.algolia.com/api/v1/search?query=${search}`,
      );
      setData(result.data);
    };
    fetchData();
  }, [search]);

  return (
    <div className="App">
      <header className="App-header">
      {/*
        <Player id="test_id_007" />
      */}
      <Jumbotron style={{color:"blue"}}>
        <p>
          Type in a search term.
        </p>
        <input
          type="text"
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
        <button type="button" onClick={() => {setSearch(query)}}>
          Search
        </button>
      </Jumbotron>
        <ul>
          {data.hits.map(item => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      </header>

    </div>
  );
}


export default FetchExample;
