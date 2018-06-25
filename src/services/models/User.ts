import BaseModel from './basemodel';

export class Users extends BaseModel {
  static get tableName() {
    return 'users';
  }

  public name: string;
}
