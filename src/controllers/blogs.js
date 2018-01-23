const view = require('../models/queries/viewBlogs.js');

exports.get = (req, res) => {
  view.viewAllBlogs((dataBaseConnectionError, blog) =>{
    if (dataBaseConnectionError) return res.status(500).send({ error: dataBaseConnectionError });
    const newBlog = blog.map((element, i ) => {
      element.mod = i%3;
      return element;
    });
    return res.render('blogs', {style: 'blogs', layout:'main', blog:newBlog ,title:'blog'})
  })
};
