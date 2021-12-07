import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne } from "typeorm";
import Veiculo from "./Veiculo";
import Usuario from "./Usuario";

@Entity()
export default class Favorito {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Veiculo)
  @JoinColumn()
  id_veiculo: number;

  @OneToOne(() => Usuario)
  @JoinColumn()
  id_usuario: number;

  @Column()
  favoritado: boolean;

  @Column()
  data_cadastro: Date;
}