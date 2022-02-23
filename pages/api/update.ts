//This endpoint will act as a cron task but called by a GitHub action
import type { NextApiRequest, NextApiResponse } from 'next';
import Papa from 'papaparse';

type Data = {
    msg: string
}

const vvikStation: string = "https://opendata-download-ocobs.smhi.se/api/version/latest/parameter/6/station/35151.json";

const latestDay: string = "https://opendata-download-ocobs.smhi.se/api/version/latest/parameter/6/station/35151/period/latest-day/data.json";
const correctedArchive: string = "https://opendata-download-ocobs.smhi.se/api/version/latest/parameter/6/station/35151/period/corrected-archive/data.csv";

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    console.log("Endpoint update hit!");
    await getLatestDay();
    await getCorrectedArchive();
    res.status(200).json({msg: "Everything went ok!"});
}

export async function getLatestDay(): any {
    const data = await fetch(latestDay);
    const response = data.json();
    return response;
}

export async function getCorrectedArchive(): any {
    const data = await fetch(correctedArchive);
    const response = data.text();
    return response;
}