"use client"
import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";
import { NavLink } from "./NavLink";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid"

const navLinks = [{href: '#about', title:'About'}, {href: '#projects', title:'Projects'}, {href: '#contact', title:'Contact'}]

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-95">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href={"/"} className="text-5xl text-white font-semibold">
        <div className="bg-white rounded-full border-4 border-red-500 hover:bg-slate-400">
            <Image
            
            src="/images/surname.png"
            alt='yongqin'
            width={70}
            height={10}
            />
        </div>
          </Link>

          <div className="mobile-menu block md:hidden">
              {!navbarOpen? (
                <button onClick={() => setNavbarOpen(true)} className="flex items-center px-3 py-2 text-slate-200 border-slate-200 hove:text-white hover:border-white">
                  <Bars3Icon className="h-5 w-5"/>
                </button>
              ): (
                <button onClick={() => setNavbarOpen(false)} className="flex items-center px-3 py-2 text-slate-200 border-slate-200 hove:text-white hover:border-white">
                  <XMarkIcon className="h-5 w-5"/>
                </button>
              )}
          </div>

          <div className="menu hidden md:block md:w-auto" id="navbar">
            <ul className="flex pd-4 md:p-0 md:flex-row md:space-x-8 mt-0">
              {navLinks.map((props) => (
                <li>
                  <NavLink {...props}/>
                </li>
              ))}
            </ul>
          </div>
      </div>
    </nav>
  )
}
