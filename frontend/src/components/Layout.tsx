"use client";

import React from "react";
import Link from "next/link";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className='container mx-auto p-4'>
      <nav className='flex space-x-4 mb-4'>
        <Link href='/'>Home</Link>
        <Link href='/companies'>Companies</Link>
        <Link href='/investments'>Investments</Link>
      </nav>
      {children}
    </div>
  );
};

export default Layout;
