import React from 'react';
import ScrollBaseAnimation from '../TextMarquee';

function Index() {
  return (
    <>
      <div className='h-[500px] grid place-content-center'>
        <ScrollBaseAnimation
          delay={500}
          baseVelocity={-3}
          clasname='font-bold mb-6 tracking-[-0.07em] leading-[90%]'
        >
          🚀 Stay Ahead in Tech! 
        </ScrollBaseAnimation>
        <ScrollBaseAnimation
          delay={500}
          baseVelocity={3}
          clasname='font-bold mb-6 tracking-[-0.07em] leading-[90%]'
        >
          Discover content you’ll love.
        </ScrollBaseAnimation>
      </div>
    </>
  );
}

export default Index;
