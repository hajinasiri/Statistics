const config = require('./knexfile.js')[process.env.NODE_ENV || 'development'];
const knex = require('knex')(config);


const insert = (record) => {//inserts a single given record to the database
  var data = record.map(element => parseInt(element));
  var query = knex('visits')
          .insert({datetime:data[0],user:data[1],os:data[2],device:data[3]})
          .returning('*')
  return query
}

const buildPart = (query,key,initial) => {//gets the query and the key (device or os) and builds the part of query in the form of string and returns it
  var built = initial
  var values;
  if(query[key]){
    var subQuery = query[key];//gets the values for the provided key. For example 1,2 or 12 for device
    if(subQuery.includes(',')){//makes an array of the values. For example [1,2]
      values = subQuery.split(',');
    }else{
      values = subQuery.split("");
    }

    built = built.whereIn(key,values);//builds part of the query that checks the key(for example device column) column in databasefor the values
  }
  return built
}

const buildQuery = (query,initial) => { //builds the knex query from the "query" extracted from get request and returns it
  var built = buildPart(query,'device',initial);//uses buildPart function to build part of the query that checks device column
  built = buildPart(query,'os',built);//uses buildPart function to build part of the query that checks os column
return built

}

const getUnique = (query) => {//uses buildQuery to create the knex query and execute it
  var initial = knex('visits')
  return buildQuery(query,initial).countDistinct('user');//adds countDistinct to count the number of distinct users and returns the query
}

const getLoyals = (query) => {

  var d = new Date(2016, 9, 1);//Setting the time to the last day that the data is collected
  d = d.setMonth(d.getMonth() - 1);
  var t = d / 1000;
  var initial = knex('visits').select('user').count('user');
  var built = buildQuery(query,initial);
  built = built.where('datetime', '>' , t).groupBy('user').havingRaw("count('user') > ?",[10]);
  return built
}

module.exports = {insert,getUnique,getLoyals};


