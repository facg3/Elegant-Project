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

const likes = (blogId,cb) =>{
  const sql = {
    text : "UPDATE blog SET likes = likes + 1 WHERE id =$1",
    values : [blogId]
  };
  dbconnection.query(sql,(dataBaseConnectionError) =>{
    if (dataBaseConnectionError) return cb(dataBaseConnectionError);
    else {
      const sql2 = {
        text : "SELECT likes FROM blog WHERE id =$1",
        values : [blogId]
      };
      dbconnection.query(sql2,(dataBaseConnectionError2, numberlikes) =>{
        if (dataBaseConnectionError2) return cb(dataBaseConnectionError2);
        else {
          cb(null,numberlikes.rows);
        }
      })
    }
  })
}


module.exports = {viewAllBlogs,viewBlog,likes};
