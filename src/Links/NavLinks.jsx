import { FcSearch, FcGallery} from "react-icons/fc"
import {BsNewspaper, BsCameraVideo} from "react-icons/bs"

export const NavLinks = [{
    id: "1",
    name :"All",
    icon : <FcSearch />,
    link : `/ `
},
{
    id: "2",
    name :"Images",
    icon : <FcGallery />,
    link : `images`
}
,

{
    id: "3",
    name :"News",
    icon : <BsNewspaper/>,
    link :`news`
},

{
    id: "4",
    name :"Videos",
    icon : <BsCameraVideo />,
    link : `videos`
}
]