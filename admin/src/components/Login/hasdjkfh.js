<div className="" >
      <div className="login_form" >
        <div className="btn_1">
          <button className="btn_close" >
            <img src={closeIcon} alt="" className="close_img" />
          </button>
        </div>
        <img src={vectorImg} alt="" className="img-1" />

        {open ? <div className="main_form ">
          <h3 className="top_text">
            Let’s take the first step and create your account:
          </h3>

          <div className="user_form">
            <form className="form" >
              <div className="section_1">
                <label className="user_name">Email</label>
                <input
                  type="text"
                  name="email"
                  className="login_name"
                  placeholder="Type email"
                  required
                  onChange={(e) => setEmail(e.target.value)} ></input>
                <label className="user_phone">Password</label>
                <input
                  type="text"
                  name="password"
                  className="login_number"
                  placeholder="Type password"
                  required
                  onChange={(e) => setPassword(e.target.value)}></input>
                <h3 className="middle_notes">
                  <Link to="/" onClick={handleForgotPassword}>Forgot Password?</Link>
                </h3>
                <button className="btn_submit" onClick={handlelogin}>Continue</button>
                <h4 className="bottom_notes">
                  If you don't have an account. Please <Link to="/register" onClick={() => { document.body.classList.remove('overflow'); }}>Register</Link> here.
                </h4>
              </div>
            </form>
          </div>
        </div> : <ForgotPassword handleRedirectBtn1={handleRedirectBtn1} />}


      </div>
    </div>

const [open, setOpen] = useState(true)

const handleForgotPassword = () => {
    setOpen(!open)
  }
  const handleRedirectBtn1 = () => {
    setOpen(!open)
  }
{/* <Route path='/register' element={<Register/>}></Route>
    <Route path='/' element={<Login/>}></Route>
    <Route path='/deshbord/*' element={<ProfileDashbord/>}> </Route> */}

      {/* <Route path="/*" element={localStorage.getItem('token') ? <Login /> : <ProfileDashbord />} />
      <Route path="/deshbord/*" element={(localStorage.getItem('token')) ? <ProfileDashbord /> : <Login />} /> */}