import approve from "../icons/approve.svg";
import exit from "../icons/exit.svg";
import home from "../icons/home.svg";
import left from "../icons/leftArrow.svg";
import right from "../icons/rightArrow.svg";
import star from "../icons/star.svg";

const iconList = {approve, exit, home, left, right, star,};
export default iconList;

export function makeIcon(type, width = 25, height = 25) {
    
    const icon = document.createElement("img");
    icon.src =  iconList[type];
    icon.width = width;
    icon.height = height;
    icon.alt = "dis be an icon";
    
    return icon;
}

