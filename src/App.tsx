import React from 'react';
import './App.css';
import ResetPasswordView from './screen/ResetPasswordView';
import ViewLogin from './screen/ViewLogin';
import QrCode from './component/Qrcode';
function App() {
  return (
    <div className="App">
 <ViewLogin></ViewLogin>

 {/* <ResetPasswordView></ResetPasswordView> */}
    </div>
  );
}

export default App;
