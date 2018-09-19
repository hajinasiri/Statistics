# Statistics
This is an assignment to build a HTTP API that recieves get requests and builds the response by fetching data from database.
You can get the server started by running "node server.js".

# Assumptions
 If you are going to get the server run on your machine, I assumed that the database already exists on your maching.
 I created my own database on my machine by reading data from data.csv file. 
 I called my database "statistics" (see knexfile.js, line:8). Then knex creates table "visits". I split the file to 
 175 smaller files with 250000 records in each and put them in folder data. Then I ran reader.js file about 10 times while 
 changing the variable "begin" in reader.js, line:12. Eeach time reader.js entered 17 of the files into database. 
 The .csv files were deleted after inserting the data to database. 
 

# Dependencies
  "async": "^2.6.1",
  "csv-parse": "^3.0.0",
  "express": "^4.16.3",
  "knex": "^0.15.2",
  "pg": "^7.4.3",
  "single-line-log": "^1.1.2"
