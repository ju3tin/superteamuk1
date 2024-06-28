import { useEffect, useRef } from 'react';
//import 'timeline.css'; // Import CSS for TimelineJS

const TimelineComponent = () => {
    const embedRef = useRef(null);

    useEffect(() => {
        const embed = embedRef.current;

        const setEmbedHeight = () => {
            embed.style.height = getComputedStyle(document.body).height;
        };

        setEmbedHeight();

        // Dynamically create and add the script tag
        const script = document.createElement('script');
        script.src = 'https://cdn.knightlab.com/libs/timeline3/latest/js/timeline.js';
        script.onload = () => {
            console.log('TimelineJS script loaded');

            // Initialize the timeline after the script has loaded
            window.timeline = new window.TL.Timeline('timeline-embed', 'timeline3.json', {
                hash_bookmark: false
            });
        };
        document.body.appendChild(script);

        const handleResize = () => {
            setEmbedHeight();
            if (window.timeline) {
                window.timeline.updateDisplay();
            }
        };

        window.addEventListener('resize', handleResize);

        // Cleanup function
        return () => {
            window.removeEventListener('resize', handleResize);
            document.body.removeChild(script); // Optional: remove the script when the component is unmounted
        };
    }, []);

    return <div id="timeline-embed" ref={embedRef} style={{ width: '100%' }}></div>;
};

export default TimelineComponent;