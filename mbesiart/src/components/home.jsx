import React, { useState } from 'react';
import Navigation from './navigationbar';
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
  const [showPrices, setShowPrices] = useState(false);

  const togglePrices = () => {
    setShowPrices(!showPrices);
  };

 
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

  
  const itemStyle = {
    padding: '0.2rem',
    marginBottom: '0.2rem',
    color: 'DarkSlateGrey',
    cursor: 'pointer',
    backgroundColor: 'rgba(169, 169, 169, 0.5)', 
    borderRadius: '10px',
    fontFamily: 'Georgia, serif',
    margin:'2px',
    borderTop: '2px solid DarkSlateGrey',
    
  };
 
  return (
    <div ref={ref} style={bodyStyle}>
      <div style={containerStyle}>
        <Navigation/>
        <div style={contentStyle}>
        
        <h1>
          {/* Button to toggle price display */}
          <div style={itemStyle} onClick={togglePrices}>
            {showPrices ? 'Hide Prices' : 'Prices'}
          </div>

          {/* Display prices when showPrices is true */}
          {showPrices && (
            <div style={itemStyle}>
              <p>A3 - Ksh 1550</p>
              <p>A4 - Ksh 550</p>
              <p>A5 - Ksh 450</p>
              <p>A6 - Ksh 300</p>
            </div>
          )}
        </h1>
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
                     <p>flowered Abstract</p>
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
