import data from './data/logements.json';
import aProposData from './data/a-propos.json';

export function getLogements() {
    return data;
}
export function getLogementById(id) {
    return data.find(el => el.id === id);
}

export function getAPropos() {
    return aProposData;
}
