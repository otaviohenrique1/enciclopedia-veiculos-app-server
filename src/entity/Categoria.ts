import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne } from "typeorm";
import Usuario from "./Usuario";

@Entity()
export default class Categoria {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @OneToOne(() => Usuario)
  @JoinColumn()
  id_usuario: number;

  @Column()
  data_cadastro: Date;
}
