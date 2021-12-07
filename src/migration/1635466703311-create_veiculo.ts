import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createVeiculo1635466703311 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'veiculos',
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment'
        },
        {
          name: 'nome',
          type: 'varchar'
        },
        {
          name: 'pais_origem',
          type: 'varchar'
        },
        {
          name: 'status',
          type: 'varchar'
        },
        {
          name: 'classificacao',
          type: 'varchar'
        },
        {
          name: 'tipo',
          type: 'varchar'
        },
        {
          name: 'fabricante',
          type: 'varchar'
        },
        {
          name: 'utilizadores',
          type: 'varchar'
        },
        {
          name: 'variantes',
          type: 'varchar'
        },
        {
          name: 'quantidade_produzida',
          type: 'double'
        },
        {
          name: 'quantidade_produzida_unidade',
          type: 'varchar'
        },
        {
          name: 'perido_servico',
          type: 'varchar'
        },
        {
          name: 'massa',
          type: 'double'
        },
        {
          name: 'massa_unidade',
          type: 'varchar'
        },
        {
          name: 'comprimento',
          type: 'double'
        },
        {
          name: 'comprimento_unidade',
          type: 'varchar'
        },
        {
          name: 'altura',
          type: 'double'
        },
        {
          name: 'altura_unidade',
          type: 'varchar'
        },
        {
          name: 'largura',
          type: 'double'
        },
        {
          name: 'largura_unidade',
          type: 'varchar'
        },
        {
          name: 'tripulacao',
          type: 'double'
        },
        {
          name: 'custo_unitario',
          type: 'double'
        },
        {
          name: 'custo_unitario_moeda',
          type: 'varchar'
        },
        {
          name: 'armamento',
          type: 'varchar'
        },
        {
          name: 'id_usuario',
          type: 'integer'
        },
        {
          name: 'data_cadastro',
          type: 'datetime'
        },
      ],
      foreignKeys: [
        {
          name: 'IdUsuario',
          columnNames: ['id_usuario'],
          referencedTableName: 'usuarios',
          referencedColumnNames: ['id'],
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        }
      ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('veiculos');
  }
}
