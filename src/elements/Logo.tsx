import React, { FC } from 'react';
import tw from 'twin.macro';
import { LogoName } from '../lib';

const Logo: FC = () => (
  <LogoEl>
    {LogoName.FIRST}
    <LogoSpan>{LogoName.SECOND}</LogoSpan>
  </LogoEl>
);

export default Logo;

const LogoEl = tw.div`font-logo text-danger text-3xl bg-blur-md`;
const LogoSpan = tw.span`font-logoAlt text-2xl font-bold`;
