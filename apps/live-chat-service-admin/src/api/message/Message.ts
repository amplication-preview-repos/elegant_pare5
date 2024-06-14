import { ChatRoom } from "../chatRoom/ChatRoom";
import { User } from "../user/User";

export type Message = {
  chatRoom?: ChatRoom | null;
  content: string | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
