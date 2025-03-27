import express, { Request, Response } from 'express';
import request from 'request';

const router = express.Router();

const weatherApi = process.env['OLCZANSKI_WEATHER_API'];
const city = 'zakopane';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pl&appid=${weatherApi}`;

router.get('/', (_req: Request, res: Response): void => {
  request(url, function (err: Error, _response: unknown, body: unknown) {
    if (err) {
      console.error(err);
    } else {
      res.send(body);
    }
  });
});

export { router as weather };
