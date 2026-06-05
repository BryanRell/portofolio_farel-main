"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Clock, User, FolderOpen } from "lucide-react";
import clsx from "clsx";

const navItems = [
  { path: "/",           label: "Home",       num: "1", Icon: Home       },
  { path: "/experience", label: "Experience", num: "2", Icon: Clock      },
  { path: "/about",      label: "About",      num: "3", Icon: User       },
  { path: "/works",      label: "Works",      num: "4", Icon: FolderOpen },
];

export function SideNavigation() {
  const pathname = usePathname();

  return (
    <nav className="group fixed left-0 top-1/2 -translate-y-1/2 z-50 hidden lg:block select-none">
      <div className="relative overflow-hidden rounded-r-[28px] bg-[#050505] shadow-xl border border-white/10 border-l-0 transition-all duration-300 ease-out w-14 group-hover:w-44 flex flex-col py-3 gap-1">
        {navItems.map((item) => {
          const isActive =
            pathname === item.path ||
            (item.path !== "/" && pathname.startsWith(item.path));
          const { Icon } = item;

          return (
            <Link
              key={item.path}
              href={item.path}
              className="relative flex items-center h-[44px] px-[14px] mx-[6px] rounded-xl transition-colors duration-200 hover:bg-white/5"
            >
              {/* Active Background Pill */}
              {isActive && (
                <div className="absolute inset-0 bg-white/10 rounded-xl" />
              )}

              {/* Icon Container (Always visible) */}
              <div
                className={clsx(
                  "relative z-10 flex items-center justify-center shrink-0 w-5 h-5 transition-colors",
                  isActive ? "text-white" : "text-white/40"
                )}
              >
                <Icon className="w-[18px] h-[18px]" />
              </div>

              {/* Label & Number (Revealed on hover) */}
              <div className="relative z-10 flex-1 flex items-center justify-between ml-3 opacity-0 translate-x-[-8px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out whitespace-nowrap">
                <span
                  className={clsx(
                    "text-[14px] font-medium transition-colors",
                    isActive ? "text-white" : "text-white/40"
                  )}
                >
                  {item.label}
                </span>
                <span className="text-[12px] text-white/20 font-mono">
                  {item.num}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
