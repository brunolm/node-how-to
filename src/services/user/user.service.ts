import { User } from '../models/user';

export class UserService {
  public async get(id: number) {
    return await User.query()
      .where('id', id)
      .first();
  }

  public async list() {
    return await User.query();
  }

  public async insert(user: User) {
    return await User.query().insert(user);
  }

  public async delete(id: number) {
    return await User.query()
      .where('id', id)
      .delete();
  }

  public async getItems(id: number) {
    const user = await this.get(id);

    return await user.$loadRelated('userItems');
  }
}

export default new UserService();
