exports.client = (req, res) => {
  res.render('404',{layout:false});
};
exports.server = (err, req, res, next) => {
  res.render('500',{layout:false});
};
