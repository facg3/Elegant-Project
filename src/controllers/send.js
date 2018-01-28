const nodemailer = require('nodemailer');

exports.post = (req, res) => {
  console.log(req.body);
  const transporter = nodemailer.createTransport({
    host: 'hostSTMP',
    secure: false, // disable SSL
    requireTLS: true, // Force TLS
    tls: {
      rejectUnauthorized: false,
    },
    service: 'Gmail',
    auth: {
      user: 'nicedree@gmail.com',
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  console.log(req.body.email);
  const mailOptions = {
    // from: `${req.body.email}s`,
    to: 'm0597731363@gmail.com',
    subject: 'Elegant Contact',
    text: `Name :  ${req.body.name}  Content: ${req.body.message} from : ${
      req.body.email
    }`,
  };

  transporter.sendMail(mailOptions, (error) => {
    console.log(error);
    if (error) res.status(500).json({ message: error.message });
    else {
      // else res.json({ message: 'Email sent successfully' });
      console.log('successfully');
    }
  });
};
