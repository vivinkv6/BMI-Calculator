import React, { useState } from 'react'
import './styles/Form.css';
function Form({getData}) {
    const[weight, setWeight] = useState('');
    const[height, setHeight] = useState('');
    const[alert,setAlert]=useState(false);

    const onSubmit=(e)=>{
        e.preventDefault();
      if(isNaN(weight)||isNaN(height)){
          setAlert(true);
      }
      else{
          setAlert(false);
          getData(weight,height);
      }
    }
    return (
        <>
            <form className='form' onSubmit={onSubmit}>
            <h1 className='title text-center px-5 mt-2 text-secondary mx-5'>BMI Calculator</h1>
                   <center>
                       
                        <label  className="form-label mt-3">Height(M):</label>
                        <input type="text" value={height} onChange={(e)=>{setHeight(e.target.value)}} className="form-control h-25 w-25 mb-3 border border-dark" placeholder='eg:5.6' required/>
                    <label  className="form-label">Weight(Kg):</label>
                    <input type="text" value={weight} onChange={(e)=>{setWeight(e.target.value)}} className="form-control h-25 w-25 mb-3 border border-dark" placeholder='eg:40' required/>
                   
                <div className='submit'>
                    <button type="submit" className="btn btn-primary mb-2">GET BMI</button>
                </div>
                {alert && <div className="alert alert-danger" role="alert">Invalid Input</div>}
</center>
            </form>
        </>
    )
}

export default Form
