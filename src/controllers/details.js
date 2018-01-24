const viewDetails = require('../models/queries/viewDetails');

exports.get = (req, res) => {
  const imgId = req.params.id;
  viewDetails(imgId, (err, details) => {
    if (err) return res.status(500).send({ err });
    const bigimg = {
      img: details[0].img,
      gender: details[0].gender,
    };
    return res.render('details', {
      style: 'details', layout: 'fashion', title: 'details', details, bigimg,
    });
  });
};
