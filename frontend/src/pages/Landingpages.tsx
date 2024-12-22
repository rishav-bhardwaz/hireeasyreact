import Navbar from "../components/Common/Navbar"
import Header from "../components/Landing/Header"
import Job from "../components/Landing/Jobs"
export const Landingpages = () => {
  return (
    <>
    <div className="min-h-screen bg-[#0B0F19]">
    <Navbar />
    <Header />
    </div>
    <Job />
    </>

  )
}
