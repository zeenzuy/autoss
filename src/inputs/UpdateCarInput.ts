import { InputType, Field } from "type-graphql";

@InputType()
export class UpdateCarInput {
  @Field({nullable: true})
  brand?: string;

  @Field({nullable: true})
  color?: string;

  @Field({nullable: true})
  year?: string;

  @Field({nullable: true})
  isSold?: boolean;
}
