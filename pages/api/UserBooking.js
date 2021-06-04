const Airtable = require("airtable");
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID
);

const table = base(process.env.AITABLE_UB_TABLE_NAME);

export default async (req, res) => {
  const {ArrivalDate , ApartureDate, People, ContactNumber} = req.body;
  try {
    const createdBookingRecords = await table.create([{ fields: {ArrivalDate , ApartureDate, People, ContactNumber}  }]);
    const createdBookingRecord = {
      id: createdBookingRecords[0].id,
      fields: createdBookingRecords[0].fields,
    };
    res.status(200).json({ createdBookingRecord });
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
    res.json({ msg: "Something went to wrong" });
  }
};
