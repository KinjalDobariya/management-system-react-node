import { Col, Row } from "reactstrap";
import "./dashboard.css";
import IdeaImg from "../../../../assets/images/idea.jpg";
import ThinkImg from "../../../../assets/images/think.jpg";
import SoluctionImg from "../../../../assets/images/soluction.jpg";


const Dashboard = () => {
  return (
    <div className="appo_section">
      <Row>

        <Col lg="4" md="6" sm="12" className="mb-3" >
          <div className="appo_today_section">
            <div className="top_title">
              <h3>Think</h3>
            </div>
            <div className="appo_wrapper">
              <div>
                <div className="main_section">
                  <div className="appo_card">
                    <div className="appo_card_img">
                      <img src={ThinkImg} alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col lg="4" md="6" sm="12" className="mb-3">
          <div className="appo_today_section">
            <div className="top_title">
              <h3>Idea</h3>
            </div>
            <div className="appo_wrapper">
              <div>
                <div className="main_section">
                  <div className="appo_card">
                    <div className="appo_card_img">
                      <img src={IdeaImg} alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col lg="4" md="6" sm="12" className="mb-3">
          <div className="appo_today_section">
            <div className="top_title">
              <h3>Soluction</h3>
            </div>
            <div className="appo_wrapper">
              <div>
                <div className="main_section">
                  <div className="appo_card">
                    <div className="appo_card_img">
                      <img src={SoluctionImg} alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
