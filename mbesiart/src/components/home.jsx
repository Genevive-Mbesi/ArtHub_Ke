import React, { useState } from 'react';
import Navigation from './navigationbar'
import abstract from '../assets/abstarct.jpg';
import african from '../assets/african.jpg';
import flowergirl from '../assets/flowergirl.jpg';
import meditation from '../assets/meditation.jpg';
import crazycouple from '../assets/crazycouple.jpg';
import mr from '../assets/mr&mrs.jpg';
import think from '../assets/think.jpg';
import thorny from '../assets/thorny.jpg';
import wild from '../assets/wild.jpg';
import cartoon from'../assets/cartoon.jpg';
import Footer from './footer';



const Home = React.forwardRef ((props,ref) => {


  const [showPrices, setShowPrices] = useState(false);

  const togglePrices = () => {
    setShowPrices(!showPrices);
  };


  const bodyStyle = {
    backgroundColor: 'Gainsboro',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '150vh',
    display: 'flex',
    alignItems: 'center',
    
  };
  const heading = {
    fontWeight: '300', 
    fontSize: '3em',
    color:'DarkSlateGrey',
    paddingTop: '10px',
    position: 'absolute', 
    top: '20%',
    left: '50%', 
   transform: 'translateX(-50%)',
   fontFamily: '  Georgia,serif',
   
  };
  const subheading = {
    fontWeight: '300', 
    fontSize: '2em',
    color:'rgba(169, 169, 169, 0.9)', 
    paddingTop: '10px',
    position: 'absolute', 
    top: '30%',
    left: '50%',
   transform: 'translateX(-50%)',
   fontFamily: '  Georgia,serif',
   
  };
  const abstractpic = {
    position: 'absolute', 
    top: '42%',
    marginLeft: '250px',
    width: '200px', // Set the desired width
    height: '200px',
    objectFit: 'contain',
    
  };
  const africanpic = {
    position: 'absolute', 
    top: '42%',
    marginLeft: '420px',
    width: '200px', // Set the desired width
    height: '200px',
    objectFit: 'contain',
    
  };

  const cartoonpic = {
    position: 'absolute', 
    top: '42%',
    marginLeft: '590px',
    width: '200px', // Set the desired width
    height: '200px',
    objectFit: 'contain',
    
  };

  const crazypic = {
    position: 'absolute', 
    top: '42%',
    marginLeft: '760px',
    width: '200px', // Set the desired width
    height: '200px',
    objectFit: 'contain',
    
  };

  const flowerpic = {
    position: 'absolute', 
    top: '42%',
    marginLeft: '930px',
    width: '200px', // Set the desired width
    height: '200px',
    objectFit: 'contain',
    
  };
  const meditationpic = {
    position: 'absolute', 
    top: '84%',
    marginLeft: '250px',
    width: '200px', // Set the desired width
    height: '200px',
    objectFit: 'contain',
    
    
  };
  const mrpic = {
    position: 'absolute', 
    top: '84%',
    marginLeft: '420px',
    width: '200px', // Set the desired width
    height: '200px',
    objectFit: 'contain', 
  };
  const thinkpic = {
    position: 'absolute', 
    top: '84%',
    marginLeft: '760px',
    width: '200px', // Set the desired width
    height: '200px',
    objectFit: 'contain',
    
  };
  const thornypic = {
    position: 'absolute', 
    top: '84%',
    marginLeft: '590px',
    width: '200px', // Set the desired width
    height: '200px',
    objectFit: 'contain',
  };

  
  const wildpic = {
    position: 'absolute', 
    top: '84%',
    marginLeft: '930px',
    width: '200px', // Set the desired width
    height: '200px',
    objectFit: 'contain',
    };

     const priceListStyle = {
    position: 'absolute',
    top: '126%',
    left: '0',
    width: '20%',
    backgroundColor: 'lightgray',
    padding: '10px',
    textAlign: 'center',
    cursor: 'pointer',
    paddingBottom: '10px',
    fontWeight: '600',
    marginBottom: '10px', 
    fontSize: '1em',
    color:'DarkSlateGrey',
    left: '50%', 
  };
  const priceDisplay = {
    backgroundColor: 'lightgray',
    textAlign: 'center',
    fontWeight: '300',
    fontSize: '1em',
    color:'DarkSlateGrey',
    width: '20%',
    position: 'absolute',
    top: '132%',
    left: '50%', 
    

  };


  return (
    <div ref={ref} >
    <div style={bodyStyle}>
    <Navigation/>  
    <h1 style={heading}>wall_art_heart</h1>
    <h1 style={subheading}>Home of affordable Wall Decor</h1>
    <img src={abstract} alt ='abstract'className='w-80 h-30 overflow-hidden container' style={abstractpic} />
    <img src={african} alt ='african'className='w-80 h-30 overflow-hidden container' style={africanpic} />
    <img src={cartoon} alt ='cartoon'className='w-80 h-30 overflow-hidden container' style={cartoonpic} />
    <img src={crazycouple} alt ='crazy couple'className='w-80 h-30 overflow-hidden container' style={crazypic} />
    <img src={flowergirl} alt ='flower'className='w-80 h-30 overflow-hidden container' style={flowerpic} />
    <img src={meditation} alt ='meditation'className='w-80 h-30 overflow-hidden container' style={meditationpic} />
    <img src={mr} alt ='mr&mrs'className='w-80 h-30 overflow-hidden container' style={mrpic} />
    <img src={think} alt ='think'className='w-80 h-30 overflow-hidden container' style={thinkpic}/>
    <img src={thorny} alt ='thorny'className='w-80 h-30 overflow-hidden container' style={thornypic} />
    <img src={wild} alt ='wild'className='w-80 h-30 overflow-hidden container' style={wildpic} />
    </div>
    
      {/* Button to toggle price display */}
      <div style={priceListStyle} onClick={togglePrices}>
        {showPrices ? 'Hide Prices' : 'Click to display Price List'}
      </div>
    {/* Display prices when showPrices is true */}
    {showPrices && (
        <div style={priceDisplay }>
          <p>A3 - Ksh 1550</p>
          <p>A4 - Ksh 550</p>
          <p>A5 - Ksh 450</p>
          <p>A6 - Ksh 300</p>
        </div>
      )}
    <Footer/>
    </div>
   
  );
});

export default Home;
