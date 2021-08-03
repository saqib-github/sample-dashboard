import { Router } from "express";
import data from "../models/ChartofAccount.js";
// import account from "../models/ChartofAccount.js";
const router = Router();

router.get("/", async (req, res) => {
  try {
    const all_data = await data.find({});
    res.status(200).json(all_data);
  } catch (err) {
    res.json(err);
  }
});
router.post("/", async (req, res) => {
  console.log(req.body);
  const newData = new data({
    type: req.body.type,
    sub_type: req.body.sub_type,
    sub_category: req.body.sub_category,
    head_accounts: [],
    //   {
    //     account_code: req.body.head_accounts.account_code,
    //     account_name: req.body.head_accounts.account_name,
    //     credit: req.body.head_accounts.credit,
    //     debit: req.body.head_accounts.debit,
    //   },
  });
  try {
    const savedData = await newData.save();
    res.json(savedData);
  } catch (err) {
    res.json(err);
  }
});

router.put("/:id", async (req, res) => {
  console.log(req.body);
  try {
    const savedData = await data.findByIdAndUpdate(req.params.id, {
      $push: {
        head_accounts: {
          account_code: req.body.account_code,
          account_name: req.body.account_name,
          credit: req.body.credit,
          debit: req.body.debit,
        },
      },
    });
    res.json(savedData);
  } catch (err) {
    res.json(err);
  }
});
router.delete("/:id", async (req, res) => {
  console.log("params id", req.params.id);
  console.log("body id", req.body);

  try {
    (await data.updateOne(
      { _id: req.params.id },
      { $pull: { head_accounts: { _id: req.body._id } } },
      { multi: true, safe: true }
    ))
      ? res.json("deleted successfully")
      : res.json("deleted failed");
  } catch (err) {
    res.json(err);
  }
});

export default router;
