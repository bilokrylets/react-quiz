import { ReactNode } from 'react';

type Props = { children: ReactNode };
const Footer = ({ children }: Props) => {
  return <footer>{children}</footer>;
};
export default Footer;
