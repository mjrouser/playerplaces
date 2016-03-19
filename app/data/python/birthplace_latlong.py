"""
Script for Baseball Hackday 2016 in Boston.

Joins players birth place and year info from the Lahman database
and joins with OpenGeoCode city,state names to get latitude and
longitude for player birth years.

Lahman baseball database: http://seanlahman.com/baseball-archive/statistics/
OpenGeoCode state city database: http://www.opengeocode.org/download.php#statecity

Run as:

$ python birthplaces.py Master.csv statecity.csv output.csv

Will output a csv with player birth information plus lat and long.

"""


import sys
import petl as etl


def add_bbreflink(rec):
    bid = rec['bbrefID']
    initial = bid[0]
    return "http://www.baseball-reference.com/players/" + initial + "/" + bid + ".shtml"



# Load Master.csv from the Lahman database.
table = etl.fromcsv(sys.argv[1])

# Use US births only
table2 = etl.select(table, lambda rec: rec.birthCountry == 'USA')

# Only use these fields
table3 = etl.cut(table2, 'nameFirst', 'nameLast', 'debut', 'bbrefID', 'weight', 'height', 'finalGame', 'birthCity', 'birthState', 'birthYear')

# Remove null birth city and birth year
table4 = etl.select(table3, lambda rec: rec.birthCity != "" and rec.birthYear != "")

# Add Baseball Reference URL
table5 = etl.addfield(table4, 'baseball_ref_url', add_bbreflink)
# Remove unnecessary bbrefid
table6 = etl.cutout(table5, "bbrefID")

# Load city,state lat long table.
city = etl.fromcsv(sys.argv[2])
# Only use these fields
city2 = etl.cut(city, "city", "state", "lat", "long")

# Join tables by two keys
lat_table = etl.leftjoin(table6, city2, lkey=["birthCity", "birthState"], rkey=["city", "state"])

# Output merged file to csv
lat_table.tocsv(sys.argv[3])


