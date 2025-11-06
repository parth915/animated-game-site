import Hero from "./components/Hero";
import About from "./components/About.jsx";
import NavBar from "./components/NavBar.jsx";
import Features from "./components/Features.jsx";
import Story from "./components/Story.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
        <NavBar />
        <Hero/>
        <About/>
        <Features/>
        <Story/>
        <Contact/>
        <Footer/>
    </main>
  );
}

export default App;
