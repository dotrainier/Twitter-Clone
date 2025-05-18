import { SearchIcon, SettingsIcon, More2Icon, VerifiedIcon } from "@/components/icons"
import Image from "next/image"

import TweetProfile1 from "@/assets/tweetProfiles/profile1.png"
import TweetProfile2 from "@/assets/tweetProfiles/profile2.jpg"


const whoFollows = [
    {
        id: 1,
        profile: TweetProfile1,
        user: 'CNN',
        username: '@CNN',
        isVerified: true,
    },
    {
        id: 2,
        profile: TweetProfile2,
        user: 'Urban Explorer',
        username: '@nytimes',
        isVerified: true,
    },
]

export default function Trends(){
    return(
        <div className="py-2 sticky top-0">
            <div className="bg-[#202327] px-1.5 py-1.5 flex items-center gap-2 text-[#6E767D] rounded-full">
                <SearchIcon  size={20}/>
                <input type="text" autoComplete="off" className="w-full flex-1 text-normal leading-5 font-sf_pro_text focus:outline-0" placeholder="Search Twitter" id="search"/>
            </div>

            <div className="mt-4 rounded-xl bg-[#202327] px-4 py-4">
                <div className="font-sf_pro_display font-bold text-[#D9D9D9] text-lg  flex justify-between">
                    <span>Trends for you</span>
                    <span className="text-[#EFF3F4]"><SettingsIcon size={20}/></span>
                </div>

                <div className="mt-4 space-y-4">
                  {
                    [...Array(4)].map((_, i) => (
                        <div className="flex" key={i}>
                            <div className="flex-1">
                                <div className="font-sf_pro_text text-[#6E767D] space-y-0.5">
                                    <div className="text-sm">Trending in Turkey</div>
                                    <div className="font-bold text-normal text-[#D9D9D9]">#SQUID</div>
                                    <div className="text-sm">2,066 Tweets</div>
                                </div>
                            </div>
                            <button className="mt-6 cursor-pointer">
                                    <More2Icon size={18}/>
                            </button>
                        </div>
                    ))
                  }  
                </div>

                <div className="font-bold text-sm mt-4 text-[#1D9BF0]">Show more</div>
            </div>

            <div className="mt-4 rounded-xl bg-[#202327] px-4 py-4 font-sf_pro_text">
                <div className="font-sf_pro_display font-bold text-[#D9D9D9] text-lg">Who to follow</div>
                <div className="mt-4 space-y-4">
                  {
                    whoFollows.map((whoFollow) => (
                        <div className="flex items-center justify-between" key={whoFollow.id}>
                            <div className="flex items-center gap-1.5">
                                <Image src={whoFollow.profile} alt="profile" width={40} height={40} className="rounded-full"/>
                                <div>
                                    <div className="flex items-center text-[#D9D9D9]"> {whoFollow.user} {whoFollow.isVerified && (<span> <VerifiedIcon size={16}/> </span>)}</div>
                                    <div className="text-[#6E767D]">{whoFollow.username}</div>
                                </div>
                            </div>

                            <button className="bg-[#EFF3F4] text-[#0F1419] px-4 text-sm py-1.5 rounded-full cursor-pointer">Follow</button>
                        </div>
                    ))
                  }
                </div>
            </div>

            <div className="px-4 py-2 flex mt-4 text-center text-[#6E767D] font-sf_pro_text font-light text-[12px] flex-wrap gap-1.5">
                <div>Terms of Service |</div>
                <div>Privacy Policy |</div>
                <div>Cookie Policy |</div>
                <div>Accessibility |</div>
                <div>Ads info |</div>
                <div>More ...</div>
                <div>&copy; {new Date().getFullYear()} X Corp.</div>
            </div>
        </div>
    )
}