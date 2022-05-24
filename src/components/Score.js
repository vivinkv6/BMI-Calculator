import React from 'react'

function Score({ bmi, bmiType,weightMeasure }) {
 
  return (


    <div className="score border border-dark mt-3 px-5 py-5" style={{ boxShadow: '0px 0px 10px black' }} >
      <h5 className="text-center mt-2 text-secondary">BMI Score</h5>
      <div className='score mt-2'>
        <div className='mt-3 ms-5 me-5' style={{padding:'10px 20px', backgroundColor: 'rgb(132, 251, 255)', textAlign: 'center' }}>
          <h2 style={{display:'inline', fontSize: '50px'}} >{bmi}</h2>
        </div>
        <h3 className='text-center text-primary mt-2 ' style={{ fontWeight: 'bold', fontSize: '35px' }}>{bmiType}</h3>
      </div>
   {bmiType === 'UnderWeight' &&<h5 align="center">You Need Gain {(weightMeasure.Range.Normal.low-weightMeasure.weight).toFixed(2)}Kg</h5>}
   {bmiType === 'Normal' &&<h5 align="center">Your Weight is Normal,Good For You</h5>}
   {bmiType === 'OverWeight' &&<h5 align="center">You Need  Lose {(weightMeasure.weight-weightMeasure.Range.Normal.high).toFixed(2)}Kg</h5>}
   {bmiType === 'Obesity Class I' &&<h5 align="center">You Need  Lose {(weightMeasure.weight-weightMeasure.Range.Normal.high).toFixed(2)}Kg</h5>}
   {bmiType === 'Obesity Class II' &&<h5 align="center">You Need  Lose {(weightMeasure.weight-weightMeasure.Range.Normal.high).toFixed(2)}Kg</h5>}
   {bmiType === 'Obesity Class III' &&<h5 align="center">You Need  Lose {(weightMeasure.weight-weightMeasure.Range.Normal.high).toFixed(2)}Kg</h5>} 
    </div>
  )
}

export default Score
