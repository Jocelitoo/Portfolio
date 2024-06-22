export const h2SpanCSS = (darkMode: boolean) => {
  return `after:inline-block ${darkMode ? 'after:bg-mainColorDark' : 'after:bg-mainColorLight'} after:w-full after:h-[2px] after:rounded-full after:absolute after:left-0 after:-bottom-1`;
};
