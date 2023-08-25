import { useState } from "react";
import logoName from "../../../../assets/images/logoName.svg";
import logoicon from "../../../../assets/icons/LogoIcon.svg";
import "./sidebar.css";
import { } from "reactstrap";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [inactive, setInactive] = useState(true);

  const [submenuOpensec, setSubmenuOpensec] = useState(false);
  const [submenuOpenthird, setSubmenuOpenthird] = useState(false);
  const [submenuOpenfour, setSubmenuOpenfour] = useState(false);

  const handleMenuItemClick2 = () => {
    if (!inactive) {
      setSubmenuOpensec(!submenuOpensec);
    }
    else {
      setSubmenuOpensec(submenuOpensec)
    }
  };
  const handleMenuItemClick3 = () => {
    if (!inactive) {
      setSubmenuOpenthird(!submenuOpenthird);
    }
    else {
      setSubmenuOpenthird(submenuOpenthird)
    }
  };
  const handleMenuItemClick4 = () => {
    if (!inactive) {
      setSubmenuOpenfour(!submenuOpenfour);
    }
    else {
      setSubmenuOpenfour(submenuOpenfour)
    }
  };



  return (
    <>
      <div className={`p_sidebar ${inactive ? "inactive" : ""}`}>
        <div className="p_sidebar_top_section">
          {/* logo */}
          <div className="p_logo">
            <div className="p_section_logo">
              <img src={logoicon} alt="" />
            </div>
            {inactive ? null : (
              <div className="p_sidebar_logoname">
                <img src={logoName} alt="" />
              </div>
            )}
            {/* toggle */}
            <div className="p_toggle_button" onClick={() => { setInactive(!inactive); }}>
              {inactive ? (<i className="ri-arrow-right-s-line"></i>) : (<i className="ri-arrow-left-s-line"></i>)}
            </div>
          </div>

          <div className="divider"></div>

          {/* ----- main content ----- */}
          <div className="p_sidebar_main_menu">
            <ul>

              {/* --- 1--- */}
              <li className=" main_menu">
                <Link to="/home" className=" flex">
                  <div className="col-3 text-center">
                    {/* <i className="ri-home-2-line p_menu_icon"></i> */}
                    <i className="ri-dashboard-3-line p_menu_icon"></i>
                  </div>
                  <div className="col-9 p_menu_item space">
                    Dashboard
                    <i className="ri-arrow-drop-left-line dropdown_iocn"></i>
                  </div>
                </Link>
              </li>

              {/* --- 2--- */}
              <li className=" main_menu" onClick={handleMenuItemClick2}>
                <a className=" flex">
                  <div className="col-3 text-center">
                    < i className="ri-stack-line p_menu_icon"></i>
                  </div>
                  <div className="col-9 p_menu_item space">
                    Course
                    {!submenuOpensec ? <i className="ri-arrow-drop-left-line dropdown_iocn"></i> : <i className="ri-arrow-drop-down-line dropdown_iocn"></i>}
                  </div>
                </a>
                {submenuOpensec && (
                  <div>
                    {/* Submenu content goes here */}
                    <ul >
                      <li className="submenu">
                        <Link to="/addcourse" className=" flex">
                          <div className="col-3 text-center">
                            <i className="far fa-circle p_menu_icon sub_menu_icon"></i>
                          </div>
                          <div className="col-9 p_menu_item space">
                            Add Course
                          </div>
                        </Link>
                      </li>
                      <li className="submenu">
                        <Link to="/veiwcourse" className=" flex">
                          <div className="col-3 text-center">
                            <i className="far fa-circle p_menu_icon sub_menu_icon"></i>
                          </div>
                          <div className="col-9 p_menu_item space">
                            Veiw Course
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>

              {/* --- 3--- */}
              <li className=" main_menu" onClick={handleMenuItemClick3}>
                <a className=" flex">
                  <div className="col-3 text-center">
                    <i className="ri-draft-line p_menu_icon"></i>
                  </div>
                  <div className="col-9 p_menu_item space">
                    Content
                    {!submenuOpenthird ? <i className="ri-arrow-drop-left-line dropdown_iocn"></i> : <i className="ri-arrow-drop-down-line dropdown_iocn"></i>}
                  </div>

                </a>
                {submenuOpenthird && (
                  <div>
                    {/* Submenu content goes here */}
                    <ul >
                      <li className="submenu">
                        <Link to="/addcontent" className=" flex">
                          <div className="col-3 text-center">
                            <i className="far fa-circle p_menu_icon sub_menu_icon"></i>
                          </div>
                          <div className="col-9 p_menu_item space">
                            Add Content
                          </div>
                        </Link>
                      </li>
                      <li className="submenu">
                        <Link to="/viewcontent" className=" flex">
                          <div className="col-3 text-center">
                            <i className="far fa-circle p_menu_icon sub_menu_icon"></i>
                          </div>
                          <div className="col-9 p_menu_item space">
                            View Content
                          </div>
                        </Link>
                      </li>

                    </ul>
                  </div>
                )}
              </li>

              {/* --- 4--- */}
              <li className=" main_menu" onClick={handleMenuItemClick4}>
                <a className=" flex">
                  <div className="col-3 text-center">
                    <i className="ri-user-add-line p_menu_icon"></i>
                  </div>
                  <div className="col-9 p_menu_item space">
                    Addmission
                    {!submenuOpenfour ? <i className="ri-arrow-drop-left-line dropdown_iocn"></i> : <i className="ri-arrow-drop-down-line dropdown_iocn"></i>}
                  </div>

                </a>
                {submenuOpenfour && (
                  <div>
                    {/* Submenu content goes here */}
                    <ul >
                      <li className="submenu">
                        <Link to="/admission" className=" flex">
                          <div className="col-3 text-center">
                            <i className="far fa-circle p_menu_icon sub_menu_icon"></i>
                          </div>
                          <div className="col-9 p_menu_item space">
                            New Addmission
                          </div>
                        </Link>

                      </li>
                      <li className="submenu">
                        <Link to="/admissiondata" className=" flex">
                          <div className="col-3 text-center">
                            <i className="far fa-circle p_menu_icon sub_menu_icon"></i>
                          </div>
                          <div className="col-9 p_menu_item space">
                            All Addmission
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
            </ul>
          </div>

        </div>

      </div>
    </>

  );
};

export default Sidebar;






