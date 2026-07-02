import { NavLink } from "react-router-dom";
import {Menu , X } from "lucide-react"
import { useState } from "react";
const Nav = () => {
    const navlinks = <>
           <NavLink
        to="/about"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-sky-500" : ""
        }
        >
        <button className=" text-lg font-semibold">About</button>
        </NavLink>
        <NavLink
        to="/projects"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-sky-500" : ""
        }
        >
       <button className=" text-lg font-semibold">Projects</button>
        </NavLink>
        <NavLink
        to="/contact"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-sky-500" : ""
        }
        >
       <button className=" text-lg font-semibold">Contact</button>
        </NavLink>
    
    </>
    const [isOpen , SetisOpen] = useState(false)
    const navabrToggle = () =>{
        SetisOpen(!isOpen)
    }
    return (
        <>
        <div className="w-1/3 flex justify-end">
            <div className="hidden md:flex justify-around w-full">
            {navlinks}
        </div>
        <div>
            <button className="md:hidden" onClick={navabrToggle}>{
                isOpen ? <X/> : <Menu/>
            }</button>
           
        </div>
       
        </div>
        {
    isOpen && 
    <div className="flex basis-full flex-col items-center">
    {navlinks}
    </div>
   }
        </>
    );
};

export default Nav;

