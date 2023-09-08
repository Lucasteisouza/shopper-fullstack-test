import { Column, Model, Table } from 'sequelize-typescript';

@Table({ timestamps: false })
export class product extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  code: number;

  @Column
  name: string;

  @Column
  cost_price: number;

  @Column
  sales_price: number;
}
