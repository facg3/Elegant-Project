const view = require('../models/queries/viewBlogs.js');

exports.get = (req, res ,next) => {
  view.viewAllBlogs((dataBaseConnectionError, blog) =>{
    if (dataBaseConnectionError) return next(dataBaseConnectionError);
    const newBlog = blog.map((element, i ) => {
      element.mod = i%3;
      return element;
    });
    return res.render('blogs', {style: 'blogs', layout:'main', blog:newBlog ,title:'blog'})
  })
};
