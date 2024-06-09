import { useEffect, useState } from 'react';

function navwidget1() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

    return (
<nav id="navigation-widget" className="navigation-widget navigation-widget-desktop sidebar left hidden" data-simplebar>
   <figure className="navigation-widget-cover liquid">
      <img src="/img/cover/01.jpg" alt="cover-01" />
    </figure>
 
    <div className="user-short-description">
      <a className="user-short-description-avatar user-avatar medium" href="profile-timeline.html">
         <div className="user-avatar-border">
          <div className="hexagon-120-132"></div>
         </div>
        <div className="user-avatar-content">
           <div className="hexagon-image-82-90" data-src="/img/avatar/01.jpg"></div>
         </div>
        <div className="user-avatar-progress">
           <div className="hexagon-progress-100-110"></div>
        </div>
        <div className="user-avatar-progress-border">
           <div className="hexagon-border-100-110"></div>
         </div>
         <div className="user-avatar-badge">
           <div className="user-avatar-badge-border">
             <div className="hexagon-32-36"></div>
           </div>
           <div className="user-avatar-badge-content">
              <div className="hexagon-dark-26-28"></div>
          </div>
           <p className="user-avatar-badge-text">24</p>
          </div>
        </a>
       <p className="user-short-description-title"><a href="profile-timeline.html">Marina Valentine</a></p>
       <p className="user-short-description-text"><a href="#">www.gamehuntress.com</a></p>
     </div>
     <div className="badge-list small">
        <div className="badge-item">
        <img src="/img/badge/gold-s.png" alt="badge-gold-s" />
      </div>
     <div className="badge-item">
        <img src="/img/badge/age-s.png" alt="badge-age-s" />
      </div>
     <div className="badge-item">
        <img src="/img/badge/caffeinated-s.png" alt="badge-caffeinated-s" />
      </div>
     <div className="badge-item">
        <img src="/img/badge/warrior-s.png" alt="badge-warrior-s" />
      </div>
     <a className="badge-item" href="profile-badges.html">
        <img src="/img/badge/blank-s.png" alt="badge-blank-s" />
         <p className="badge-item-text">+9</p>
        </a>
      </div>

   <div className="user-stats">
       <div className="user-stat">
        <p className="user-stat-title">930</p>
   
        <p className="user-stat-text">posts</p>
 
      </div>
  
      <div className="user-stat">
    
        <p className="user-stat-title">82</p>
    
        <p className="user-stat-text">friends</p>
        
      </div>
      

      
      <div className="user-stat">
        
        <p className="user-stat-title">5.7k</p>
        

        
        <p className="user-stat-text">visits</p>
        
      </div>
      
    </div>
    

    
    <ul className="menu">
      
      <li className="menu-item">
        
        <a className="menu-item-link" href="newsfeed.html">
          
          <svg className="menu-item-link-icon icon-newsfeed">
            <use xlinkHref="#svg-newsfeed"></use>
          </svg>
          
          Newsfeed
        </a>
        
      </li>
      

      
      <li className="menu-item">
        
        <a className="menu-item-link" href="overview.html">
          
          <svg className="menu-item-link-icon icon-overview">
            <use xlinkHref="#svg-overview"></use>
          </svg>
          
          Overview
        </a>
        
      </li>
      

      
      <li className="menu-item">
        
        <a className="menu-item-link" href="groups.html">
          
          <svg className="menu-item-link-icon icon-group">
            <use xlinkHref="#svg-group"></use>
          </svg>
          
          Groups
        </a>
        
      </li>
      

      
      <li className="menu-item">
        
        <a className="menu-item-link" href="members.html">
          
          <svg className="menu-item-link-icon icon-members">
            <use xlinkHref="#svg-members"></use>
          </svg>
          
          Members
        </a>
        
      </li>
      

      
      <li className="menu-item">
        
        <a className="menu-item-link" href="badges.html">
          
          <svg className="menu-item-link-icon icon-badges">
            <use xlinkHref="#svg-badges"></use>
          </svg>
          
          Badges
        </a>
        
      </li>
      

      
      <li className="menu-item">
        
        <a className="menu-item-link" href="quests.html">
          
          <svg className="menu-item-link-icon icon-quests">
            <use xlinkHref="#svg-quests"></use>
          </svg>
          
          Quests
        </a>
        
      </li>
      

      
      <li className="menu-item">
        
        <a className="menu-item-link" href="streams.html">
          
          <svg className="menu-item-link-icon icon-streams">
            <use xlinkHref="#svg-streams"></use>
          </svg>
          
          Streams
        </a>
        
      </li>
      

      
      <li className="menu-item">
        
        <a className="menu-item-link" href="events.html">
          
          <svg className="menu-item-link-icon icon-events">
            <use xlinkHref="#svg-events"></use>
          </svg>
          
          Events
        </a>
        
      </li>
      

      
      <li className="menu-item">
        
        <a className="menu-item-link" href="forums.html">
          
          <svg className="menu-item-link-icon icon-forums">
            <use xlinkHref="#svg-forums"></use>
          </svg>
          
          Forums
        </a>
        
      </li>
      

      
      <li className="menu-item">
        
        <a className="menu-item-link" href="marketplace.html">
          
          <svg className="menu-item-link-icon icon-marketplace">
            <use xlinkHref="#svg-marketplace"></use>
          </svg>
          
          Marketplace
        </a>
        
      </li>
      
    </ul>
    
  </nav>
   );
}

export default navwidget1;