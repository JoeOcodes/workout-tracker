import { integer, uuid, varchar, numeric, timestamp, date, pgEnum, pgTable } from "drizzle-orm/pg-core";


export const measurementTypeEnum =
    pgEnum('measurement_type', ['reps', 'duration_seconds']);


export const users = pgTable('users', {
    userId: uuid('user_id').defaultRandom().primaryKey(),
    firstName: varchar('first_name', { length: 30 }).notNull(),
    lastName: varchar('last_name', { length: 30 }),
    username: varchar('user_name', { length: 50 }).unique().notNull(),
    passwordHash: varchar('password_hash', { length: 255 }).notNull(),
    createdAt: timestamp('created_at', { mode: "date" }).defaultNow().notNull()

});

export const workoutSession = pgTable('workout_session', {
    sessionId: uuid('session_id').defaultRandom().primaryKey(),
    userId: uuid('user_id').references(() =>
        users.userId, { onDelete: "cascade" }),
    date: date('date', { mode: "date" }).defaultNow().notNull(),
    note: varchar('note', { length: 500 }),
    createdAt: timestamp('created_at', { mode: "date" }).defaultNow().notNull()

});


export const exerciseDefinition = pgTable('exercise_definition', {
    definitionId: uuid('definition_id').defaultRandom().primaryKey(),
    userId: uuid('user_id').references(() =>
        users.userId, { onDelete: "set null" }),
    definitionName: varchar('definition_name', { length: 50 }).notNull(),
    measurementType: measurementTypeEnum('measurement_type').notNull()
});

export const exerciseInstance = pgTable('exercise_instance', {
    instanceId: uuid('instance_id').defaultRandom().primaryKey(),
    sessionId: uuid('session_id').references(() =>
        workoutSession.sessionId, { onDelete: "cascade" }).notNull(),
    definitionId: uuid('definition_id').references(() =>
        exerciseDefinition.definitionId, { onDelete: "restrict" }).notNull(),
    exerciseOrder: integer('exercise_order').notNull()


});

export const exerciseSet = pgTable('exercise_set', {
    exerciseSetId: uuid('exercise_set_id').defaultRandom().primaryKey(),
    instanceId: uuid('instance_id').references(() =>
        exerciseInstance.instanceId, { onDelete: "cascade" }).notNull(),
    setNumber: integer('set_number').notNull(),
    weight: numeric('weight', { precision: 5, scale: 2 }),
    reps: integer('reps'),
    durationSeconds: integer('duration_seconds')

});