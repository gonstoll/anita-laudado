import {useState, useEffect, useCallback, useRef, useMemo} from 'react';
import {Theme} from 'styled-components';
import {themes} from '../theme/index';

const THEMES_ALIASES: Theme[] = [
  'green',
  'yellow',
  'purple',
  'orange',
  'blue',
  'pink',
  'natural',
];

const DEFAULT_DELAY = 7000;

export function useTheme(delay?: number) {
  const storedTheme = useMemo(
    () => localStorage.getItem('theme') as Theme | null,
    []
  );

  const [theme, setTheme] = useState<Theme>(storedTheme || 'green');

  const randomTheme = useMemo(() => {
    const filteredThemes = THEMES_ALIASES.filter(
      themeAlias => themeAlias !== theme
    );
    return filteredThemes[Math.floor(Math.random() * filteredThemes.length)];
  }, [theme]);

  const interval = useRef<NodeJS.Timeout>();

  const changeTheme = useCallback(
    (theme?: Theme) => {
      setTheme(theme || randomTheme);
      localStorage.setItem('theme', theme || randomTheme);
    },
    [randomTheme]
  );

  const autoChange = useCallback(() => {
    interval.current = setInterval(() => {
      changeTheme();
    }, delay || DEFAULT_DELAY);
  }, [changeTheme, delay]);

  useEffect(() => {
    autoChange();
    return () => {
      if (interval.current) {
        clearInterval(interval.current);
      }
    };
  }, [autoChange]);

  return {
    theme: themes[theme],
    changeTheme,
  };
}
