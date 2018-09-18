var fs = require('fs');
var parse = require('csv-parse');
var async = require('async');
var log = require('single-line-log').stdout; //to console log the progress of reading the file in one line
var modules = require('./app_modules.js');


var files = fs.readdirSync('./data');

var file = '';
files.forEach( (file,index) => {
  var begin = 17;
  if(index > begin && index < begin + 18){
    setTimeout(function(){



        var data = fs.readFileSync('./data/' + file, 'utf8');
        var dataArr = data.split('\n');
        dataArr.forEach((row,rowIndex) => {
          var record = row.split("");
          if(row[0]){
            setTimeout(function(){

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






