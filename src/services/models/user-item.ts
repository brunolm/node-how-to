import BaseModel from './base-model';

export class UserItem extends BaseModel {
  static get tableName() {
    return 'user_items';
  }

  public userId: number;
  public name: string;
}
