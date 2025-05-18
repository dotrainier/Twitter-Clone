import Image, { StaticImageData } from "next/image"
import profile_default from '@/assets/images/default_profile_bigger.png'
import { VerifiedIcon } from "@/components/icons"


import {
    ReplyIcon,
    ReTweetIcon,
    ShareIcon,
    ReactIcon,
 } from "@/components/icons"

type TweetProps = {
    tweet_profile_src?: StaticImageData,
    tweet_user? : string,
    tweet_isVeried? : boolean,
    tweet_username?: string,
    tweet_post_time?: string,
    tweet_description?: string,
    tweet_reply?: number,
    tweet_reTweet?: number,
    tweet_react?: number,
    tweet_img_description?: StaticImageData
}


export default function Tweet({
    tweet_profile_src = profile_default,
    tweet_user = "Juan Dela Cruz",
    tweet_isVeried = false,
    tweet_username = '@jdcruz',
    tweet_post_time = '2h',
    tweet_description = 'No matter how heavy your burden is, as long as you wear a smile, it feels a little lighter.',
    tweet_reply = 10,
    tweet_reTweet = 15,
    tweet_react = 50,
    tweet_img_description 
} : TweetProps ){
    return (
        <div className="border-b border-b-[#2F3336] font-sf_pro_text flex  px-4 py-2 gap-4">
            <div>
                <Image src={tweet_profile_src} alt="default" width={40} height={40} className="rounded-full"/>
            </div>

            <div className="flex-1 text-[#D9D9D9]">
                <div className="flex gap-1 items-center text-sm">  
                    <span className="font-bold text-[#D9D9D9]"> { tweet_user }</span> 
                    <span className="text-[#D9D9D9]"> {tweet_isVeried && (<VerifiedIcon size={16}/> )} </span>  
                    <span className="text-[#6E767D] font-light"> {tweet_username} </span> <span>.</span> 
                    <span className="text-[#6E767D] font-light"> {tweet_post_time} </span> 
                </div>

                <div className="text-sm text-[#D9D9D9] py-1"> {tweet_description} </div>

               {
                    tweet_img_description && (
                        <div className="w-full mt-4 rounded-xl">
                            <Image
                                src={tweet_img_description}
                                alt="tweet_img"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full h-auto object-contain rounded-[inherit]"
                            />
                        </div>
                    )
                }
                <div className="flex items-center gap-12 text-[#6E767D] text-xs mt-4">
                    <div className="flex items-center gap-2"> <ReplyIcon size={20}/> <span> {tweet_reply} </span> </div>
                    <div className="flex items-center gap-2"> <ReTweetIcon size={20}/> <span> {tweet_reTweet} </span> </div>
                    <div className="flex items-center gap-2"> <ReactIcon size={20}/> <span> {tweet_react} </span> </div>
                    <div className="flex items-center gap-2"> <ShareIcon size={20}/>  </div>
                </div>
            </div>
        </div>
    )
}