import { Category, Movie } from '../type';

export const FEATURED_MOVIE: Movie = {
  id: 'hero1',
  title: 'OS DONOS DO JOGO',
  poster: require('../../assets/donosJogo.webp'),
  genres: ['Drama', 'Jogos de azar'],
  rating: 'Impactante',
};

export const HOME_DATA: Category[] = [
  {
    id: 'cat1',
    title: 'Jogos para celulares',
    movies: [
      {
        id: 'm1',
        title: 'Garota de Rosa',
       poster: require('../../assets/jogo1.jpg'),
      },
      {
        id: 'm2',
        title: 'Homem no Banheiro',
        poster: require('../../assets/jogo2.jpg'),
      },
      {
        id: 'm3',
        title: 'Casal Animado',
        poster: require('../../assets/jogo3.jpg'),
      },
      {
        id: 'm4',
        title: 'Filme X',
        poster: require('../../assets/jogo4.jpg'),
      },
    ],
  },
  {
    id: 'cat2',
    title: 'Filmes de Ação',
    movies: [
      {
        id: 'm5',
        title: 'Ação 1',
        poster: require('../../assets/birdBox.jpeg'),
      },
      {
        id: 'm6',
        title: 'Ação 2',
        poster: require('../../assets/bridgerton.jpg'),
      },
      {
        id: 'm7',
        title: 'Ação 3',
        poster: require('../../assets/voltaacao.jpg'),
      },
      {
        id: 'm8',
        title: 'Ação 4',
        poster: require('../../assets/bagagemRisco.jpg'),
      },
    ],
  },
  {
    id: 'cat3',
    title: 'Séries de Suspense',
    movies: [
      {
        id: 'm9',
        title: 'Suspense 1',
        poster: require('../../assets/senna.webp'),
      },
      {
        id: 'm10',
        title: 'Suspense 2',
       poster: require('../../assets/papel.jpg'),
      },
      {
        id: 'm11',
        title: 'Suspense 3',
        poster: require('../../assets/you.webp'),
      },
      {
        id: 'm13',
        title: 'Suspense 4',
        poster: require('../../assets/riverdale.webp'),
      },
    ],
  },
];