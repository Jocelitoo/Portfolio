export const buttonCSS = (darkmode: boolean) => {
  return `${darkmode ? 'bg-mainColorDark text-black' : 'bg-mainColorLight text-white'} p-3 rounded transition-all duration-500 hover:brightness-50`;
};
