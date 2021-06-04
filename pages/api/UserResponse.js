const Airtable = require("airtable");
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID
);

const table = base(process.env.AITABLE_UM_TABLE_NAME);

export default async (req, res) => {
  const {Name ,Email, PhoneNo, Message} = req.body;
  try {
    const createdRecords = await table.create([{ fields: {Name, Email, PhoneNo, Message}  }]);
    const createdRecord = {
      id: createdRecords[0].id,
      fields: createdRecords[0].fields,
    };
    res.status(200).json({ createdRecord });
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
    res.json({ msg: "Something went to wrong" });
  }
};
