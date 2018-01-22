const dbconnection = require('../database/db_connection');

const viewAllBlogs = (cb) =>{
  const viewAllBlogsSql= {
    text : "SELECT * FROM blog",
  };
  dbconnection.query(viewAllBlogsSql, (dataBaseConnectionError, blogs) => {
    if (dataBaseConnectionError) return cb(dataBaseConnectionError);
    return cb(null, blogs.rows);
  });

}

const viewBlog = (blogId,cb) =>{
  const sql= {
    text : "SELECT * FROM blog where id =$1",
    values:[blogId]
  };
  dbconnection.query(sql, (dataBaseConnectionError, blog) => {
    if (dataBaseConnectionError) return cb(dataBaseConnectionError);
    return cb(null, blog.rows);
  });

}


module.exports = {viewAllBlogs,viewBlog};
