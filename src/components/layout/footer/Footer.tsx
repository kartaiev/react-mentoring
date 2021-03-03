import React, { FC } from 'react';
import tw from 'twin.macro';
import Logo from '../../../elements/Logo';

const Footer: FC = () => (
  <FooterElement>
    <Logo />
  </FooterElement>
);

export default Footer;

const FooterElement = tw.footer`bg-bgColorAlt w-bigger h-14 flex items-center justify-center -ml-tiny`;
