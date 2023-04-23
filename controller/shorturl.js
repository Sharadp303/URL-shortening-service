const shorturls = require("../model/shorturl.model");
const users = require("../model/user.model");
const validUrl = require("valid-url");
const shortid = require("shortid");

const redisClient = require("../redis.server");

async function shortUrl(req, res) {
  try {
    const { url } = req.body;
    const shortID = shortid.generate();
    const check = validUrl.isUri(url);
   
    if (check) {
        //Adding the url in DB
      const createurl = await shorturls.create({
        url: shortID,
        originalUrl: url,
      });
      
      // set the value in redis
      await redisClient.set(url, shortID);

      //Pushing url ObjectID in User 
      const user = await users.findOne({ _id: req.userID });
      user.urls.push(createurl._id);
      user.save();
      
      res.status(201).json(`http://13.233.78.29:5555${shortID}`);
    } 
    else {
      res.status(400).json({ msg: "Not a valid Url" });
      return;
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: "Internal Server error" });
  }
}

async function searchurl(req, res) {
  const id = req.params.shortID;
  try {
    const result = await shorturls.findOne({ url: id });
    res.redirect(result.originalUrl);
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: "Internal Server error" });
  }
}

module.exports = { shortUrl, searchurl };
