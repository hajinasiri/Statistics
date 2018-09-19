var fs = require('fs');
var parse = require('csv-parse');
var async = require('async');
var log = require('single-line-log').stdout; //to console log the progress of reading the file in one line
var modules = require('./app_modules.js');


var files = fs.readdirSync('./data');//reads the name of all the files in folder "data"

var file = '';
files.forEach( (file,index) => {
  var begin = 17;//the index of the file in array "files". This number should change manually each time this file runs. the new number = current number + 17
  if(index > begin && index < begin + 18){//this line makes the file only read the next 17 files to avoid memory crash
    setTimeout(function(){//This setTimeout gives the code 125 second to read each file before starting to read the next file
        var data = fs.readFileSync('./data/' + file, 'utf8');
        var dataArr = data.split('\n');//puts each line of the file in the dataArr array as an individual element
        dataArr.forEach((row,rowIndex) => {
          var record = row.split("");//sperate data in each row and creates an array from them
          if(row[0]){
            setTimeout(function(){//this setTimeout gives the code half a milisecond to insert each record to database. This is set to keep knex from crashing

                modules.insert(record).then(val => {
                  log(Math.floor(rowIndex/250000*100), '% of the '+index+'th file from' ,files.length -1, 'is read')
                })

            },Math.floor(rowIndex/2) )
          }else{
            log.clear();
          }
        })
    },(index - begin - 1)*125000)

  }
})






