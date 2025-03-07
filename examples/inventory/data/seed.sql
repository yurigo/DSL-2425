DROP TABLE IF EXISTS jackets;


CREATE TABLE jackets (
    id int NOT NULL PRIMARY KEY,
    name varchar(255)
); 

INSERT INTO jackets (id,name) VALUES (1,"CK");
INSERT INTO jackets (id,name) VALUES (2, "Decathlon");