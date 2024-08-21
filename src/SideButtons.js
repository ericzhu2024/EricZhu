import { FaRegUser } from "react-icons/fa";
import { IoNewspaper } from "react-icons/io5";
import { FaTools } from "react-icons/fa";
import { MdEmail } from "react-icons/md";



function SideButtons(){
    return (
    <div> 
      <button><FaRegUser /></button>
      <button><IoNewspaper /></button> 
      <button><FaTools /></button>
      <button><MdEmail /></button> 
      </div>
    );
}

export default SideButtons;