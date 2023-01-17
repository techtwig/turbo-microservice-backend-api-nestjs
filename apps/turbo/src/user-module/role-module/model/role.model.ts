import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'roles' })
export class Role extends Model<Role> {
  @Column({
    type: DataType.SMALLINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING(150),
    allowNull: false,
    validate: { notNull: true, len: [1, 150] },
  })
  title: string;

  @Column({
    type: DataType.STRING(150),
    allowNull: false,
    validate: { notNull: true, len: [1, 150] },
  })
  code: string;
}
