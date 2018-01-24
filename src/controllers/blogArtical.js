const view = require('../models/queries/viewBlogs.js');
const jwt = require('jsonwebtoken');

// exports.get = (req, res) => {
//   const cookie = req.cookies.accessToken;
//   const id = req.params.id;
//   if (cookie) {
//     const verifyCookie = jwt.verify(cookie, process.env.SECRET_COOKIE);
//     if (verifyCookie) {
//       view.viewBlog(id, (errInOneBlog, blogdata) => {
//         if (errInOneBlog) res.status(404).send();
//         else {
//           return res.render('blogArtical', {
//             layout: 'fashion',
//             blogdata,
//             style: 'blogArtical',
//             title: 'blog Articl',
//             login: true,
//           });
//         }
//         return null;
//       });
//     } else {
//       view.viewBlog(id, (errInOneBlog, blogdata) => {
//         if (errInOneBlog) res.status(404).send();
//         else {
//           return res.render('blogArtical', {
//             layout: 'fashion',
//             blogdata,
//             style: 'blogArtical',
//             title: 'blog Articl',
//             login: false,
//           });
//         }
//         return null;
//       });
//     }
//   } else {
//     view.viewBlog(id, (errInOneBlog, blogdata) => {
//       if (errInOneBlog) res.status(404).send();
//       else {
//         return res.render('blogArtical', {
//           layout: 'fashion',
//           blogdata,
//           style: 'blogArtical',
//           title: 'blog Articl',
//           login: false,
//         });
//       }
//       return null;
//     });
//   }
// };
exports.get = (req, res) => {
  const id = req.params.id;
  view.viewBlog(id, (errInOneBlog, blogdata) => {
    if (errInOneBlog) response.status(404).send();
    else {
      return res.render('blogArtical', {
        layout: 'fashion',
        blogdata,
        style: 'blogArtical',
        title: 'blog Articl',
      });
    }
  });
};
exports.post = (req, res) => {
  const blogId = req.params.id;
  view.likes(blogId, (errInLikeBlog, result) => {
    if (errInLikeBlog) {
      res.status(400).send();
    } else {
      res.json(result);
    }
  });
};
