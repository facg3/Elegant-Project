exports.get = (req, res) => {
  res.render('blogs', {
    activePage: {
      login: true,
    },
  });
};
