import logo from './logo.svg';
import './App.css';
import FirstComponent from './component/FirstComponent/FirstComponent';
import SecondComponent from './component/SecondComponent/SecondComponent';
import FunctionProps from './component/FunctionProps/FunctionProps';
import ClassProps from './component/ClassProps/ClassProps';
import StatesChange from './component/StatesChange/StatesChange';
import MyCounter from './component/MyCounter/MyCounter';
function App() {
  return (
    <div className="App">
      {/* <FirstComponent/>
      <SecondComponent/> */}
    {/* <FunctionProps name="omar"  course="IoT" age="25" phoneNumber="+201118840442" >
      <p>this is a quick preview about me </p>
    </FunctionProps> */}
    {/* <ClassProps name="omar" course="IoT" age="25" phoneNumber="+201118840442">
      <p>this is a quick preview about me using ClassProps </p>
    </ClassProps> */}
    {/* <StatesChange/> */}
    <MyCounter></MyCounter>
    </div>
  );
}

export default App;
