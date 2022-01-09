import { PhoneIphoneOutlined } from "@mui/icons-material";
import "./works.scss";

export default function Works() {
  return (
    <div className="works" id="works">
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftcontainer">
                <div className="imgContainer">
                  <PhoneIphoneOutlined className="icon"/>
                </div>
                <h2>Title</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus obcaecati sit, exercitationem</p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
