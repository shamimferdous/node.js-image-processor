const express = require('express');
const app = express();
const sharp = require('sharp');
const axios = require('axios');
const exphbs = require('express-handlebars');


//setting up view engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//setting up express static
app.use(express.static('public'))


//the landing renderer api
app.get('/', (req, res)=>{
    res.render('interface', { layout: false});
});


//our main image processing api
app.post('/process', async (req, res) => {
    console.log(req.query.imageUrl);

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
