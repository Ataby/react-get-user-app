import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
 import { useState } from 'react';
 
import UseEffectHook from './components/UseEffectHook';
import User from "./components/User"

function App() {
  //TOGGLE YAPMAK ICIN STATE KULLANMAK GEREKIR(ANLIK DEGISIM)
  const [show, setshow] = useState(true);
  // console.log(show);
  return (
    <div className="App">
      {/* <button className='container text-center mt-4' onClick={()=>setshow(!show)}>{show ? "Gizle" : "Göster"}</button>*/}
      {/* BUTONA TIKLADIGINDA GOSTERSIN, TIKLAMADIGINDA GIZLESIN*/} 

      {/* CONDITIONAL RENDERING ILE GOSTERIP GOSTERMEME OLAYI(short circuit)  */}
      {/*{show && <UseEffectHook/> } */}
      
      {/* <LifeCycleMethods/> */}
      {/* -------------------------------------------------------------------- */}
      
      <User/>
    </div>
  );
}

export default App;
