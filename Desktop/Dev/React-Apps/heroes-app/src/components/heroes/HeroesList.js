import React from 'react';
import { useMemo } from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroeCard } from './HeroeCard';

export const HeroesList = ({ publisher }) => {

  //permite que solo se llame a la funcion solo una vez hasta que el publisher cambie, asi evita que se llame a la funcion una y otra vez sin necesidad
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [ publisher ]);

  return (
    <div className="card-columns animate__animated animate__fadeIn">
        {heroes.map((heroe) => (
          <HeroeCard
            key={heroe.id}
            { ...heroe }
          />
        ))}
    </div>
  );
}
