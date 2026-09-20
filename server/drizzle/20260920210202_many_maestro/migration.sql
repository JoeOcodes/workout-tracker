CREATE TYPE "measurement_type" AS ENUM('reps', 'duration_seconds');--> statement-breakpoint
CREATE TABLE "exercise_definition" (
	"definition_id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"user_id" uuid,
	"definition_name" varchar(50) NOT NULL,
	"measurement_type" "measurement_type" NOT NULL
);
--> statement-breakpoint
CREATE TABLE "exercise_instance" (
	"instance_id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"session_id" uuid NOT NULL,
	"definition_id" uuid NOT NULL,
	"exercise_order" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "exercise_set" (
	"exercise_set_id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"instance_id" uuid NOT NULL,
	"set_number" integer NOT NULL,
	"weight" numeric(5,2),
	"reps" integer,
	"duration_seconds" integer
);
--> statement-breakpoint
CREATE TABLE "users" (
	"user_id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"first_name" varchar(30) NOT NULL,
	"last_name" varchar(30),
	"user_name" varchar(50) NOT NULL UNIQUE,
	"password_hash" varchar(255) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "workout_session" (
	"session_id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"user_id" uuid,
	"date" date DEFAULT now() NOT NULL,
	"note" varchar(500),
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "exercise_definition" ADD CONSTRAINT "exercise_definition_user_id_users_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE SET NULL;--> statement-breakpoint
ALTER TABLE "exercise_instance" ADD CONSTRAINT "exercise_instance_session_id_workout_session_session_id_fkey" FOREIGN KEY ("session_id") REFERENCES "workout_session"("session_id") ON DELETE CASCADE;--> statement-breakpoint
ALTER TABLE "exercise_instance" ADD CONSTRAINT "exercise_instance_8UPOJE4s0sIJ_fkey" FOREIGN KEY ("definition_id") REFERENCES "exercise_definition"("definition_id") ON DELETE RESTRICT;--> statement-breakpoint
ALTER TABLE "exercise_set" ADD CONSTRAINT "exercise_set_instance_id_exercise_instance_instance_id_fkey" FOREIGN KEY ("instance_id") REFERENCES "exercise_instance"("instance_id") ON DELETE CASCADE;--> statement-breakpoint
ALTER TABLE "workout_session" ADD CONSTRAINT "workout_session_user_id_users_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE CASCADE;