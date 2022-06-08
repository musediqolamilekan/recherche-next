import axios from 'axios';
import nc from 'next-connect';

const handler = nc();

handler.post(async(req, res) => {
    const projectId = "8wblrpd3";
    const dataset = "production";
    const tokenWithWriteAccess = process.env.SANITY_AUTH_TOKEN;
    const {data} = await axios.post(`https://${projectId}.api.sanity.io/v2022-05-07/data/mutate/${dataset}?returnIds=true`, {
        mutations: [
            {
                create: {
                    _type: 'order',
                    createdAt: new Date().toISOString(),
                    ...req.body
                }
            }
        ]
    }, {
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${tokenWithWriteAccess}`
        }
    });

    res
        .status(201)
        .send(data.results[0].id);
});
export default handler;