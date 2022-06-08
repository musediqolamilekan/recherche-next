import axios from 'axios';
import nc from 'next-connect';

const handler = nc();
handler.put(async(req, res) => {
    const projectId = "8wblrpd3";
    const dataset = "production";
    const tokenWithWriteAccess = process.env.SANITY_AUTH_TOKEN;
    await axios.post(`https://${projectId}.api.sanity.io/v2022-05-07/data/mutate/${dataset}`, {
        mutations: [
            {
                patch: {
                    id: req.query.id,
                    set: {
                        isPaid: true,
                        paidAt: new Date().toISOString(),
                        'paymentResult.id': req.body.id,
                        'paymentResult.status': req.body.email_address,
                        'paymentResult.email_address': req.body.id
                    }
                }
            }
        ]
    }, {
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${tokenWithWriteAccess}`
        }
    });

    res.send({message: 'order paid'});
});

export default handler;