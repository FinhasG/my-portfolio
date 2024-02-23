import Header from './components/navbar/Header'
import Banner from './components/banner/Banner';
import Features from './components/features/Features';
import Projects from './components/projects/Projects';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contacts';
import Footer from './components/footer/Footer';
import FooterBottom from './components/footer/Footer';


function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <Header />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Features />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
      </div>
    </div>
    
  )
}

export default App
