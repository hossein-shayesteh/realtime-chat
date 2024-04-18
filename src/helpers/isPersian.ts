const isPersian = (text: string | undefined) => {
  if (!text) return;
  const pattern = /[\u0600-\u06FF]/;
  return pattern.test(text);
};
export default isPersian;
