# Statistics
This is an assignment to build a HTTP API that recieves get requests and builds the response by fetching data from database.
You can get the server started by running "node server.js".
The API is built using Node and express, and PostgreSQL is used as database language.

# Assumptions
 If you are going to get the server run on your machine, I assumed that the database already exists on your maching.

# The Database
 I created my own database on my machine by reading data from data.csv file.
 I called my database "statistics" (see knexfile.js, line:8).
 Then knex creates table "visits" (See "20180914130512_create_visits.js" file).
 I split the data.scv file into 175 smaller files with 250000 records in each and put them in folder data.
 Then I ran reader.js file about 10 times while changing the variable "begin" in reader.js, line:12. Eeach time reader.js entered 17 of the files into the database.
 The .csv files were deleted after the data was inserted to the database.


# Dependencies
  - "async": "^2.6.1",
  - "csv-parse": "^3.0.0",
  - "express": "^4.16.3",
  - "knex": "^0.15.2",
  - "Node":"^10.7.0",
  - "pg": "^7.4.3",
  - "single-line-log": "^1.1.2"
