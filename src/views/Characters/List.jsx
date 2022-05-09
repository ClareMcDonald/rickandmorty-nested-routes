import { Link, Route, useRouteMatch, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Detail from './Detail';

export default function List() {
    const { url, path } = useRouteMatch();
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCharacters = async () => {
            const res = await fetch('https://rickandmortyapi.com/api/character');
            const { results } = await res.json();
            setCharacters(results);
            setLoading(false);
        };
        fetchCharacters();
    }, []);

  return (
    <>
        {loading
            ? (<p>Loading Characters ^_^</p>)
            :
            (<>
              <aside>
                <h1>Rick and Morty: Character List</h1>
                <ul>
                  {characters.map((character) => (
                    <li key={character.id}>
                      <Link to={`${url}${character.id}`}>
                      <h4>{character.name}</h4>
                      </Link>
                      <p>{character.species}</p>
                      <p>{character.status}</p>
                    </li>
                  ))}
                    </ul>
              </aside>
              <Route path={`${path}:id`}>
              <Detail characters={characters}/>
              </Route>
            </>

        )}      
    </>
  )
}
