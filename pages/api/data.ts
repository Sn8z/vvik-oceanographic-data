import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    msg: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    console.log("Endpoint data hit!");

    res.status(200).json({msg: "Everything went ok!"});
}
