"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import menu_data from "./MenuData";
import Link from "next/link";

// Maps a menu title to a bootstrap-icon (mirrors the old SCSS-driven markup).
const iconFor = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes("home")) return "bi-house-door";
  if (t.includes("about")) return "bi-info-circle";
  if (t.includes("product") || t.includes("shop")) return "bi-bag";
  if (t.includes("service")) return "bi-gear";
  if (t.includes("project")) return "bi-briefcase";
  if (t.includes("contact")) return "bi-envelope";
  if (t.includes("support")) return "bi-headset";
  if (t.includes("blog")) return "bi-journal-text";
  return "bi-grid";
};

const MobileMeneu = () => {
  const [open, setOpen] = useState(false);
  const [navTitle, setNavTitle] = useState("");
  const pathname = usePathname();

  const toggleSub = (menu: string) =>
    setNavTitle(navTitle === menu ? "" : menu);

  const isActive = (link: string) =>
    link === "/" ? pathname === "/" : pathname === link || pathname.startsWith(link + "/");

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* ===== Mobile top bar (below lg) ===== */}
      <div className="sticky top-0 z-[997] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)] lg:hidden">
        <div className="flex items-center justify-between px-4 py-2.5">
          <Link href="/" className="flex items-center no-underline">
            <img
              src="/assets/images/logo_blue.png"
              width={35}
              height={35}
              alt="Aquabrim"
              className="h-[35px] w-auto object-contain"
            />
            <span className="ml-2 text-[20px] font-bold text-[#006CD0]">Aquabrim</span>
          </Link>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-[#006CD0]"
          >
            <i className="bi bi-list text-[28px]"></i>
          </button>
        </div>
      </div>

      {/* ===== Overlay ===== */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[10000] bg-[#0b1f3a]/50 backdrop-blur-[3px] transition-opacity duration-[400ms] lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      />

      {/* ===== Drawer ===== */}
      <aside
        className={`fixed left-0 top-0 z-[10001] flex h-screen w-[330px] max-w-[86vw] flex-col overflow-hidden rounded-r-[28px] bg-white shadow-[24px_0_60px_-12px_rgba(11,31,58,0.35)] transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] lg:hidden ${
          open ? "translate-x-0" : "-translate-x-[110%]"
        }`}
        aria-hidden={!open}
      >
        {/* Header */}
        <div className="relative flex items-center justify-between bg-gradient-to-br from-white to-[#eef5ff] px-4 py-3">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex items-center no-underline"
          >
            <img
              src="/assets/images/logo_blue.png"
              width={34}
              height={34}
              alt="Aquabrim"
              className="h-[32px] w-auto object-contain"
            />
            <span className="ml-2 text-[19px] font-extrabold tracking-[-0.3px] text-[#006CD0]">Aquabrim</span>
          </Link>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#006CD0] shadow-[0_4px_12px_-4px_rgba(0,108,208,0.4)] ring-1 ring-inset ring-[#006CD0]/10 transition-all duration-300 hover:rotate-90 hover:bg-[#006CD0] hover:text-white"
          >
            <i className="bi bi-x-lg text-[14px]"></i>
          </button>
          {/* gradient divider */}
          <span className="absolute inset-x-4 bottom-0 h-px bg-gradient-to-r from-transparent via-[#006CD0]/25 to-transparent" />
        </div>

        {/* Nav links */}
        <ul className="m-0 flex list-none flex-col gap-1 p-3">
          {menu_data.map((item, i) => {
            const active = isActive(item.link);
            return (
              <li key={i}>
                <Link
                  href={item.link}
                  onClick={() => !item.has_dropdown && setOpen(false)}
                  style={{ transitionDelay: open ? `${110 + i * 55}ms` : "0ms" }}
                  className={`group relative flex items-center gap-3.5 rounded-2xl px-3 py-2.5 no-underline transition-all duration-[450ms] ease-out ${
                    open ? "translate-x-0 opacity-100" : "-translate-x-5 opacity-0"
                  } ${
                    active
                      ? "bg-gradient-to-r from-[#006CD0]/[0.1] via-[#006CD0]/[0.04] to-transparent"
                      : "hover:bg-[#006CD0]/[0.05]"
                  }`}
                >
                  {/* active accent bar */}
                  <span
                    className={`absolute left-0 top-1/2 h-7 w-[3px] -translate-y-1/2 rounded-r-full bg-gradient-to-b from-[#006CD0] to-[#00a4ff] transition-opacity duration-300 ${
                      active ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-[18px] transition-all duration-300 ${
                      active
                        ? "bg-gradient-to-br from-[#006CD0] to-[#004c99] text-white shadow-[0_8px_18px_-6px_rgba(0,108,208,0.6)]"
                        : "bg-[#006CD0]/[0.08] text-[#006CD0] group-hover:bg-[#006CD0] group-hover:text-white"
                    }`}
                  >
                    <i className={`bi ${iconFor(item.title)}`}></i>
                  </span>
                  <span
                    className={`flex-1 text-[15.5px] font-semibold tracking-[-0.1px] transition-colors ${
                      active ? "text-[#0f172a]" : "text-[#334155] group-hover:text-[#006CD0]"
                    }`}
                  >
                    {item.title}
                  </span>
                  <i
                    className={`bi bi-chevron-right text-[12px] transition-all duration-300 ${
                      active
                        ? "text-[#006CD0]"
                        : "text-[#cbd5e1] group-hover:translate-x-1 group-hover:text-[#006CD0]"
                    }`}
                  ></i>
                </Link>

                {item.has_dropdown && (
                  <>
                    <button
                      type="button"
                      onClick={() => toggleSub(item.title)}
                      aria-expanded={navTitle === item.title}
                      className="flex w-full items-center justify-end px-6 py-2 text-[18px] text-[#006CD0]"
                    >
                      <i
                        className={`bi bi-plus-lg transition-transform duration-300 ${
                          navTitle === item.title ? "rotate-45" : ""
                        }`}
                      ></i>
                    </button>
                    <ul
                      className={`m-0 list-none p-0 ${
                        navTitle === item.title ? "block" : "hidden"
                      }`}
                    >
                      {item.sub_menus?.map((sub, idx) => (
                        <li key={idx}>
                          <Link
                            href={sub.link}
                            onClick={() => setOpen(false)}
                            className="block rounded-xl py-2.5 pl-16 pr-6 text-[14px] font-medium text-[#475569] no-underline transition-colors hover:bg-[#006CD0]/[0.05] hover:text-[#006CD0]"
                          >
                            {sub.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
};

export default MobileMeneu;
