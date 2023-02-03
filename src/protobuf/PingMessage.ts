import { Message, Field } from "protobufjs/light";

export class PingMessage extends Message<PingMessage> {
  @Field.d(1, "string", "required")
  public user_id: string;

  @Field.d(2, "string", "required")
  public created_at: string;
}
