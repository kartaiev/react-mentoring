import React, { FC } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { AspectRatio } from '@chakra-ui/react';
import tw from 'twin.macro';
import DottedButtonPopup from './DottedButtonPopup';
import { MovieType } from '../../state/interfaces';

type Props = {
  Poster: string;
  Title: string;
  Year: string;
  Genres: string[];
  ID?: number;
  movie: MovieType;
};

const MovieCard: FC<Props> = ({
  Poster,
  Title,
  Year,
  Genres,
  ID,
  movie
}: Props) => {
  const { push } = useHistory();
  const match = useRouteMatch('/movies' || '/movies/:genre');

  const onClick = () => {
    push(`${match?.url}/movie/${movie.id}`);
    window.scrollTo(0, 0);
  };

  return (
    <CardContainer>
      <AspectRatio ratio={2 / 3}>
        <img onClick={onClick} src={Poster} alt={Title} />
      </AspectRatio>
      <DottedButtonPopup ID={ID} movie={movie} />
      <TitleYear>
        <TitleSpan>{Title}</TitleSpan>
        <span>{Year}</span>
      </TitleYear>
      <TypeParagraph>{Genres ? Genres[0] : ''}</TypeParagraph>
    </CardContainer>
  );
};

export default MovieCard;

const CardContainer = tw.div`flex flex-col justify-between items-start inline cursor-pointer transition-all relative`;
const TitleYear = tw.div`flex justify-between w-full py-4 text-gray-400`;
const TitleSpan = tw.span`text-xl`;
const TypeParagraph = tw.p`text-gray-500 text-lg`;
