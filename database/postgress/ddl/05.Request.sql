CREATE TABLE Requests  
(
    Id SERIAL PRIMARY KEY,
    Code varchar(10) null,
    Name varchar(255)
) INHERITS (Auditable);
