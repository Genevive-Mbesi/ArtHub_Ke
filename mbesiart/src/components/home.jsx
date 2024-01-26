import React, { Profiler, useState } from 'react';
import Navigation from './navigationbar';
import Footer from './footer';
import abstract from '../assets/abstarct.jpg';
import african from '../assets/african.jpg';
import flowergirl from '../assets/flowergirl.jpg';
import meditation from '../assets/meditation.jpg';
import crazycouple from '../assets/crazycouple.jpg';
import mr from '../assets/mr&mrs.jpg';
import think from '../assets/think.jpg';
import thorny from '../assets/thorny.jpg';
import wild from '../assets/wild.jpg';
import cartoon from '../assets/cartoon.jpg';
import Services from './services';

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
    fontSize: '2em',
    color: 'MintCream',
    paddingTop: '10px',
    fontFamily: 'Georgia, serif',
  };

  const imageContainer = {
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    margin: '20px 0 20px -20%',
  '@media (min-width: 768px)': {
    justifyContent: 'center',
    margin: '20px 0 ',
  }, 
  };
  const navContainer = {
    display: 'flex',
  };

  const imageStyle = {
    width: '200px',
    height: '200px',
    objectFit: 'contain',
    margin: '10px',
  };
  const priceListStyle = {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '80%',
    maxWidth: '600px',
    padding: '10px',
    textAlign: 'center',
    cursor: 'pointer',
    fontWeight: '600',
    marginBottom: '10px',
    fontSize: '1em',
    color: 'DarkSlateGrey',
    paddingTop:'20px',
    top:'20%',
    fontFamily: 'Georgia, serif',
  };
  const priceDisplay = {
    position: 'absolute',
    left: '50%',
    backgroundColor: 'rgba(169, 169, 169, 0.9)',
    transform: 'translateX(-50%)',
    width: '20%',
    maxWidth: '600px',
    padding: '10px',
    textAlign: 'center',
    cursor: 'pointer',
    fontWeight: '600',
    marginBottom: '10px',
    fontSize: '1em',
    color: 'white',
    paddingTop:'20px',
    top:'27%',
    fontFamily: 'Georgia, serif',
  };

 
  return (
    <div ref={ref} style={bodyStyle}>
      <div style={containerStyle}>
        <div style={contentStyle}>
          <h1 style={heading}>wall_art_heart</h1>
          <h1 style={subheading}>Home of affordable Wall Decor</h1>
           {/* Button to toggle price display */}
           <div style={priceListStyle} onClick={togglePrices}>
            {showPrices ? 'Hide Prices' : 'Click to display Price List'}
          </div>

          {/* Display prices when showPrices is true */}
          {showPrices && (
            <div style={priceDisplay}>
              <p>A3 - Ksh 1550</p>
              <p>A4 - Ksh 550</p>
              <p>A5 - Ksh 450</p>
              <p>A6 - Ksh 300</p>
            </div>
          )}
          <div style={navContainer}>
          <Navigation/>
          <div style={imageContainer}>
            <img src={abstract} alt="abstract" style={imageStyle} />
            <img src={african} alt="african" style={imageStyle} />
            <img src={cartoon} alt="cartoon" style={imageStyle} />
            <img src={crazycouple} alt="crazy couple" style={imageStyle} />
            <img src={flowergirl} alt="flower" style={imageStyle} />
            <img src={meditation} alt="meditation" style={imageStyle} />
            <img src={mr} alt="mr&mrs" style={imageStyle} />
            <img src={think} alt="think" style={imageStyle} />
            <img src={thorny} alt="thorny" style={imageStyle} />
            <img src={wild} alt="wild" style={imageStyle} />
          </div>
          </div>
        </div>
        <Services/>

      </div>
    </div>
  );
});

export default Home;
