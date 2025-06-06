"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { MdOutlineContactSupport } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full sticky  top-0 z-50  bg-black shadow-md">
      <nav className="flex px-4 py-6 justify-between items-center font-poppins relative max-w-7xl mx-auto">
        {/* Logo */}

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-x-4 items-center">
          <Link href={"/"}>Book</Link>
          <Link href={"/"}>Writer</Link>
          <Link href={"/"}>Article</Link>
          <Link href={"/"}>Character</Link>
        </div>
        <div>
          <Image src={"/images/logo.png"} width={60} height={60} alt="logo" />
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex gap-x-4 items-center">
          <Link href={"/"} className="flex items-center gap-1">
            <MdOutlineContactSupport /> Contact
          </Link>
          <Link href={"/"} className="flex items-center gap-1">
            <CiShoppingCart /> Cart
          </Link>
          <Link href={"/"} className="flex items-center gap-1">
            <IoSearch /> Search
          </Link>
        </div>

        {/* Hamburger Icon - Mobile Only */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col px-4 py-2 space-y-2 md:hidden z-50 text-black">
            <Link href={"/"} onClick={() => setMenuOpen(false)}>
              Book
            </Link>
            <Link href={"/"} onClick={() => setMenuOpen(false)}>
              Writer
            </Link>
            <Link href={"/"} onClick={() => setMenuOpen(false)}>
              Article
            </Link>
            <Link href={"/"} onClick={() => setMenuOpen(false)}>
              Character
            </Link>
            <hr />
            <Link
              href={"/"}
              className="flex items-center gap-1"
              onClick={() => setMenuOpen(false)}
            >
              <MdOutlineContactSupport /> Contact
            </Link>
            <Link
              href={"/"}
              className="flex items-center gap-1"
              onClick={() => setMenuOpen(false)}
            >
              <CiShoppingCart /> Cart
            </Link>
            <Link
              href={"/"}
              className="flex items-center gap-1"
              onClick={() => setMenuOpen(false)}
            >
              <IoSearch /> Search
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
