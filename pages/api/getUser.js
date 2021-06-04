const Airtable = require("airtable");
const base = new Airtable({ apiKey:'keyZ8aLumu4v2D9h4' }).base(
  'app9mEEiujWgSqDUs'
);

const table = base('User-Message');

export default async (req, res) => {
    const records = await table.select({}).firstPage();
    res.status(200).json({ records });
 
};
