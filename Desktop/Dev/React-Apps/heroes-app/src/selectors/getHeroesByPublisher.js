import { heroes } from "../data/Heroes";

export const getHeroesByPublisher = (publisher) => {

    const validPublishers = ['DC Comics', 'Marvel Comics'];
    /* Valida si el dato que ingreso el usuario existe en nuestra data */
    if (!validPublishers.includes(publisher)) {
        throw new Error(`Publisher "${publisher}" no es correcto`)
    }

    return heroes.filter(heroe => heroe.publisher === publisher);
}