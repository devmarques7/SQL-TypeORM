import { MigrationInterface, QueryRunner } from "typeorm";

export class newUser1666368685737 implements MigrationInterface {
    name = 'newUser1666368685737'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "isAdm" boolean NOT NULL, "isActive" character varying NOT NULL DEFAULT true, "createAt" TIMESTAMP NOT NULL DEFAULT '2022-10-21T16:11:33.052Z', "updateAt" TIMESTAMP NOT NULL DEFAULT '2022-10-21T16:11:33.052Z', CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
