interface Planet {
  name: string;
  url: string;
}
interface Location {
  name: string;
  url: string;
}

export interface Personajes {
  id: number;
  name: string;
  status: 'Dead' | 'Alive' | 'unknown';
  type: string;
  gender: Planet;
  location: Location;
  image: string;
  episode: string[];
  url: string;
}
