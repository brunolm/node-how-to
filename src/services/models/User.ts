import BaseModel from './basemodel';

export class User extends BaseModel {
  static get tableName() {
    return 'users';
  }

  public name: string;
}
