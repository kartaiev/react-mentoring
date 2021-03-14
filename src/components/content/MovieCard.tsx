import React, { FC, useContext } from 'react';
import { AspectRatio } from '@chakra-ui/react';
import tw from 'twin.macro';
import DottedButtonPopup from './DottedButtonPopup';
import { MovieContext } from '../../contexts/MovieContext';

type Props = {
  Poster: string;
  Title: string;
  Year: string;
  Type: string;
  imdbID: string;
};

const MovieCard: FC<Props> = ({ Poster, Title, Year, Type, imdbID }: Props) => {
  const { isMovieView, getMovie, toggleHeaderView } = useContext(MovieContext);

  const onClick = () => {
    getMovie('i', imdbID);

    !isMovieView && toggleHeaderView();
    window.scrollTo(0, 0);
  };

  return (
    <CardContainer>
      <AspectRatio ratio={2 / 3}>
        <img onClick={onClick} src={Poster} alt={Title} />
      </AspectRatio>
      <DottedButtonPopup />
      <TitleYear>
        <TitleSpan>{Title}</TitleSpan>
        <span>{Year}</span>
      </TitleYear>
      <TypeParagraph>{Type}</TypeParagraph>
    </CardContainer>
  );
};

export default MovieCard;

const CardContainer = tw.div`flex flex-col justify-between items-start inline cursor-pointer transition-all relative`;
const TitleYear = tw.div`flex justify-between w-full py-4 text-gray-400`;
const TitleSpan = tw.span`text-xl`;
const TypeParagraph = tw.p`text-gray-500 text-lg`;
