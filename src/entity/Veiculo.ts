import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne } from "typeorm";
import Usuario from "./Usuario";

@Entity()
export default class Veiculo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;
  
  @Column()
  pais_origem: string;
  
  @Column()
  status: string;
  
  @Column()
  classificacao: string;
  
  @Column()
  tipo: string;
  
  @Column()
  fabricante: string;
  
  @Column()
  utilizadores: string;
  
  @Column()
  variantes: string;
  
  @Column()
  quantidade_produzida: number;
  
  @Column()
  quantidade_produzida_unidade: string;
  
  @Column()
  perido_servico: string;
  
  @Column()
  massa: number;
  
  @Column()
  massa_unidade: string;
  
  @Column()
  comprimento: number;
  
  @Column()
  comprimento_unidade: string;
  
  @Column()
  altura: number;
  
  @Column()
  altura_unidade: string;
  
  @Column()
  largura: number;
  
  @Column()
  largura_unidade: string;
  
  @Column()
  tripulacao: number;
  
  @Column()
  custo_unitario: number;
  
  @Column()
  custo_unitario_moeda: string;
  
  @Column()
  armamento: string;

  @OneToOne(() => Usuario)
  @JoinColumn()
  id_usuario: number;

  @Column()
  data_cadastro: Date;
}
