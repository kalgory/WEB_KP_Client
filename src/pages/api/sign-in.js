import axios from 'axios';

const url = 'https://auth.kalgory.com/sign-in';
async function handler(req, res) {
  const response = await axios.post(url, req.body);
  res.setHeader('set-cookie', response.headers['set-cookie']);
  res.status(response.status).end();
}

export default handler;
