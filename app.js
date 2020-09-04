const express = require('express');
const app = express();
const sharp = require('sharp');
const axios = require('axios');



//our main image processing api
app.post('/process', async (req, res) => {

    //grabbing the image
    const imageResponse = await axios({ url: req.query.imageUrl, responseType: 'arraybuffer' })
    const inputBuffer = Buffer.from(imageResponse.data, 'binary')

    //processing the image
    sharp(inputBuffer)
        .resize({
            height: 300,
            width: 300,
            fit: "contain",
            background: "#fff"
        })
        .toFile(`./images/bazar-shodai-binarypoets-${Date.now()}.jpg`, (err, info) => {
            if(err) throw err;
            res.send(info);
        });
});


//firing our server
const PORT = process.env.PORT || 399;
app.listen(PORT, ()=>{
    console.log(`Server fired on port ${PORT}`);
});
