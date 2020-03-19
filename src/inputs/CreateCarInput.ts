import { InputType, Field } from "type-graphql";

@InputType()
export class CreateCarInput { 
  @Field()
  brand: string;

  @Field()
  color: string;

  @Field() 
  year: string;

}