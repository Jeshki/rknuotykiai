// src/components/Navigation.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

function Navigation() {
  const { theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Spalvų kintamieji pagal temą
  const navBgColor = theme === 'light' ? 'bg-emerald-950' : 'bg-green-900';
  const navTextColor = 'text-slate-100';
  const navActiveLinkColor = 'font-bold text-slate-100';

  return (
    <nav className={`${navBgColor} p-4 shadow-md`}>
      <div className="container mx-auto flex items-center justify-between">
        <div className={`text-lg font-bold ${navTextColor}`}>
          LOGO
        </div>

        {/* Meniu mygtukas mobiliesiems įrenginiams */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <X size={24} className={navTextColor} />
          ) : (
            <Menu size={24} className={navTextColor} />
          )}
        </button>

        {/* Pagrindinis meniu */}
        <ul className="hidden md:flex flex-row space-x-4 items-center">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-lg uppercase ${isActive ? navActiveLinkColor : ''} ${navTextColor} hover:opacity-80 transition-opacity`
              }
            >
              Apie mane
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/zygiai"
              className={({ isActive }) =>
                `text-lg uppercase ${isActive ? navActiveLinkColor : ''} ${navTextColor} hover:opacity-80 transition-opacity`
              }
            >
              Žygiai
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/paslaugos"
              className={({ isActive }) =>
                `text-lg uppercase ${isActive ? navActiveLinkColor : ''} ${navTextColor} hover:opacity-80 transition-opacity`
              }
            >
              Paslaugos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/artimiausi-renginiai"
              className={({ isActive }) =>
                `text-lg uppercase ${isActive ? navActiveLinkColor : ''} ${navTextColor} hover:opacity-80 transition-opacity`
              }
            >
              Artimiausi renginiai
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/atsiliepimai"
              className={({ isActive }) =>
                `text-lg uppercase ${isActive ? navActiveLinkColor : ''} ${navTextColor} hover:opacity-80 transition-opacity`
              }
            >
              Atsiliepimai
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/kontaktai"
              className={({ isActive }) =>
                `text-lg uppercase ${isActive ? navActiveLinkColor : ''} ${navTextColor} hover:opacity-80 transition-opacity`
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

      {/* Mobilusis meniu */}
      {isMenuOpen && (
        <div className={`md:hidden flex flex-col space-y-4 p-4 ${navBgColor}`}>
          <NavLink
            to="/"
            onClick={toggleMenu}
            className={({ isActive }) =>
              `text-lg uppercase ${isActive ? navActiveLinkColor : ''} ${navTextColor} hover:opacity-80 transition-opacity`
            }
          >
            Apie mane
          </NavLink>
          <NavLink
            to="/zygiai"
            onClick={toggleMenu}
            className={({ isActive }) =>
              `text-lg uppercase ${isActive ? navActiveLinkColor : ''} ${navTextColor} hover:opacity-80 transition-opacity`
            }
          >
            Žygiai
          </NavLink>
          <NavLink
            to="/paslaugos"
            onClick={toggleMenu}
            className={({ isActive }) =>
              `text-lg uppercase ${isActive ? navActiveLinkColor : ''} ${navTextColor} hover:opacity-80 transition-opacity`
            }
          >
            Paslaugos
          </NavLink>
          <NavLink
            to="/artimiausi-renginiai"
            onClick={toggleMenu}
            className={({ isActive }) =>
              `text-lg uppercase ${isActive ? navActiveLinkColor : ''} ${navTextColor} hover:opacity-80 transition-opacity`
            }
          >
            Artimiausi renginiai
          </NavLink>
          <NavLink
            to="/atsiliepimai"
            onClick={toggleMenu}
            className={({ isActive }) =>
              `text-lg uppercase ${isActive ? navActiveLinkColor : ''} ${navTextColor} hover:opacity-80 transition-opacity`
            }
          >
            Atsiliepimai
          </NavLink>
          <NavLink
            to="/kontaktai"
            onClick={toggleMenu}
            className={({ isActive }) =>
              `text-lg uppercase ${isActive ? navActiveLinkColor : ''} ${navTextColor} hover:opacity-80 transition-opacity`
            }
          >
            Kontaktai
          </NavLink>
          <li>
            <ThemeToggle />
          </li>
        </div>
      )}
    </nav>
  );
}

export default Navigation;