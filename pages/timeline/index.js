// pages/index.js

import { useEffect, useState } from 'react';

export default function Home() {
  const [tweets, setTweets] = useState([]);
  const [username, setUsername] = useState('twitter_username');

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const response = await fetch(`/api/timeline?username=${username}&count=5`);
        const data = await response.json();
        setTweets(data);
      } catch (error) {
        console.error('Error fetching tweets:', error);
      }
    };

    fetchTweets();
  }, [username]);

  return (
    <div>
      <h1>Tweets from {username}</h1>
      <ul>
        {tweets.map((tweet) => (
          <li key={tweet.id}>{tweet.text}</li>
        ))}
      </ul>
    </div>
  );
}
