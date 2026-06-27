-- Stripe Payment Integration Migration
-- Run this in your Supabase SQL editor

-- Add Stripe fields to orders table
ALTER TABLE orders
  ADD COLUMN IF NOT EXISTS stripe_session_id TEXT,
  ADD COLUMN IF NOT EXISTS stripe_payment_intent_id TEXT,
  ADD COLUMN IF NOT EXISTS payment_method TEXT DEFAULT 'stripe',
  ADD COLUMN IF NOT EXISTS paid_at TIMESTAMP WITH TIME ZONE;

-- Add index on stripe_session_id for webhook lookups
CREATE INDEX IF NOT EXISTS idx_orders_stripe_session_id
  ON orders (stripe_session_id);

-- Add index on stripe_payment_intent_id for webhook lookups
CREATE INDEX IF NOT EXISTS idx_orders_stripe_payment_intent_id
  ON orders (stripe_payment_intent_id);

-- Update payment_status check constraint to include 'refunded'
ALTER TABLE orders DROP CONSTRAINT IF EXISTS orders_payment_status_check;
ALTER TABLE orders ADD CONSTRAINT orders_payment_status_check
  CHECK (payment_status IN ('pending', 'paid', 'failed', 'refunded'));
