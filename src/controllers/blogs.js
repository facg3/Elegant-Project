const view = require('../models/queries/viewBlogs.js');
const jwt = require('jsonwebtoken');

exports.get = (req, res) => {
  const cookie = req.cookies.accessToken;
  if (cookie) {
    const verifyCookie = jwt.verify(cookie, process.env.SECRET_COOKIE);
    if (verifyCookie) {
      view.viewAllBlogs((dataBaseConnectionError, blog) => {
        if (dataBaseConnectionError) {
          return res.status(500).send({ error: dataBaseConnectionError });
        }
        const newBlog = blog.map((element, i) => {
          element.mod = i % 3;
          return element;
        });
        return res.render('blogs', {
          style: 'blogs',
          layout: 'main',
          blog: newBlog,
          title: 'blog',
          login: true,
        });
      });
    } else {
      view.viewAllBlogs((dataBaseConnectionError, blog) => {
        if (dataBaseConnectionError) {
          return res.status(500).send({ error: dataBaseConnectionError });
        }
        const newBlog = blog.map((element, i) => {
          element.mod = i % 3;
          return element;
        });
        return res.render('blogs', {
          style: 'blogs',
          layout: 'main',
          blog: newBlog,
          title: 'blog',
          login: false,
        });
      });
    }
  } else {
    view.viewAllBlogs((dataBaseConnectionError, blog) => {
      if (dataBaseConnectionError) {
        return res.status(500).send({ error: dataBaseConnectionError });
      }
      const newBlog = blog.map((element, i) => {
        element.mod = i % 3;
        return element;
      });
      return res.render('blogs', {
        style: 'blogs',
        layout: 'main',
        blog: newBlog,
        title: 'blog',
        login: false,
      });
    });
  }
};
