import React from "react";
import StudentProfilePage from "./StudentProfilePage";
import Header from "./header";
// import Footer from "./footer";
import { Button } from "./button";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Button />
      <StudentProfilePage />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
