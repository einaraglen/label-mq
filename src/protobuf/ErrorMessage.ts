import { Message, Field } from "protobufjs/light";

export class ErrorMessage extends Message<ErrorMessage> {
  @Field.d(1, "string", "required")
  public user_id: string;

  @Field.d(2, "string", "required")
  public created_at: string;

  @Field.d(3, "string", "required")
  public message: string;

  @Field.d(4, "string", "required")
  public version: string;
}