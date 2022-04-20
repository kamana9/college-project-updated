/* Replace with your SQL commands */
CREATE TABLE "user_secret"(
  balance BIGINT DEFAULT 0,
  pin VARCHAR(255),
  user_id INT,
    CONSTRAINT fk_user FOREIGN KEY(user_id)
      REFERENCES "users"(id)
);