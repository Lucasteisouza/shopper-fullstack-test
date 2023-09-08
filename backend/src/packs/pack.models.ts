import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class pack extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  pack_id: number;

  @Column
  product_id: number;

  @Column
  qty: number;
}
