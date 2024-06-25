import React, { useEffect } from 'react';
import Navcomponent from '../components/Navigation/navwidget1';
import Navcomponent1 from '../components/Navigation/navwidget2';
import Navcomponent2 from '../components/Navigation/navwidget3';
import Chatwidget from '../components/Chat/chatwidget';
import Chatwidget1 from '../components/Chat/chatwidget1';
import Header1 from '../components/Header';
import Bar1 from '../components/Bar';
import Banner from '../components/Banner';
import BannerImageLink from '../components/Banner/ImageLink';
import Head from 'next/head';
import Widgetbox1 from '../components/Widgetbox/1';
import Widgetbox2 from '../components/Widgetbox/2';
import Widgetbox3 from '../components/Widgetbox/3';
import Widgetbox4 from '../components/Widgetbox/4';
import Widgetbox5 from '../components/Widgetbox/5';
import Widgetbox6 from '../components/Widgetbox/6';
import Widgetbox7 from '../components/Widgetbox/7';
import Widgetbox8 from '../components/Widgetbox/8';
import Widgetbox9 from '../components/Widgetbox/9';
import QuickPost from '../components/Quickpost';
import Simpletabs from '../components/Simpletabs';
import Loadingbars from '../components/Loadingbars';
export default function Home() {  
const bannerImageUrl = '/img/banner/newsfeed-icon.png';
const title1 = 'Newsfeed';
const description = 'Check what your friends have been up to!';
//const [currentPage, setCurrentPage] = useState(0);  // Define currentPage

useEffect(() => {
const script = document.createElement("script");
script.src = "/js/app.bundle.min.js";
script.async = true;
document.body.appendChild(script);
return () => {
  document.body.removeChild(script);
 }; 
}, []);
return (
  

  <div>
  <Head>
     <title>{title1}</title>

     <link rel="stylesheet" href="/css/vendor/bootstrap.min.css" />
<link rel="stylesheet" href="/css/styles.min.css" />
<link rel="stylesheet" href="/css/vendor/simplebar.css" />

<link rel="stylesheet" href="/css/vendor/tiny-slider.css" />

     <meta name="viewport" content="initial-scale=1.0, width=device-width" />
   </Head>
 <Navcomponent />
 <Navcomponent1 />
 <Navcomponent2 currentPage={2} />
 <Chatwidget />
 <Chatwidget1 />
 <Header1 />
 <Bar1 />
 <div className="content-grid">
<Banner bannerdescription={description} bannertitle={title1} bannerimage={bannerImageUrl}/>

 
   <Widgetbox5 />
   <Widgetbox6 />
   <Widgetbox7 />
   <Widgetbox8 />
   <Widgetbox9 />

{/* WIDGET BOX */}
<div className="widget-box no-padding">
       {/* WIDGET BOX SETTINGS */}
       <div className="widget-box-settings">
         {/* POST SETTINGS WRAP */}
         <div className="post-settings-wrap" style={{position: 'relative'}}>
           {/* POST SETTINGS */}
           <div className="post-settings widget-box-post-settings-dropdown-trigger">
             {/* POST SETTINGS ICON */}
             <svg className="post-settings-icon icon-more-dots">
               <use xlinkHref="#svg-more-dots"></use>
             </svg>
             {/* /POST SETTINGS ICON */}
           </div>
           {/* /POST SETTINGS */}
   
           {/* SIMPLE DROPDOWN */}
           <div className="simple-dropdown widget-box-post-settings-dropdown" style={{position: 'absolute', 'zIndex': '9999', 'top': '30px', 'right': '9px', 'opacity': '0', 'visibility': 'hidden', 'transform': 'translate(0px, -20px)', 'transition': 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out'}}>
             {/* SIMPLE DROPDOWN LINK */}
             <p className="simple-dropdown-link">Edit Post</p>
             {/* /SIMPLE DROPDOWN LINK */}
   
             {/* SIMPLE DROPDOWN LINK */}
             <p className="simple-dropdown-link">Delete Post</p>
             {/* /SIMPLE DROPDOWN LINK */}
   
             {/* SIMPLE DROPDOWN LINK */}
             <p className="simple-dropdown-link">Make it Featured</p>
             {/* /SIMPLE DROPDOWN LINK */}
   
             {/* SIMPLE DROPDOWN LINK */}
             <p className="simple-dropdown-link">Report Post</p>
             {/* /SIMPLE DROPDOWN LINK */}
   
             {/* SIMPLE DROPDOWN LINK */}
             <p className="simple-dropdown-link">Report Author</p>
             {/* /SIMPLE DROPDOWN LINK */}
           </div>
           {/* /SIMPLE DROPDOWN */}
         </div>
         {/* /POST SETTINGS WRAP */}
       </div>
       {/* /WIDGET BOX SETTINGS */}
       
       {/* WIDGET BOX STATUS */}
       <div className="widget-box-status">
         {/* WIDGET BOX STATUS CONTENT */}
         <div className="widget-box-status-content">
           {/* USER STATUS */}
           <div className="user-status">
             {/* USER STATUS AVATAR */}
             <a className="user-status-avatar" href="profile-timeline.html">
               {/* USER AVATAR */}
               <div className="user-avatar small no-outline">
                 {/* USER AVATAR CONTENT */}
                 <div className="user-avatar-content">
                   {/* HEXAGON */}
                   <div className="hexagon-image-30-32" data-src="/img/avatar/05.jpg" style={{'width': '30px', 'height': '32px', 'position': 'relative'}}><canvas width="30" height="32" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                   {/* /HEXAGON */}
                 </div>
                 {/* /USER AVATAR CONTENT */}
             
                 {/* USER AVATAR PROGRESS */}
                 <div className="user-avatar-progress">
                   {/* HEXAGON */}
                   <div className="hexagon-progress-40-44" style={{'width': '40px', 'height': '44px', 'position': 'relative'}}><canvas width="40" height="44" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                   {/* /HEXAGON */}
                 </div>
                 {/* /USER AVATAR PROGRESS */}
             
                 {/* USER AVATAR PROGRESS BORDER */}
                 <div className="user-avatar-progress-border">
                   {/* HEXAGON */}
                   <div className="hexagon-border-40-44" style={{'width': '40px', 'height': '44px', 'position': 'relative'}}><canvas width="40" height="44" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                   {/* /HEXAGON */}
                 </div>
                 {/* /USER AVATAR PROGRESS BORDER */}
             
                 {/* USER AVATAR BADGE */}
                 <div className="user-avatar-badge">
                   {/* USER AVATAR BADGE BORDER */}
                   <div className="user-avatar-badge-border">
                     {/* HEXAGON */}
                     <div className="hexagon-22-24" style={{'width': '22px', 'height': '24px', 'position': 'relative'}}><canvas width="22" height="24" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                     {/* /HEXAGON */}
                   </div>
                   {/* /USER AVATAR BADGE BORDER */}
             
                   {/* USER AVATAR BADGE CONTENT */}
                   <div className="user-avatar-badge-content">
                     {/* HEXAGON */}
                     <div className="hexagon-dark-16-18" style={{'width': '16px', 'height': '18px', 'position': 'relative'}}><canvas width="16" height="18" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                     {/* /HEXAGON */}
                   </div>
                   {/* /USER AVATAR BADGE CONTENT */}
             
                   {/* USER AVATAR BADGE TEXT */}
                   <p className="user-avatar-badge-text">12</p>
                   {/* /USER AVATAR BADGE TEXT */}
                 </div>
                 {/* /USER AVATAR BADGE */}
               </div>
               {/* /USER AVATAR */}
             </a>
             {/* /USER STATUS AVATAR */}
         
             {/* USER STATUS TITLE */}
             <div className="user-status-title medium"><a className="bold" href="profile-timeline.html">Neko Bebop</a> replied to the discussion <a className="bold" href="forums-discussion.html">In your opinion, who has the best Cosplay?</a> in the forum
               {/* USER AVATAR */}
               <a className="user-avatar micro no-stats" href="group-timeline.html">
                 {/* USER AVATAR BORDER */}
                 <div className="user-avatar-border">
                   {/* HEXAGON */}
                   <div className="hexagon-22-24" style={{'width': '22px', 'height': '24px', 'position': 'relative'}}><canvas width="22" height="24" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                   {/* /HEXAGON */}
                 </div>
                 {/* /USER AVATAR BORDER */}
             
                 {/* USER AVATAR CONTENT */}
                 <div className="user-avatar-content">
                   {/* HEXAGON */}
                   <div className="hexagon-image-18-20" data-src="/img/avatar/24.jpg" style={{'width': '18px', 'height': '20px', 'position': 'relative'}}><canvas width="18" height="20" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                   {/* /HEXAGON */}
                 </div>
                 {/* /USER AVATAR CONTENT */}
               </a>
               {/* /USER AVATAR */}
               <a className="bold" href="group-timeline.html">Cosplayers of the World</a>
             </div>
             {/* /USER STATUS TITLE */}
         
             {/* USER STATUS TEXT */}
             <p className="user-status-text small">42 minutes ago</p>
             {/* /USER STATUS TEXT */}
           </div>
           {/* /USER STATUS */}
   
           {/* QUOTE BOX */}
           <blockquote className="quote-box">
             {/* QUOTE BOX ICON */}
             <svg className="quote-box-icon icon-quote">
               <use xlinkHref="#svg-quote"></use>
             </svg>
             {/* /QUOTE BOX ICON */}
             
             {/* QUOTE BOX TEXT */}
             <p className="quote-box-text">I've been cosplaying for 9 years now and I've never seen a more perfect cosplay like the Samurai Robot one from Rosie Sakura.</p>
             {/* /QUOTE BOX TEXT */}
           </blockquote>
           {/* /QUOTE BOX */}
   
           {/* CONTENT ACTIONS */}
           <div className="content-actions">
             {/* CONTENT ACTION */}
             <div className="content-action">
               {/* META LINE */}
               <div className="meta-line">
                 {/* META LINE LIST */}
                 <div className="meta-line-list reaction-item-list">
                   {/* REACTION ITEM */}
                   <div className="reaction-item" style={{position: 'relative'}}>
                     {/* REACTION IMAGE */}
                     <img className="reaction-image reaction-item-dropdown-trigger" src="/img/reaction/love.png" alt="reaction-love" />
                     {/* /REACTION IMAGE */}
         
                     {/* SIMPLE DROPDOWN */}
                     <div className="simple-dropdown padded reaction-item-dropdown" style={{'position': 'absolute', 'zIndex': '9999', 'bottom': '38px', 'left': '-16px', 'opacity': '0', 'visibility': 'hidden', 'transform': 'translate(0px, 20px); transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out'}}>
                       {/* SIMPLE DROPDOWN TEXT */}
                       <p className="simple-dropdown-text"><img className="reaction" src="/img/reaction/love.png" alt="reaction-love" /> <span className="bold">Love</span></p>
                       {/* /SIMPLE DROPDOWN TEXT */}
                     
                       {/* SIMPLE DROPDOWN TEXT */}
                       <p className="simple-dropdown-text">Matt Parker</p>
                       {/* /SIMPLE DROPDOWN TEXT */}
   
                       {/* SIMPLE DROPDOWN TEXT */}
                       <p className="simple-dropdown-text">Destroy Dex</p>
                       {/* /SIMPLE DROPDOWN TEXT */}
   
                       {/* SIMPLE DROPDOWN TEXT */}
                       <p className="simple-dropdown-text">The Green Goo</p>
                       {/* /SIMPLE DROPDOWN TEXT */}
                     </div>
                     {/* /SIMPLE DROPDOWN */}
                   </div>
                   {/* /REACTION ITEM */}
   
                   {/* REACTION ITEM */}
                   <div className="reaction-item" style={{position: 'relative'}}>
                     {/* REACTION IMAGE */}
                     <img className="reaction-image reaction-item-dropdown-trigger" src="/img/reaction/happy.png" alt="reaction-happy" />
                     {/* /REACTION IMAGE */}
         
                     {/* SIMPLE DROPDOWN */}
                     <div className="simple-dropdown padded reaction-item-dropdown" style={{'position': 'absolute', 'zIndex': '9999', 'bottom': '38px', 'left': '-16px', 'opacity': '0', 'visibility': 'hidden', 'transform': 'translate(0px, 20px); transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out'}}>
                       {/* SIMPLE DROPDOWN TEXT */}
                       <p className="simple-dropdown-text"><img className="reaction" src="/img/reaction/happy.png" alt="reaction-happy" /> <span className="bold">Happy</span></p>
                       {/* /SIMPLE DROPDOWN TEXT */}
                     
                       {/* SIMPLE DROPDOWN TEXT */}
                       <p className="simple-dropdown-text">Sandra Strange</p>
                       {/* /SIMPLE DROPDOWN TEXT */}
                     </div>
                     {/* /SIMPLE DROPDOWN */}
                   </div>
                   {/* /REACTION ITEM */}
   
                   {/* REACTION ITEM */}
                   <div className="reaction-item" style={{position: 'relative'}}>
                     {/* REACTION IMAGE */}
                     <img className="reaction-image reaction-item-dropdown-trigger" src="/img/reaction/like.png" alt="reaction-like" />
                     {/* /REACTION IMAGE */}
         
                     {/* SIMPLE DROPDOWN */}
                     <div className="simple-dropdown padded reaction-item-dropdown" style={{'position': 'absolute', 'zIndex': '9999', 'bottom': '38px', 'left': '-16px', 'opacity': '0', 'visibility': 'hidden', 'transform': 'translate(0px, 20px); transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out'}}>
                       {/* SIMPLE DROPDOWN TEXT */}
                       <p className="simple-dropdown-text"><img className="reaction" src="/img/reaction/like.png" alt="reaction-like" /> <span className="bold">Like</span></p>
                       {/* /SIMPLE DROPDOWN TEXT */}
                     
                       {/* SIMPLE DROPDOWN TEXT */}
                       <p className="simple-dropdown-text">Neko Bebop</p>
                       {/* /SIMPLE DROPDOWN TEXT */}
   
                       {/* SIMPLE DROPDOWN TEXT */}
                       <p className="simple-dropdown-text">Nick Grissom</p>
                       {/* /SIMPLE DROPDOWN TEXT */}
   
                       {/* SIMPLE DROPDOWN TEXT */}
                       <p className="simple-dropdown-text">Sarah Diamond</p>
                       {/* /SIMPLE DROPDOWN TEXT */}
   
                       {/* SIMPLE DROPDOWN TEXT */}
                       <p className="simple-dropdown-text">Jett Spiegel</p>
                       {/* /SIMPLE DROPDOWN TEXT */}
   
                       {/* SIMPLE DROPDOWN TEXT */}
                       <p className="simple-dropdown-text">Marcus Jhonson</p>
                       {/* /SIMPLE DROPDOWN TEXT */}
   
                       {/* SIMPLE DROPDOWN TEXT */}
                       <p className="simple-dropdown-text">Jane Rodgers</p>
                       {/* /SIMPLE DROPDOWN TEXT */}
   
                       {/* SIMPLE DROPDOWN TEXT */}
                       <p className="simple-dropdown-text"><span className="bold">and 6 more...</span></p>
                       {/* /SIMPLE DROPDOWN TEXT */}
                     </div>
                     {/* /SIMPLE DROPDOWN */}
                   </div>
                   {/* /REACTION ITEM */}
                 </div>
                 {/* /META LINE LIST */}
         
                 {/* META LINE TEXT */}
                 <p className="meta-line-text">16</p>
                 {/* /META LINE TEXT */}
               </div>
               {/* /META LINE */}
         
               {/* META LINE */}
               <div className="meta-line">
                 {/* META LINE LIST */}
                 <div className="meta-line-list user-avatar-list">
                   {/* USER AVATAR */}
                   <div className="user-avatar micro no-stats">
                     {/* USER AVATAR BORDER */}
                     <div className="user-avatar-border">
                       {/* HEXAGON */}
                       <div className="hexagon-22-24" style={{'width': '22px', 'height': '24px', 'position': 'relative'}}><canvas width="22" height="24" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                       {/* /HEXAGON */}
                     </div>
                     {/* /USER AVATAR BORDER */}
                 
                     {/* USER AVATAR CONTENT */}
                     <div className="user-avatar-content">
                       {/* HEXAGON */}
                       <div className="hexagon-image-18-20" data-src="/img/avatar/07.jpg" style={{'width': '18px', 'height': '20px', 'position': 'relative'}}><canvas width="18" height="20" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                       {/* /HEXAGON */}
                     </div>
                     {/* /USER AVATAR CONTENT */}
                   </div>
                   {/* /USER AVATAR */}
         
                   {/* USER AVATAR */}
                   <div className="user-avatar micro no-stats">
                     {/* USER AVATAR BORDER */}
                     <div className="user-avatar-border">
                       {/* HEXAGON */}
                       <div className="hexagon-22-24" style={{'width': '22px', 'height': '24px', 'position': 'relative'}}><canvas width="22" height="24" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                       {/* /HEXAGON */}
                     </div>
                     {/* /USER AVATAR BORDER */}
                 
                     {/* USER AVATAR CONTENT */}
                     <div className="user-avatar-content">
                       {/* HEXAGON */}
                       <div className="hexagon-image-18-20" data-src="/img/avatar/13.jpg" style={{'width': '18px', 'height': '20px', 'position': 'relative'}}><canvas width="18" height="20" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                       {/* /HEXAGON */}
                     </div>
                     {/* /USER AVATAR CONTENT */}
                   </div>
                   {/* /USER AVATAR */}
         
                   {/* USER AVATAR */}
                   <div className="user-avatar micro no-stats">
                     {/* USER AVATAR BORDER */}
                     <div className="user-avatar-border">
                       {/* HEXAGON */}
                       <div className="hexagon-22-24" style={{'width': '22px', 'height': '24px', 'position': 'relative'}}><canvas width="22" height="24" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                       {/* /HEXAGON */}
                     </div>
                     {/* /USER AVATAR BORDER */}
                 
                     {/* USER AVATAR CONTENT */}
                     <div className="user-avatar-content">
                       {/* HEXAGON */}
                       <div className="hexagon-image-18-20" data-src="/img/avatar/22.jpg" style={{'width': '18px', 'height': '20px', 'position': 'relative'}}><canvas width="18" height="20" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                       {/* /HEXAGON */}
                     </div>
                     {/* /USER AVATAR CONTENT */}
                   </div>
                   {/* /USER AVATAR */}
         
                   {/* USER AVATAR */}
                   <div className="user-avatar micro no-stats">
                     {/* USER AVATAR BORDER */}
                     <div className="user-avatar-border">
                       {/* HEXAGON */}
                       <div className="hexagon-22-24" style={{'width': '22px', 'height': '24px', 'position': 'relative'}}><canvas width="22" height="24" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                       {/* /HEXAGON */}
                     </div>
                     {/* /USER AVATAR BORDER */}
                 
                     {/* USER AVATAR CONTENT */}
                     <div className="user-avatar-content">
                       {/* HEXAGON */}
                       <div className="hexagon-image-18-20" data-src="/img/avatar/10.jpg" style={{'width': '18px', 'height': '20px', 'position': 'relative'}}><canvas width="18" height="20" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                       {/* /HEXAGON */}
                     </div>
                     {/* /USER AVATAR CONTENT */}
                   </div>
                   {/* /USER AVATAR */}
         
                   {/* USER AVATAR */}
                   <div className="user-avatar micro no-stats">
                     {/* USER AVATAR BORDER */}
                     <div className="user-avatar-border">
                       {/* HEXAGON */}
                       <div className="hexagon-22-24" style={{'width': '22px', 'height': '24px', 'position': 'relative'}}><canvas width="22" height="24" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                       {/* /HEXAGON */}
                     </div>
                     {/* /USER AVATAR BORDER */}
                 
                     {/* USER AVATAR CONTENT */}
                     <div className="user-avatar-content">
                       {/* HEXAGON */}
                       <div className="hexagon-image-18-20" data-src="/img/avatar/08.jpg" style={{'width': '18px', 'height': '20px', 'position': 'relative'}}><canvas width="18" height="20" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                       {/* /HEXAGON */}
                     </div>
                     {/* /USER AVATAR CONTENT */}
                   </div>
                   {/* /USER AVATAR */}
                 </div>
                 {/* /META LINE LIST */}
         
                 {/* META LINE TEXT */}
                 <p className="meta-line-text">19 Participants</p>
                 {/* /META LINE TEXT */}
               </div>
               {/* /META LINE */}
             </div>
             {/* /CONTENT ACTION */}
         
             {/* CONTENT ACTION */}
             <div className="content-action">
               {/* META LINE */}
               <div className="meta-line">
                 {/* META LINE LINK */}
                 <p className="meta-line-link">2 Comments</p>
                 {/* /META LINE LINK */}
               </div>
               {/* /META LINE */}
         
               {/* META LINE */}
               <div className="meta-line">
                 {/* META LINE TEXT */}
                 <p className="meta-line-text">0 Shares</p>
                 {/* /META LINE TEXT */}
               </div>
               {/* /META LINE */}
             </div>
             {/* /CONTENT ACTION */}
           </div>
           {/* /CONTENT ACTIONS */}
         </div>
         {/* /WIDGET BOX STATUS CONTENT */}
       </div>
       {/* /WIDGET BOX STATUS */}
   
       {/* POST OPTIONS */}
       <div className="post-options">
         {/* POST OPTION WRAP */}
         <div className="post-option-wrap" style={{position: 'relative'}}>
           {/* POST OPTION */}
           <div className="post-option reaction-options-dropdown-trigger">
             {/* POST OPTION ICON */}
             <svg className="post-option-icon icon-thumbs-up">
               <use xlinkHref="#svg-thumbs-up"></use>
             </svg>
             {/* /POST OPTION ICON */}
   
             {/* POST OPTION TEXT */}
             <p className="post-option-text">React!</p>
             {/* /POST OPTION TEXT */}
           </div>
           {/* /POST OPTION */}
   
           {/* REACTION OPTIONS */}
           <div className="reaction-options reaction-options-dropdown" style={{'position': 'absolute', 'zIndex': '9999', 'bottom': '54px', 'left': '-16px', 'opacity': '0', 'visibility': 'hidden', 'transform': 'translate(0px, 20px); transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out'}}>
             {/* REACTION OPTION */}
             <div className="reaction-option text-tooltip-tft" data-title="Like" style={{position: 'relative'}}>
               {/* REACTION OPTION IMAGE */}
               <img className="reaction-option-image" src="/img/reaction/like.png" alt="reaction-like" />
               {/* /REACTION OPTION IMAGE */}
             <div className="xm-tooltip" style={{'whiteSpace': 'nowrap', 'position': 'absolute', 'zIndex': '99999', 'top': '-28px', 'left': '50%', 'marginLeft': '-22px', 'opacity': '0', 'visibility': 'hidden', 'transform': 'translate(0px, 10px); transition: 0.3s ease-in-out'}}><p className="xm-tooltip-text">Like</p></div></div>
             {/* /REACTION OPTION */}
   
             {/* REACTION OPTION */}
             <div className="reaction-option text-tooltip-tft" data-title="Love" style={{position: 'relative'}}>
               {/* REACTION OPTION IMAGE */}
               <img className="reaction-option-image" src="/img/reaction/love.png" alt="reaction-love" />
               {/* /REACTION OPTION IMAGE */}
             <div className="xm-tooltip" style={{'whiteSpace': 'nowrap', 'position': 'absolute', 'zIndex': '99999', 'top': '-28px', 'left': '50%', 'marginLeft': '-23.5px', 'opacity': '0', 'visibility': 'hidden', 'transform': 'translate(0px, 10px); transition: 0.3s ease-in-out'}}><p className="xm-tooltip-text">Love</p></div></div>
             {/* /REACTION OPTION */}
   
             {/* REACTION OPTION */}
             <div className="reaction-option text-tooltip-tft" data-title="Dislike" style={{position: 'relative'}}>
               {/* REACTION OPTION IMAGE */}
               <img className="reaction-option-image" src="/img/reaction/dislike.png" alt="reaction-dislike" />
               {/* /REACTION OPTION IMAGE */}
             <div className="xm-tooltip" style={{'whiteSpace': 'nowrap', 'position': 'absolute', 'zIndex': '99999', 'top': '-28px', 'left': '50%', 'marginLeft': '-28px', 'opacity': '0', 'visibility': 'hidden', 'transform': 'translate(0px, 10px); transition: 0.3s ease-in-out'}}><p className="xm-tooltip-text">Dislike</p></div></div>
             {/* /REACTION OPTION */}
   
             {/* REACTION OPTION */}
             <div className="reaction-option text-tooltip-tft" data-title="Happy" style={{position: 'relative'}}>
               {/* REACTION OPTION IMAGE */}
               <img className="reaction-option-image" src="/img/reaction/happy.png" alt="reaction-happy" />
               {/* /REACTION OPTION IMAGE */}
             <div className="xm-tooltip" style={{'whiteSpace': 'nowrap', 'position': 'absolute', 'zIndex': '99999', 'top': '-28px', 'left': '50%', 'marginLeft': '-27.5px', 'opacity': '0', 'visibility': 'hidden', 'transform': 'translate(0px, 10px); transition: 0.3s ease-in-out'}}><p className="xm-tooltip-text">Happy</p></div></div>
             {/* /REACTION OPTION */}
   
             {/* REACTION OPTION */}
             <div className="reaction-option text-tooltip-tft" data-title="Funny" style={{position: 'relative'}}>
               {/* REACTION OPTION IMAGE */}
               <img className="reaction-option-image" src="/img/reaction/funny.png" alt="reaction-funny" />
               {/* /REACTION OPTION IMAGE */}
             <div className="xm-tooltip" style={{'whiteSpace': 'nowrap', 'position': 'absolute', 'zIndex': '99999', 'top': '-28px', 'left': '50%', 'marginLeft': '-27px', 'opacity': '0', 'visibility': 'hidden', 'transform': 'translate(0px, 10px); transition: 0.3s ease-in-out'}}><p className="xm-tooltip-text">Funny</p></div></div>
             {/* /REACTION OPTION */}
   
             {/* REACTION OPTION */}
             <div className="reaction-option text-tooltip-tft" data-title="Wow" style={{position: 'relative'}}>
               {/* REACTION OPTION IMAGE */}
               <img className="reaction-option-image" src="/img/reaction/wow.png" alt="reaction-wow" />
               {/* /REACTION OPTION IMAGE */}
             <div className="xm-tooltip" style={{'whiteSpace': 'nowrap', 'position': 'absolute', 'zIndex': '99999', 'top': '-28px', 'left': '50%', 'marginLeft': '-24px', 'opacity': '0', 'visibility': 'hidden', 'transform': 'translate(0px, 10px); transition: 0.3s ease-in-out'}}><p className="xm-tooltip-text">Wow</p></div></div>
             {/* /REACTION OPTION */}
   
             {/* REACTION OPTION */}
             <div className="reaction-option text-tooltip-tft" data-title="Angry" style={{position: 'relative'}}>
               {/* REACTION OPTION IMAGE */}
               <img className="reaction-option-image" src="/img/reaction/angry.png" alt="reaction-angry" />
               {/* /REACTION OPTION IMAGE */}
             <div className="xm-tooltip" style={{'whiteSpace': 'nowrap', 'position': 'absolute', 'zIndex': '99999', 'top': '-28px', 'left': '50%', 'marginLeft': '-26.5px', 'opacity': '0', 'visibility': 'hidden', 'transform': 'translate(0px, 10px); transition: 0.3s ease-in-out'}}><p className="xm-tooltip-text">Angry</p></div></div>
             {/* /REACTION OPTION */}
   
             {/* REACTION OPTION */}
             <div className="reaction-option text-tooltip-tft" data-title="Sad" style={{position: 'relative'}}>
               {/* REACTION OPTION IMAGE */}
               <img className="reaction-option-image" src="/img/reaction/sad.png" alt="reaction-sad" />
               {/* /REACTION OPTION IMAGE */}
             <div className="xm-tooltip" style={{'whiteSpace': 'nowrap', 'position': 'absolute', 'zIndex': '99999', 'top': '-28px', 'left': '50%', 'marginLeft': '-21.5px', 'opacity': '0', 'visibility': 'hidden', 'transform': 'translate(0px, 10px); transition: 0.3s ease-in-out'}}><p className="xm-tooltip-text">Sad</p></div></div>
             {/* /REACTION OPTION */}
           </div>
           {/* /REACTION OPTIONS */}
         </div>
         {/* /POST OPTION WRAP */}
   
         {/* POST OPTION */}
         <div className="post-option">
           {/* POST OPTION ICON */}
           <svg className="post-option-icon icon-comment">
             <use xlinkHref="#svg-comment"></use>
           </svg>
           {/* /POST OPTION ICON */}
   
           {/* POST OPTION TEXT */}
           <p className="post-option-text">Comment</p>
           {/* /POST OPTION TEXT */}
         </div>
         {/* /POST OPTION */}
   
         {/* POST OPTION */}
         <div className="post-option">
           {/* POST OPTION ICON */}
           <svg className="post-option-icon icon-share">
             <use xlinkHref="#svg-share"></use>
           </svg>
           {/* /POST OPTION ICON */}
   
           {/* POST OPTION TEXT */}
           <p className="post-option-text">Share</p>
           {/* /POST OPTION TEXT */}
         </div>
         {/* /POST OPTION */}
       </div>
       {/* /POST OPTIONS */}
     </div>



{/* WIDGET BOX */}
<div className="widget-box no-padding">
       {/* WIDGET BOX SETTINGS */}
       <div className="widget-box-settings">
         {/* POST SETTINGS WRAP */}
         <div className="post-settings-wrap" style={{position: 'relative'}}>
           {/* POST SETTINGS */}
           <div className="post-settings widget-box-post-settings-dropdown-trigger">
             {/* POST SETTINGS ICON */}
             <svg className="post-settings-icon icon-more-dots">
               <use xlinkHref="#svg-more-dots"></use>
             </svg>
             {/* /POST SETTINGS ICON */}
           </div>
           {/* /POST SETTINGS */}
   
           {/* SIMPLE DROPDOWN */}
           <div className="simple-dropdown widget-box-post-settings-dropdown" style={{position: 'absolute', 'zIndex': '9999', 'top': '30px', 'right': '9px', 'opacity': '0', 'visibility': 'hidden', 'transform': 'translate(0px, -20px)', 'transition': 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out'}}>
             {/* SIMPLE DROPDOWN LINK */}
             <p className="simple-dropdown-link">Edit Post</p>
             {/* /SIMPLE DROPDOWN LINK */}
   
             {/* SIMPLE DROPDOWN LINK */}
             <p className="simple-dropdown-link">Delete Post</p>
             {/* /SIMPLE DROPDOWN LINK */}
   
             {/* SIMPLE DROPDOWN LINK */}
             <p className="simple-dropdown-link">Make it Featured</p>
             {/* /SIMPLE DROPDOWN LINK */}
   
             {/* SIMPLE DROPDOWN LINK */}
             <p className="simple-dropdown-link">Report Post</p>
             {/* /SIMPLE DROPDOWN LINK */}
   
             {/* SIMPLE DROPDOWN LINK */}
             <p className="simple-dropdown-link">Report Author</p>
             {/* /SIMPLE DROPDOWN LINK */}
           </div>
           {/* /SIMPLE DROPDOWN */}
         </div>
         {/* /POST SETTINGS WRAP */}
       </div>
       {/* /WIDGET BOX SETTINGS */}
       
       {/* WIDGET BOX STATUS */}
       <div className="widget-box-status">
         {/* WIDGET BOX STATUS CONTENT */}
         <div className="widget-box-status-content">
           {/* USER STATUS */}
           <div className="user-status">
             {/* USER STATUS AVATAR */}
             <a className="user-status-avatar" href="profile-timeline.html">
               {/* USER AVATAR */}
               <div className="user-avatar small no-outline">
                 {/* USER AVATAR CONTENT */}
                 <div className="user-avatar-content">
                   {/* HEXAGON */}
                   <div className="hexagon-image-30-32" data-src="/img/avatar/03.jpg" style={{'width': '30px', 'height': '32px', 'position': 'relative'}}><canvas width="30" height="32" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                   {/* /HEXAGON */}
                 </div>
                 {/* /USER AVATAR CONTENT */}
             
                 {/* USER AVATAR PROGRESS */}
                 <div className="user-avatar-progress">
                   {/* HEXAGON */}
                   <div className="hexagon-progress-40-44" style={{'width': '40px', 'height': '44px', 'position': 'relative'}}><canvas width="40" height="44" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                   {/* /HEXAGON */}
                 </div>
                 {/* /USER AVATAR PROGRESS */}
             
                 {/* USER AVATAR PROGRESS BORDER */}
                 <div className="user-avatar-progress-border">
                   {/* HEXAGON */}
                   <div className="hexagon-border-40-44" style={{'width': '40px', 'height': '44px', 'position': 'relative'}}><canvas width="40" height="44" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                   {/* /HEXAGON */}
                 </div>
                 {/* /USER AVATAR PROGRESS BORDER */}
             
                 {/* USER AVATAR BADGE */}
                 <div className="user-avatar-badge">
                   {/* USER AVATAR BADGE BORDER */}
                   <div className="user-avatar-badge-border">
                     {/* HEXAGON */}
                     <div className="hexagon-22-24" style={{'width': '22px', 'height': '24px', 'position': 'relative'}}><canvas width="22" height="24" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                     {/* /HEXAGON */}
                   </div>
                   {/* /USER AVATAR BADGE BORDER */}
             
                   {/* USER AVATAR BADGE CONTENT */}
                   <div className="user-avatar-badge-content">
                     {/* HEXAGON */}
                     <div className="hexagon-dark-16-18" style={{'width': '16px', 'height': '18px', 'position': 'relative'}}><canvas width="16" height="18" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                     {/* /HEXAGON */}
                   </div>
                   {/* /USER AVATAR BADGE CONTENT */}
             
                   {/* USER AVATAR BADGE TEXT */}
                   <p className="user-avatar-badge-text">16</p>
                   {/* /USER AVATAR BADGE TEXT */}
                 </div>
                 {/* /USER AVATAR BADGE */}
               </div>
               {/* /USER AVATAR */}
             </a>
             {/* /USER STATUS AVATAR */}
         
             {/* USER STATUS TITLE */}
             <p className="user-status-title medium"><a className="bold" href="profile-timeline.html">Nick Grissom</a></p>
             {/* /USER STATUS TITLE */}
         
             {/* USER STATUS TEXT */}
             <p className="user-status-text small">1 hour ago</p>
             {/* /USER STATUS TEXT */}
           </div>
           {/* /USER STATUS */}
   
           {/* WIDGET BOX STATUS TEXT */}
           <p className="widget-box-status-text">When you finally pass the quest that you've been trying for so long...</p>
           {/* /WIDGET BOX STATUS TEXT */}
         </div>
         {/* /WIDGET BOX STATUS CONTENT */}
   
         {/* IFRAME WRAP */}
         <div className="iframe-wrap">
           <iframe src="https://giphy.com/embed/1LnQIODGufGec" allowFullScreen=""></iframe>
         </div>
         {/* /IFRAME WRAP */}
   
         {/* WIDGET BOX STATUS CONTENT */}
         <div className="widget-box-status-content">
           {/* CONTENT ACTIONS */}
           <div className="content-actions">
             {/* CONTENT ACTION */}
             <div className="content-action">
               {/* META LINE */}
               <div className="meta-line">
                 {/* META LINE LIST */}
                 <div className="meta-line-list reaction-item-list">
                   {/* REACTION ITEM */}
                   <div className="reaction-item" style={{position: 'relative'}}>
                     {/* REACTION IMAGE */}
                     <img className="reaction-image reaction-item-dropdown-trigger" src="/img/reaction/love.png" alt="reaction-love" />
                     {/* /REACTION IMAGE */}
         
                     {/* SIMPLE DROPDOWN */}
                     <div className="simple-dropdown padded reaction-item-dropdown" style={{'position': 'absolute', 'zIndex': '9999', 'bottom': '38px', 'left': '-16px', 'opacity': '0', 'visibility': 'hidden', 'transform': 'translate(0px, 20px); transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out'}}>
                       {/* SIMPLE DROPDOWN TEXT */}
                       <p className="simple-dropdown-text"><img className="reaction" src="/img/reaction/love.png" alt="reaction-love" /> <span className="bold">Love</span></p>
                       {/* /SIMPLE DROPDOWN TEXT */}
                     
                       {/* SIMPLE DROPDOWN TEXT */}
                       <p className="simple-dropdown-text">Matt Parker</p>
                       {/* /SIMPLE DROPDOWN TEXT */}
   
                       {/* SIMPLE DROPDOWN TEXT */}
                       <p className="simple-dropdown-text">Destroy Dex</p>
                       {/* /SIMPLE DROPDOWN TEXT */}
   
                       {/* SIMPLE DROPDOWN TEXT */}
                       <p className="simple-dropdown-text">The Green Goo</p>
                       {/* /SIMPLE DROPDOWN TEXT */}
                     </div>
                     {/* /SIMPLE DROPDOWN */}
                   </div>
                   {/* /REACTION ITEM */}
   
                   {/* REACTION ITEM */}
                   <div className="reaction-item" style={{position: 'relative'}}>
                     {/* REACTION IMAGE */}
                     <img className="reaction-image reaction-item-dropdown-trigger" src="/img/reaction/happy.png" alt="reaction-happy" />
                     {/* /REACTION IMAGE */}
         
                     {/* SIMPLE DROPDOWN */}
                     <div className="simple-dropdown padded reaction-item-dropdown" style={{'position': 'absolute', 'zIndex': '9999', 'bottom': '38px', 'left': '-16px', 'opacity': '0', 'visibility': 'hidden', 'transform': 'translate(0px, 20px); transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out'}}>
                       {/* SIMPLE DROPDOWN TEXT */}
                       <p className="simple-dropdown-text"><img className="reaction" src="/img/reaction/happy.png" alt="reaction-happy" /> <span className="bold">Happy</span></p>
                       {/* /SIMPLE DROPDOWN TEXT */}
                     
                       {/* SIMPLE DROPDOWN TEXT */}
                       <p className="simple-dropdown-text">Sandra Strange</p>
                       {/* /SIMPLE DROPDOWN TEXT */}
   
                       {/* SIMPLE DROPDOWN TEXT */}
                       <p className="simple-dropdown-text">Jane Rodgers</p>
                       {/* /SIMPLE DROPDOWN TEXT */}
                     </div>
                     {/* /SIMPLE DROPDOWN */}
                   </div>
                   {/* /REACTION ITEM */}
   
                   {/* REACTION ITEM */}
                   <div className="reaction-item" style={{position: 'relative'}}>
                     {/* REACTION IMAGE */}
                     <img className="reaction-image reaction-item-dropdown-trigger" src="/img/reaction/like.png" alt="reaction-like" />
                     {/* /REACTION IMAGE */}
         
                     {/* SIMPLE DROPDOWN */}
                     <div className="simple-dropdown padded reaction-item-dropdown" style={{'position': 'absolute', 'zIndex': '9999', 'bottom': '38px', 'left': '-16px', 'opacity': '0', 'visibility': 'hidden', 'transform': 'translate(0px, 20px); transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out'}}>
                       {/* SIMPLE DROPDOWN TEXT */}
                       <p className="simple-dropdown-text"><img className="reaction" src="/img/reaction/like.png" alt="reaction-like" /> <span className="bold">Like</span></p>
                       {/* /SIMPLE DROPDOWN TEXT */}
                     
                       {/* SIMPLE DROPDOWN TEXT */}
                       <p className="simple-dropdown-text">Neko Bebop</p>
                       {/* /SIMPLE DROPDOWN TEXT */}
   
                       {/* SIMPLE DROPDOWN TEXT */}
                       <p className="simple-dropdown-text">Nick Grissom</p>
                       {/* /SIMPLE DROPDOWN TEXT */}
   
                       {/* SIMPLE DROPDOWN TEXT */}
                       <p className="simple-dropdown-text">Sarah Diamond</p>
                       {/* /SIMPLE DROPDOWN TEXT */}
   
                       {/* SIMPLE DROPDOWN TEXT */}
                       <p className="simple-dropdown-text">Jett Spiegel</p>
                       {/* /SIMPLE DROPDOWN TEXT */}
   
                       {/* SIMPLE DROPDOWN TEXT */}
                       <p className="simple-dropdown-text">Marcus Jhonson</p>
                       {/* /SIMPLE DROPDOWN TEXT */}
   
                       {/* SIMPLE DROPDOWN TEXT */}
                       <p className="simple-dropdown-text"><span className="bold">and 6 more...</span></p>
                       {/* /SIMPLE DROPDOWN TEXT */}
                     </div>
                     {/* /SIMPLE DROPDOWN */}
                   </div>
                   {/* /REACTION ITEM */}
                 </div>
                 {/* /META LINE LIST */}
         
                 {/* META LINE TEXT */}
                 <p className="meta-line-text">16</p>
                 {/* /META LINE TEXT */}
               </div>
               {/* /META LINE */}
         
               {/* META LINE */}
               <div className="meta-line">
                 {/* META LINE LIST */}
                 <div className="meta-line-list user-avatar-list">
                   {/* USER AVATAR */}
                   <div className="user-avatar micro no-stats">
                     {/* USER AVATAR BORDER */}
                     <div className="user-avatar-border">
                       {/* HEXAGON */}
                       <div className="hexagon-22-24" style={{'width': '22px', 'height': '24px', 'position': 'relative'}}><canvas width="22" height="24" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                       {/* /HEXAGON */}
                     </div>
                     {/* /USER AVATAR BORDER */}
                 
                     {/* USER AVATAR CONTENT */}
                     <div className="user-avatar-content">
                       {/* HEXAGON */}
                       <div className="hexagon-image-18-20" data-src="/img/avatar/07.jpg" style={{'width': '18px', 'height': '20px', 'position': 'relative'}}><canvas width="18" height="20" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                       {/* /HEXAGON */}
                     </div>
                     {/* /USER AVATAR CONTENT */}
                   </div>
                   {/* /USER AVATAR */}
         
                   {/* USER AVATAR */}
                   <div className="user-avatar micro no-stats">
                     {/* USER AVATAR BORDER */}
                     <div className="user-avatar-border">
                       {/* HEXAGON */}
                       <div className="hexagon-22-24" style={{'width': '22px', 'height': '24px', 'position': 'relative'}}><canvas width="22" height="24" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                       {/* /HEXAGON */}
                     </div>
                     {/* /USER AVATAR BORDER */}
                 
                     {/* USER AVATAR CONTENT */}
                     <div className="user-avatar-content">
                       {/* HEXAGON */}
                       <div className="hexagon-image-18-20" data-src="/img/avatar/13.jpg" style={{'width': '18px', 'height': '20px', 'position': 'relative'}}><canvas width="18" height="20" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                       {/* /HEXAGON */}
                     </div>
                     {/* /USER AVATAR CONTENT */}
                   </div>
                   {/* /USER AVATAR */}
         
                   {/* USER AVATAR */}
                   <div className="user-avatar micro no-stats">
                     {/* USER AVATAR BORDER */}
                     <div className="user-avatar-border">
                       {/* HEXAGON */}
                       <div className="hexagon-22-24" style={{'width': '22px', 'height': '24px', 'position': 'relative'}}><canvas width="22" height="24" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                       {/* /HEXAGON */}
                     </div>
                     {/* /USER AVATAR BORDER */}
                 
                     {/* USER AVATAR CONTENT */}
                     <div className="user-avatar-content">
                       {/* HEXAGON */}
                       <div className="hexagon-image-18-20" data-src="/img/avatar/22.jpg" style={{'width': '18px', 'height': '20px', 'position': 'relative'}}><canvas width="18" height="20" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                       {/* /HEXAGON */}
                     </div>
                     {/* /USER AVATAR CONTENT */}
                   </div>
                   {/* /USER AVATAR */}
         
                   {/* USER AVATAR */}
                   <div className="user-avatar micro no-stats">
                     {/* USER AVATAR BORDER */}
                     <div className="user-avatar-border">
                       {/* HEXAGON */}
                       <div className="hexagon-22-24" style={{'width': '22px', 'height': '24px', 'position': 'relative'}}><canvas width="22" height="24" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                       {/* /HEXAGON */}
                     </div>
                     {/* /USER AVATAR BORDER */}
                 
                     {/* USER AVATAR CONTENT */}
                     <div className="user-avatar-content">
                       {/* HEXAGON */}
                       <div className="hexagon-image-18-20" data-src="/img/avatar/10.jpg" style={{'width': '18px', 'height': '20px', 'position': 'relative'}}><canvas width="18" height="20" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                       {/* /HEXAGON */}
                     </div>
                     {/* /USER AVATAR CONTENT */}
                   </div>
                   {/* /USER AVATAR */}
         
                   {/* USER AVATAR */}
                   <div className="user-avatar micro no-stats">
                     {/* USER AVATAR BORDER */}
                     <div className="user-avatar-border">
                       {/* HEXAGON */}
                       <div className="hexagon-22-24" style={{'width': '22px', 'height': '24px', 'position': 'relative'}}><canvas width="22" height="24" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                       {/* /HEXAGON */}
                     </div>
                     {/* /USER AVATAR BORDER */}
                 
                     {/* USER AVATAR CONTENT */}
                     <div className="user-avatar-content">
                       {/* HEXAGON */}
                       <div className="hexagon-image-18-20" data-src="/img/avatar/08.jpg" style={{'width': '18px', 'height': '20px', 'position': 'relative'}}><canvas width="18" height="20" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                       {/* /HEXAGON */}
                     </div>
                     {/* /USER AVATAR CONTENT */}
                   </div>
                   {/* /USER AVATAR */}
                 </div>
                 {/* /META LINE LIST */}
         
                 {/* META LINE TEXT */}
                 <p className="meta-line-text">19 Participants</p>
                 {/* /META LINE TEXT */}
               </div>
               {/* /META LINE */}
             </div>
             {/* /CONTENT ACTION */}
         
             {/* CONTENT ACTION */}
             <div className="content-action">
               {/* META LINE */}
               <div className="meta-line">
                 {/* META LINE LINK */}
                 <p className="meta-line-link">2 Comments</p>
                 {/* /META LINE LINK */}
               </div>
               {/* /META LINE */}
         
               {/* META LINE */}
               <div className="meta-line">
                 {/* META LINE TEXT */}
                 <p className="meta-line-text">0 Shares</p>
                 {/* /META LINE TEXT */}
               </div>
               {/* /META LINE */}
             </div>
             {/* /CONTENT ACTION */}
           </div>
           {/* /CONTENT ACTIONS */}
         </div>
         {/* /WIDGET BOX STATUS CONTENT */}
       </div>
       {/* /WIDGET BOX STATUS */}
   
       {/* POST OPTIONS */}
       <div className="post-options">
         {/* POST OPTION WRAP */}
         <div className="post-option-wrap" style={{position: 'relative'}}>
           {/* POST OPTION */}
           <div className="post-option reaction-options-dropdown-trigger">
             {/* POST OPTION ICON */}
             <svg className="post-option-icon icon-thumbs-up">
               <use xlinkHref="#svg-thumbs-up"></use>
             </svg>
             {/* /POST OPTION ICON */}
   
             {/* POST OPTION TEXT */}
             <p className="post-option-text">React!</p>
             {/* /POST OPTION TEXT */}
           </div>
           {/* /POST OPTION */}
   
           {/* REACTION OPTIONS */}
           <div className="reaction-options reaction-options-dropdown" style={{'position': 'absolute', 'zIndex': '9999', 'bottom': '54px', 'left': '-16px', 'opacity': '0', 'visibility': 'hidden', 'transform': 'translate(0px, 20px); transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out'}}>
             {/* REACTION OPTION */}
             <div className="reaction-option text-tooltip-tft" data-title="Like" style={{position: 'relative'}}>
               {/* REACTION OPTION IMAGE */}
               <img className="reaction-option-image" src="/img/reaction/like.png" alt="reaction-like" />
               {/* /REACTION OPTION IMAGE */}
             <div className="xm-tooltip" style={{'whiteSpace': 'nowrap', 'position': 'absolute', 'zIndex': '99999', 'top': '-28px', 'left': '50%', 'marginLeft': '-22px', 'opacity': '0', 'visibility': 'hidden', 'transform': 'translate(0px, 10px); transition: 0.3s ease-in-out'}}><p className="xm-tooltip-text">Like</p></div></div>
             {/* /REACTION OPTION */}
   
             {/* REACTION OPTION */}
             <div className="reaction-option text-tooltip-tft" data-title="Love" style={{position: 'relative'}}>
               {/* REACTION OPTION IMAGE */}
               <img className="reaction-option-image" src="/img/reaction/love.png" alt="reaction-love" />
               {/* /REACTION OPTION IMAGE */}
             <div className="xm-tooltip" style={{'whiteSpace': 'nowrap', 'position': 'absolute', 'zIndex': '99999', 'top': '-28px', 'left': '50%', 'marginLeft': '-23.5px', 'opacity': '0', 'visibility': 'hidden', 'transform': 'translate(0px, 10px); transition: 0.3s ease-in-out'}}><p className="xm-tooltip-text">Love</p></div></div>
             {/* /REACTION OPTION */}
   
             {/* REACTION OPTION */}
             <div className="reaction-option text-tooltip-tft" data-title="Dislike" style={{position: 'relative'}}>
               {/* REACTION OPTION IMAGE */}
               <img className="reaction-option-image" src="/img/reaction/dislike.png" alt="reaction-dislike" />
               {/* /REACTION OPTION IMAGE */}
             <div className="xm-tooltip" style={{'whiteSpace': 'nowrap', 'position': 'absolute', 'zIndex': '99999', 'top': '-28px', 'left': '50%', 'marginLeft': '-28px', 'opacity': '0', 'visibility': 'hidden', 'transform': 'translate(0px, 10px); transition: 0.3s ease-in-out'}}><p className="xm-tooltip-text">Dislike</p></div></div>
             {/* /REACTION OPTION */}
   
             {/* REACTION OPTION */}
             <div className="reaction-option text-tooltip-tft" data-title="Happy" style={{position: 'relative'}}>
               {/* REACTION OPTION IMAGE */}
               <img className="reaction-option-image" src="/img/reaction/happy.png" alt="reaction-happy" />
               {/* /REACTION OPTION IMAGE */}
             <div className="xm-tooltip" style={{'whiteSpace': 'nowrap', 'position': 'absolute', 'zIndex': '99999', 'top': '-28px', 'left': '50%', 'marginLeft': '-27.5px', 'opacity': '0', 'visibility': 'hidden', 'transform': 'translate(0px, 10px); transition: 0.3s ease-in-out'}}><p className="xm-tooltip-text">Happy</p></div></div>
             {/* /REACTION OPTION */}
   
             {/* REACTION OPTION */}
             <div className="reaction-option text-tooltip-tft" data-title="Funny" style={{position: 'relative'}}>
               {/* REACTION OPTION IMAGE */}
               <img className="reaction-option-image" src="/img/reaction/funny.png" alt="reaction-funny" />
               {/* /REACTION OPTION IMAGE */}
             <div className="xm-tooltip" style={{'whiteSpace': 'nowrap', 'position': 'absolute', 'zIndex': '99999', 'top': '-28px', 'left': '50%', 'marginLeft': '-27px', 'opacity': '0', 'visibility': 'hidden', 'transform': 'translate(0px, 10px); transition: 0.3s ease-in-out'}}><p className="xm-tooltip-text">Funny</p></div></div>
             {/* /REACTION OPTION */}
   
             {/* REACTION OPTION */}
             <div className="reaction-option text-tooltip-tft" data-title="Wow" style={{position: 'relative'}}>
               {/* REACTION OPTION IMAGE */}
               <img className="reaction-option-image" src="/img/reaction/wow.png" alt="reaction-wow" />
               {/* /REACTION OPTION IMAGE */}
             <div className="xm-tooltip" style={{'whiteSpace': 'nowrap', 'position': 'absolute', 'zIndex': '99999', 'top': '-28px', 'left': '50%', 'marginLeft': '-24px', 'opacity': '0', 'visibility': 'hidden', 'transform': 'translate(0px, 10px); transition: 0.3s ease-in-out'}}><p className="xm-tooltip-text">Wow</p></div></div>
             {/* /REACTION OPTION */}
   
             {/* REACTION OPTION */}
             <div className="reaction-option text-tooltip-tft" data-title="Angry" style={{position: 'relative'}}>
               {/* REACTION OPTION IMAGE */}
               <img className="reaction-option-image" src="/img/reaction/angry.png" alt="reaction-angry" />
               {/* /REACTION OPTION IMAGE */}
             <div className="xm-tooltip" style={{'whiteSpace': 'nowrap', 'position': 'absolute', 'zIndex': '99999', 'top': '-28px', 'left': '50%', 'marginLeft': '-26.5px', 'opacity': '0', 'visibility': 'hidden', 'transform': 'translate(0px, 10px); transition: 0.3s ease-in-out'}}><p className="xm-tooltip-text">Angry</p></div></div>
             {/* /REACTION OPTION */}
   
             {/* REACTION OPTION */}
             <div className="reaction-option text-tooltip-tft" data-title="Sad" style={{position: 'relative'}}>
               {/* REACTION OPTION IMAGE */}
               <img className="reaction-option-image" src="/img/reaction/sad.png" alt="reaction-sad" />
               {/* /REACTION OPTION IMAGE */}
             <div className="xm-tooltip" style={{'whiteSpace': 'nowrap', 'position': 'absolute', 'zIndex': '99999', 'top': '-28px', 'left': '50%', 'marginLeft': '-21.5px', 'opacity': '0', 'visibility': 'hidden', 'transform': 'translate(0px, 10px); transition: 0.3s ease-in-out'}}><p className="xm-tooltip-text">Sad</p></div></div>
             {/* /REACTION OPTION */}
           </div>
           {/* /REACTION OPTIONS */}
         </div>
         {/* /POST OPTION WRAP */}
   
         {/* POST OPTION */}
         <div className="post-option">
           {/* POST OPTION ICON */}
           <svg className="post-option-icon icon-comment">
             <use xlinkHref="#svg-comment"></use>
           </svg>
           {/* /POST OPTION ICON */}
   
           {/* POST OPTION TEXT */}
           <p className="post-option-text">Comment</p>
           {/* /POST OPTION TEXT */}
         </div>
         {/* /POST OPTION */}
   
         {/* POST OPTION */}
         <div className="post-option">
           {/* POST OPTION ICON */}
           <svg className="post-option-icon icon-share">
             <use xlinkHref="#svg-share"></use>
           </svg>
           {/* /POST OPTION ICON */}
   
           {/* POST OPTION TEXT */}
           <p className="post-option-text">Share</p>
           {/* /POST OPTION TEXT */}
         </div>
         {/* /POST OPTION */}
       </div>
       {/* /POST OPTIONS */}
     </div>




   
     {/* WIDGET BOX */}
     <div className="widget-box no-padding">
       {/* WIDGET BOX SETTINGS */}
       <div className="widget-box-settings">
         {/* POST SETTINGS WRAP */}
         <div className="post-settings-wrap" style={{position: 'relative'}}>
           {/* POST SETTINGS */}
           <div className="post-settings widget-box-post-settings-dropdown-trigger">
             {/* POST SETTINGS ICON */}
             <svg className="post-settings-icon icon-more-dots">
               <use xlinkHref="#svg-more-dots"></use>
             </svg>
             {/* /POST SETTINGS ICON */}
           </div>
           {/* /POST SETTINGS */}
   
           {/* SIMPLE DROPDOWN */}
           <div className="simple-dropdown widget-box-post-settings-dropdown" style={{position: 'absolute', 'zIndex': '9999', 'top': '30px', 'right': '9px', 'opacity': '0', 'visibility': 'hidden', 'transform': 'translate(0px, -20px)', 'transition': 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out'}}>
             {/* SIMPLE DROPDOWN LINK */}
             <p className="simple-dropdown-link">Edit Post</p>
             {/* /SIMPLE DROPDOWN LINK */}
   
             {/* SIMPLE DROPDOWN LINK */}
             <p className="simple-dropdown-link">Delete Post</p>
             {/* /SIMPLE DROPDOWN LINK */}
   
             {/* SIMPLE DROPDOWN LINK */}
             <p className="simple-dropdown-link">Make it Featured</p>
             {/* /SIMPLE DROPDOWN LINK */}
   
             {/* SIMPLE DROPDOWN LINK */}
             <p className="simple-dropdown-link">Report Post</p>
             {/* /SIMPLE DROPDOWN LINK */}
   
             {/* SIMPLE DROPDOWN LINK */}
             <p className="simple-dropdown-link">Report Author</p>
             {/* /SIMPLE DROPDOWN LINK */}
           </div>
           {/* /SIMPLE DROPDOWN */}
         </div>
         {/* /POST SETTINGS WRAP */}
       </div>
       {/* /WIDGET BOX SETTINGS */}
       
       {/* WIDGET BOX STATUS */}
       <div className="widget-box-status">
         {/* WIDGET BOX STATUS CONTENT */}
         <div className="widget-box-status-content">
           {/* USER STATUS */}
           <div className="user-status">
             {/* USER STATUS AVATAR */}
             <a className="user-status-avatar" href="profile-timeline.html">
               {/* USER AVATAR */}
               <div className="user-avatar small no-outline">
                 {/* USER AVATAR CONTENT */}
                 <div className="user-avatar-content">
                   {/* HEXAGON */}
                   <div className="hexagon-image-30-32" data-src="/img/avatar/07.jpg" style={{'width': '30px', 'height': '32px', 'position': 'relative'}}><canvas width="30" height="32" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                   {/* /HEXAGON */}
                 </div>
                 {/* /USER AVATAR CONTENT */}
             
                 {/* USER AVATAR PROGRESS */}
                 <div className="user-avatar-progress">
                   {/* HEXAGON */}
                   <div className="hexagon-progress-40-44" style={{'width': '40px', 'height': '44px', 'position': 'relative'}}><canvas width="40" height="44" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                   {/* /HEXAGON */}
                 </div>
                 {/* /USER AVATAR PROGRESS */}
             
                 {/* USER AVATAR PROGRESS BORDER */}
                 <div className="user-avatar-progress-border">
                   {/* HEXAGON */}
                   <div className="hexagon-border-40-44" style={{'width': '40px', 'height': '44px', 'position': 'relative'}}><canvas width="40" height="44" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                   {/* /HEXAGON */}
                 </div>
                 {/* /USER AVATAR PROGRESS BORDER */}
             
                 {/* USER AVATAR BADGE */}
                 <div className="user-avatar-badge">
                   {/* USER AVATAR BADGE BORDER */}
                   <div className="user-avatar-badge-border">
                     {/* HEXAGON */}
                     <div className="hexagon-22-24" style={{'width': '22px', 'height': '24px', 'position': 'relative'}}><canvas width="22" height="24" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                     {/* /HEXAGON */}
                   </div>
                   {/* /USER AVATAR BADGE BORDER */}
             
                   {/* USER AVATAR BADGE CONTENT */}
                   <div className="user-avatar-badge-content">
                     {/* HEXAGON */}
                     <div className="hexagon-dark-16-18" style={{'width': '16px', 'height': '18px', 'position': 'relative'}}><canvas width="16" height="18" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                     {/* /HEXAGON */}
                   </div>
                   {/* /USER AVATAR BADGE CONTENT */}
             
                   {/* USER AVATAR BADGE TEXT */}
                   <p className="user-avatar-badge-text">26</p>
                   {/* /USER AVATAR BADGE TEXT */}
                 </div>
                 {/* /USER AVATAR BADGE */}
               </div>
               {/* /USER AVATAR */}
             </a>
             {/* /USER STATUS AVATAR */}
         
             {/* USER STATUS TITLE */}
             <p className="user-status-title medium"><a className="bold" href="profile-timeline.html">Sarah Diamond</a> created a <span className="bold">poll</span></p>
             {/* /USER STATUS TITLE */}
         
             {/* USER STATUS TEXT */}
             <p className="user-status-text small">9 minutes ago</p>
             {/* /USER STATUS TEXT */}
           </div>
           {/* /USER STATUS */}
   
           {/* WIDGET BOX STATUS TEXT */}
           <p className="widget-box-status-text">I've created a poll to ask all of you what you would like to see more in my upcoming videos! It will only take a couple of seconds...thanks to all in advance!!</p>
           {/* /WIDGET BOX STATUS TEXT */}
   
           {/* POLL BOX */}
           <div className="poll-box">
             {/* POLL TITLE */}
             <p className="poll-title">What do you wanna see in my upcoming videos?</p>
             {/* /POLL TITLE */}
         
             {/* POLL TEXT */}
             <p className="poll-text">Poll ends in 5 days</p>
             {/* /POLL TEXT */}
         
             {/* POLL RESULTS */}
             <div className="poll-results">
               {/* POLL RESULT */}
               <div className="poll-result">
                 {/* PROGRESS STAT */}
                 <div className="progress-stat">
                   {/* BAR PROGRESS WRAP */}
                   <div className="bar-progress-wrap medium">
                     {/* BAR PROGRESS INFO */}
                     <p className="bar-progress-info medium negative regular">Walkthroughs<span className="bar-progress-text no-space">62<span className="bar-progress-unit">%</span></span></p>
                     {/* /BAR PROGRESS INFO */}
                   </div>
                   {/* /BAR PROGRESS WRAP */}
               
                   {/* PROGRESS STAT BAR */}
                   <div id="poll-result-1" className="progress-stat-bar" style={{'width': '472px', 'height': '4px', 'position': 'relative'}}><canvas width="472" height="4" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas><canvas width="472" height="4" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                   {/* /PROGRESS STAT BAR */}
                 </div>
                 {/* /PROGRESS STAT */}
         
                 {/* META LINE */}
                 <div className="meta-line">
                   {/* META LINE LIST */}
                   <div className="meta-line-list user-avatar-list">
                     {/* USER AVATAR */}
                     <div className="user-avatar micro no-stats">
                       {/* USER AVATAR BORDER */}
                       <div className="user-avatar-border">
                         {/* HEXAGON */}
                         <div className="hexagon-22-24" style={{'width': '22px', 'height': '24px', 'position': 'relative'}}><canvas width="22" height="24" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                         {/* /HEXAGON */}
                       </div>
                       {/* /USER AVATAR BORDER */}
                   
                       {/* USER AVATAR CONTENT */}
                       <div className="user-avatar-content">
                         {/* HEXAGON */}
                         <div className="hexagon-image-18-20" data-src="/img/avatar/10.jpg" style={{'width': '18px', 'height': '20px', 'position': 'relative'}}><canvas width="18" height="20" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                         {/* /HEXAGON */}
                       </div>
                       {/* /USER AVATAR CONTENT */}
                     </div>
                     {/* /USER AVATAR */}
           
                     {/* USER AVATAR */}
                     <div className="user-avatar micro no-stats">
                       {/* USER AVATAR BORDER */}
                       <div className="user-avatar-border">
                         {/* HEXAGON */}
                         <div className="hexagon-22-24" style={{'width': '22px', 'height': '24px', 'position': 'relative'}}><canvas width="22" height="24" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                         {/* /HEXAGON */}
                       </div>
                       {/* /USER AVATAR BORDER */}
                   
                       {/* USER AVATAR CONTENT */}
                       <div className="user-avatar-content">
                         {/* HEXAGON */}
                         <div className="hexagon-image-18-20" data-src="/img/avatar/05.jpg" style={{'width': '18px', 'height': '20px', 'position': 'relative'}}><canvas width="18" height="20" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                         {/* /HEXAGON */}
                       </div>
                       {/* /USER AVATAR CONTENT */}
                     </div>
                     {/* /USER AVATAR */}
           
                     {/* USER AVATAR */}
                     <div className="user-avatar micro no-stats">
                       {/* USER AVATAR BORDER */}
                       <div className="user-avatar-border">
                         {/* HEXAGON */}
                         <div className="hexagon-22-24" style={{'width': '22px', 'height': '24px', 'position': 'relative'}}><canvas width="22" height="24" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                         {/* /HEXAGON */}
                       </div>
                       {/* /USER AVATAR BORDER */}
                   
                       {/* USER AVATAR CONTENT */}
                       <div className="user-avatar-content">
                         {/* HEXAGON */}
                         <div className="hexagon-image-18-20" data-src="/img/avatar/09.jpg" style={{'width': '18px', 'height': '20px', 'position': 'relative'}}><canvas width="18" height="20" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                         {/* /HEXAGON */}
                       </div>
                       {/* /USER AVATAR CONTENT */}
                     </div>
                     {/* /USER AVATAR */}
           
                     {/* USER AVATAR */}
                     <div className="user-avatar micro no-stats">
                       {/* USER AVATAR BORDER */}
                       <div className="user-avatar-border">
                         {/* HEXAGON */}
                         <div className="hexagon-22-24" style={{'width': '22px', 'height': '24px', 'position': 'relative'}}><canvas width="22" height="24" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                         {/* /HEXAGON */}
                       </div>
                       {/* /USER AVATAR BORDER */}
                   
                       {/* USER AVATAR CONTENT */}
                       <div className="user-avatar-content">
                         {/* HEXAGON */}
                         <div className="hexagon-image-18-20" data-src="/img/avatar/08.jpg" style={{'width': '18px', 'height': '20px', 'position': 'relative'}}><canvas width="18" height="20" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                         {/* /HEXAGON */}
                       </div>
                       {/* /USER AVATAR CONTENT */}
                     </div>
                     {/* /USER AVATAR */}
           
                     {/* USER AVATAR */}
                     <div className="user-avatar micro no-stats">
                       {/* USER AVATAR BORDER */}
                       <div className="user-avatar-border">
                         {/* HEXAGON */}
                         <div className="hexagon-22-24" style={{'width': '22px', 'height': '24px', 'position': 'relative'}}><canvas width="22" height="24" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                         {/* /HEXAGON */}
                       </div>
                       {/* /USER AVATAR BORDER */}
                   
                       {/* USER AVATAR CONTENT */}
                       <div className="user-avatar-content">
                         {/* HEXAGON */}
                         <div className="hexagon-image-18-20" data-src="/img/avatar/12.jpg" style={{'width': '18px', 'height': '20px', 'position': 'relative'}}><canvas width="18" height="20" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                         {/* /HEXAGON */}
                       </div>
                       {/* /USER AVATAR CONTENT */}
                     </div>
                     {/* /USER AVATAR */}
         
                     {/* USER AVATAR */}
                     <div className="user-avatar micro no-stats">
                       {/* USER AVATAR BORDER */}
                       <div className="user-avatar-border">
                         {/* HEXAGON */}
                         <div className="hexagon-22-24" style={{'width': '22px', 'height': '24px', 'position': 'relative'}}><canvas width="22" height="24" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                         {/* /HEXAGON */}
                       </div>
                       {/* /USER AVATAR BORDER */}
                   
                       {/* USER AVATAR CONTENT */}
                       <div className="user-avatar-content">
                         {/* HEXAGON */}
                         <div className="hexagon-image-18-20" data-src="/img/avatar/16.jpg" style={{'width': '18px', 'height': '20px', 'position': 'relative'}}><canvas width="18" height="20" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                         {/* /HEXAGON */}
                       </div>
                       {/* /USER AVATAR CONTENT */}
                     </div>
                     {/* /USER AVATAR */}
         
                     {/* USER AVATAR */}
                     <div className="user-avatar micro no-stats">
                       {/* USER AVATAR BORDER */}
                       <div className="user-avatar-border">
                         {/* HEXAGON */}
                         <div className="hexagon-22-24" style={{'width': '22px', 'height': '24px', 'position': 'relative'}}><canvas width="22" height="24" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                         {/* /HEXAGON */}
                       </div>
                       {/* /USER AVATAR BORDER */}
                   
                       {/* USER AVATAR CONTENT */}
                       <div className="user-avatar-content">
                         {/* HEXAGON */}
                         <div className="hexagon-image-18-20" data-src="/img/avatar/06.jpg" style={{'width': '18px', 'height': '20px', 'position': 'relative'}}><canvas width="18" height="20" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                         {/* /HEXAGON */}
                       </div>
                       {/* /USER AVATAR CONTENT */}
                     </div>
                     {/* /USER AVATAR */}
         
                     {/* USER AVATAR */}
                     <div className="user-avatar micro no-stats">
                       {/* USER AVATAR BORDER */}
                       <div className="user-avatar-border">
                         {/* HEXAGON */}
                         <div className="hexagon-22-24" style={{'width': '22px', 'height': '24px', 'position': 'relative'}}><canvas width="22" height="24" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                         {/* /HEXAGON */}
                       </div>
                       {/* /USER AVATAR BORDER */}
                   
                       {/* USER AVATAR CONTENT */}
                       <div className="user-avatar-content">
                         {/* HEXAGON */}
                         <div className="hexagon-image-18-20" data-src="/img/avatar/13.jpg" style={{'width': '18px', 'height': '20px', 'position': 'relative'}}><canvas width="18" height="20" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                         {/* /HEXAGON */}
                       </div>
                       {/* /USER AVATAR CONTENT */}
                     </div>
                     {/* /USER AVATAR */}
         
                     {/* USER AVATAR */}
                     <div className="user-avatar micro no-stats">
                       {/* USER AVATAR BORDER */}
                       <div className="user-avatar-border">
                         {/* HEXAGON */}
                         <div className="hexagon-22-24" style={{'width': '22px', 'height': '24px', 'position': 'relative'}}><canvas width="22" height="24" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                         {/* /HEXAGON */}
                       </div>
                       {/* /USER AVATAR BORDER */}
                   
                       {/* USER AVATAR CONTENT */}
                       <div className="user-avatar-content">
                         {/* HEXAGON */}
                         <div className="hexagon-image-18-20" data-src="/img/avatar/11.jpg" style={{'width': '18px', 'height': '20px', 'position': 'relative'}}><canvas width="18" height="20" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                         {/* /HEXAGON */}
                       </div>
                       {/* /USER AVATAR CONTENT */}
                     </div>
                     {/* /USER AVATAR */}
         
                     {/* USER AVATAR */}
                     <div className="user-avatar micro no-stats">
                       {/* USER AVATAR BORDER */}
                       <div className="user-avatar-border">
                         {/* HEXAGON */}
                         <div className="hexagon-22-24" style={{'width': '22px', 'height': '24px', 'position': 'relative'}}><canvas width="22" height="24" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                         {/* /HEXAGON */}
                       </div>
                       {/* /USER AVATAR BORDER */}
                   
                       {/* USER AVATAR CONTENT */}
                       <div className="user-avatar-content">
                         {/* HEXAGON */}
                         <div className="hexagon-image-18-20" data-src="/img/avatar/30.jpg" style={{'width': '18px', 'height': '20px', 'position': 'relative'}}><canvas width="18" height="20" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                         {/* /HEXAGON */}
                       </div>
                       {/* /USER AVATAR CONTENT */}
                     </div>
                     {/* /USER AVATAR */}
         
                     {/* USER AVATAR */}
                     <div className="user-avatar micro no-stats">
                       {/* USER AVATAR BORDER */}
                       <div className="user-avatar-border">
                         {/* HEXAGON */}
                         <div className="hexagon-22-24" style={{'width': '22px', 'height': '24px', 'position': 'relative'}}><canvas width="22" height="24" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                         {/* /HEXAGON */}
                       </div>
                       {/* /USER AVATAR BORDER */}
                   
                       {/* USER AVATAR CONTENT */}
                       <div className="user-avatar-content">
                         {/* HEXAGON */}
                         <div className="hexagon-image-18-20" data-src="/img/avatar/03.jpg" style={{'width': '18px', 'height': '20px', 'position': 'relative'}}><canvas width="18" height="20" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                         {/* /HEXAGON */}
                       </div>
                       {/* /USER AVATAR CONTENT */}
                     </div>
                     {/* /USER AVATAR */}
         
                     {/* USER AVATAR */}
                     <div className="user-avatar micro no-stats">
                       {/* USER AVATAR BORDER */}
                       <div className="user-avatar-border">
                         {/* HEXAGON */}
                         <div className="hexagon-22-24" style={{'width': '22px', 'height': '24px', 'position': 'relative'}}><canvas width="22" height="24" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                         {/* /HEXAGON */}
                       </div>
                       {/* /USER AVATAR BORDER */}
                   
                       {/* USER AVATAR CONTENT */}
                       <div className="user-avatar-content">
                         {/* HEXAGON */}
                         <div className="hexagon-image-18-20" data-src="/img/avatar/04.jpg" style={{'width': '18px', 'height': '20px', 'position': 'relative'}}><canvas width="18" height="20" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                         {/* /HEXAGON */}
                       </div>
                       {/* /USER AVATAR CONTENT */}
                     </div>
                     {/* /USER AVATAR */}
                   </div>
                   {/* /META LINE LIST */}
           
                   {/* META LINE TEXT */}
                   <p className="meta-line-text">12 Votes</p>
                   {/* /META LINE TEXT */}
                 </div>
                 {/* /META LINE */}
               </div>
               {/* /POLL RESULT */}
         
               {/* POLL RESULT */}
               <div className="poll-result">
                 {/* PROGRESS STAT */}
                 <div className="progress-stat">
                   {/* BAR PROGRESS WRAP */}
                   <div className="bar-progress-wrap medium">
                     {/* BAR PROGRESS INFO */}
                     <p className="bar-progress-info medium negative regular">Retro Games<span className="bar-progress-text no-space">27<span className="bar-progress-unit">%</span></span></p>
                     {/* /BAR PROGRESS INFO */}
                   </div>
                   {/* /BAR PROGRESS WRAP */}
               
                   {/* PROGRESS STAT BAR */}
                   <div id="poll-result-2" className="progress-stat-bar" style={{'width': '472px', 'height': '4px', 'position': 'relative'}}><canvas width="472" height="4" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas><canvas width="472" height="4" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                   {/* /PROGRESS STAT BAR */}
                 </div>
                 {/* /PROGRESS STAT */}
         
                 {/* META LINE */}
                 <div className="meta-line">
                   {/* META LINE LIST */}
                   <div className="meta-line-list user-avatar-list">
                     {/* USER AVATAR */}
                     <div className="user-avatar micro no-stats">
                       {/* USER AVATAR BORDER */}
                       <div className="user-avatar-border">
                         {/* HEXAGON */}
                         <div className="hexagon-22-24" style={{'width': '22px', 'height': '24px', 'position': 'relative'}}><canvas width="22" height="24" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                         {/* /HEXAGON */}
                       </div>
                       {/* /USER AVATAR BORDER */}
                   
                       {/* USER AVATAR CONTENT */}
                       <div className="user-avatar-content">
                         {/* HEXAGON */}
                         <div className="hexagon-image-18-20" data-src="/img/avatar/11.jpg" style={{'width': '18px', 'height': '20px', 'position': 'relative'}}><canvas width="18" height="20" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                         {/* /HEXAGON */}
                       </div>
                       {/* /USER AVATAR CONTENT */}
                     </div>
                     {/* /USER AVATAR */}
           
                     {/* USER AVATAR */}
                     <div className="user-avatar micro no-stats">
                       {/* USER AVATAR BORDER */}
                       <div className="user-avatar-border">
                         {/* HEXAGON */}
                         <div className="hexagon-22-24" style={{'width': '22px', 'height': '24px', 'position': 'relative'}}><canvas width="22" height="24" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                         {/* /HEXAGON */}
                       </div>
                       {/* /USER AVATAR BORDER */}
                   
                       {/* USER AVATAR CONTENT */}
                       <div className="user-avatar-content">
                         {/* HEXAGON */}
                         <div className="hexagon-image-18-20" data-src="/img/avatar/22.jpg" style={{'width': '18px', 'height': '20px', 'position': 'relative'}}><canvas width="18" height="20" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                         {/* /HEXAGON */}
                       </div>
                       {/* /USER AVATAR CONTENT */}
                     </div>
                     {/* /USER AVATAR */}
           
                     {/* USER AVATAR */}
                     <div className="user-avatar micro no-stats">
                       {/* USER AVATAR BORDER */}
                       <div className="user-avatar-border">
                         {/* HEXAGON */}
                         <div className="hexagon-22-24" style={{'width': '22px', 'height': '24px', 'position': 'relative'}}><canvas width="22" height="24" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                         {/* /HEXAGON */}
                       </div>
                       {/* /USER AVATAR BORDER */}
                   
                       {/* USER AVATAR CONTENT */}
                       <div className="user-avatar-content">
                         {/* HEXAGON */}
                         <div className="hexagon-image-18-20" data-src="/img/avatar/21.jpg" style={{'width': '18px', 'height': '20px', 'position': 'relative'}}><canvas width="18" height="20" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                         {/* /HEXAGON */}
                       </div>
                       {/* /USER AVATAR CONTENT */}
                     </div>
                     {/* /USER AVATAR */}
           
                     {/* USER AVATAR */}
                     <div className="user-avatar micro no-stats">
                       {/* USER AVATAR BORDER */}
                       <div className="user-avatar-border">
                         {/* HEXAGON */}
                         <div className="hexagon-22-24" style={{'width': '22px', 'height': '24px', 'position': 'relative'}}><canvas width="22" height="24" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                         {/* /HEXAGON */}
                       </div>
                       {/* /USER AVATAR BORDER */}
                   
                       {/* USER AVATAR CONTENT */}
                       <div className="user-avatar-content">
                         {/* HEXAGON */}
                         <div className="hexagon-image-18-20" data-src="/img/avatar/19.jpg" style={{'width': '18px', 'height': '20px', 'position': 'relative'}}><canvas width="18" height="20" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                         {/* /HEXAGON */}
                       </div>
                       {/* /USER AVATAR CONTENT */}
                     </div>
                     {/* /USER AVATAR */}
           
                     {/* USER AVATAR */}
                     <div className="user-avatar micro no-stats">
                       {/* USER AVATAR BORDER */}
                       <div className="user-avatar-border">
                         {/* HEXAGON */}
                         <div className="hexagon-22-24" style={{'width': '22px', 'height': '24px', 'position': 'relative'}}><canvas width="22" height="24" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                         {/* /HEXAGON */}
                       </div>
                       {/* /USER AVATAR BORDER */}
                   
                       {/* USER AVATAR CONTENT */}
                       <div className="user-avatar-content">
                         {/* HEXAGON */}
                         <div className="hexagon-image-18-20" data-src="/img/avatar/14.jpg" style={{'width': '18px', 'height': '20px', 'position': 'relative'}}><canvas width="18" height="20" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                         {/* /HEXAGON */}
                       </div>
                       {/* /USER AVATAR CONTENT */}
                     </div>
                     {/* /USER AVATAR */}
         
                     {/* USER AVATAR */}
                     <div className="user-avatar micro no-stats">
                       {/* USER AVATAR BORDER */}
                       <div className="user-avatar-border">
                         {/* HEXAGON */}
                         <div className="hexagon-22-24" style={{'width': '22px', 'height': '24px', 'position': 'relative'}}><canvas width="22" height="24" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                         {/* /HEXAGON */}
                       </div>
                       {/* /USER AVATAR BORDER */}
                   
                       {/* USER AVATAR CONTENT */}
                       <div className="user-avatar-content">
                         {/* HEXAGON */}
                         <div className="hexagon-image-18-20" data-src="/img/avatar/15.jpg" style={{'width': '18px', 'height': '20px', 'position': 'relative'}}><canvas width="18" height="20" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                         {/* /HEXAGON */}
                       </div>
                       {/* /USER AVATAR CONTENT */}
                     </div>
                     {/* /USER AVATAR */}
         
                     {/* USER AVATAR */}
                     <div className="user-avatar micro no-stats">
                       {/* USER AVATAR BORDER */}
                       <div className="user-avatar-border">
                         {/* HEXAGON */}
                         <div className="hexagon-22-24" style={{'width': '22px', 'height': '24px', 'position': 'relative'}}><canvas width="22" height="24" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                         {/* /HEXAGON */}
                       </div>
                       {/* /USER AVATAR BORDER */}
                   
                       {/* USER AVATAR CONTENT */}
                       <div className="user-avatar-content">
                         {/* HEXAGON */}
                         <div className="hexagon-image-18-20" data-src="/img/avatar/07.jpg" style={{'width': '18px', 'height': '20px', 'position': 'relative'}}><canvas width="18" height="20" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                         {/* /HEXAGON */}
                       </div>
                       {/* /USER AVATAR CONTENT */}
                     </div>
                     {/* /USER AVATAR */}
                   </div>
                   {/* /META LINE LIST */}
           
                   {/* META LINE TEXT */}
                   <p className="meta-line-text">7 Votes</p>
                   {/* /META LINE TEXT */}
                 </div>
                 {/* /META LINE */}
               </div>
               {/* /POLL RESULT */}
         
               {/* POLL RESULT */}
               <div className="poll-result">
                 {/* PROGRESS STAT */}
                 <div className="progress-stat">
                   {/* BAR PROGRESS WRAP */}
                   <div className="bar-progress-wrap medium">
                     {/* BAR PROGRESS INFO */}
                     <p className="bar-progress-info medium negative regular">Unboxings<span className="bar-progress-text no-space">11<span className="bar-progress-unit">%</span></span></p>
                     {/* /BAR PROGRESS INFO */}
                   </div>
                   {/* /BAR PROGRESS WRAP */}
               
                   {/* PROGRESS STAT BAR */}
                   <div id="poll-result-3" className="progress-stat-bar" style={{'width': '472px', 'height': '4px', 'position': 'relative'}}><canvas width="472" height="4" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas><canvas width="472" height="4" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                   {/* /PROGRESS STAT BAR */}
                 </div>
                 {/* /PROGRESS STAT */}
         
                 {/* META LINE */}
                 <div className="meta-line">
                   {/* META LINE LIST */}
                   <div className="meta-line-list user-avatar-list">
                     {/* USER AVATAR */}
                     <div className="user-avatar micro no-stats">
                       {/* USER AVATAR BORDER */}
                       <div className="user-avatar-border">
                         {/* HEXAGON */}
                         <div className="hexagon-22-24" style={{'width': '22px', 'height': '24px', 'position': 'relative'}}><canvas width="22" height="24" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                         {/* /HEXAGON */}
                       </div>
                       {/* /USER AVATAR BORDER */}
                   
                       {/* USER AVATAR CONTENT */}
                       <div className="user-avatar-content">
                         {/* HEXAGON */}
                         <div className="hexagon-image-18-20" data-src="/img/avatar/18.jpg" style={{'width': '18px', 'height': '20px', 'position': 'relative'}}><canvas width="18" height="20" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                         {/* /HEXAGON */}
                       </div>
                       {/* /USER AVATAR CONTENT */}
                     </div>
                     {/* /USER AVATAR */}
           
                     {/* USER AVATAR */}
                     <div className="user-avatar micro no-stats">
                       {/* USER AVATAR BORDER */}
                       <div className="user-avatar-border">
                         {/* HEXAGON */}
                         <div className="hexagon-22-24" style={{'width': '22px', 'height': '24px', 'position': 'relative'}}><canvas width="22" height="24" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                         {/* /HEXAGON */}
                       </div>
                       {/* /USER AVATAR BORDER */}
                   
                       {/* USER AVATAR CONTENT */}
                       <div className="user-avatar-content">
                         {/* HEXAGON */}
                         <div className="hexagon-image-18-20" data-src="/img/avatar/02.jpg" style={{'width': '18px', 'height': '20px', 'position': 'relative'}}><canvas width="18" height="20" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                         {/* /HEXAGON */}
                       </div>
                       {/* /USER AVATAR CONTENT */}
                     </div>
                     {/* /USER AVATAR */}
                   </div>
                   {/* /META LINE LIST */}
           
                   {/* META LINE TEXT */}
                   <p className="meta-line-text">2 Votes</p>
                   {/* /META LINE TEXT */}
                 </div>
                 {/* /META LINE */}
               </div>
               {/* /POLL RESULT */}
             </div>
             {/* /POLL RESULTS */}
           </div>
           {/* /POLL BOX */}
   
           {/* CONTENT ACTIONS */}
           <div className="content-actions">
             {/* CONTENT ACTION */}
             <div className="content-action">
               {/* META LINE */}
               <div className="meta-line">
                 {/* META LINE LIST */}
                 <div className="meta-line-list reaction-item-list">
                   {/* REACTION ITEM */}
                   <div className="reaction-item" style={{position: 'relative'}}>
                     {/* REACTION IMAGE */}
                     <img className="reaction-image reaction-item-dropdown-trigger" src="/img/reaction/funny.png" alt="reaction-funny" />
                     {/* /REACTION IMAGE */}
         
                     {/* SIMPLE DROPDOWN */}
                     <div className="simple-dropdown padded reaction-item-dropdown" style={{'position': 'absolute', 'zIndex': '9999', 'bottom': '38px', 'left': '-16px', 'opacity': '0', 'visibility': 'hidden', 'transform': 'translate(0px, 20px); transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out'}}>
                       {/* SIMPLE DROPDOWN TEXT */}
                       <p className="simple-dropdown-text"><img className="reaction" src="/img/reaction/funny.png" alt="reaction-funny" /> <span className="bold">Funny</span></p>
                       {/* /SIMPLE DROPDOWN TEXT */}
                     
                       {/* SIMPLE DROPDOWN TEXT */}
                       <p className="simple-dropdown-text">Matt Parker</p>
                       {/* /SIMPLE DROPDOWN TEXT */}
   
                       {/* SIMPLE DROPDOWN TEXT */}
                       <p className="simple-dropdown-text">Destroy Dex</p>
                       {/* /SIMPLE DROPDOWN TEXT */}
   
                       {/* SIMPLE DROPDOWN TEXT */}
                       <p className="simple-dropdown-text">The Green Goo</p>
                       {/* /SIMPLE DROPDOWN TEXT */}
                     </div>
                     {/* /SIMPLE DROPDOWN */}
                   </div>
                   {/* /REACTION ITEM */}
   
                   {/* REACTION ITEM */}
                   <div className="reaction-item" style={{position: 'relative'}}>
                     {/* REACTION IMAGE */}
                     <img className="reaction-image reaction-item-dropdown-trigger" src="/img/reaction/like.png" alt="reaction-like" />
                     {/* /REACTION IMAGE */}
         
                     {/* SIMPLE DROPDOWN */}
                     <div className="simple-dropdown padded reaction-item-dropdown" style={{'position': 'absolute', 'zIndex': '9999', 'bottom': '38px', 'left': '-16px', 'opacity': '0', 'visibility': 'hidden', 'transform': 'translate(0px, 20px); transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out'}}>
                       {/* SIMPLE DROPDOWN TEXT */}
                       <p className="simple-dropdown-text"><img className="reaction" src="/img/reaction/like.png" alt="reaction-like" /> <span className="bold">Like</span></p>
                       {/* /SIMPLE DROPDOWN TEXT */}
                     
                       {/* SIMPLE DROPDOWN TEXT */}
                       <p className="simple-dropdown-text">Sandra Strange</p>
                       {/* /SIMPLE DROPDOWN TEXT */}
   
                       {/* SIMPLE DROPDOWN TEXT */}
                       <p className="simple-dropdown-text">Jane Rodgers</p>
                       {/* /SIMPLE DROPDOWN TEXT */}
                     </div>
                     {/* /SIMPLE DROPDOWN */}
                   </div>
                   {/* /REACTION ITEM */}
   
                   {/* REACTION ITEM */}
                   <div className="reaction-item" style={{position: 'relative'}}>
                     {/* REACTION IMAGE */}
                     <img className="reaction-image reaction-item-dropdown-trigger" src="/img/reaction/love.png" alt="reaction-love" />
                     {/* /REACTION IMAGE */}
         
                     {/* SIMPLE DROPDOWN */}
                     <div className="simple-dropdown padded reaction-item-dropdown" style={{'position': 'absolute', 'zIndex': '9999', 'bottom': '38px', 'left': '-16px', 'opacity': '0', 'visibility': 'hidden', 'transform': 'translate(0px, 20px); transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out'}}>
                       {/* SIMPLE DROPDOWN TEXT */}
                       <p className="simple-dropdown-text"><img className="reaction" src="/img/reaction/love.png" alt="reaction-love" /> <span className="bold">Love</span></p>
                       {/* /SIMPLE DROPDOWN TEXT */}
                     
                       {/* SIMPLE DROPDOWN TEXT */}
                       <p className="simple-dropdown-text">Neko Bebop</p>
                       {/* /SIMPLE DROPDOWN TEXT */}
   
                       {/* SIMPLE DROPDOWN TEXT */}
                       <p className="simple-dropdown-text">Nick Grissom</p>
                       {/* /SIMPLE DROPDOWN TEXT */}
   
                       {/* SIMPLE DROPDOWN TEXT */}
                       <p className="simple-dropdown-text">Sarah Diamond</p>
                       {/* /SIMPLE DROPDOWN TEXT */}
   
                       {/* SIMPLE DROPDOWN TEXT */}
                       <p className="simple-dropdown-text">Jett Spiegel</p>
                       {/* /SIMPLE DROPDOWN TEXT */}
                     </div>
                     {/* /SIMPLE DROPDOWN */}
                   </div>
                   {/* /REACTION ITEM */}
                 </div>
                 {/* /META LINE LIST */}
         
                 {/* META LINE TEXT */}
                 <p className="meta-line-text">9</p>
                 {/* /META LINE TEXT */}
               </div>
               {/* /META LINE */}
         
               {/* META LINE */}
               <div className="meta-line">
                 {/* META LINE LIST */}
                 <div className="meta-line-list user-avatar-list">
                   {/* USER AVATAR */}
                   <div className="user-avatar micro no-stats">
                     {/* USER AVATAR BORDER */}
                     <div className="user-avatar-border">
                       {/* HEXAGON */}
                       <div className="hexagon-22-24" style={{'width': '22px', 'height': '24px', 'position': 'relative'}}><canvas width="22" height="24" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                       {/* /HEXAGON */}
                     </div>
                     {/* /USER AVATAR BORDER */}
                 
                     {/* USER AVATAR CONTENT */}
                     <div className="user-avatar-content">
                       {/* HEXAGON */}
                       <div className="hexagon-image-18-20" data-src="/img/avatar/09.jpg" style={{'width': '18px', 'height': '20px', 'position': 'relative'}}><canvas width="18" height="20" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                       {/* /HEXAGON */}
                     </div>
                     {/* /USER AVATAR CONTENT */}
                   </div>
                   {/* /USER AVATAR */}
         
                   {/* USER AVATAR */}
                   <div className="user-avatar micro no-stats">
                     {/* USER AVATAR BORDER */}
                     <div className="user-avatar-border">
                       {/* HEXAGON */}
                       <div className="hexagon-22-24" style={{'width': '22px', 'height': '24px', 'position': 'relative'}}><canvas width="22" height="24" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                       {/* /HEXAGON */}
                     </div>
                     {/* /USER AVATAR BORDER */}
                 
                     {/* USER AVATAR CONTENT */}
                     <div className="user-avatar-content">
                       {/* HEXAGON */}
                       <div className="hexagon-image-18-20" data-src="/img/avatar/08.jpg" style={{'width': '18px', 'height': '20px', 'position': 'relative'}}><canvas width="18" height="20" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                       {/* /HEXAGON */}
                     </div>
                     {/* /USER AVATAR CONTENT */}
                   </div>
                   {/* /USER AVATAR */}
         
                   {/* USER AVATAR */}
                   <div className="user-avatar micro no-stats">
                     {/* USER AVATAR BORDER */}
                     <div className="user-avatar-border">
                       {/* HEXAGON */}
                       <div className="hexagon-22-24" style={{'width': '22px', 'height': '24px', 'position': 'relative'}}><canvas width="22" height="24" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                       {/* /HEXAGON */}
                     </div>
                     {/* /USER AVATAR BORDER */}
                 
                     {/* USER AVATAR CONTENT */}
                     <div className="user-avatar-content">
                       {/* HEXAGON */}
                       <div className="hexagon-image-18-20" data-src="/img/avatar/12.jpg" style={{'width': '18px', 'height': '20px', 'position': 'relative'}}><canvas width="18" height="20" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                       {/* /HEXAGON */}
                     </div>
                     {/* /USER AVATAR CONTENT */}
                   </div>
                   {/* /USER AVATAR */}
         
                   {/* USER AVATAR */}
                   <div className="user-avatar micro no-stats">
                     {/* USER AVATAR BORDER */}
                     <div className="user-avatar-border">
                       {/* HEXAGON */}
                       <div className="hexagon-22-24" style={{'width': '22px', 'height': '24px', 'position': 'relative'}}><canvas width="22" height="24" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                       {/* /HEXAGON */}
                     </div>
                     {/* /USER AVATAR BORDER */}
                 
                     {/* USER AVATAR CONTENT */}
                     <div className="user-avatar-content">
                       {/* HEXAGON */}
                       <div className="hexagon-image-18-20" data-src="/img/avatar/16.jpg" style={{'width': '18px', 'height': '20px', 'position': 'relative'}}><canvas width="18" height="20" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                       {/* /HEXAGON */}
                     </div>
                     {/* /USER AVATAR CONTENT */}
                   </div>
                   {/* /USER AVATAR */}
         
                   {/* USER AVATAR */}
                   <div className="user-avatar micro no-stats">
                     {/* USER AVATAR BORDER */}
                     <div className="user-avatar-border">
                       {/* HEXAGON */}
                       <div className="hexagon-22-24" style={{'width': '22px', 'height': '24px', 'position': 'relative'}}><canvas width="22" height="24" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                       {/* /HEXAGON */}
                     </div>
                     {/* /USER AVATAR BORDER */}
                 
                     {/* USER AVATAR CONTENT */}
                     <div className="user-avatar-content">
                       {/* HEXAGON */}
                       <div className="hexagon-image-18-20" data-src="/img/avatar/06.jpg" style={{'width': '18px', 'height': '20px', 'position': 'relative'}}><canvas width="18" height="20" style={{position: 'absolute', top: '0px', left: '0px'}}></canvas></div>
                       {/* /HEXAGON */}
                     </div>
                     {/* /USER AVATAR CONTENT */}
                   </div>
                   {/* /USER AVATAR */}
                 </div>
                 {/* /META LINE LIST */}
         
                 {/* META LINE TEXT */}
                 <p className="meta-line-text">11 Participants</p>
                 {/* /META LINE TEXT */}
               </div>
               {/* /META LINE */}
             </div>
             {/* /CONTENT ACTION */}
         
             {/* CONTENT ACTION */}
             <div className="content-action">
               {/* META LINE */}
               <div className="meta-line">
                 {/* META LINE LINK */}
                 <p className="meta-line-link">1 Comments</p>
                 {/* /META LINE LINK */}
               </div>
               {/* /META LINE */}
         
               {/* META LINE */}
               <div className="meta-line">
                 {/* META LINE TEXT */}
                 <p className="meta-line-text">0 Shares</p>
                 {/* /META LINE TEXT */}
               </div>
               {/* /META LINE */}
             </div>
             {/* /CONTENT ACTION */}
           </div>
           {/* /CONTENT ACTIONS */}
         </div>
         {/* /WIDGET BOX STATUS CONTENT */}
       </div>
       {/* /WIDGET BOX STATUS */}
   
       {/* POST OPTIONS */}
       <div className="post-options">
         {/* POST OPTION WRAP */}
         <div className="post-option-wrap" style={{position: 'relative'}}>
           {/* POST OPTION */}
           <div className="post-option reaction-options-dropdown-trigger">
             {/* POST OPTION ICON */}
             <svg className="post-option-icon icon-thumbs-up">
               <use xlinkHref="#svg-thumbs-up"></use>
             </svg>
             {/* /POST OPTION ICON */}
   
             {/* POST OPTION TEXT */}
             <p className="post-option-text">React!</p>
             {/* /POST OPTION TEXT */}
           </div>
           {/* /POST OPTION */}
   
           {/* REACTION OPTIONS */}
           <div className="reaction-options reaction-options-dropdown" style={{'position': 'absolute', 'zIndex': '9999', 'bottom': '54px', 'left': '-16px', 'opacity': '0', 'visibility': 'hidden', 'transform': 'translate(0px, 20px); transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out'}}>
             {/* REACTION OPTION */}
             <div className="reaction-option text-tooltip-tft" data-title="Like" style={{position: 'relative'}}>
               {/* REACTION OPTION IMAGE */}
               <img className="reaction-option-image" src="/img/reaction/like.png" alt="reaction-like" />
               {/* /REACTION OPTION IMAGE */}
             <div className="xm-tooltip" style={{'whiteSpace': 'nowrap', 'position': 'absolute', 'zIndex': '99999', 'top': '-28px', 'left': '50%', 'marginLeft': '-22px', 'opacity': '0', 'visibility': 'hidden', 'transform': 'translate(0px, 10px); transition: 0.3s ease-in-out'}}><p className="xm-tooltip-text">Like</p></div></div>
             {/* /REACTION OPTION */}
   
             {/* REACTION OPTION */}
             <div className="reaction-option text-tooltip-tft" data-title="Love" style={{position: 'relative'}}>
               {/* REACTION OPTION IMAGE */}
               <img className="reaction-option-image" src="/img/reaction/love.png" alt="reaction-love" />
               {/* /REACTION OPTION IMAGE */}
             <div className="xm-tooltip" style={{'whiteSpace': 'nowrap', 'position': 'absolute', 'zIndex': '99999', 'top': '-28px', 'left': '50%', 'marginLeft': '-23.5px', 'opacity': '0', 'visibility': 'hidden', 'transform': 'translate(0px, 10px); transition: 0.3s ease-in-out'}}><p className="xm-tooltip-text">Love</p></div></div>
             {/* /REACTION OPTION */}
   
             {/* REACTION OPTION */}
             <div className="reaction-option text-tooltip-tft" data-title="Dislike" style={{position: 'relative'}}>
               {/* REACTION OPTION IMAGE */}
               <img className="reaction-option-image" src="/img/reaction/dislike.png" alt="reaction-dislike" />
               {/* /REACTION OPTION IMAGE */}
             <div className="xm-tooltip" style={{'whiteSpace': 'nowrap', 'position': 'absolute', 'zIndex': '99999', 'top': '-28px', 'left': '50%', 'marginLeft': '-28px', 'opacity': '0', 'visibility': 'hidden', 'transform': 'translate(0px, 10px); transition: 0.3s ease-in-out'}}><p className="xm-tooltip-text">Dislike</p></div></div>
             {/* /REACTION OPTION */}
   
             {/* REACTION OPTION */}
             <div className="reaction-option text-tooltip-tft" data-title="Happy" style={{position: 'relative'}}>
               {/* REACTION OPTION IMAGE */}
               <img className="reaction-option-image" src="/img/reaction/happy.png" alt="reaction-happy" />
               {/* /REACTION OPTION IMAGE */}
             <div className="xm-tooltip" style={{'whiteSpace': 'nowrap', 'position': 'absolute', 'zIndex': '99999', 'top': '-28px', 'left': '50%', 'marginLeft': '-27.5px', 'opacity': '0', 'visibility': 'hidden', 'transform': 'translate(0px, 10px); transition: 0.3s ease-in-out'}}><p className="xm-tooltip-text">Happy</p></div></div>
             {/* /REACTION OPTION */}
   
             {/* REACTION OPTION */}
             <div className="reaction-option text-tooltip-tft" data-title="Funny" style={{position: 'relative'}}>
               {/* REACTION OPTION IMAGE */}
               <img className="reaction-option-image" src="/img/reaction/funny.png" alt="reaction-funny" />
               {/* /REACTION OPTION IMAGE */}
             <div className="xm-tooltip" style={{'whiteSpace': 'nowrap', 'position': 'absolute', 'zIndex': '99999', 'top': '-28px', 'left': '50%', 'marginLeft': '-27px', 'opacity': '0', 'visibility': 'hidden', 'transform': 'translate(0px, 10px); transition: 0.3s ease-in-out'}}><p className="xm-tooltip-text">Funny</p></div></div>
             {/* /REACTION OPTION */}
   
             {/* REACTION OPTION */}
             <div className="reaction-option text-tooltip-tft" data-title="Wow" style={{position: 'relative'}}>
               {/* REACTION OPTION IMAGE */}
               <img className="reaction-option-image" src="/img/reaction/wow.png" alt="reaction-wow" />
               {/* /REACTION OPTION IMAGE */}
             <div className="xm-tooltip" style={{'whiteSpace': 'nowrap', 'position': 'absolute', 'zIndex': '99999', 'top': '-28px', 'left': '50%', 'marginLeft': '-24px', 'opacity': '0', 'visibility': 'hidden', 'transform': 'translate(0px, 10px); transition: 0.3s ease-in-out'}}><p className="xm-tooltip-text">Wow</p></div></div>
             {/* /REACTION OPTION */}
   
             {/* REACTION OPTION */}
             <div className="reaction-option text-tooltip-tft" data-title="Angry" style={{position: 'relative'}}>
               {/* REACTION OPTION IMAGE */}
               <img className="reaction-option-image" src="/img/reaction/angry.png" alt="reaction-angry" />
               {/* /REACTION OPTION IMAGE */}
             <div className="xm-tooltip" style={{'whiteSpace': 'nowrap', 'position': 'absolute', 'zIndex': '99999', 'top': '-28px', 'left': '50%', 'marginLeft': '-26.5px', 'opacity': '0', 'visibility': 'hidden', 'transform': 'translate(0px, 10px); transition: 0.3s ease-in-out'}}><p className="xm-tooltip-text">Angry</p></div></div>
             {/* /REACTION OPTION */}
   
             {/* REACTION OPTION */}
             <div className="reaction-option text-tooltip-tft" data-title="Sad" style={{position: 'relative'}}>
               {/* REACTION OPTION IMAGE */}
               <img className="reaction-option-image" src="/img/reaction/sad.png" alt="reaction-sad" />
               {/* /REACTION OPTION IMAGE */}
             <div className="xm-tooltip" style={{'whiteSpace': 'nowrap', 'position': 'absolute', 'zIndex': '99999', 'top': '-28px', 'left': '50%', 'marginLeft': '-21.5px', 'opacity': '0', 'visibility': 'hidden', 'transform': 'translate(0px, 10px); transition: 0.3s ease-in-out'}}><p className="xm-tooltip-text">Sad</p></div></div>
             {/* /REACTION OPTION */}
           </div>
           {/* /REACTION OPTIONS */}
         </div>
         {/* /POST OPTION WRAP */}
   
         {/* POST OPTION */}
         <div className="post-option">
           {/* POST OPTION ICON */}
           <svg className="post-option-icon icon-comment">
             <use xlinkHref="#svg-comment"></use>
           </svg>
           {/* /POST OPTION ICON */}
   
           {/* POST OPTION TEXT */}
           <p className="post-option-text">Comment</p>
           {/* /POST OPTION TEXT */}
         </div>
         {/* /POST OPTION */}
   
         {/* POST OPTION */}
         <div className="post-option">
           {/* POST OPTION ICON */}
           <svg className="post-option-icon icon-share">
             <use xlinkHref="#svg-share"></use>
           </svg>
           {/* /POST OPTION ICON */}
   
           {/* POST OPTION TEXT */}
           <p className="post-option-text">Share</p>
           {/* /POST OPTION TEXT */}
         </div>
         {/* /POST OPTION */}
       </div>
       {/* /POST OPTIONS */}
     </div>
     {/* /WIDGET BOX */}

 <Loadingbars />


     </div>
   {/* /GRID COLUMN */}
 </div>

  );
}
