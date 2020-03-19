import { Resolver, Query,Mutation,Arg } from "type-graphql";
import { Cars } from "../models/Cars";

import { CreateCarInput } from "../inputs/CreateCarInput";
import { UpdateCarInput } from "../inputs/UpdateCarInput";

@Resolver()
export class CarResolver {
  @Query(() => [Cars])
  Cars() {
    return Cars.find()
  }

  @Query(() => Cars)
   car(@Arg("id") id: string) {  
  return Cars.findOne({ where: { id } });
}
  @Mutation(() => Cars)
  async createcar(@Arg("data") data: CreateCarInput) {
  const car = Cars.create(data);
  await car.save();
  return car;
  }
  @Mutation(() => Cars)
  async updatecar(@Arg("id") id: string, @Arg("data") data: UpdateCarInput) {
    const car = await Cars.findOne({ where: { id } });
    if (!car) throw new Error("Car not found!");
    Object.assign(car, data);
    await car.save();
    return car;
  }
  @Mutation(() => Boolean)
  async deletecar(@Arg("id") id: string) {
    const car = await Cars.findOne({ where: { id } });
    if (!car) throw new Error("Car not found!");
    await car.remove();
    return true;
  }




}
  


