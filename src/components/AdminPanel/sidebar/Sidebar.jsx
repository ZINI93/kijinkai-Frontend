import "./Sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
    return(
      <div className="Sidebar">
         <div className="top">
            <span className="logo">Kijin kai</span>
         </div>
         <hr />
         <div className="center">List
            <ul>
               <p className="title">MAIN</p>
               <li>
                  <DashboardIcon className="icon"/>
                <span>Dashboard</span>
               </li>
                <p className="title">LIST</p>
                <li>
                  <PersonIcon className="icon"/>
                <span>Users</span>
               </li>
                <li>
                  <StorefrontIcon className="icon"/>
                <span>Products</span>
               </li>
                <li>
                  <CreditCardIcon className="icon"/>
                <span>Orders</span>
               </li>
                <li>
                  <LocalShippingIcon className="icon"/>
                <span>Delivery</span>
               </li>
              <p className="title">USEFUL</p>               
                <li>
                  <QueryStatsIcon className="icon"/>
                <span>Stats</span>
               </li>
                <li>
                  <NotificationsIcon className="icon"/>
                <span>Notifications</span>
               </li>
              <p className="title">SERVICE</p>               
                <li>
                  <HealthAndSafetyIcon className="icon"/>
                <span>System Health</span>
               </li>
                <li>
                  <PsychologyIcon className="icon"/>
                <span>Logs</span>
               </li>
               <li>
                  <SettingsIcon className="icon"/>
                <span>Settings</span>
               </li>
               <p className="title">USER</p>              
               <li>
                  <AccountBoxIcon className="icon"/>
                <span>Profile</span>
               </li>
               <li>
                  <LogoutIcon className="icon"/>
                <span>Logout</span>
               </li>


            </ul>
         </div>
         <div className="bottom">
           <div className="colorOption"></div>
           <div className="colorOption"></div>
           <div className="colorOption"></div>
         </div>
        
      </div>
      );
};

export default Sidebar;
