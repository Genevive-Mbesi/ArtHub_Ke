import React from 'react';
import customize from '../assets/Customize.jpg';
import personalize from '../assets/personalize.jpg';
import office from '../assets/office.jpg';
import vibrance from '../assets/vibrance.jpg';
import Footer from './footer';
import { Link } from 'react-router-dom';

const Services = React.forwardRef((props, ref) => {
  const bodyStyle = {
    backgroundColor: 'Gainsboro',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    margin: 0,
    padding: 0,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center', 
  };

  const contentContainer = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '20px',
  };

  const imageStyle = {
    width: '250px', 
    height: '250px', 
    objectFit: 'cover',
  };

  const subcontent = {
    paddingBottom: '10px',
    fontWeight: '500',
    fontSize: '1em',
    color: 'DarkSlateGrey',
    fontFamily: 'Georgia, serif',
    marginLeft: '10px',
    textAlign: 'center',
  };

  const heading = {
    fontWeight: '200',
    fontSize: '3em',
    color: 'DarkSlateGrey',
    paddingTop: '10px',
    fontFamily: 'Georgia, serif',
    marginBottom: '10px',
    borderBottom: '2px solid DarkSlateGrey',
  };
  const itemStyle = {
    padding: '5px',
    marginBottom: '10px',
    color: 'DarkSlateGrey',
    cursor: 'pointer',
    backgroundColor: 'rgba(169, 169, 169, 0.5)', 
    borderRadius: '10px',
    margin: '3%', 
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Georgia, serif',
    
  };


  return (
    <div ref={ref}>
      <div style={bodyStyle}>
      <h1 style={itemStyle}>
          <Link to="/">
            wall_art_heart
          </Link>
        </h1>
        <h1 style={heading}>What We Offer</h1>
        <div style={contentContainer}>
          <div>
            <img src={customize} alt="customized" style={imageStyle} />
            <h1 style={subcontent}>Wall Art customization</h1>
          </div>
          <div>
            <img src={personalize} alt="personalized" style={imageStyle} />
            <h1 style={subcontent}>Framed directives</h1>
          </div>
          <div>
            <img src={office} alt="office" style={imageStyle} />
            <h1 style={subcontent}>Office space wall designs</h1>
          </div>
          <div>
            <img src={vibrance} alt="thought wall" style={imageStyle} />
            <h1 style={subcontent}>Image Framing</h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
});

export default Services;
