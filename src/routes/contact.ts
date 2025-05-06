import sgMail from '@sendgrid/mail';
import bodyParser from 'body-parser';
import express, { Request, Response } from 'express';
import Joi from 'joi';

import { emailTemplate } from '../templates/email';

const router = express.Router();

router.use(bodyParser.json());

router.post('/', (req: Request, res: Response): any => {
  const schema = Joi.object({
    fullName: Joi.string().min(3).max(100).required(),
    email: Joi.string().min(3).email().required(),
    phone: Joi.string().min(9).max(15).required(),
    message: Joi.string().min(10).max(1000).required()
  });

  const result = schema.validate(req.body);
  if (result.error) {
    return res.status(500).send(result.error);
  }

  if (process.env['OLCZANSKI_SENDGRID']) {
    sgMail.setApiKey(process.env['OLCZANSKI_SENDGRID']);
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
    html: emailTemplate(req.body)
  };

  // ES8
  (async () => {
    try {
      await sgMail.send(msg).then((resp: unknown) => res.status(200).send(resp));
    } catch (error: any) {
      res.status(500).send(() => error);
      if (error.response) {
        res.status(500).send(() => error.response.body);
      }
      return;
    }
  })();
});

export { router as contact };
