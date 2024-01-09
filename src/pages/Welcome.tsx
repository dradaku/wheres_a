import { useConnect, useAccount } from '@puzzlehq/sdk';
import rightImageSrc from '../assets/adaku_mic_left.png';
import leftImageSrc from '../assets/adaku_mic_right.png';
import bottomImageSrc from '../assets/adakubottom.png';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Button from '@components/Button.js';

export const Welcome = () => {
  const navigate = useNavigate();
  const { account } = useAccount();
  const { loading, connect } = useConnect();

  useEffect(() => {
    if (account) {
      navigate('/');
    }
  }, [account, navigate]);

  return (
    <div className='flex h-full w-full items-stretch justify-between'>
      <div className='relative flex h-full w-full flex-col items-center justify-center'>
        <img
          src={rightImageSrc}
          alt='Top-right Alex'
          className='fixed right-0 top-0 h-full max-h-[18rem] max-w-[50%] object-contain'
        />
        <img
          src={leftImageSrc}
          alt='Left Alex'
          className='fixed left-0 top-1/4 h-full max-h-[20rem] max-w-[50%] -translate-y-20 object-contain'
        />
        <h1 className='text-24xl z-10 max-w-full overflow-visible whitespace-nowrap text-center font-extrabold leading-[40.56px] tracking-tight text-primary-white'>
          WHERE IS
          <br />
          A TODAY?
        </h1>
        <p className='z-10 mb-8 mt-8 max-w-[400px] text-center text-base font-bold tracking-tight text-primary-white'>
          Is she coding or concerting? A thrilling game showcasing the power of the A Game, Aleo and the Puzzle
          multiparty privacy stack through a wager between friends! A is for Aleo, A is for Africa. #VibesWithDrAdakuLagos
        </p>
        <Button
          className='max-w-[250px]'
          onClick={connect}
          color='yellow'
          disabled={loading}
        >
          {loading ? 'Loading...' : loading ? 'Connecting...' : 'Play!'}
        </Button>
        <img
          src={bottomImageSrc}
          alt='Bottom Adaku'
          className='center -translate-y-100 fixed bottom-0 h-full max-h-[12rem] w-3/5 max-w-[35%] transform object-contain'
        />
      </div>
    </div>
  );
};
