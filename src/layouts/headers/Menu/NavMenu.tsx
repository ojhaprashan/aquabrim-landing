
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
    setActiveIndex(prevIndex => (prevIndex === index ? prevIndex : index)); // Prevent toggling if already active
  };

  
  return (
    <>
      <ul>
        {menu_data.map((item, i) => (
          <li key={i} className={activeIndex === i ? 'active' : ''}>
            <Link href={item.link}>
              <div onClick={() => handleClick(i)} className="menu-item">
                {item.title} {item.has_dropdown && <i className="fas fa-chevron-down"></i>}
              </div>
            </Link>
            {item.has_dropdown && // Only show submenu if the item has a dropdown
              <div className="sub-menu">
                <ul>
                  {item.sub_menus?.map((sub_item, index) =>
                    <li key={index}><Link href={sub_item.link}>{sub_item.title}</Link></li>
                  )}
                </ul>
              </div>
            }
          </li>
        ))}
      </ul>
      <style jsx>{`
        .menu-item {
          position: relative;
        }

        .menu-item:after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 100%;
          height: 2px;
          background-color: #2FAB73;
          visibility: hidden; /* Hide underline by default */
        }

        .menu-item:hover:after {
          visibility: visible;
          background-color:#2FAB73 ;
        }
        
        .active .menu-item:after {
          visibility: visible;
        }
      `}</style>
    </>
  );
};

export default NavMenu;