import React from 'react'

function Score({ bmi, bmiType }) {
  return (


    <div className="score border border-dark mt-3 px-5 py-5" style={{ boxShadow: '0px 0px 10px black' }} >
      <h5 className="text-center mt-2 text-secondary">BMI Score</h5>
      <div className='score mt-2'>
        <div className='mt-3 ms-5 me-5' style={{padding:'10px 20px', backgroundColor: 'rgb(132, 251, 255)', textAlign: 'center' }}>
          <h2 style={{display:'inline', fontSize: '50px'}} >{bmi}</h2>
        </div>
        <h3 className='text-center text-primary mt-2 ' style={{ fontWeight: 'bold', fontSize: '35px' }}>{bmiType}</h3>
      </div>

    </div>

  )
}

export default Score
