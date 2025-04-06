import { pgTable, serial, varchar, text, timestamp, boolean } from 'drizzle-orm/pg-core';

export const team = pgTable('team', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }),
  role: varchar('role', { length: 255 }),
  bio: text('bio'),
  description: text('description'),
  imageUrl: text('image_url'),
});

export const job = pgTable('job', {
  id: serial('id').primaryKey(), 
  title: varchar('title', { length: 255 }), 
  description: text('description'), 
  requirements: text('requirements'),
  location: varchar('location', { length: 255 }), 
  type: varchar('type', { length: 50 }),
  salary: varchar('salary', { length: 100 }),
  postedAt: timestamp('posted_at').defaultNow(), 
  isActive: boolean('is_active').default(true), 
});

export type Job = typeof job.$inferSelect;