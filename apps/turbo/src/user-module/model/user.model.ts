import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'users' })
export class User extends Model<User> {
  @Column({
    type: DataType.SMALLINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: { notNull: true },
  })
  first_name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: { notNull: true },
  })
  last_name: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
    validate: { notNull: true },
  })
  username: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
    validate: { notNull: true },
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: { notNull: true },
  })
  password: string;

  @Column({
    type: DataType.STRING,
  })
  about_me: string;

  @Column({
    type: DataType.STRING,
  })
  email_verified_at: string;

  // @ForeignKey(() => Role)
  @Column({
    type: DataType.SMALLINT,
    allowNull: false,
  })
  role_id: number;
}
