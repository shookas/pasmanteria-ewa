require('dotenv').config();
const app = require('express')();

app.use(
  require('body-parser').urlencoded({
    extended: true
  })
);

const PORT = process.env.PORT || 3001;
const CONTACT_ADDRESS = 'piotr_szukala@o2.pl';

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
      from: req.body.from,
      to: [CONTACT_ADDRESS],
      subject:
        req.body.subject ||
        'Wiadomość wysłana ze strony www.pasmanteria-poznan.pl',
      html: req.body.message || '[No message]'
    },
    function(err, info) {
      if (err) return res.status(500).send(err);
      res.json({ success: true });
    }
  );
});

app.listen(PORT);
