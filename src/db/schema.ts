import { pgTable, serial, varchar, text } from 'drizzle-orm/pg-core';

export const team = pgTable('team', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }),
  role: varchar('role', { length: 255 }),
  bio: text('bio'),
  description: text('description'),
  imageUrl: text('image_url'),
});
