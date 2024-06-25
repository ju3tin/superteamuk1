
import React, { useEffect } from 'react';
import Navcomponent from '../../components/Navigation/navwidget1';
import Navcomponent1 from '../../components/Navigation/navwidget2';
import Navcomponent2 from '../../components/Navigation/navwidget3';
import Chatwidget from '../../components/Chat/chatwidget';
import Chatwidget1 from '../../components/Chat/chatwidget1';
import Header1 from '../../components/Header';
import Bar1 from '../../components/Bar';
import Banner from '../../components/Banner';
import BannerImageLink from '../../components/Banner/ImageLink';
import Head from 'next/head';
import Groupmenu from '../../components/Group/menu';
import Groupitem from '../../components/Group/groupitem';
import jsonData from '../../groupstest.json';
import jsonData2 from '../../menuitems.json';

function Groups() {
    const bannerImageUrl = '/img/banner/groups-icon.png';
    const title1 = 'Groups';
    const description = 'Browse all the groups of the community!';

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
    <Navcomponent2 currentPage={0} />
    <Chatwidget />
    <Chatwidget1 />
    <Header1 />
    <Bar1 />
    <div className="content-grid" style={{'transform': 'translate(368px)', 'transition': 'transform 0.4s ease-in-out'}}>
   <Banner bannerdescription={description} bannertitle={title1} bannerimage={bannerImageUrl}/>
   <Groupmenu />
     <Groupitem jsonData={jsonData} />

      {/* /GRID COLUMN */}
    </div>
   

  </div>
   
    
  );
}

export default Groups;