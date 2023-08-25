import { Routes, Route } from "react-router-dom";
import Login from "../components/Login/Login";
import ProfileDashbord from "../containers/ProfileDeshbord/ProfileDashbord";
import Protected from "../Protected/Protected";

const Routers = () => {
  const token = localStorage.getItem('token')
  return (
    <Routes>
      {/* <Route path="/home" element={<Protected token={token}><Dashboard /></Protected>}></Route> */}
      <Route path="/*" element={<Protected token={token}> <ProfileDashbord /> </Protected>} />
      <Route path="/" element={<Login />} />
    </Routes>
  );
};

export default Routers;





