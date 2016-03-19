/**
*  SQL table `table 1` was the mysql import of  http://seanlahman.com/baseball-archive/statistics/ master.csv  
*  out of 16,504 USA players we found...
*    * 43 USA players without a city 
*    * 73 USA players without a birthyear 
*  state_city is made for a join key in the next script
*
*  In Human: List all USA players that have a birth city and year.
*/

SELECT `birthYear`, `birthCity`, `birthState`, upper(CONCAT(birthState, "-", birthCity)) as "state_city", count(*) as "num_of_players"
  FROM `table 1`
  WHERE birthCountry = 'USA' AND
    birthYear != '' AND
    birthCity != ''
GROUP BY birthYear, state_city