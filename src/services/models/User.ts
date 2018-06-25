import BaseModel from './base-model';

export class User extends BaseModel {
  static get tableName() {
    return 'users';
  }

  public name: string;
}
