create database fullstackapplication;
use fullstackapplication;
create table date_format_list(dateId int primary key auto_increment not null, date_format varchar(100));
create table time_zone_list(timezoneId int primary key auto_increment not null, timezone varchar(200) , offset_value varchar(200));
create table country_nationality_mobile_code(id int primary key auto_increment not null, country varchar(100), nationality varchar(100), mobile_country_code varchar(100));