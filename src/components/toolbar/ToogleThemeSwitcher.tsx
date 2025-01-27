import React from 'react';
import {Icon, ToggleGroup, ToggleGroupItem} from '@patternfly/react-core';
import MoonIcon from '@patternfly/react-icons/dist/esm/icons/moon-icon';
import SunIcon from '@patternfly/react-icons/dist/esm/icons/sun-icon';

export const ToggleThemeSwitcher: React.FunctionComponent = () => { 
  let isDarkTheme: boolean = false;

  const toggleDarkTheme = (_evt: any, selected: boolean) => {
      const darkThemeToggleClicked = !selected === isDarkTheme
      const html = document.querySelector('html');

      if (html) {
        html.classList.toggle('pf-v5-theme-dark', darkThemeToggleClicked);
        isDarkTheme = darkThemeToggleClicked;
      } else {
        console.error('Error toggleing dark theme. No HTML content found.')
      }
    };

  return (
    <ToggleGroup aria-label="Dark theme toggle group">
      <ToggleGroupItem aria-label="light theme toggle" icon={<Icon size="md"><SunIcon /></Icon>} isSelected={!isDarkTheme} onChange={toggleDarkTheme} />
      <ToggleGroupItem aria-label="dark theme toggle" icon={<Icon size="md"><MoonIcon /></Icon>} isSelected={isDarkTheme} onChange={toggleDarkTheme} />
    </ToggleGroup> 
  );
}