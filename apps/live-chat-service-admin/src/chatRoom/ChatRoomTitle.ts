import { ChatRoom as TChatRoom } from "../api/chatRoom/ChatRoom";

export const CHATROOM_TITLE_FIELD = "title";

export const ChatRoomTitle = (record: TChatRoom): string => {
  return record.title?.toString() || String(record.id);
};
