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
                <LanguageIcon />
                japanese
              </div>
              <div className="item">
                <NotificationsActiveIcon />
              </div>
              <div className="item">
                <FullscreenIcon />
              </div>
              <div className="item">
                <MarkUnreadChatAltIcon />
              </div>
              <div className="item">
                <FormatListBulletedIcon />
              </div>
              <div className="item">
                <DarkModeIcon />
              </div>
            </div>
          </div>
        </div>
      )
}

export default Navbar;
