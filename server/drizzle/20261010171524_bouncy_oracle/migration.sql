ALTER TABLE "workout_session" ALTER COLUMN "user_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "exercise_definition" ADD CONSTRAINT "exercise_definition_user_name_unique" UNIQUE("user_id","definition_name");--> statement-breakpoint
ALTER TABLE "exercise_instance" ADD CONSTRAINT "exercise_instance_session_order_unique" UNIQUE("session_id","exercise_order");--> statement-breakpoint
ALTER TABLE "exercise_set" ADD CONSTRAINT "exercise_set_instance_setnumber_unique" UNIQUE("instance_id","set_number");--> statement-breakpoint
ALTER TABLE "exercise_set" ADD CONSTRAINT "exercise_set_weight_nonneg" CHECK ("weight" >= 0);--> statement-breakpoint
ALTER TABLE "exercise_set" ADD CONSTRAINT "exercise_set_reps_nonneg" CHECK ("reps" >= 0);--> statement-breakpoint
ALTER TABLE "exercise_set" ADD CONSTRAINT "exercise_set_duration_nonneg" CHECK ("duration_seconds" >= 0);