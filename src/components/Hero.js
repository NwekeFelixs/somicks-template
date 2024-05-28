import React from 'react';
import womanImg from '../images/woman_hero.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className=' h-[800px] bg-hero dark:bg-heroo bg-no-repeat bg-cover bg-center py-24'>
      <div className='container mx-auto flex justify-between h-full'>
        <div className='flex flex-col justify-center'>
          <div className='font-semibold flex items-center dark:text-white'>
            <div className='w-10 h-[2px] bg-blue-900 mr-3'></div> New Trend
          </div>
          <h1 className='dark:text-white text-[70px] leading-[1.1] font-light mb-4'>
            AUTUMN SALE STYLISH <br/>
            <span className='font-semibold'>WOMEN'S</span>
          </h1>

          <Link to={'/'} className='self-start uppercase font-semibold border-b-2 border-blue-900 dark:text-white'>
            Discover More
          </Link>
        </div>

        <div className='hidden lg:block'>
          <img src={womanImg} alt='woman' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
