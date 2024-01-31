import Link from "next/link";
import React, { useState } from "react";

const menuIcons = [
    {
        name: "Cart",
        icon: "bx bx-shopping-bag",
        responsivePrimary:true
    },
    {
        name: "Sign In",
        icon: "bx bx-user-circle",
        responsivePrimary:true
    },
    {
        name: "Contact",
        icon: "bx bx-support lg:block",
        responsivePrimary:false
    }

]

const navbarCategory = [
    {
        name:"Flowers",
        path:"#"
    },
    {
        name:"Combos",
        path:"#"
    },
    {
        name:"Cakes",
        path:"#"
    },
    {
        name:"Gifts",
        path:"#"
    },
    {
        name:"Decoration",
        path:"#"
    },
    {
        name:"Birthday",
        path:"#"
    },
    {
        name:"Anniversary",
        path:"#"
    },
    {
        name:"Plants",
        path:"#"
    }

]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(true);
    const toggleNavbar = () => {
        setNavbarOpen(!navbarOpen);
    }
    return (
        <>
        <nav className="w-full container-main">
            <div className="flex items-center py-4 lg:p-5 lg:px-6 justify-between gap-4 lg:border-b">
                <div className="flex gap-2 items-center">
                    <i class='bx bx-menu-alt-left text-3xl cursor-pointer lg:hidden' onClick={toggleNavbar}></i>
                    <img src="./images/logo.webp" className="w-36 lg:w-72" alt="logo" />
                </div>

                <div className="lg:flex hidden border min-w-48 h-11 items-center justify-evenly text-slate-600 rounded-full font-semibold hover:bg-[#8C52FC]  hover:text-white cursor-pointer transition-all">
                    <i className='bx bx-navigation text-2xl px-2'></i>
                    <span>Delivery To</span>
                    <i class='bx bx-chevron-down text-2xl px-2' ></i>
                </div>

                <div className="w-2/5 h-11 bg-[#F3F3F9] lg:flex items-center border rounded-full hover:shadow transition hidden">
                    <input type="text" placeholder="Search for gift" className="bg-inherit h-full px-4 py-1 w-full outline-none rounded-full" />
                    <i class='bx bx-search text-[#A7A3AF] px-3 text-lg cursor-pointer' ></i>
                </div>

                <div className="flex md:gap-2 gap-1">
                <div className="flex flex-col items-center justify-center hover:text-[#8C52FC] lg:px-4 text-slate-600 cursor-pointer lg:hidden" >
                    <i class='bx bx-navigation text-2xl' ></i>
                </div>

                    {
                        menuIcons.map((item, index) => {
                            return (
                                <div className={`${item.responsivePrimary ? 'flex' : 'hidden lg:flex'} flex-col items-center min-w-fit justify-center hover:text-[#8C52FC]  px-1 lg:px-4 text-slate-600 cursor-pointer `} key={index}>
                                    <i className={`${item.icon} text-2xl`}></i>
                                    <p className="hidden lg:block">{item.name}</p>
                                </div>
                            )
                        })
                    }


                    <div className="flex flex-col items-center hover:text-[#8C52FC] lg:px-4 text-slate-600 cursor-pointer" >
                        <i class='bx bx-dots-vertical-rounded text-2xl' ></i>
                        <p className="hidden lg:block">More</p>
                    </div>


                </div>
            </div>

            <div className="h-11 bg-[#F3F3F9] flex items-center rounded-full  transition lg:mx-6 border lg:hidden">
                <input type="text" placeholder="Search for gift" className="bg-inherit h-full px-4 py-1 w-full outline-none rounded-full" />
                <i class='bx bx-search text-[#A7A3AF] px-3 text-lg cursor-pointer' ></i>
            </div>

            <div className="w-full lg:flex items-center gap-10  px-6 border-b hidden">
                <ul>
                    {
                        navbarCategory.map((item, index) => {
                            return (
                                <li className="inline-block cursor-pointer hover:border-b-2 border-[#8C52FC] hover:font-medium hover:text-[#8C52FC] px-4 py-2" key={index}>
                                    <Link href={item.path} legacyBehavior>
                                        <a>{item.name}</a>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

        </nav>

        <div className={`w-full h-screen lg:hidden bg-[rgba(0,0,0,0.1)] fixed top-0 left-0 backdrop-blur transition-all ${navbarOpen ? 'fixed' : 'hidden'}`} onClick={toggleNavbar}></div>
        <div className={`top-0 left-0 fixed w-72 h-full lg:hidden transition-all bg-white shadow-lg z-10 ${navbarOpen ? 'ml-[0px]': 'ml-[-288px]'}`}></div>
        </>


    );
}

export default Navbar;