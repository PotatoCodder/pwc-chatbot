"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, GraduationCap, Phone, School, ChevronRight, Map } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PWCNavbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isActive = (path: string): boolean => pathname === path;

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-xl shadow-sm">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group cursor-pointer">
              <div className="relative">
                <School className="h-8 w-8 lg:h-9 lg:w-9 text-[#800000] transition-transform group-hover:scale-110 duration-300" />
                <div className="absolute inset-0 bg-[#800000]/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg lg:text-xl font-bold text-[#800000] tracking-tight">
                  PWC Davao
                </span>
                <span className="text-xs text-gray-700 hidden sm:block">
                  Excellence in Education
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-2 lg:gap-4">
              <NavItem 
                icon={<GraduationCap size={20} />} 
                label="Academics" 
                href="/academics"
                active={isActive('/academics')}
              />
              <Link href="/enroll">
                <button className="ml-2 px-5 lg:px-6 py-2.5 bg-[#800000] text-white font-medium rounded-full hover:bg-[#990000] active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg">
                  Enroll Now
                </button>
              </Link>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2.5 rounded-xl hover:bg-[#800000]/10 active:bg-[#800000]/20 transition-all duration-200"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <div className="relative w-6 h-6">
                <Menu
                  size={24}
                  className={`absolute inset-0 transition-all duration-300 ${
                    open ? "opacity-0 rotate-90" : "opacity-100 rotate-0 text-[#800000]"
                  }`}
                />
                <X
                  size={24}
                  className={`absolute inset-0 transition-all duration-300 ${
                    open ? "opacity-100 rotate-0 text-[#800000]" : "opacity-0 -rotate-90"
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-gray-300 bg-white/30 backdrop-blur-xl">
            <div className="px-4 py-4 space-y-1">
              <MobileNavItem 
                icon={<GraduationCap size={20} />} 
                label="Academics" 
                href="/academics"
                onClick={() => setOpen(false)}
                active={isActive('/academics')}
              />
              <MobileNavItem 
                icon={<Phone size={20} />} 
                label="Contact Us" 
                href="/contact"
                onClick={() => setOpen(false)}
                active={isActive('/contact')}
              />
              <div className="pt-3 pb-2">
                <Link href="/enroll">
                  <button
                    className="w-full px-5 py-3 bg-[#800000] text-white font-medium rounded-xl hover:bg-[#990000] active:scale-[0.98] transition-all duration-200 shadow-md"
                    onClick={() => setOpen(false)}
                  >
                    Enroll Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay for mobile menu */}
      {open && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Spacer to prevent content jump */}
      <div className="h-16 lg:h-20" />
    </>
  );
}

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  active: boolean;
}

interface MobileNavItemProps {
  label: string;
  icon: React.ReactNode;
  href: string;
  onClick: () => void;
  active: boolean;
}

function NavItem({ icon, label, href, active }: NavItemProps) {
  return (
    <Link href={href}>
      <button className={`group relative flex items-center gap-2 px-4 lg:px-5 py-2.5 font-medium rounded-xl active:scale-95 transition-all duration-200 ${
        active 
          ? 'text-[#990000] bg-[#800000]/10' 
          : 'text-[#800000] hover:text-[#990000]'
      }`}>
        <span className="transition-transform group-hover:scale-110 duration-200">{icon}</span>
        <span>{label}</span>
        <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-[#800000] transition-all duration-300 ${
          active ? 'w-3/4' : 'w-0 group-hover:w-3/4'
        }`} />
      </button>
    </Link>
  );
}

function MobileNavItem({ label, icon, href, onClick, active }: MobileNavItemProps) {
  return (
    <Link href={href}>
      <button
        onClick={onClick}
        className={`group w-full flex items-center justify-between px-4 py-3 font-medium rounded-xl active:scale-[0.98] transition-all duration-200 ${
          active 
            ? 'bg-[#800000]/10 text-[#990000]' 
            : 'text-[#800000] hover:bg-[#800000]/10 hover:text-[#990000]'
        }`}
      >
        <div className="flex items-center gap-3">
          <span className="transition-transform group-hover:scale-110 duration-200">{icon}</span>
          <span>{label}</span>
        </div>
        <ChevronRight size={18} className={`transition-all duration-200 group-hover:translate-x-1 ${
          active ? 'text-[#800000]' : 'text-gray-400 group-hover:text-[#800000]'
        }`} />
      </button>
    </Link>
  );
}