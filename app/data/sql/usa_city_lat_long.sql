/**
*  SQL table `table 2` is the mysql import of  http://www.opengeocode.org/download.php#cityzip  I changed the column names to state and city
*  
*/

select UPPER(CONCAT(`State`, "-", `City`)) as "state_city_lat",
 ` Latitude`, 
 ` Longitude` 
from `table 2`

/**
*  In human : Return all the lat longs for all the city and states for any USA baseball player with a city and birth year
*  
*/

select a.birthCity, a.birthState, a.birthyear, b.` Longitude`, b.` Latitude`  
from (
  SELECT `birthYear`, `birthCity`, `birthState`, upper(CONCAT(birthState, "-", birthCity)) as "state_city"
  FROM `table 1`
  WHERE birthCountry = 'USA' AND
    birthYear != '' AND
    birthCity != ''
  GROUP BY birthYear, state_city) a
inner join (
  Select UPPER(CONCAT(`State`, "-", `City`)) as "state_city_lat", ` Latitude`, ` Longitude` 
  from `table 2`) b 
on (a.state_city = b.state_city_lat)
ORDER BY `a`.`birthState`  DESC