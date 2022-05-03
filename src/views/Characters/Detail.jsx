import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';


export default function Detail() {
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    async function fetchCharacter() {
      const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);

      const characterInfo = await res.json();
      setCharacter(characterInfo);
      setLoading(false);
    };
    fetchCharacter();

  }, []);

  return (
    <>
      <div>Character Details</div>
      <Link to='/'>Back To All Characters</Link>
      {
        loading
          ? <p>Loading Character ^_^</p>
          : <div>
            <h3>{character.name}</h3>
            <p>{character.status}</p>
            <p>{character.species}</p>
            <img alt={`Image of ${character.name}`} src={character.image}/>
          </div>
      }
    </>
  )
}
