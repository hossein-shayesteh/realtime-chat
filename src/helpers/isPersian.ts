const isPersian = (text: string) => {
  const pattern = /[\u0600-\u06FF]/;
  return pattern.test(text);
};
export default isPersian;
