import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import BentoGrid from "./components/BentoGrid";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen pb-20">
      <NavBar />
      <Hero />
      <BentoGrid />
      <Footer />
    </div>
  );
};

export default App;
