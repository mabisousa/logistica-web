import React from "react";

import GlobalStyle from "./style/global";

import SignIn from "./pages/SignIn";

import AuthProvider from "./hooks";

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <SignIn />
      </AuthProvider>

      <GlobalStyle />
    </>
  );
};

export default App;
