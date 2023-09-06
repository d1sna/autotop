import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types, Schema as MSchema } from 'mongoose';

@Schema({ versionKey: false, collection: 'Users', timestamps: true })
export class UserSchemaDefinition {
  @Prop({ type: MSchema.Types.ObjectId, required: true })
  public readonly _id: Types.ObjectId;

  @Prop({ type: String, required: true })
  public passwordHash: string;

  @Prop({ type: String, required: true })
  public email: string;

  @Prop({ type: String, required: false })
  public fullName: string;
}

export const UsersSchema = SchemaFactory.createForClass(
  UserSchemaDefinition,
).index({ email: 1 }, { unique: true });
