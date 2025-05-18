import { 
    TwitterIcon,
    HomeIcon,
    HomeFillIcon,
    ExploreIcon,
    ExploreFillIcon,
    NotificationsIcon,
    NotificationsFillIcon,
    MessagesIcon,
    MessagesFllIcon,
    BookmarksIcon,
    BookmarksFillIcon,
    ListIcon,
    ProfileIcon,
    MoreIcon
} from "../icons"

import Link from "next/link"

const navList = [
    {
        icon: HomeIcon,
        iconActive: HomeFillIcon,
        label: "Home",
    },
    {
        icon: ExploreIcon,
        iconActive: ExploreFillIcon,
        label: "Explore",
    },

    {
        icon: NotificationsIcon,
        iconActive: NotificationsFillIcon,
        label: "Notifications",
        notifCount: 1,
    },

    {
        icon: MessagesIcon,
        iconActive: MessagesFllIcon,
        label: "Messages",
        notifCount: 0,
    },

    {
        icon: BookmarksIcon,
        iconActive: BookmarksFillIcon,
        label: "Bookmarks",
        notifCount: 0,
    },

    {
        icon: ListIcon,
        iconActive: ListIcon,
        label: "Lists",
        notifCount: 0,
    },

    {
        icon: ProfileIcon,
        label: "Profile",
    }

]

export default function Sidebar(){
    const activePath = "Home"; // Since this is static only


    return (
        <div className="fixed w-72 inset-y-0 px-8 py-4 font-sf_pro_display font-bold text-[#D9D9D9">
            <button className="mb-1">
                <TwitterIcon />
            </button>
            
            <nav className="mt-4 space-y-6">
                {
                    navList.map((nav) => (
                        <Link href='' key={nav.label} className="flex gap-4 items-center">
                            <span className="relative">
                                {
                                activePath === nav.label ? ( nav.iconActive && < nav.iconActive />  ) : <nav.icon />
                                }

                                {
                                ((nav.notifCount ?? 0) > 0) && (
                                <div className="text-xs w-4 h-4 flex absolute -top-1 -right-1  items-center justify-center rounded-full bg-[#1D9BF0]">
                                    {
                                        nav.notifCount ?? 0
                                    }
                                </div>
                          
                                )
                                }
                            </span>

                            {nav.label}

                        </Link>
                    ))
                }

                <div  className="flex gap-4 items-center">
                    <MoreIcon />
                    More
                </div>
            </nav>

            <button className="bg-[#1D9BF0] w-full font-sf_pro_text font-bold text-normal mt-6 rounded-full py-2">Tweet</button>
        </div>
    )
}

