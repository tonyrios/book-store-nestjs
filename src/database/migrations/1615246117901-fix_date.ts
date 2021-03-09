import {MigrationInterface, QueryRunner} from "typeorm";

export class fixDate1615246117901 implements MigrationInterface {
    name = 'fixDate1615246117901'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "user_details"."created_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user_details" ALTER COLUMN "created_at" SET DEFAULT now()`);
        await queryRunner.query(`COMMENT ON COLUMN "user_details"."updated_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user_details" ALTER COLUMN "updated_at" SET DEFAULT now()`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."created_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "created_at" SET DEFAULT now()`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."updated_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "updated_at" SET DEFAULT now()`);
        await queryRunner.query(`COMMENT ON COLUMN "roles"."created_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "roles" ALTER COLUMN "created_at" SET DEFAULT now()`);
        await queryRunner.query(`COMMENT ON COLUMN "roles"."updated_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "roles" ALTER COLUMN "updated_at" SET DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "roles" ALTER COLUMN "updated_at" DROP DEFAULT`);
        await queryRunner.query(`COMMENT ON COLUMN "roles"."updated_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "roles" ALTER COLUMN "created_at" DROP DEFAULT`);
        await queryRunner.query(`COMMENT ON COLUMN "roles"."created_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "updated_at" DROP DEFAULT`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."updated_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "created_at" DROP DEFAULT`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."created_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user_details" ALTER COLUMN "updated_at" DROP DEFAULT`);
        await queryRunner.query(`COMMENT ON COLUMN "user_details"."updated_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user_details" ALTER COLUMN "created_at" DROP DEFAULT`);
        await queryRunner.query(`COMMENT ON COLUMN "user_details"."created_at" IS NULL`);
    }

}
