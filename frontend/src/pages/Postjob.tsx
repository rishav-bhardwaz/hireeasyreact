import Sidebar from "../admincomponents/Sidebar"
import JobPosting from "../admincomponents/Postjob"
const Postjob = () => {
  return (
    <>
        <div className="flex">
    <Sidebar />
    <JobPosting />
    </div>
    </>
  )
}

export default Postjob