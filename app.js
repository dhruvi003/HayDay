const express = require("express");
const ejs = require("ejs");
const path = require('path');
const bodyParser = require("body-parser");


const app = express();


const sugar = [
    sugarTitle = "Sugarcane",
    sugarOne = "Hac habitasse platea dictumst",
    sugarTwo = "hey there harum neque recusandae accusantium sed ullam exercitationem necessitatibus. Tenetur"
];

const corn = [
   cornTitle = "Corn",
   cornIntro = "amet consectetur adipisicing elit. Optio quis nostrum ducimus itaque, voluptas voluptatem",
   cornOtherInfo = "Dhwani here from PDPU, recusandae accusantium sed ullam exercitationem necessitatibus. Tenetur"
];

const tea = [
    teaPicOne = "images/teaPicOne.jpeg",
    teaPicThree = "images/sugarcane.jpg",

    teaTitle = "Tea",
    ttOne = "1 COFFEE",
    teaOne = "Tea waste contains 3-4 percent caffeine. The caffeine nutrient in the waste has a broad market with substantial export potential. It is extracted for use in many products, including cosmetics, fertilizers, instant teas, medical, and nutritional supplements.",

    ttTwo = "2 NUTRIENT",
    teaTwo = "Decaffeinated Tea Waste (DCTW) is the waste available in the Caffeine factories after the extraction of caffeine from Factory Tea Waste.",
    teaTTwo = "Tea waste makes a high protein cattle feed after removal of the tannic acid that interferes with protein metabolization. This can be done cheaply. The high fiber count makes it suitable for ruminants. It tastes pretty awful, but is improved by adding molasses.",

    ttThree = "3 ADSORPTION",
    teaThree = "Mixed with clay, tea waste forms adsorptive membranes for removing toxic effluents from ponds that are generated as a factory byproduct.",
    teaTThree = "Black tea waste powder is an effective dye adsorbent Activated tea waste charcoal adsorbs lead, antibiotics, and heavy metals such as zinc, at a lower cost.",

    ttFour = "4 FERTILIZER",
    teaFour = "If we mixed the factory tea waste with 5% urea and cow dung for at least 45 days and kept in soil, then it will be converted into a good bio-nutrient and biofertilizer. ",
    teaTFour = "Tea waste also contains significant amounts of n-triacontanol20. The compound n-triacontanol has tea plant growth promoting properties and might also regulate different other physiological properties like the formation of leaf primordial and development of primary leaves21.",

    ttFive = "5 ENERGY",
    teaFive = "Tea dust and stalks and all the other little bits of waste can be easily processed and turned into liquids and bricks as biomass fuel, bio-char, and bio-oil ",
    teaFFive = "The waste is decomposed using fluidized bed pyrolysis, a thermal decomposition process that occurs in the absence of oxygen.",
    teaTFive = "Tea waste pyrolyzes at high temperatures of 500-700°C and through gasification to produce bio-oil and biochar. The char can be converted into briquettes or mixed with biomass.",
    teaThFive = "This provides a highly efficient solid fuel for use in ovens and boilers across many industries – including tea. The techniques can be fine-tuned to optimize the yield of char, liquid, and gas.",
    teaFFive = "The cellulose in tea waste is the same as that of timber. The high levels of this plus sugar, starch, and pectin are encouraging the use of fuel briquettes to replace wood fuel for ovens. ",
    teaSFive = "The waste is even able to generate battery-power electric charges via vermicomposting",
];


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');
app.use('/form', express.static(__dirname + '/index.html'));

// app.use(express.static("public"));
// app.use('/static', express.static(path.join(__dirname, 'public/css')))
app.use(express.static("./public"))
app.use(bodyParser.urlencoded({ extended: true }));



app.get("/",function(request, responce){
    responce.sendFile(`${__dirname}/index.html`);
});

app.get("/index.html",function(request, responce){
    responce.sendFile(`${__dirname}/index.html`);
});

app.get("/contact.html", function(req,res){
    res.sendFile(`${__dirname}/contact.html`);
});

app.get("/crop.html",function(req,res){
    res.sendFile(`${__dirname}/crop.html`);
})

app.get("/sugarcane",function(req,res){
    res.render("crop",{itemTitle:sugarTitle,aboutContent : sugarOne, otherInfo : sugarTwo});
  });

app.get("/corn", function(req,res){
    res.render("crop",{itemTitle:cornTitle,aboutContent : cornIntro, otherInfo: cornOtherInfo});
});

app.get("/tea", function(req,res){
    res.render("crop",{
        picOne: teaPicOne,
        picThree : teaPicThree,

        itemTitle: teaTitle,
        futOne : ttOne,
        firstUsage : teaOne,

        suT : ttTwo,
        secondUsage : teaTwo,
        secondUsagePointTwo: teaTTwo,

        futThree : ttThree,
        tupo : teaThree,
        tupt : teaTThree,
        
        futFour : ttFour,
        fupo : teaFour,
        fupt : teaTFour,

        futFive : ttFive,
        fifthUsagePointOne : teaFive,
        fifthUsagePointTwo : teaFFive,
        fifthUsagePointThree :  teaTFive,
        fifthUsagePointFour : teaThFive,
        fifthUsagePointFive : teaFFive,
        fifthUsagePointSix : teaSFive
    })
})



app.listen(3000, function(){
    console.log("Server is Running on port 3000...");
});