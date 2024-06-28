import TimelineComponent from '../../components/Timeline2';
import Head from 'next/head';

const HomePage = () => {
    return (
        <div>
            <Head>
            <link rel="stylesheet" href="/css/timeline.css" />
            </Head>
            <h1>My Timeline Page</h1>
            <TimelineComponent />
        </div>
    );
};

export default HomePage;
