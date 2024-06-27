
import React, { useEffect, useRef  } from 'react';
import Navcomponent from '../../components/Navigation/navwidget1';
import Navcomponent1 from '../../components/Navigation/navwidget2';
import Navcomponent2 from '../../components/Navigation/navwidget3';
import Chatwidget from '../../components/Chat/chatwidget';
import Chatwidget1 from '../../components/Chat/chatwidget1';
import Header1 from '../../components/Header';
import Bar1 from '../../components/Bar';
import Banner from '../../components/Banner';
import Head from 'next/head';
import Groupmenu from '../../components/Group/menu';
import jsonData from '../../groupstest.json';
import jsonData2 from '../../menuitems.json';
import Memberitem from '../../components/Member/item';

function Member() {
    const bannerImageUrl = '/img/banner/quests-icon.png';
    const title1 = 'Quests';
    const description = 'Complete quests to gain experience and level up!';
    const page = 4;
    const vidRef=useRef();
 useEffect(() => {
    vidRef.current.play();
    const script = document.createElement("script");
    script.src = "/js/app.bundle.min.js";
    script.async = true;
    const script1 = document.createElement("script");
    script1.src = "/js/detect.js";
    script1.async = true;
    document.body.appendChild(script);
    document.body.appendChild(script1);
    return () => {
      document.body.removeChild(script);
      document.body.removeChild(script1);
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
      <video id="background-video" src="/img/3.mp4" autoplay={true} muted={true} loop={true}  ref={ vidRef } style={{        
            'position': 'absolute',
            'top': '0',
            'left': '0',
            'width': '100%',
            'height': '100%',
            'object-fit': 'cover',
            'z-index': '-1'}} />
   
      <Navcomponent currentPage={page}/>
    <Navcomponent1 currentPage={page} />
 <Navcomponent2 currentPage={page} />
    <Chatwidget />
    <Chatwidget1 />
    <Header1 />
    <Bar1 />
   
    <div className="content-grid" style={{'transform': 'translate(368px)', 'transition': 'transform 0.4s ease-in-out'}}>
   <Banner bannerdescription={description} bannertitle={title1} bannerimage={bannerImageUrl}/>
   <div class="section-header">
      <div class="section-header-info">
        <p class="section-pretitle">Get an early lead!</p>
      
        <h2 class="section-title">Featured Quests</h2>
      </div>
    </div>
 
      {/* /GRID COLUMN */}
    </div>


  </div>
   
    
  );
}

export default Member;