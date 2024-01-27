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
    fontWeight: '300',
    fontSize: '3em',
    color: 'DarkSlateGrey',
    paddingTop: '10px',
    fontFamily: 'Georgia, serif',
  };

  const subheading = {
    fontWeight: '300',
    fontSize: 'em',
    color: 'MintCream',
    paddingTop: '10px',
    fontFamily: 'Georgia, serif',
  };

  const imageContainer = {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems:'center',
    justifyContent:'center',
  };

  const imageStyle = {
    width: '200px',
    height: '200px',
    objectFit: 'contain',
    margin: '10px',
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
    
  };
 
  return (
    <div ref={ref} style={bodyStyle}>
      <div style={containerStyle}>
        <div style={contentStyle}>
        <Navigation/>
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
          <div style={imageContainer}>
            <img src={abstract} alt="abstract" style={imageStyle} />
            <img src={african} alt="african" style={imageStyle} />
            <img src={cartoon} alt="cartoon" style={imageStyle} />
            <img src={flowergirl} alt="flower" style={imageStyle} />
            <img src={meditation} alt="meditation" style={imageStyle} />
            <img src={mr} alt="mr&mrs" style={imageStyle} />
            <img src={think} alt="think" style={imageStyle} />
            <img src={thorny} alt="thorny" style={imageStyle} />
            <img src={wild} alt="wild" style={imageStyle} />
            <img src={crazycouple} alt="crazy couple" style={imageStyle} />
          </div>
          </div>
        </div>
        <Services/>

      </div>
  );
});

export default Home;
