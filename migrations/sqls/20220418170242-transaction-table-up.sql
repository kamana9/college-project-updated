/* Replace with your SQL commands */
CREATE TABLE user_transaction (
  trans_id UUID NOT NULL ,
  sender_phone INT,
  CONSTRAINT fk_user_phone FOREIGN KEY(sender_phone) REFERENCES users (id),
  receiver_phone INT,
  CONSTRAINT fk_user_phone2 FOREIGN KEY(receiver_phone) REFERENCES users (id), 
  amount numeric Not Null,
  trans_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);  