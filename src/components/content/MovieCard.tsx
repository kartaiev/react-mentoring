import React, { FC } from 'react';
import tw from 'twin.macro';

type Props = {
  Poster: string;
  Title: string;
  Year: string;
  Type: string;
};

const MovieCard: FC<Props> = ({ Poster, Title, Year, Type }: Props) => {
  return (
    <CardContainer>
      <img src={Poster} alt={Title} />
      <TitleYear>
        <span>{Title}</span>
        <span>{Year}</span>
      </TitleYear>
      <p>{Type}</p>
    </CardContainer>
  );
};

export default MovieCard;

const CardContainer = tw.div`flex flex-col justify-between items-start inline`;
const TitleYear = tw.div`flex justify-between w-48`;
