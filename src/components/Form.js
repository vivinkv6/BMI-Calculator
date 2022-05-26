import React, { useState } from 'react'
function Form({ getData}) {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [alert, setAlert] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        if (isNaN(weight) || isNaN(height)) {
            setAlert(true);
        }
        else {
            setAlert(false);
            getData(weight, height);
            setHeight('');
            setWeight('');
        }
    }
    return (
        <>
            <form className='form mb-5 px-3 py-3' onSubmit={onSubmit} style={{ boxShadow: '0px 0px 15px black'}}>

                <h1 className='title text-center px-5 mt-3 text-secondary'>BMI Calculator</h1>
                <center>
                
                        <label className="form-label mt-2">Height(M):</label>
                        <input type="text" value={height} onChange={(e) => { setHeight(e.target.value)}} className="form-control h-25 w-25 mb-3 border border-dark" placeholder='eg:5.6' required />
                  
                   
                    <label className="form-label">Weight(Kg):</label>
                    <input type="text" value={weight} onChange={(e) => { setWeight(e.target.value) }} className="form-control h-25 w-25 mb-3 border border-dark" placeholder='eg:40' required />
                   
                    <div className='submit'>
                        <button type="submit" style={{ marginBottom: '20px' }} className="btn btn-primary ">GET BMI</button>
                    </div>
                    {alert && <div className="alert alert-danger mb-1" role="alert">Invalid Input</div>}
                </center>

            </form>
        </>
    )
}

export default Form
