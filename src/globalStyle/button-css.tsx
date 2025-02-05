export const buttonCSS = (darkmode: boolean) => {
  return `${darkmode ? 'bg-mainColorDark text-black' : 'bg-mainColorLight text-white'} px-4 py-2 rounded transition-all duration-500 w-full text-center hover:brightness-50`;
};
