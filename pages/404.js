import Head from 'next/head';
export default function Custom404() {
  return (
    <div>
   
   <Head>
    <title>404 Something Went Wrong</title>
    <link rel="stylesheet" href="/css/vendor/bootstrap.min.css" />
    <link rel="stylesheet" href="/css/styles.min.css" />
    <link rel="stylesheet" href="/css/vendor/simplebar.css" />
    <link rel="stylesheet" href="/css/Calendar.css" />
    <link rel="stylesheet" href="/css/vendor/tiny-slider.css" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="error-section">
     
      <p className="error-section-title">404</p>
     
      
      <div className="error-section-info">
     
        <p className="error-section-subtitle">Oops!!...</p>
     
           <p className="error-section-text">Seems that you made a wrong turn and encountered a web black hole that absorbed the page you were looking for! But don't panic because you can go back!</p>
     
        <p className="error-section-text">If the problem persists, please send us an email to our support team at <a href="#">ju3tin95@gmail.com</a></p>
     
     
     
        <a className="button medium primary" href="profile-timeline.html">Go Back</a>
     
      </div>
      </div>
     
     </div>)
    
}