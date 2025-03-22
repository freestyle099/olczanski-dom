const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Joi = require('joi');
const sgMail = require('@sendgrid/mail');
const emailTemplate = require('../templates/email');

router.use(bodyParser.json());

router.post('/', (req, res) => {
  const schema = Joi.object({
    fullName: Joi.string().min(3).max(100).required(),
    email: Joi.string().min(3).email().required(),
    phone: Joi.string().min(9).max(15).required(),
    message: Joi.string().min(10).max(1000).required(),
  });

  const result = schema.validate(req.body);
  if (result.error) {
    return res.status(500).send(result.error);
  }

  if (process.env.OLCZANSKI_SENDGRID) {
    sgMail.setApiKey(process.env.OLCZANSKI_SENDGRID);
  } else {
    return res.status(500).send('Bad sendgrid token');
  }
  const { email } = req.body;
  const ourEmail = 'sebus0207@gmail.com';

  const msg = {
    to: email,
    cc: ourEmail,
    from: `Olczanski Dom <${ourEmail}>`, // Use the email address or domain you verified above
    subject: `OlczanskiDom.pl - dziękujemy za kontakt`,
    html: emailTemplate(req.body),
  };

  // ES8
  (async () => {
    try {
      await sgMail.send(msg).then((resp) => res.status(200).send(resp));
    } catch (error) {
      res.status(500).send(() => error);
      if (error.response) {
        res.status(500).send(() => error.response.body);
      }
    }
  })();
});

module.exports = router;
