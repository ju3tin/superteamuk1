
import React, { useEffect } from 'react';
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
    <Navcomponent  jsonData={jsonData2}  />
    <Navcomponent1 />
    <Navcomponent2 />
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
     <Memberitem jsonData={jsonData} />

      {/* /GRID COLUMN */}
    </div>
   

  </div>
   
    
  );
}

export default Member;