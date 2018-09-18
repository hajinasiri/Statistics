module.exports = {

  development: {
    client: 'pg',
    connection: {
      user     : process.env.DB_user,
      password : process.env.DB_password,
      database : "statistics",
      host     : "localhost",
      port     : process.env.DB_port
    }
  }
};
