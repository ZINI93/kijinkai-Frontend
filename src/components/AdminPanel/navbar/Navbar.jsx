import "./Navbar.scss";
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Navbar = () => {
    return(
        <div className="navbar">
          <div className="wrapper">
            <div className="search">
              <input type="text" placeholder="Search..." />
              <SearchIcon />
            </div>
            <div className="items">
              <div className="item">
                <LanguageIcon className="icon" />
                japanese
              </div>
              <div className="item">
                <DarkModeIcon className="icon" />
              </div>
              <div className="item">
                <FullscreenIcon className="icon" />
              </div>
              <div className="item">
                <NotificationsActiveIcon className="icon" />
                <span className="counter">2</span>
              </div>
              <div className="item">
                <MarkUnreadChatAltIcon className="icon" />
                <span className="counter">1</span>
              </div>
              <div className="item">
                <FormatListBulletedIcon className="icon" />
              </div>
              <div className="item">
                <img 
                  src="https://i.pinimg.com/736x/94/36/1e/94361e0ddf929122c5438a36235d44b5.jpg"
                  alt="profile"
                  className="avatar" 
                  />
              </div>
            </div>
          </div>
        </div>
      )
}

export default Navbar;
