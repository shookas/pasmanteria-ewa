const CONTACT_ADDRESS = 'pasmanteria.ewa@gmail.com';
const SUBJECT = 'Wysłano ze strony www.pasmanteria-poznan.pl';

const mailer = require('nodemailer').createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_ADDRESS,
    pass: process.env.GMAIL_PASSWORD
  }
});

module.exports.contact = (event, context, callback) => {
  let body;
  try {
    body = JSON.parse(event.body);
  } catch(err) {
     body = event.body;
  }
  const subjectContent = body.name ? `${SUBJECT} od ${body.name}` : SUBJECT;

  mailer.sendMail(
    {
      from: body.email,
      to: [CONTACT_ADDRESS],
      subject: subjectContent,
      html: body.text || '[No message]'
    },
    function(err, info) {
      if (err) {
        callback(err);
        return;
      }
      callback(null, { statusCode: 200, body: 'Success!'});
    }
  );
};
