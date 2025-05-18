import TweetProfile1 from "@/assets/tweetProfiles/profile1.png"
import TweetProfile2 from "@/assets/tweetProfiles/profile2.jpg"
import TweetProfile3 from "@/assets/tweetProfiles/profile3.jpg"
import TweetProfile4 from "@/assets/tweetProfiles/profile4.jpg"

import TweetImg1 from "@/assets/images/tweet_img.png"
import TweetImg2 from "@/assets/images/tweet_img2.jpg"

export const allTweets = [
  {
    id: 1,
    tweet_profile_src: TweetProfile1,
    tweet_user:"CNN",
    tweet_isVeried: true,
    tweet_username:'@CNN',
    tweet_post_time:'7m',
    tweet_description:"The towering red rock spires of Garden of the Gods in Colorado Springs draw millions each year. Here's why this natural wonder remains one of America’s most stunning public parks.",
    tweet_reply:57,
    tweet_reTweet:144,
    tweet_react:184
  },
  {
    id: 2,
    tweet_profile_src: TweetProfile3, 
    tweet_user: "Travel + Leisure",
    tweet_isVeried: true,
    tweet_username: "@TravelLeisure",
    tweet_post_time: "1d",
    tweet_description: "Red rock formations tower under the open skies at Garden of the Gods Visitor & Nature Center in Colorado Springs — a breathtaking mix of geology and serenity in the heart of the U.S.",
    tweet_reply: 22,
    tweet_reTweet: 58,
    tweet_react: 837,
    tweet_img_description: TweetImg2 
  },
  {
  id: 3,
  tweet_user: "Lena Jacobs",
  tweet_isVeried: false,
  tweet_username: "@lenajwrites",
  tweet_post_time: "3h",
  tweet_description: "Finally finished my novel draft. 86,000 words and a whole lot of coffee later — I can breathe again.",
  tweet_reply: 45,
  tweet_reTweet: 27,
  tweet_react: 1_204
  },
  {
  id: 4,
  tweet_profile_src: TweetProfile4,
  tweet_user: "Science Daily",
  tweet_isVeried: true,
  tweet_username: "@ScienceDaily",
  tweet_post_time: "6h",
  tweet_description: "Researchers have discovered a new exoplanet with conditions that may support life — orbiting a red dwarf star 120 light-years away.",
  tweet_reply: 14,
  tweet_reTweet: 39,
  tweet_react: 512
  },
  
  {
    id: 5,
    tweet_profile_src: TweetProfile2,
    tweet_user:"Urban Explorer",
    tweet_isVeried: true,
    tweet_username:'@nytimes',
    tweet_post_time:'2h',
    tweet_description:'Time has taken over. This abandoned room, once full of life and stories, is now slowly being swallowed by nature — a hauntingly beautiful reminder of impermanence and the power of decay.',
    tweet_reply: 19,
    tweet_reTweet: 48,
    tweet_react: 482,
    tweet_img_description: TweetImg1
  },

]