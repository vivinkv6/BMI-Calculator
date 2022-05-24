import { useState } from 'react';
import Form from './components/Form';
import List from './components/List';
import Score from './components/Score';

function App() {

  const[bmi,setBmi]=useState('00');
  const[weightMeasure,setWeightMeasure]=useState({});
  const[bmiType,setBmiType]=useState('Not Calculated');
  const[visible,setVisible]=useState(false);
  const[weightRange,setWeightRange]=useState({
    UnderWeight:{
      high:''
    },
    Normal:{
      low:'',high:''
    },
    OverWeight:{
      low:'',high:''
    },
    Obesity_Class_I:{
      low:'',high:''
    },
    Obesity_Class_II:{
      low:'',high:''
    },
    Obesity_Class_III:{
      low:''
    },

  });

  const getData=(weight,height)=>{
    console.log({weight,height});
    let bmiNo=bmiCalculation(weight,height);
    setBmi(bmiNo);
    let bmiCat=bmiCategory(bmiNo);
    setBmiType(bmiCat);
    setVisible(true);
    //range function
const Range={
  UnderWeight:{
    low:weightcalc(18.5,height)
  },
  Normal:{
    low:weightcalc(18.6,height),high:weightcalc(24.9,height)
  },
  OverWeight:{
    low:weightcalc(25,height),high:weightcalc(29.9,height)
  },
  Obesity_Class_I:{
    low:weightcalc(30,height),high:weightcalc(34.9,height)
  },
  Obesity_Class_II:{
    low:weightcalc(35,height),high:weightcalc(39.9,height)
  },
  Obesity_Class_III:{
    high:weightcalc(40,height)
  },
}
setWeightRange(Range);

  setWeightMeasure({weight,Range});

   
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


  //calculate weight

  const weightcalc=(b,h)=>{
return (b*h*h).toFixed(2);
  }

  return (
      <div className="container justify-content-center" style={{display:'flex'}} >
        <div className='row mt-4 mx-5'>
      
     <Form getData={getData}/>
   
     <div className='col-sm-6 col-xl-6 justify-content-center mb-5'>
      
    {visible && <Score bmi={bmi} bmiType={bmiType} weightMeasure={weightMeasure}/>}
     </div>
     <div className='col-sm-6  col-xl-6 justify-content-center mb-5'>
     {visible && <List range={weightRange} bmi={bmi}/>} 
     </div>
     </div>
       
     </div>
  );
}

export default App;
