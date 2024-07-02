

  import { useEffect, useState } from 'react';

function JSONComponent({ jsonData }) {
  return (
    <div className='grid grid-3-3-3-3 top-space centered'>
      {jsonData && jsonData.map((item, index) => (
        <JSONItem key={index} data={item} />
      ))}
    </div>
  );
}



function JSONItem({ data }) {
    const [isClient, setIsClient] = useState(false);
  
    useEffect(() => {
      setIsClient(true);
    }, []);
  
    if (!isClient) {
      return null;
    }
    return (
 <div className="quest-item">
        {/* QUEST ITEM COVER */}
        <figure className="quest-item-cover liquid" style={{'background': 'url(&quot;/img/quest/cover/01.png&quot;) center center / cover no-repeat'}}>
          <img src="/img/quest/cover/01.png" alt="cover-01" style={{'display': 'none'}} />
        </figure>
         <p class="text-sticker small-text">
          {/* TEXT STICKER ICON */}
          <svg class="text-sticker-icon icon-plus-small">
            <use xlinkHref="#svg-plus-small"></use>
          </svg>
          {/* TEXT STICKER ICON */}
          40 EXP
        </p>
        {/* /QUEST ITEM COVER */}
        {/* /QUEST ITEM INFO */}

        <div class="quest-item-info">
                {/* QUEST ITEM BADGE */}
                <div class="quest-item-badge">
                  <img src="/img/quest/completedq-b.png" alt="completedq-b" />
                </div>
                {/* /QUEST ITEM BADGE */}
         

                    {/* QUEST ITEM TITLE */}
                <p class="quest-item-title">Friendly User</p>
                {/* /QUEST ITEM TITLE */}

                          {/* QUEST ITEM TEXT */}
                <p class="quest-item-text">Give 50 like and/or love reactions on your friends' posts</p>
                {/* /QUEST ITEM TEXT */}

                   <div class="progress-stat">
                       <div id="quest-fu" class="progress-stat-bar" style={{'width': '228px', 'height': '4px', 'position': 'relative'}}>
                       <canvas width="228" height="4" style={{'position': 'absolute', 'top': '0px', 'left': '0px'}}></canvas>
                       <canvas width="228" height="4" style={{'position': 'absolute', 'top': '0px', 'left': '0px'}}></canvas>
                       </div>
                
                   </div>
                      <div class="bar-progress-wrap small">
                    {/* BAR PROGRESS INFO */}
                    <p class="bar-progress-info negative start"><span class="bar-progress-text no-space">50<span class="bar-progress-unit">/</span>50</span>completed</p>
                    {/* /BAR PROGRESS INFO */}
                  </div>

                  <div class="quest-item-meta">
                  {/* USER AVATAR LIST */}
                  <div class="user-avatar-list">
                    {/* USER AVATAR */}
                    <div class="user-avatar micro no-stats">
                      {/* USER AVATAR BORDER */}
                      <div class="user-avatar-border">
                        {/* HEXAGON */}
                        <div class="hexagon-22-24" style={{'width': '22px', 'height': '24px', 'position': 'relative'}}><canvas width="22" height="24" style={{'position': 'absolute', 'top': '0px', 'left': '0px'}}></canvas></div>
                        {/* /HEXAGON */}
                      </div>
                      {/* /USER AVATAR BORDER */}
                  
                      {/* USER AVATAR CONTENT */}
                      <div class="user-avatar-content">
                        {/* HEXAGON */}
                        <div class="hexagon-image-18-20" data-src="/img/avatar/08.jpg" style={{'width': '18px', 'height': '20px', 'position': 'relative'}}><canvas width="18" height="20" style={{'position': 'absolute', 'top': '0px', 'left': '0px'}}></canvas></div>
                        {/* /HEXAGON */}
                      </div>
                      {/* /USER AVATAR CONTENT */}
                    </div>
                    {/* /USER AVATAR */}
                    
                    {/* USER AVATAR */}
                    <div class="user-avatar micro no-stats">
                      {/* USER AVATAR BORDER */}
                      <div class="user-avatar-border">
                        {/* HEXAGON */}
                        <div class="hexagon-22-24" style={{'width': '22px', 'height': '24px', 'position': 'relative'}}><canvas width="22" height="24" style={{'position': 'absolute', 'top': '0px', 'left': '0px'}}></canvas></div>
                        {/* /HEXAGON */}
                      </div>
                      {/* /USER AVATAR BORDER */}
                  
                      {/* USER AVATAR CONTENT */}
                      <div class="user-avatar-content">
                        {/* HEXAGON */}
                        <div class="hexagon-image-18-20" data-src="/img/avatar/16.jpg" style={{'width': '18px', 'height': '20px', 'position': 'relative'}}><canvas width="18" height="20" style={{'position': 'absolute', 'top': '0px', 'left': '0px'}}></canvas></div>
                        {/* /HEXAGON */}
                      </div>
                      {/* /USER AVATAR CONTENT */}
                    </div>
                    {/* /USER AVATAR */}
                    
                    {/* USER AVATAR */}
                    <div class="user-avatar micro no-stats">
                      {/* USER AVATAR BORDER */}
                      <div class="user-avatar-border">
                        {/* HEXAGON */}
                        <div class="hexagon-22-24" style={{'width': '22px', 'height': '24px', 'position': 'relative'}}><canvas width="22" height="24" style={{'position': 'absolute', 'top': '0px', 'left': '0px'}}></canvas></div>
                        {/* /HEXAGON */}
                      </div>
                      {/* /USER AVATAR BORDER */}
                  
                      {/* USER AVATAR CONTENT */}
                      <div class="user-avatar-content">
                        {/* HEXAGON */}
                        <div class="hexagon-image-18-20" data-src="/img/avatar/06.jpg" style={{'width': '18px', 'height': '20px', 'position': 'relative'}}><canvas width="18" height="20" style={{'position': 'absolute', 'top': '0px', 'left': '0px'}}></canvas></div>
                        {/* /HEXAGON */}
                      </div>
                      {/* /USER AVATAR CONTENT */}
                    </div>
                    {/* /USER AVATAR */}
          
                    {/* USER AVATAR */}
                    <div class="user-avatar micro no-stats">
                      {/* USER AVATAR BORDER */}
                      <div class="user-avatar-border">
                        {/* HEXAGON */}
                        <div class="hexagon-22-24" style={{'width': '22px', 'height': '24px', 'position': 'relative'}}><canvas width="22" height="24" style={{'position': 'absolute', 'top': '0px', 'left': '0px'}}></canvas></div>
                        {/* /HEXAGON */}
                      </div>
                      {/* /USER AVATAR BORDER */}
                  
                      {/* USER AVATAR CONTENT */}
                      <div class="user-avatar-content">
                        {/* HEXAGON */}
                        <div class="hexagon-image-18-20" data-src="/img/avatar/07.jpg" style={{'width': '18px', 'height': '20px', 'position': 'relative'}}><canvas width="18" height="20" style={{'position': 'absolute', 'top': '0px', 'left': '0px'}}></canvas></div>
                        {/* /HEXAGON */}
                      </div>
                      {/* /USER AVATAR CONTENT */}
                    </div>
                    {/* /USER AVATAR */}
          
                    {/* USER AVATAR */}
                    <div class="user-avatar micro no-stats">
                      {/* USER AVATAR BORDER */}
                      <div class="user-avatar-border">
                        {/* HEXAGON */}
                        <div class="hexagon-22-24" style={{'width': '22px', 'height': '24px', 'position': 'relative'}}><canvas width="22" height="24" style={{'position': 'absolute', 'top': '0px', 'left': '0px'}}></canvas></div>
                        {/* /HEXAGON */}
                      </div>
                      {/* /USER AVATAR BORDER */}
                  
                      {/* USER AVATAR CONTENT */}
                      <div class="user-avatar-content">
                        {/* HEXAGON */}
                        <div class="hexagon-image-18-20" data-src="/img/avatar/02.jpg" style={{'width': '18px', 'height': '20px', 'position': 'relative'}}><canvas width="18" height="20" style={{'position': 'absolute', 'top': '0px', 'left': '0px'}}></canvas></div>
                        {/* /HEXAGON */}
                      </div>
                      {/* /USER AVATAR CONTENT */}
                    </div>
                    {/* /USER AVATAR */}
          
                    {/* USER AVATAR */}
                    <div class="user-avatar micro no-stats">
                      {/* USER AVATAR BORDER */}
                      <div class="user-avatar-border">
                        {/* HEXAGON */}
                        <div class="hexagon-22-24" style={{'width': '22px', 'height': '24px', 'position': 'relative'}}><canvas width="22" height="24" style={{'position': 'absolute', 'top': '0px', 'left': '0px'}}></canvas></div>
                        {/* /HEXAGON */}
                      </div>
                      {/* /USER AVATAR BORDER */}
                  
                      {/* USER AVATAR CONTENT */}
                      <div class="user-avatar-content">
                        {/* HEXAGON */}
                        <div class="hexagon-image-18-20" data-src="/img/avatar/10.jpg" style={{'width': '18px', 'height': '20px', 'position': 'relative'}}><canvas width="18" height="20" style={{'position': 'absolute', 'top': '0px', 'left': '0px'}}></canvas></div>
                        {/* /HEXAGON */}
                      </div>
                      {/* /USER AVATAR CONTENT */}
                    </div>
                    {/* /USER AVATAR */}
          
                    {/* USER AVATAR */}
                    <div class="user-avatar micro no-stats">
                      {/* USER AVATAR BORDER */}
                      <div class="user-avatar-border">
                        {/* HEXAGON */}
                        <div class="hexagon-22-24" style={{'width': '22px', 'height': '24px', 'position': 'relative'}}><canvas width="22" height="24" style={{'position': 'absolute', 'top': '0px', 'left': '0px'}}></canvas></div>
                        {/* /HEXAGON */}
                      </div>
                      {/* /USER AVATAR BORDER */}
                  
                      {/* USER AVATAR CONTENT */}
                      <div class="user-avatar-content">
                        {/* HEXAGON */}
                        <div class="hexagon-image-18-20" data-src="/img/avatar/05.jpg" style={{'width': '18px', 'height': '20px', 'position': 'relative'}}><canvas width="18" height="20" style={{'position': 'absolute', 'top': '0px', 'left': '0px'}}></canvas></div>
                        {/* /HEXAGON */}
                      </div>
                      {/* /USER AVATAR CONTENT */}
                    </div>
                    {/* /USER AVATAR */}
          
                    {/* USER AVATAR */}
                    <div class="user-avatar micro no-stats">
                      {/* USER AVATAR BORDER */}
                      <div class="user-avatar-border">
                        {/* HEXAGON */}
                        <div class="hexagon-22-24" style={{'width': '22px', 'height': '24px', 'position': 'relative'}}><canvas width="22" height="24" style={{'position': 'absolute', 'top': '0px', 'left': '0px'}}></canvas></div>
                        {/* /HEXAGON */}
                      </div>
                      {/* /USER AVATAR BORDER */}
                  
                      {/* USER AVATAR CONTENT */}
                      <div class="user-avatar-content">
                        {/* HEXAGON */}
                        <div class="hexagon-image-18-20" data-src="/img/avatar/03.jpg" style={{'width': '18px', 'height': '20px', 'position': 'relative'}}><canvas width="18" height="20" style={{'position': 'absolute', 'top': '0px', 'left': '0px'}}></canvas></div>
                        {/* /HEXAGON */}
                      </div>
                      {/* /USER AVATAR CONTENT */}
                    </div>
                    {/* /USER AVATAR */}
                  </div>
                  {/* /USER AVATAR LIST */}
          
                  {/* QUEST ITEM META INFO */}
                  <div class="quest-item-meta-info">
                    {/* QUEST ITEM META TITLE */}
                    <p class="quest-item-meta-title">+24 friends</p>
                    {/* /QUEST ITEM META TITLE */}
          
                    {/* QUEST ITEM META TEXT */}
                    <p class="quest-item-meta-text">completed this quest</p>
                    {/* /QUEST ITEM META TEXT */}
                  </div>
                  {/* /QUEST ITEM META INFO */}
                </div>
           </div> 

      </div>

);
}
export default JSONItem;