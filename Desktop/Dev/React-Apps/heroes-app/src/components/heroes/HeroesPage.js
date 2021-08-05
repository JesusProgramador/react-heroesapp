import React from 'react'
import { useMemo } from 'react';
import { Redirect, useParams } from 'react-router-dom'
import { getHeroesById } from '../../selectors/getHeroeById';

export const HeroesPage = ({ history }) => {
  //el hook useParam extrae los parametros que vayan por el url, si se tienes multiples params en el url, retorna un arreglo con ellos
  const { heroeId } = useParams();
  console.log(heroeId);

  //permite que solo se llame a la funcion solo una vez hasta que el publisher cambie, asi evita que se llame a la funcion una y otra vez sin necesidad
  const hero = useMemo(() => getHeroesById(heroeId), [heroeId]);

  if (!hero) {
    return <Redirect to="/" />;
  }

  const handleReturn = () => {
    //valida si el historial de la pagina es menor a 2 redirecciona a la pagina principal. Esto para evitar que si se acaba de abrir el navegador al ir atras no redireccione a la pagina de inicio del navegador del usuario sino que se mantenga en la aplicacion
    if (history.lenght <= 2) {
      history.push("/");
    }

    history.goBack();
    //regresa a la pagina anterior
  };

  const { superhero, publisher, alter_ego, first_appearance, characters } =
    hero;

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`../assets/heroes/${heroeId}.jpg `}
          alt={superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>

      <div className="col-8">
        <h3>{superhero}</h3>

        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {" "}
            <b>Alter ego:</b> {alter_ego}
          </li>
          <li className="list-group-item">
            {" "}
            <b>Publisher:</b> {publisher}
          </li>
          <li className="list-group-item">
            {" "}
            <b>First appearance:</b> {first_appearance}
          </li>
        </ul>

        <h5>Characters</h5>
        <p>{characters}</p>

        <button className="btn btn-outline-info" onClick={handleReturn}>
          Return
        </button>
      </div>
    </div>
  );
}
