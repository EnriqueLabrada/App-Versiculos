import './App.css'
import 'bootstrap'
import Versiculo from './components/versiculo'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {changeVersiculo} from './redux/versiculoSlice'
import {versiculos} from './Versiculos/vs'


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeVersiculo(versiculos[2]))
  },[])

  return (
    <div className='App d-flex ' id='App'>
      <Versiculo/>
    </div>
  );
}

export default App;
