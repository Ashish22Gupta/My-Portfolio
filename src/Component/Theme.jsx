import React from "react";
import { Sliders } from 'lucide-react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const Theme = ({ theme, setTheme,bg,textColor }) => {
  // Function to handle theme change
  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  return (
    <div className={`${bg} ${textColor}shadow-lg shadow-white-500/50 rounded-sm mt-3 ml-3 flex items-center h-20 text-center max-xl:mr-3 max-xl:h-fit`}>
      <div className="ml-3">
        <h1 className="text-xl font-medium max-xl:text-6xl">Theme</h1>
        <p className="max-xl:text-4xl">{theme}</p> {/* Display selected theme */}
      </div>
      <div className="flex items-center ml-auto mr-3">
        <Sliders className="ml-9 max-xl:ml-10 max-xl:h-12 max-xl:w-12" color={theme === 'Dark' ? 'white' : 'black'} size={20} />
        <Menu as="div" className="relative inline-block text-center">
          <div className="max-xl:mr-3">
            <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold shadow-sm max-xl:text-4xl">
              Select Theme
              <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400 max-xl:h-12 max-xl:w-12" />
            </MenuButton>
          </div>

          <MenuItems
            transition
            className="absolute z-10 mt-2 left-0 right-0 mx-auto w-auto max-xl:w-auto origin-top divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
            <div className="py-1">
              <MenuItem>
                <a
                  href="#"
                  onClick={() => handleThemeChange('Dark')}
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 max-xl:text-4xl">
                  Dark
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="#"
                  onClick={() => handleThemeChange('Light')}
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 max-xl:text-4xl">
                  Light
                </a>
              </MenuItem>
            </div>
          </MenuItems>
        </Menu>
      </div>
    </div>
  );
};

export default Theme;
