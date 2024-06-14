import { Message } from "../message/Message";
import { User } from "../user/User";

export type ChatRoom = {
  createdAt: Date;
  description: string | null;
  id: string;
  messages?: Array<Message>;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
