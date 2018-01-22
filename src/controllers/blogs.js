const view = require('../models/queries/viewBlogs.js');
const container =[ {
    'name1': "leftBigContainer", 'name2' : 'rightSmallContainer', 'name3' : 'rightSmallContainer' , 'name4' : 'leftBigContainer' } ]


//,'topContainer2','rightSmallContainer','bottomContainer','rightSmallContainer','bottomContainer2','leftBigContainer'
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
