import { Message, Field } from "protobufjs/light";

export class PrintMessage extends Message<PrintMessage> {
  @Field.d(1, "string", "required")
  public page: string;

  @Field.d(2, "int32", "required")
  public label_count: number;

  @Field.d(3, "string", "required")
  public user_id: string;

  @Field.d(4, "string", "required")
  public version: string;

  @Field.d(5, "string", "required")
  public created_at: string;
}
