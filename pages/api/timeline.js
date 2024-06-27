// pages/api/timeline.js

import { TwitterApi } from 'twitter-api-v2';

export default async function handler(req, res) {
  const client = new TwitterApi({
    appKey: process.env.TWITTER_API_KEY,
    appSecret: process.env.TWITTER_API_SECRET_KEY,
    accessToken: process.env.TWITTER_ACCESS_TOKEN,
    accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  });

  const { username, count } = req.query;

  try {
    const user = await client.v2.userByUsername(username);
    const userId = user.data.id;
    const tweets = await client.v2.userTimeline(userId, { max_results: count || 10 });

    res.status(200).json(tweets.data);
  } catch (error) {
    console.error('Error fetching user timeline:', error);
    res.status(500).json({ error: 'Error fetching user timeline' });
  }
}
