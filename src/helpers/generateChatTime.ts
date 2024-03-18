const generateChatTime = (date: number) => {
  const time = new Date(date);
  return time.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
};
export default generateChatTime;
