import React from 'react';
import abstract from '../assets/abstarct.jpg';
import african from '../assets/african.jpg';
import flowergirl from '../assets/flowergirl.jpg';
import meditation from '../assets/meditation.jpg';
import mr from '../assets/mr&mrs.jpg';
import think from '../assets/think.jpg';
import thorny from '../assets/thorny.jpg';
import wild from '../assets/wild.jpg';
import cartoon from '../assets/cartoon.jpg';
import Services from './services';
import crazycouple from '../assets/crazycouple.jpg'
import flowered from '../assets/flowered.jpg'
import self from '../assets/self.jpg'

import './base.css';

const Home = React.forwardRef((props, ref) => {
  
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    height: '100%', 
  
  };

  const bodyStyle = {
    backgroundColor: 'Gainsboro',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    minHeight: '100vh',
    alignItems:'center',
    justifyContent:'center',
  };
  const contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexGrow: 1, 
 
  };

  const heading = {
    fontSize: '3em',
    color: 'DarkSlateGrey',
    paddingTop: '50px',
    fontFamily: 'Georgia, serif',
  };

  const subheading = {
    fontSize: 'em',
    color: 'MintCream',
    paddingTop: '10px',
    fontFamily: 'Georgia, serif',
    
  };

  
 
 
  return (
    <div ref={ref} style={bodyStyle}>
      <div style={containerStyle}>
        <div style={contentStyle}>
        
        
          <h1 style={heading}>wall_art_heart</h1>
          <h1 style={subheading}>Affordable Wall Decor</h1>
          <div className='sections-container'>
                <div className='section-links'>
                    <h1 className='section-link-card flex'>
                    <div className='image-container'>
                     <img src={thorny} alt='art-heart' />
                    <img src={abstract} alt='art-heart' />
                     </div>
                     <p>Abstract art</p>
                   </h1>
                   <h1 className='section-link-card flex'>
                    <div className='image-container'>
                     <img src={flowergirl} alt='art-heart' />
                    <img src={think} alt='art-heart' />
                     </div>
                     <p>Word art</p>
                   </h1>
                   <h1 className='section-link-card flex'>
                    <div className='image-container'>
                     <img src={crazycouple} alt='art-heart' />
                    <img src={mr} alt='art-heart' />
                     </div>
                     <p>Couples Edition</p>
                   </h1>
                   <h1 className='section-link-card flex'>
                    <div className='image-container'>
                     <img src={cartoon} alt='art-heart' />
                    <img src={meditation} alt='art-heart' />
                     </div>
                     <p>Cartoon Art</p>
                   </h1>
                   <h1 className='section-link-card flex'>
                    <div className='image-container'>
                     <img src={african} alt='art-heart' />
                    <img src={wild} alt='art-heart' />
                     </div>
                     <p>African Heritage</p>
                   </h1>
                   <h1 className='section-link-card flex'>
                    <div className='image-container'>
                     <img src={flowered} alt='art-heart' />
                    <img src={self} alt='art-heart' />
                     </div>
                     <p>Flowered Abstract</p>
                   </h1>
                </div>
            </div>
          </div>
        </div>
        <Services/>

      </div>
  );
});

export default Home;
