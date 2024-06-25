import { useEffect, useState } from 'react';
import jsonData from '../../../menuitems.json'

function navwidget2() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
    return (
<nav id="navigation-widget-mobile" className="navigation-widget navigation-widget-mobile sidebar left hidden" data-simplebar>

<div className="navigation-widget-close-button">
 
  <svg className="navigation-widget-close-button-icon icon-back-arrow">
    <use xlinkHref="#svg-back-arrow"></use>
  </svg>
 
</div>



<div className="navigation-widget-info-wrap">
  
  <div className="navigation-widget-info">
    
    <a className="user-avatar small no-outline" href="profile-timeline.html">
      
      <div className="user-avatar-content">
        
        <div className="hexagon-image-30-32" data-src="/img/avatar/01.jpg"></div>
        
      </div>
      
  
      
      <div className="user-avatar-progress">
        
        <div className="hexagon-progress-40-44"></div>
        
      </div>
      
  
      
      <div className="user-avatar-progress-border">
        
        <div className="hexagon-border-40-44"></div>
        
      </div>
      
  
      
      <div className="user-avatar-badge">
        
        <div className="user-avatar-badge-border">
          
          <div className="hexagon-22-24"></div>
          
        </div>
        
  
        
        <div className="user-avatar-badge-content">
          
          <div className="hexagon-dark-16-18"></div>
          
        </div>
        
  
        
        <p className="user-avatar-badge-text">24</p>
        {/* /USER AVATAR BADGE TEXT */}
      </div>
      {/* /USER AVATAR BADGE */}
    </a>
    {/* /USER AVATAR */}

    {/* NAVIGATION WIDGET INFO TITLE */}
    <p className="navigation-widget-info-title"><a href="profile-timeline.html">Marina Valentine</a></p>
    {/* /NAVIGATION WIDGET INFO TITLE */}

    {/* NAVIGATION WIDGET INFO TEXT */}
    <p className="navigation-widget-info-text">Welcome Back!</p>
    {/* /NAVIGATION WIDGET INFO TEXT */}
  </div>
  {/* /NAVIGATION WIDGET INFO */}

  {/* NAVIGATION WIDGET BUTTON */}
  <p className="navigation-widget-info-button button small secondary">Logout</p>
  {/* /NAVIGATION WIDGET BUTTON */}
</div>
{/* /NAVIGATION WIDGET INFO WRAP */}


<p className="navigation-widget-section-title">Sections</p>


{/* MENU */}

    
<ul className="menu">
    {jsonData && jsonData.map((item, index) => (
        <JSONItem key={index} data={item} />
      ))}
      
     
    </ul>
{/* /MENU */}


<p className="navigation-widget-section-title">My Profile</p>



<a className="navigation-widget-section-link" href="hub-profile-info.html">Profile Info</a>



<a className="navigation-widget-section-link" href="hub-profile-social.html">Social &amp; Stream</a>



<a className="navigation-widget-section-link" href="hub-profile-notifications.html">Notifications</a>



<a className="navigation-widget-section-link" href="hub-profile-messages.html">Messages</a>



<a className="navigation-widget-section-link" href="hub-profile-requests.html">Friend Requests</a>



<p className="navigation-widget-section-title">Account</p>



<a className="navigation-widget-section-link" href="hub-account-info.html">Account Info</a>



<a className="navigation-widget-section-link" href="hub-account-password.html">Change Password</a>



<a className="navigation-widget-section-link" href="hub-account-settings.html">General Settings</a>



<p className="navigation-widget-section-title">Groups</p>



<a className="navigation-widget-section-link" href="hub-group-management.html">Manage Groups</a>



<a className="navigation-widget-section-link" href="hub-group-invitations.html">Invitations</a>



<p className="navigation-widget-section-title">My Store</p>



<a className="navigation-widget-section-link" href="hub-store-account.html">My Account <span className="highlighted">$250,32</span></a>



<a className="navigation-widget-section-link" href="hub-store-statement.html">Sales Statement</a>



<a className="navigation-widget-section-link" href="hub-store-items.html">Manage Items</a>



<a className="navigation-widget-section-link" href="hub-store-downloads.html">Downloads</a>



<p className="navigation-widget-section-title">Main Links</p>



<a className="navigation-widget-section-link" href="#">Home</a>



<a className="navigation-widget-section-link" href="#">Careers</a>



<a className="navigation-widget-section-link" href="#">Faqs</a>



<a className="navigation-widget-section-link" href="#">About Us</a>



<a className="navigation-widget-section-link" href="#">Our Blog</a>



<a className="navigation-widget-section-link" href="#">Contact Us</a>



<a className="navigation-widget-section-link" href="#">Privacy Policy</a>

</nav>
 );
}




function JSONItem({ data, currentPage }) {
  const isActive = currentPage === data.link ? 'active' : '';

  return (

      
    <li className="menu-item">
        
    <a className="menu-item-link" href={`${data.link}`} >
      
      <svg className="menu-item-link-icon icon-newsfeed">
        <use xlinkHref={`#svg-${data.icon}`}></use>
      </svg>
      
     {data.title}
    </a>
    
  </li>
  
  );
}

export default navwidget2;