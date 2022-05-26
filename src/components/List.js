import React from 'react'

function List({range,bmi}) {
  console.log({range});
  return (
    <table className="table border border-3 border-dark mt-4 text-center">
  <thead className='border border-2 border-dark'>
    <tr>
      <th scope="col">TYPE</th>
      <th scope="col">BMI</th>
      <th scope="col">WEIGHT(Kg):</th>
    </tr>
  </thead>
  <tbody>
   
{/*Here I use conditional operator rather than if-else statment
because conditional statement can place inside return statement but if statment can't

syntax
condition ? true case : false case

*/}
   {bmi<18.15 ?
   <tr style={{border:'3px solid red'}}>
      <th >UnderWeight</th>
      <td>&lt; 18.15</td>
      <td>{range.UnderWeight.low}</td>
    </tr>
      :
      <tr>
      <th >UnderWeight</th>
      <td>&lt; 18.14</td>
      <td>{range.UnderWeight.low}</td>
    </tr>

   }
 {bmi>=18.15 && bmi <= 24.9?
<tr style={{border:'3px solid red'}}>
      <th>Normal</th>
      <td>18.15-24.9</td>
      <td>{range.Normal.low}-{range.Normal.high}</td>
    </tr>
    :
    <tr>
    <th>Normal</th>
    <td>18.15-24.9</td>
    <td>{range.Normal.low}-{range.Normal.high}</td>
  </tr>
  
}
{ bmi > 24.9 && bmi <= 29.9 ?
    <tr style={{border:'3px solid red'}}>
      <th>OverWeight</th>
      <td>25-29.9</td>
      <td>{range.OverWeight.low}-{range.OverWeight.high}</td>
    </tr>
    :
<tr> 
     <th>OverWeight</th>
     <td>25-29.9</td>
     <td>{range.OverWeight.low}-{range.OverWeight.high}</td>
   </tr>
}
{ bmi>29.9 && bmi <= 34.9 ?
    <tr style={{border:'3px solid red'}}>
     <th>Obesity Class I</th>
     <td>30-34.9</td>
     <td>{range.Obesity_Class_I.low}-{range.Obesity_Class_I.high}</td>
   </tr>
   :
   <tr>
   <th>Obesity Class I</th>
   <td>30-34.9</td>
   <td>{range.Obesity_Class_I.low}-{range.Obesity_Class_I.high}</td>
 </tr>

}
{ bmi>34.9 && bmi <= 39.9 ?
   <tr  style={{border:'3px solid red'}}>
     <th>Obesity Class II</th>
     <td>35-39.9</td>
     <td>{range.Obesity_Class_II.low}-{range.Obesity_Class_II.high}</td>
   </tr>
   :
   <tr>
     <th>Obesity Class II</th>
     <td>35-39.9</td>
     <td>{range.Obesity_Class_II.low}-{range.Obesity_Class_II.high}</td>
   </tr>
}

{ bmi>39.9 ?
    <tr style={{border:'3px solid red'}}>
     <th>Obesity Class III</th>
     <td>&gt;40</td>
     <td>{range.Obesity_Class_III.high}</td>
   </tr>
   :
   <tr>
   <th>Obesity Class III</th>
   <td>&gt;40</td>
   <td>{range.Obesity_Class_III.high}</td>
 </tr>
}
  </tbody>

</table>
  )
}

export default List
