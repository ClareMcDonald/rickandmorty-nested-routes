import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Detail({ characters = [] }) {
  const [character, setCharacter] = useState({});
  const { id } = useParams();

  useEffect(() => {
      const selectedChar = characters.find((character) => character.id === Number(id));
      setCharacter(selectedChar);

  }, [id]);

  return (
    <>
            <h3>{character.name}</h3>
            <p>{character.status}</p>
            <p>{character.species}</p>
            <img alt={`Image of ${character.name}`} src={character.image}/>
    </>
  )
}
