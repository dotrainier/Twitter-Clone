import { TimelinePropIcon } from "@/components/icons";
import TweetEditor from "@/components/layouts/Home/TweetEditor";
import Tweet from "@/components/layouts/Home/Tweet";
import Trends from "@/components/layouts/Home/Trends";

import { allTweets } from "@/data/allTweetObject";


export default function Home() {
  return (
    <div className=" mx-auto bg-black flex gap-6 min-h-screen">
        <div className="border-x border-x-[#2F3336] flex-1">
            <div className="font-sf_pro_display font-bold text-xl px-4 py-2 border-b border-b-[#2F3336] flex justify-between">
                <div>Home</div>
                <TimelinePropIcon />
            </div>

            <TweetEditor />

           {
            allTweets.map((tweet) => (
               <Tweet key={tweet.id} {...tweet}/>
            ))
           }
        </div>

        <div className="w-[350px]">
          <Trends />
        </div>
    </div>
  );
}
