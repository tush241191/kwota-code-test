import Head from 'next/head';
import { ReactNode } from 'react';

export interface IPrimaryLayout {
  children?: ReactNode;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>KWOTA</title>
      </Head>
      <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>{children}</div>
    </>
  );
};

export default PrimaryLayout;
