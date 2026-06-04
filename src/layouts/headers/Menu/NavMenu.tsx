'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import menu_data from './MenuData';

const NavMenu = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Load active index from localStorage on initial render
  useEffect(() => {
    const storedIndex = localStorage.getItem('activeIndex');
    if (storedIndex !== null) {
      setActiveIndex(parseInt(storedIndex));
    }
  }, []);

  // Update localStorage when activeIndex changes
  useEffect(() => {
    if (activeIndex !== null) {
      localStorage.setItem('activeIndex', activeIndex.toString());
    }
  }, [activeIndex]);

  const handleClick = (index: number) => {
    setActiveIndex(prevIndex => (prevIndex === index ? prevIndex : index));
  };

  return (
    <ul className="m-0 flex list-none items-center p-0">
      {menu_data.map((item, i) => (
        <li key={i} className="group relative">
          <Link href={item.link} className="no-underline">
            <div
              onClick={() => handleClick(i)}
              className={`relative mr-5 text-base text-gray-900 transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-full after:bg-primary after:transition-opacity ${
                activeIndex === i
                  ? 'text-primary after:opacity-100'
                  : 'after:opacity-0 group-hover:text-primary group-hover:after:opacity-100'
              }`}
            >
              {item.title} {item.has_dropdown && <i className="fas fa-chevron-down ml-1 text-xs"></i>}
            </div>
          </Link>
          {item.has_dropdown && (
            <div className="invisible absolute left-0 top-[125%] z-50 min-w-[200px] rounded-md bg-white opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
              <ul className="m-0 list-none p-2">
                {item.sub_menus?.map((sub_item, index) => (
                  <li key={index}>
                    <Link href={sub_item.link} className="block rounded px-3 py-2 text-sm text-gray-700 no-underline hover:bg-primary-50 hover:text-primary">
                      {sub_item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;
