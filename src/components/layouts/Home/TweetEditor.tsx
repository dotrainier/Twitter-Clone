import Image from "next/image"
import default_profile from '@/assets/images/default_profile_bigger.png'

import { MediaIcon, GifIcon, PollIcon, EmojiIcon, ScheduleIcon } from "@/components/icons"

const happeningButtons = [
    {
        label: 'Media',
        icon: MediaIcon,
    },
    {
        label: 'GIF',
        icon: GifIcon
    },
    {
        label: 'Poll',
        icon: PollIcon
    },
    {
        label: 'Emoji',
        icon: EmojiIcon
    },
    {
        label: 'Schedule',
        icon: ScheduleIcon
    }
]

export default function TweetEditor(){
    return (
        <div className="border-b border-b-[#2F3336] font-sf_pro_text flex  px-4 py-2 gap-4">
            <div>
                <Image src={default_profile} alt="default" width={40} height={40} className="rounded-full"/>
            </div>

            <div className="flex-1">
                <div className="py-2">
                    <input type="text" name="happening" placeholder="What's happening?"  
                    className="text-[#6E767D] text-lg leading-5 outline-0 w-full  py-1 pr-2"/>
                </div>

                <div className="mt-2 flex justify-between">
                    <div className="text-[#1D9BF0] flex items-center gap-2 cursor-pointer">
                        {
                            happeningButtons.map((btn) => (
                                <button key={btn.label}>
                                    <btn.icon size={20}/>
                                </button>
                            ))
                        }
                    </div>

                    <button className="bg-[#1D9BF0] py-1.5 px-4 rounded-full text-[#D9D9D9] text-sm font-sf_pro_text font-bold">Tweet</button>
                </div>
            </div>
        </div>
    )
}