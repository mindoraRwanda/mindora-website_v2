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

export const service = pgTable('service', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  description: text('description').notNull(),
  icon: varchar('icon', { length: 50 }), // Store icon name (e.g., "Brain", "Shield", "Heart", "Activity")
  createdAt: timestamp('created_at').defaultNow(),
  isActive: boolean('is_active').default(true),
});

export type Service = typeof service.$inferSelect;


export const successStories = pgTable('success_stories', {
  id: serial('id').primaryKey(),
  text: text('text'),
  author: varchar('author', { length: 255 }), 
  role: varchar('role', { length: 255 }),
  createdAt: timestamp('created_at').defaultNow(), 
});


export const hallOfFame = pgTable('hall_of_fame', {
  id: serial('id').primaryKey(), 
  name: varchar('name', { length: 255 }), 
  role: varchar('role', { length: 255 }),
  image: text('image'),
});
