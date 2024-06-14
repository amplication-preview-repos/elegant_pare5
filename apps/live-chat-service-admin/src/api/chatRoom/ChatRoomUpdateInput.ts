import { MessageUpdateManyWithoutChatRoomsInput } from "./MessageUpdateManyWithoutChatRoomsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ChatRoomUpdateInput = {
  description?: string | null;
  messages?: MessageUpdateManyWithoutChatRoomsInput;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
