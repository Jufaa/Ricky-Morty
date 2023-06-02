import axios from 'axios';
import { Personajes } from '../../types';

export const apiCall = async (): Promise<Personajes[]> => {
  try {
    const resp = await axios.get('https://rickandmortyapi.com/api/character');
    return resp.data.results;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const nextPage = async (page: number): Promise<Personajes[]> => {
  try {
    const resp = await axios.get(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );
    return resp.data.results;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
