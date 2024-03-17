interface PageProps {
  params: { chatId: string };
}

const Chats = ({ params }: PageProps) => {
  const chatId = params.chatId;
  return <div>chat {chatId}</div>;
};
export default Chats;
