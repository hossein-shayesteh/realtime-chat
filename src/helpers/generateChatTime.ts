const generateChatTime = (date: number | undefined) => {
  if (!date) return;
  const time = new Date(date);
  return time.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
};
export default generateChatTime;
