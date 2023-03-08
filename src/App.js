import Navbar from "./pages/Navbar";
import { About, Course, BestIntruction, CorseMe, Bener, Footer } from "./components";
import { motion } from 'framer-motion'
const App = () => {
  return (
    <div className=" bg-[#FFFFF]]">
      <Navbar />
      <div className="px-[100px]">
        <About />
        <Course />
        <BestIntruction />
        <CorseMe />
        <Bener />
        <Footer />
      </div>
    </div>
  );
}

export default App;
