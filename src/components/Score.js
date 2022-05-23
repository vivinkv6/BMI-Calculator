import React from 'react'

function Score({bmi,bmiType}) {
  return (
    
     
      <div className="card border border-dark px-5" >
           <h5 className="card-title text-center mt-2 text-secondary">BMI Score</h5>
  <div className='score'>
      <h2  style={{backgroundColor:'rgb(132, 251, 255)',padding:'10px 10px 10px 10px',textAlign:'center',fontSize:'50px'}}>{bmi}</h2>
  <h3 className='text-center text-primary mt-2 ' style={{fontWeight:'bold',fontSize:'35px'}}>{bmiType}</h3>
  </div>
 
</div>
 
  )
}

export default Score
