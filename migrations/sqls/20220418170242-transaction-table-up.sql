/* Replace with your SQL commands */
CREATE TABLE user_transaction (
  trans_id UUID NOT NULL ,
  sender_phone VARCHAR(10) NOT NULL,
  receiver_phone VARCHAR(10) NOT NULL,
  amount numeric Not Null,
  trans_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);  