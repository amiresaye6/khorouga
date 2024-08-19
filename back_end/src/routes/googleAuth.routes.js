const express = require('express');
const router = express.Router();
const donenv = require('dotenv');
const { OAuth2Client } = require('google-auth-library');

donenv.config();


/* GET users listing. */
router.post('/', async (req, res) => {
    res.header("Access-Control-Allow-Origin", 'http://localhost:3000'); // for not being blocked by cors
    res.header("Access-Control-Allow-Credentials", 'true');// for using http not https
    res.header("Referrer-Policy", "no-referrer-when-downgrade");
    const redirectURL = 'http://127.0.0.1:1234/oauth';

    const oAuth2Client = new OAuth2Client(
        process.env.CLIENT_ID,
        process.env.CLIENT_SECRET,
        redirectURL
    );

    // Generate the url that will be used for the consent dialog.
    const authorizeUrl = oAuth2Client.generateAuthUrl({
        access_type: 'offline', //for testing
        scope: 'https://www.googleapis.com/auth/userinfo.profile  openid ',
        prompt: 'consent'
    });

    res.json({ url: authorizeUrl })

});

module.exports = router;
