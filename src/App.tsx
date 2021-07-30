import React from "react";

import GlobalStyle from "./style/global";

import SignIn from "./pages/SignIn";

import {AuthProvider} from "./context/AuthContext";

import ToastContainer from "./ToastContainer";

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <SignIn />
      </AuthProvider>

      <ToastContainer/>

      <GlobalStyle />
    </>
  );
};

export default App;