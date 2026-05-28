import { pgTable, serial, text, timestamp, boolean, jsonb } from 'drizzle-orm/pg-core';

export const inquiries = pgTable('inquiries', {
  id: serial('id').primaryKey(),
  type: text('type').default('general'),
  name: text('name').notNull(),
  email: text('email').notNull(),
  message: text('message'),
  metadata: jsonb('metadata'),
  status: text('status').default('new'),
  createdAt: timestamp('created_at').defaultNow(),
});

export const bookings = pgTable('bookings', {
  id: serial('id').primaryKey(),
  gatheringId: text('gathering_id').notNull(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  paymentId: text('payment_id'),
  status: text('status').default('pending'),
  createdAt: timestamp('created_at').defaultNow(),
});
