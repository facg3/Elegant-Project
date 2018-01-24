const view = require('../models/queries/viewBlogs.js');
const jwt = require('jsonwebtoken');

exports.get = (req, res) => {
  const cookie = req.cookies.accessToken;
  const id = req.params.id;
  if (cookie) {
    const verifyCookie = jwt.verify(cookie, process.env.SECRET_COOKIE);
    if (verifyCookie) {
      view.viewBlog(id, (errInOneBlog, blogdata) => {
        if (errInOneBlog) res.status(404).send();
        else {
          return res.render('blogArtical', {
            layout: 'fashion',
            blogdata,
            style: 'blogArtical',
            title: 'blog Articl',
            login: true,
          });
        }
      });
    } else {
      view.viewBlog(id, (errInOneBlog, blogdata) => {
        if (errInOneBlog) res.status(404).send();
        else {
          return res.render('blogArtical', {
            layout: 'fashion',
            blogdata,
            style: 'blogArtical',
            title: 'blog Articl',
            login: false,
          });
        }
      });
    }
  } else {
    view.viewBlog(id, (errInOneBlog, blogdata) => {
      if (errInOneBlog) res.status(404).send();
      else {
        return res.render('blogArtical', {
          layout: 'fashion',
          blogdata,
          style: 'blogArtical',
          title: 'blog Articl',
          login: false,
        });
      }
    });
  }
};
