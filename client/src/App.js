// import React, { useState } from "react";

import HomePage from "./Components/Home_page/HomePage";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import LoginModal from "./Components/LoginModal";

function App() {
  // const [count, setCount] = useState(0);
  return (
    <div>
      <NavBar />
      <HomePage />
      <Footer />
      <LoginModal />
    </div>
  );
}

export default App;
