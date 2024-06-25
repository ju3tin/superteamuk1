
import React, { useEffect, useState } from 'react';
import Navcomponent from '../../components/Navigation/navwidget1';
import Navcomponent1 from '../../components/Navigation/navwidget2';
import Navcomponent2 from '../../components/Navigation/navwidget3';
import Chatwidget from '../../components/Chat/chatwidget';
import Chatwidget1 from '../../components/Chat/chatwidget1';
import Header1 from '../../components/Header';
import Bar1 from '../../components/Bar';
import Banner from '../../components/Banner';
import Eventitems from '../../components/Event/item';
import Head from 'next/head';
import Groupmenu from '../../components/Group/menu';
import jsonData from '../../groupstest.json';
import jsonData2 from '../../menuitems.json';
import jsonData3 from '../../evnttop4.json';
import Memberitem from '../../components/Member/item';
import EventsFilter from '../../components/Events/filter';
import FullCalendar from '../../components/fullcalendar';
import Calendar from 'react-calendar';
import SectionHeader from '../../components/Section/Header';
import styles from '../calendar.module.css';
//import { Head } from 'next/document'
import '../calendar.module.css'
//import '../../public/css/Calendar.module.css';
 
//import 'react-calendar/dist/Calendar.css'; 
 

function Member() {
    const [value, onChange] = useState(new Date()); 
    const bannerImageUrl = '/img/banner/events-icon.png';
    const pretitle = `See what's next!`;
    const title34 = 'Upcoming Events';
    const title1 = 'Events';
    const description = 'Easily manage and create events or reminders!';
    const page = 5;

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
   
   {/* <link rel="stylesheet" href="/css/calendar.css" /> */}
    <link rel="stylesheet" href="/css/vendor/tiny-slider.css" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Navcomponent currentPage={page}/>
    <Navcomponent1 currentPage={page} />
 <Navcomponent2 currentPage={page} />
    <Chatwidget />
    <Chatwidget1 />
    <Header1 />
    <Bar1 />
    <div className="content-grid" style={{'transform': 'translate(368px)', 'transition': 'transform 0.4s ease-in-out'}}>
    <Banner bannerdescription={description} bannertitle={title1} bannerimage={bannerImageUrl}/>
    <EventsFilter />
  
    <FullCalendar initialView='dayGridMonth' />
    <SectionHeader sectiontitle={title34} sectionpretitle={pretitle} />
    <Eventitems jsonData={jsonData3} />
    
    </div>
    </div>
   
    
  );
}

export default Member;