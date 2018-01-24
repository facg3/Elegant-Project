const view = require('../models/queries/viewBlogs.js');


exports.get = (req, res) => {
  const id = req.params.id;
  view.viewBlog(id, (errInOneBlog, blogdata) => {
    if (errInOneBlog) response.status(404).send();
    else {
      return res.render('blogArtical', {
        layout: 'fashion', blogdata, style: 'blogArtical', title: 'blog Articl',
      });
    }
  });
};
