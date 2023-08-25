import "./profiledashbord.css";
import { Route, Routes } from "react-router-dom";
import { Container } from "reactstrap";
import Sidebar from "../../components/ProfileDashbordComponets/components/sidebar-2/Sidebar";
import Navbar from "../../components/ProfileDashbordComponets/components/navbar-2/Navbar";
import Dashboard from "../../components/ProfileDashbordComponets/pages/Dashboard/Mainpage";
import Addcourse from "../../components/ProfileDashbordComponets/pages/Addcourse/Addcourse";
import VeiwCourse from "../../components/ProfileDashbordComponets/pages/Veiwcourse/Veiwcourse";
import Updatecourse from "../../components/ProfileDashbordComponets/pages/Updatecourse/Updatecourse";
import Addcontent from "../../components/ProfileDashbordComponets/pages/Addcontent/Addcontent";
import Updatecontent from "../../components/ProfileDashbordComponets/pages/Updatecontent/Updatecontent";
import Viewcontent from "../../components/ProfileDashbordComponets/pages/Viewcontent/Viewcontent";
import Admission from "../../components/ProfileDashbordComponets/pages/Addmission/Admission";
import Viewadmission from "../../components/ProfileDashbordComponets/pages/Viewadmission/Viewadmission";
import Viewstudentupdate from "../../components/ProfileDashbordComponets/pages/ViewStudentUpdate/Viewstudentdupdate";
import Studentdetails from "../../components/ProfileDashbordComponets/pages/ViewStudentDetails/Studentdetails";
import Protected from "../../Protected/Protected";

const ProfileDashbord = () => {
  const token = localStorage.getItem('token')
  return (
    <div className="p_dashbord">
      <div className="p_sidebar_section">
        <div>
          <Sidebar />
        </div>
        <div className="p_navbar_section">
          <Navbar />
          <div>
            <Container>
              <Routes>
                <Route path="/home" element={<Protected token={token}><Dashboard /></Protected>}></Route>
                <Route path="/addcourse" element={<Protected token={token}><Addcourse /> </Protected>}></Route>
                <Route path="/veiwcourse" element={<Protected token={token}><VeiwCourse /> </Protected>}></Route>
                <Route path="/updatecourse/:id" element={<Protected token={token}><Updatecourse /> </Protected>}></Route>
                <Route path="/addcontent" element={<Protected token={token}><Addcontent /> </Protected>}></Route>
                <Route path="/viewcontent" element={<Protected token={token}><Viewcontent /> </Protected>}></Route>
                <Route path="/updatecontent/:id" element={<Protected token={token}><Updatecontent /> </Protected>}></Route>
                <Route path="/admission" element={<Admission />}></Route>
                <Route path="/admissiondata" element={<Protected token={token}><Viewadmission /> </Protected>}></Route>
                <Route path="/student_Update/:id" element={<Protected token={token}>< Viewstudentupdate /> </Protected>}></Route>
                <Route path="/student_details/:id" element={<Protected token={token}>< Studentdetails /> </Protected>}></Route>
              </Routes>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDashbord;
