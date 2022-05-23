import { useState } from 'react';
import Form from './components/Form';
import Score from './components/Score';

function App() {

  const[bmi,setBmi]=useState('00');
  const[bmiType,setBmiType]=useState('Not Calculated');

  const getData=(weight,height)=>{
    console.log({weight,height});
    let bmiNo=bmiCalculation(weight,height);
    setBmi(bmiNo);
    let bmiCat=bmiCategory(bmiNo);
    setBmiType(bmiCat);
   
  }
  //bmi calculation 
  const bmiCalculation=(w,h)=>{
    return(w/(h*h)).toFixed(2) ;
  }

 //bmi category 
  const bmiCategory=(bmi)=>{
    if(bmi < 18.5){
      return "UnderWeight";
    }
    else if(bmi > 18.5 && bmi < 24.9){
      return "Normal";
    }
    else if(bmi > 24.9 && bmi < 29.9){
      return "OverWeight";
    }
    else if(bmi > 29.9 && bmi < 34.9){
      return "Obesity Class I";
    }
    else if(bmi > 34.9  && bmi < 39.9){
      return "Obesity Class II";
    }
    else if(bmi > 39.9){
      return "Obesity Class III";
    }
  }

  return (
      <div className="container justify-content-center" style={{display:'flex'}}>
        <div className='row mt-4 mx-2 '>
     <Form getData={getData}/>
     <div className='col-sm-6 justify-content-center mb-5'>
     <Score bmi={bmi} bmiType={bmiType}/>
     </div>
    
     </div>
     </div>
  );
}

export default App;
