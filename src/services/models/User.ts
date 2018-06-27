import BaseModel from './base-model';
import { UserItem } from './user-item';

export class User extends BaseModel {
  static get tableName() {
    return 'users';
  }

  static get relationMappings() {
    return {
      userItems: {
        relation: BaseModel.HasManyRelation,
        modelClass: UserItem,
        join: {
          from: 'users.id',
          to: 'user_items.user_id',
        },
      },
    };
  }

  public name: string;
}
