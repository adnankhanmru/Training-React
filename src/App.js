import logo from './logo.svg';
import './App.css';
import Customer from './Customer';
import Counter from './Counter';
import { country } from './Country';
import { address } from './Address';
import { Clock } from './Clock';
import CustomerForm from './CustomerForm';
import Hooks_counter from './Hooks_counter';
import { Hooks_Form } from './Hooks_Form';


function App() {
  return (
   <div>
    {/* <Customer country1={country} address={address} country="india"></Customer> */}
    {/* <Clock></Clock> */}
    {/* <CustomerForm></CustomerForm> */}
    <Hooks_Form addr={address}></Hooks_Form>
   </div>
  );
}

export default App;
