import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react';
import type { NextPage } from 'next';
import Header from '../components/Header';

const Home: NextPage = () => {
  return (
    <div>
      <Header/>
    </div>
  );
};

export default Home;
