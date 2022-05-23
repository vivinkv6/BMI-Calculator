import './App.css';
import Form from './components/Form';

function App() {
  const getData=(weight,height)=>{
    console.log({weight,height});
  }
  return (
      <div className="container">
        <div className='row mt-4 mx-2'>
     <Form getData={getData}/>
     </div>
     </div>
  );
}

export default App;
