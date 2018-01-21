exports.get = (req, res) => {
  res.clearCookie('accessToken');
  res.writeHead(302, {
    Location: '/',
    'Set-Cookie': 'accessToken=0;Max-Age=0',
  });
  res.end();
};
