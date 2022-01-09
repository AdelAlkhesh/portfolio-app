import { Mail, Person } from "@mui/icons-material";
import "./topbar.scss";

export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="topbarWrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Adel
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+49 15254618599</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>adel-alkhesh@outlook.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
