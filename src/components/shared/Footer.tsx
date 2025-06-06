import React from 'react'
import Link from 'next/link'
import Wrapper from './Wrapper'

const Footer = () => {
  return (
    <footer className="bg-black text-paragraph font-poppins text-sm mt-10">
      <Wrapper>
        <div className="py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Left - Links */}
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Link href="/" className="hover:text-white transition duration-300">
              Home
            </Link>
            <Link href="/books" className="hover:text-white transition duration-300">
              Books
            </Link>
            <Link href="/writers" className="hover:text-white transition duration-300">
              Writers
            </Link>
            <Link href="/articles" className="hover:text-white transition duration-300">
              Articles
            </Link>
            <Link href="/contact" className="hover:text-white transition duration-300">
              Contact
            </Link>
          </div>

          {/* Right - Copyright */}
          <div className="text-center sm:text-right text-[13px] text-[#8d8d8d]">
            © {new Date().getFullYear()} BookVerse. All rights reserved.
          </div>
        </div>
      </Wrapper>
    </footer>
  )
}

export default Footer
