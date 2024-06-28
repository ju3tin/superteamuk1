import { useEffect, useRef } from 'react';
//import './timeline.min.css'; // Import CSS for TimelineJS
import TL from 'timelinejs'; // Adjust the import based on how TimelineJS is provided

const TimelineComponent = () => {
    const embedRef = useRef(null);

    useEffect(() => {
        const embed = embedRef.current;

        const setEmbedHeight = () => {
            embed.style.height = getComputedStyle(document.body).height;
        };

        setEmbedHeight();

        const timeline = new TL.Timeline(embed, 'timeline3.json', {
            hash_bookmark: false
        });

        window.addEventListener('resize', () => {
            setEmbedHeight();
            timeline.updateDisplay();
        });

        // Cleanup function
        return () => {
            window.removeEventListener('resize', setEmbedHeight);
        };
    }, []);

    return <div id="timeline-embed" ref={embedRef} style={{ width: '100%' }}></div>;
};

export default TimelineComponent;