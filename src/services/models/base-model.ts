import { Model, snakeCaseMappers } from 'objection';
import db from '../db';

abstract class BaseModel extends Model {
  static get columnNameMappers() {
    return snakeCaseMappers();
  }

  static get tableName() {
    return 'basemodel';
  }

  public id: number;

  public createdAt: string;
  public updatedAt: string;
  public deletedAt: number;

  public $beforeInsert() {
    this.createdAt = new Date().toISOString();
  }

  public $beforeUpdate() {
    this.updatedAt = new Date().toISOString();
  }
}

export default BaseModel.bindKnex(db);
