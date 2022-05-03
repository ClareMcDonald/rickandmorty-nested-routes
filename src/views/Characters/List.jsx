import { Link, useHistory, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function List() {
    const history = useHistory();
    const location = useLocation();
    const status = new URLSearchParams(location.search).get('status') ?? 'all';
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleStatusChange = (event) => {
        history.push(`/?status=${event.target.value}`);
    }

    useEffect(() => {
        const fetchCharacters = async () => {
            setLoading(true);

            const statusParam = new URLSearchParams(location.search).get('status');

            const url =
                statusParam === 'all' || !statusParam
                    ? 'https://rickandmortyapi.com/api/character'
                    : `https://rickandmortyapi.com/api/character?status=${statusParam}`;
            const res = await fetch(url);
            const { results } = await res.json();
            setCharacters(results);
            console.log(characters);
            setLoading(false);
        };
        fetchCharacters();
    }, [location.search]);

    console.log(characters)
  return (
    <>
        <h1>Rick and Morty: Character List</h1>
        {loading
            ? (<p>Loading Characters ^_^</p>)
            :
            (<div>
                <label htmlFor='status'>Character Status:</label>    
                <select name='status' id='status' value={status} onChange={handleStatusChange}>
                      <option value='all'>All</option>
                      <option value='alive'>Alive</option>
                      <option value='dead'>Dead</option>
                      <option value='unknown'>Unknown</option>
                  </select>  
                  <div>
                      {characters.map((character) => (
                          <div key={character.id}>
                              <Link to={`/characters/${character.id}`}>
                              <h4>{character.name}</h4>
                              </Link>
                              <p>{character.species}</p>
                              <p>{character.status}</p>
                    </div>
                      ))}
                  </div>
            </div>

        )}      
    </>
  )
}
