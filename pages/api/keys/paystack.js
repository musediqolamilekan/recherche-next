import nc from 'next-connect';

const handler = nc();

handler.get(async (req, res) => {
  res.send(process.env.PAYSTACK_CLIENT_ID || 'sb');
});

export default handler;