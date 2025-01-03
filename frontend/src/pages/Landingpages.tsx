import HeroSection from "../components/Landing/Header"
import Job from "../components/Landing/Jobs"
import Header from "../components/Common/Navbar"
import Bento from "../components/Landing/Bento"
import Team from "../components/Landing/Team"
import Footer from "../components/Common/Footer"
export const Landingpages = () => {

  const handleLogout = () => {
    console.log("User logged out");
  };
  return (
    <>
    <Header onLogout={handleLogout}/>
    <HeroSection />
    <Job />
    <Bento />
    <Team />
    <Footer />
    </>

  )
}
