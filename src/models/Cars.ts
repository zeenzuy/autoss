import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

@Entity()
@ObjectType()
export class Cars extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field(() => String)
  @Column()
  brand: string;

  @Field(() => String)
  @Column()
  color: string;

  @Field(() => String)
  @Column()
  year: string;

  @Field(() => Boolean)
  @Column({ default: false })
  isSold: boolean;
}