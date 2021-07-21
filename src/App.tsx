import React from "react";

import GlobalStyle from "./style/global";

import SignIn from "./pages/SignIn";

const App: React.FC = () => {
  return (
    <>
      <SignIn/>
      <GlobalStyle/>
    </>
  );
};

export default App;