import nc from 'next-connect';
import client from '../../../../shop/client'

const handler = nc();

handler.get(async(req, res) => {
    const order = await client.fetch(`*[_type == "order" && _id == $id][0]`, {id: req.query.id});
    res.send(order);
});

export default handler;