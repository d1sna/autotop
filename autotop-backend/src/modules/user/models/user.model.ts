import { Types } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { UserSchemaDefinition } from '../db/user.schema';

const SAULT_ROUNDS = 10;

export class UserModel {
  public readonly id: Types.ObjectId;
  public readonly email: string;
  public readonly fullName: string;
  private _passwordHash: string;

  constructor(id, email, fullName, passwordHash) {
    this.id = id;
    this.email = email;
    this.fullName = fullName;
    this._passwordHash = passwordHash;
  }

  public static create(creationParams) {
    console.log({ creationParams });

    const salt = bcrypt.genSaltSync(SAULT_ROUNDS);
    const passwordHash = bcrypt.hashSync(creationParams.password, salt);
    const fullName = creationParams.fullName.trim();
    const email = creationParams.email.trim();
    return new UserModel(new Types.ObjectId(), email, fullName, passwordHash);
  }

  public static createFromDataBase(document: UserSchemaDefinition) {
    return new UserModel(
      document._id,
      document.email,
      document.fullName,
      document.passwordHash,
    );
  }

  get passwordHash() {
    return this._passwordHash;
  }

  async comparePasswordWithHash(password) {
    return await bcrypt.compare(password, this._passwordHash);
  }
}
