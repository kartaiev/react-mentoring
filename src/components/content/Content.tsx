import React, { FC, useEffect, useState } from 'react';
import { GLOBAL } from '../../lib';
import Movies from './Movies';
import tw from 'twin.macro';
import axios from 'axios';
import getOptions from '../../utils/getOptions';
import { MoviesType } from '../../lib';

const Content: FC = () => {
  const [allMovies, setAllMovies] = useState<MoviesType[]>([]);
  useEffect(() => {
    const getMovies = async () => {
      try {
        const { data } = await axios.request(getOptions('game'));
        !!data && setAllMovies(data.Search);
      } catch (e) {
        console.error(e);
      }
    };
    getMovies();
  }, []);

  const moviesCount = allMovies.length;

  return (
    <ContentContainer>
      <MoviesFound>
        {moviesCount} {GLOBAL.MOVIES_FOUND}
      </MoviesFound>
      <Movies allMovies={allMovies} />
    </ContentContainer>
  );
};

export default Content;

const ContentContainer = tw.div`pt-6`;
const MoviesFound = tw.p`text-xl pb-6`;
