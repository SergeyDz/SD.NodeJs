CREATE TABLE Auditable  
(
	CreatedById int not null default 1, 
	CreatedOn time not null default now(),
	UpdatedById int null, 
	UpdatedOn date null
);
