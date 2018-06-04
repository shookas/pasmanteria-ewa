require('dotenv').config();
const app = require('express')();
const bodyParser = require('body-parser');

const allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );

  next();
};

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(allowCrossDomain);

const PORT = process.env.PORT || 3001;
const CONTACT_ADDRESS = 'piotr_szukala@o2.pl';
const SUBJECT = 'Wiadomość wysłana ze strony www.pasmanteria-poznan.pl';

console.log(`Mail sending backend is running on port ${PORT}`);

const mailer = require('nodemailer').createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.GMAIL_ADDRESS,
    pass: process.env.GMAIL_PASSWORD
  }
});

app.post('/contact', function(req, res) {
  mailer.sendMail(
    {
      from: req.body.email,
      to: [CONTACT_ADDRESS],
      subject: SUBJECT + req.body.name ? `od ${req.body.name}` : '',
      html: req.body.text || '[No message]'
    },
    function(err, info) {
      if (err) return res.status(500).send(err);
      res.json({ success: true });
    }
  );
});

app.listen(PORT);
