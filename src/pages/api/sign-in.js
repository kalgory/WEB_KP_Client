import axios from 'axios';

async function handler(req, res) {
  const { email: id, password } = req.body;
  await axios.post('https://auth.kalgory.com/sign-in', { id, password });
  res.status(200).json({ name: 'John Doe' });
}

export default handler;
