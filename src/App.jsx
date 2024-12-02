// import React from 'react';

// import About from './About';
// import Features from './Features';
// import ContactUs from './ContactUs';
// import Navbar from './Navbar.JSX';
// import Dashboard from './Dashboard';


// function App() {
//   return (
//     <div>
//       {/* Navbar */}
//       <Navbar/>
      
//       {/* Page Sections */}
//       <div id="dashboard">
//         <Dashboard/>
//       </div>
//       <div id="about">
//         <About />
//       </div>
//       <div id="features">
//         <Features />
//       </div>
//       <div id="contact-us">
//         <ContactUs />
//       </div>
//     </div>
//   );
// }

// export default App;
















import React from "react";

import About from "./About";
import Features from "./Features";
import ContactUs from "./ContactUs";
import Navbar from "./Navbar"; // Ensure file and path casing match
import Dashboard from "./Dashboard";

function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Page Sections */}
      <div id="dashboard">
        <Dashboard />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="contact-us">
        <ContactUs />
      </div>
    </div>
  );
}

export default App;
