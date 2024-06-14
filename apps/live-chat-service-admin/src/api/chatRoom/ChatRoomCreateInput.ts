import { MessageCreateNestedManyWithoutChatRoomsInput } from "./MessageCreateNestedManyWithoutChatRoomsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ChatRoomCreateInput = {
  description?: string | null;
  messages?: MessageCreateNestedManyWithoutChatRoomsInput;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
