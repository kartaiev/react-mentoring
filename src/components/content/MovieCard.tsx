import React, { FC } from 'react';
import { AspectRatio } from '@chakra-ui/react';
import tw from 'twin.macro';
import DottedButtonModal from './DottedButtonModal';

type Props = {
  Poster: string;
  Title: string;
  Year: string;
  Type: string;
};

const MovieCard: FC<Props> = ({ Poster, Title, Year, Type }: Props) => {
  return (
    <CardContainer>
      <AspectRatio ratio={2 / 3}>
        <img src={Poster} alt={Title} />
      </AspectRatio>
      <DottedButtonModal />
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
