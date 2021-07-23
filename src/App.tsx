import React from "react";

import GlobalStyle from "./style/global";

import SignIn from "./pages/SignIn";
import SignUp from './pages/SingUp'

const App: React.FC = () => {
  return (
    <>
      <SignUp/>
      <GlobalStyle/>
    </>
  );
};

export default App;