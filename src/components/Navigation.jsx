import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

function Navigation() {
  const { theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const bgColor = theme === 'light' ? 'bg-very-dark-gray' : 'bg-accentYellow';
  const textColorDesktop = theme === 'light' ? 'text-accentYellow' : 'text-very-dark-gray';
  const textColorMobile = theme === 'light' ? 'text-accentYellow' : 'text-very-dark-gray';

  const activeLinkColor = theme === 'light' ? 'text-accentYellow' : 'text-very-dark-gray';

  return (
    <nav className={`${bgColor} p-4 shadow-md`}>
      <div className="container mx-auto flex items-center justify-between">
        <div className={`text-lg font-bold ${textColorDesktop}`}>
          LOGO
        </div>

        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <FaTimes size={24} className={textColorDesktop} />
          ) : (
            <FaBars size={24} className={textColorDesktop} />
          )}
        </button>

        <ul className="hidden md:flex flex-row space-x-4 items-center">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${textColorDesktop} text-lg uppercase ${isActive ? `font-bold ${activeLinkColor}` : ''}`
              }
            >
              Apie mane
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/zygiai"
              className={({ isActive }) =>
                `${textColorDesktop} text-lg uppercase ${isActive ? `font-bold ${activeLinkColor}` : ''}`
              }
            >
              Žygiai
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/paslaugos"
              className={({ isActive }) =>
                `${textColorDesktop} text-lg uppercase ${isActive ? `font-bold ${activeLinkColor}` : ''}`
              }
            >
              Paslaugos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/artimiausi-renginiai"
              className={({ isActive }) =>
                `${textColorDesktop} text-lg uppercase ${isActive ? `font-bold ${activeLinkColor}` : ''}`
              }
            >
              Artimiausi renginiai
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/kontaktai"
              className={({ isActive }) =>
                `${textColorDesktop} text-lg uppercase ${isActive ? `font-bold ${activeLinkColor}` : ''}`
              }
            >
              Kontaktai
            </NavLink>
          </li>
            <li>
              <ThemeToggle />
            </li>
        </ul>
      </div>

      {isMenuOpen && (
        <div className={`md:hidden flex flex-col space-y-4 p-4 ${bgColor}`}>
          <NavLink
            to="/"
            onClick={toggleMenu}
            className={({ isActive }) =>
              `${textColorMobile} text-lg uppercase ${isActive ? `font-bold ${activeLinkColor}` : ''}`
            }
          >
            Apie mane
          </NavLink>
            <NavLink
            to="/zygiai"
            onClick={toggleMenu}
            className={({ isActive }) =>
              `${textColorMobile} text-lg uppercase ${isActive ? `font-bold ${activeLinkColor}` : ''}`
            }
          >
            Žygiai
          </NavLink>
            <NavLink
            to="/paslaugos"
            onClick={toggleMenu}
            className={({ isActive }) =>
              `${textColorMobile} text-lg uppercase ${isActive ? `font-bold ${activeLinkColor}` : ''}`
            }
          >
            Paslaugos
          </NavLink>
            <NavLink
            to="/artimiausi-renginiai"
            onClick={toggleMenu}
            className={({ isActive }) =>
              `${textColorMobile} text-lg uppercase ${isActive ? `font-bold ${activeLinkColor}` : ''}`
            }
          >
            Artimiausi renginiai
          </NavLink>
            <NavLink
            to="/kontaktai"
            onClick={toggleMenu}
            className={({ isActive }) =>
              `${textColorMobile} text-lg uppercase ${isActive ? `font-bold ${activeLinkColor}` : ''}`
            }
          >
            Kontaktai
          </NavLink>
            <ThemeToggle />
        </div>
      )}
    </nav>
  );
}

export default Navigation;