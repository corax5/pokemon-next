import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if(req.method !== "POST") return res.status(400).json({ message: 'unauthorized' })

    const {name = ""} = req.body;
    res.status(200).json({ name })
}