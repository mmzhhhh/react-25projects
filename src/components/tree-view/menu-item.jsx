import { useState } from "react";
import MenuList from "./menu-list";
import { FaPlus, FaMinus } from "react-icons/fa";
export default function MenuItem({ item = [] }) {
    const [displayCurrentChildren,setDisplayCurrentChildren]=useState({})
    
    function handleToggleChildren(getCurrentlabel){
        setDisplayCurrentChildren({
            ...displayCurrentChildren,
            [getCurrentlabel]:!displayCurrentChildren[getCurrentlabel]
        })
    }
    console.log(displayCurrentChildren);
    
    return (

    <li>
      <div className="menu-item">
        <p>{item.label}</p>
        {item && item.children && item.children ? (
          <span onClick={()=>handleToggleChildren(item.label)}>
            {displayCurrentChildren[item.label]?<FaMinus/>:<FaPlus/>}
          </span>
        ) : null}
      </div>
      {item && item.children && item.children.length > 0 && displayCurrentChildren[item.label]? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}
