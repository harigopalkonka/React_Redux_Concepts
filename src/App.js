import './App.css';

import { connect } from 'react-redux';      // Step 14

import { IncAction } from './actions';      // Step 23
import { DecAction } from './actions';      // Step 24

function App({local_varibale,IncAction,DecAction}) {      // Step 18 pass local varibale   // step 25 add incremnet,decriment 
  return (
    <div className="App">
      {/* step 19 To Display state value  */}
      <h1>{local_varibale}</h1>           
      <br/>
      {/* Step 26 create increment button  */}
      <button onClick={() => IncAction(5)}>Increment</button>   
      {/* step 27 create decrement button   */}
      <button onClick={DecAction}>Decriment</button>
    </div>
  );
}

const mapStateToProps = state => ({             // Step 16 
  local_varibale: state                         // Step 17
})

export default connect(mapStateToProps,{IncAction,DecAction})(App);     // Step 15  // Step 28 add {incementaction,decriaction}
