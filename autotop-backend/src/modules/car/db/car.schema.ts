import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types, Schema as MSchema } from 'mongoose';

@Schema({ versionKey: false, collection: 'Cars', timestamps: true })
export class CarSchemaDefinition {
  @Prop({ type: MSchema.Types.ObjectId, required: true })
  public readonly _id: Types.ObjectId;
}

export const CarsSchema = SchemaFactory.createForClass(CarSchemaDefinition);
// .index({ phone: 1 }, { unique: true });
