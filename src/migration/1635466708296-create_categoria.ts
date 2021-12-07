import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createCategoria1635466708296 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'categorias',
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
          name: 'FavoritoUsuario',
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
    await queryRunner.dropTable('categorias');
  }
}
