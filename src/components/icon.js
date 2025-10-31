import approve from "../icons/approve.svg";
import bubbles from "../icons/bubbles.svg";
import down from "../icons/downArrow.svg";
import exit from "../icons/exit.svg";
import forCouples from "../icons/forCouples.svg";
import fotvard from "../icons/fotvard.svg";
import harvard from "../icons/harvard.svg";
import home from "../icons/home.svg";
import left from "../icons/leftArrow.svg";
import massage from "../icons/massage.svg";
import meditation from "../icons/meditation.svg";
import raccoon from "../icons/raccoon.svg";
import right from "../icons/rightArrow.svg";
import staff from "../icons/staff.svg";
import star from "../icons/star.svg";
import traning from "../icons/traning.svg";
import up from "../icons/upArrow.svg";

const iconList = {approve, bubbles, down, forCouples, fotvard, harvard, exit, home, left, massage, meditation, raccoon, right, staff, star, traning, up};
export default iconList;

export function makeIcon(type, width = 25, height = 25) {
    
    const icon = document.createElement("img");
    icon.src =  iconList[type];
    icon.width = width;
    icon.height = height;
    icon.alt = "dis be an icon";
    
    return icon;
}

