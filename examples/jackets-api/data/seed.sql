DROP TABLE IF EXISTS jackets;


CREATE TABLE jackets (
    id int NOT NULL PRIMARY KEY,
    name varchar(255),
    password varchar(255)
); 

INSERT INTO jackets (id,name, password) VALUES (1,"CK", "Alice");
INSERT INTO jackets (id,name, password) VALUES (2, "Decathlon" , "Bob");
INSERT INTO jackets (id, name, password) VALUES (3, "Chaleco" , "Charlie");