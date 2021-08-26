__path = process.cwd()

var express = require('express');
var db = require(__path + '/database/db');
try {
var zahirr = db.get("zahirr");
} catch (e) {
	console.log('')
}


var creator = "LING-M0"
var a = require('acb-api');
var ytdl = require('ytdl-core');
var ytpl = require('ytpl');
var secure = require('ssl-express-www');
var cors = require('cors');
var fs = require('fs');
var scrapeYt = require("scrape-yt");
var fetch = require('node-fetch');
var cheerio = require('cheerio');
var request = require('request');
//new

var kbeta = require('knights-beta');

var DIG = require('discord-image-generation');
var Caxinha = require('caxinha');
var Swiftcord = require('swiftcord');
var cling = require('canvas-lingmo');
var gis = require('g-i-s');
var Cannvas = require('discord-canvas');
var canvas = require('canvas');
var scanvas = require('scanvas');
var swiftlite = require('kanvas-discrot');
var Ra = require('ra-api');
var kj = require('kanvas-jimp');
var yuricanvas = require("yuri-canvas");
var kanpas = require('kanvas-wea');
var knights = require('knights-canvas');
//end

var imageToBase64 = require('image-to-base64');
var imgbb = require('imgbb-uploader');
var fbdl = require('fbdl-core');
var YoutubeAPI = require('simple-youtube-api')
var youtubs = new YoutubeAPI('AIzaSyB2DRtHACCeIzgduQzzITkS4rnpz_sA2BA'); 
var router  = express.Router();

var { uptotele } = require(__path + '/lib/uploadimage.js');
var { color, bgcolor } = require(__path + '/lib/color.js');
var { fetchJson, getBuffer } = require(__path + '/lib/fetcher.js')
var options = require(__path + '/lib/options.js');


//=end=new


var cookie = "HSID=A7EDzLn3kae2B1Njb;SSID=AheuwUjMojTWvA5GN;APISID=cgfXh13rQbb4zbLP/AlvlPJ2xBJBsykmS_;SAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;__Secure-3PAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;VISITOR_INFO1_LIVE=RgZLnZtCoPU;LOGIN_INFO=AFmmF2swRQIhAOXIXsKVou2azuz-kTsCKpbM9szRExAMUD-OwHYiuB6eAiAyPm4Ag3O9rbma7umBK-AG1zoGqyJinh4ia03csp5Nkw:QUQ3MjNmeXJ0UHFRS3dzaTNGRmlWR2FfMDRxa2NRYTFiN3lfTEdOVTc4QUlwbUI4S2dlVngxSG10N3ZqcHZwTHBKano5SkN2dDlPSkhRMUtReE42TkhYeUVWS3kyUE1jY2I1QzA1MDZBaktwd1llWU9lOWE4NWhoZV92aDkxeE9vMTNlcG1uMU9rYjhOaDZWdno2ZzN3TXl5TVNhSjNBRnJaMExrQXpoa2xzRVUteFNWZDI5S0Fn;PREF=app=desktop&f4=4000000&al=id;SID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1njBpLTOpxSfN-EaYCRSiDg.;YSC=HCowA1fmvzo;__Secure-3PSID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1dajgWzlBh9TgKapGOwuXfA.;SIDCC=AJi4QfFK0ri9fSfMjMQ4tOJNp6vOb9emETXB_nf2S05mvr2jBlmeEvlSsQSzPMuJl_V0wcbL1r8;__Secure-3PSIDCC=AJi4QfGeWHx-c4uTpU1rXCciO1p0s2fJWU07KrkZhWyD1Tqi8LyR-kHuBwHY9mViVYu1fRh2PA";

loghandler = {
    notparam: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter apikey',
        getApikey: 'http://wa.me/6288708344182?text=apikeynya+apa+bang'
    },
    notkey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter key'
    },
    noturl: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter url'
    },
    notkata: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter kata'
    },
    nottext: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text'
    },
    nottext2: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text2'
    },
    notnabi: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter nabi'
    },
    nottext3: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text3'
    },
    nottheme: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter theme'
    },
    notusername: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter username'
    },
    notvalue: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter value'
    },
    notheme: {
    	status: false,
        creator: `${creator}`,
        code: 406,
        message: 'theme tidak tersedia silahkan masukkan texmaker/list atau baca documentasi'
     },
    invalidKey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6283898698875 , key nya gratis kok gan, jadi santuyy ajaa'
    },
    invalidlink: {
        status: false,
        creator: `${creator}`,
        message: 'error, mungkin link anda tidak valid.'
    },
    invalidkata: {
        status: false,
        creator: `${creator}`,
        message: 'error, mungkin kata tidak ada dalam api.'
    },
    notAddApiKey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter status, apikeyInput, email, nomorhp, name, age, country, exp'
    },
    error: {
        status: false,
        creator: `${creator}`,
        message: 'mungkin sedang dilakukan perbaikan'
    }
}

var len = 15
        var arr = '123456789abcdefghijklmnopqrstuvwxyz'
        var random = '';

        for (var i = len; i > 0; i--) {
            random += arr[Math.floor(Math.random() * arr.length)];
        }

        var lenn = 5
        var randomlagi = '';

        for (var i = lenn; i > 0; i--) {
            randomlagi += arr[Math.floor(Math.random() * arr.length)];
        }

        var randomTextNumber = random+randomlagi+'---------LingMo'+'GFL-API';
        
 
 async function cekApiKey(api) {
 	ap = await zahirr.findOne({apikey:api})
 return ap;
 }
router.get('/find', async (req, res, next) => {
    var apikey = req.query.apikey
    if (!apikey) return res.json(loghandler.notparam)
    if (apikey != 'GFL') return res.json(loghandler.invalidKey)

    try {
        zahirr.find()
            .then(result => {
                res.json({
                    status: true,
                    creator: `${creator}`,
                    result
                })
        })
    } catch (e) {
        console.log(e)
        res.json(loghandler.error)
    }
})

router.get('/cekapikey', async (req, res, next) => {
	var apikeyInput = req.query.apikey
	if(!apikeyInput) return res.json(loghandler.notparam)
	a = await cekApiKey(apikeyInput)
	if (a) {
	json = JSON.stringify({
		status: true,
		creator: creator,
		result: {
            status:a.status,
			id: a._id,
			apikey: a.apikey,
			more_info: {
				email: a.email,
				nomor_hp: a.nomor_hp,
				name: a.name,
				age: a.age,
				country: a.country,
				exp:a.exp,
			},
		},
		message: `jangan lupa follow ${creator}`
	})
} else {
	json = JSON.stringify({
		status: false
	})
}
res.send(JSON.parse(json))
})

router.get('/addapikey', (req, res, next) => {
    var apikey = req.query.apikey,
        status = req.query.status,
        apikeyInput  = req.query.apikeyInput,
        email = req.query.email,
        nomorhp = req.query.nomorhp,
        name = req.query.name,
        age = req.query.age,
        country = req.query.country;
        exp = req.query.exp;

    if (!apikey) return res.json(loghandler.notparam)
    if (!(status && apikeyInput && email && nomorhp && name && age && country && exp)) return res.json(loghandler.notAddApiKey)
    if (apikey != 'GFL') return res.json(loghandler.invalidKey)

    try {
        zahirr.insert({
        	status: status,
            apikey: apikeyInput,
            email: email,
            nomor_hp: nomorhp,
            name: name,
            age: age,
            country: country,
            exp: exp
        })
        .then(() => {
              res.json({
                  status: true,
                  creator: `${creator}`,
                  result: 'berhasil menambah data, status : ' + status + ', apikey : ' + apikeyInput + ', email : ' + email + ', nomor_hp : ' + nomorhp + ', name :  ' + name + ', age : ' + age + ', country : ' + country + ', exp : ' + exp
              })
        })
    } catch (e) {
        console.log(e)
        res.json(loghandler.error)
    }
})

//beta delete klo work
router.get('/knights/rank', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            pp = req.query.pp,
            nama = req.query.nama,
            bg = req.query.bg,
            needxp = req.query.needxp,
            currxp = req.query.currxp,
            level = req.query.level,
            rank = req.query.rank   
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    //param
    if (!pp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter pp"})
    if (!nama) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nama"})
    if (!bg) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter bg"})
    if (!needxp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter needxp"})
    if (!currxp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter currxp"})
    if (!level) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter level"})
    if (!rank) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter rank"})
    
var image = await new knights.Rank()
    .setAvatar(`${pp}`) 
    .setUsername(`${nama}`) 
    .setBg(`${bg}`)
    .setNeedxp(`${needxp}`) 
    .setCurrxp(`${currxp}`) 
    .setLevel(`${level}`) 
    .setRank(`${rank}`) 
    .toAttachment();
  data = image.toBuffer();
  await fs.writeFileSync(__path +'/tmp/brank.png', data)
  res.sendFile(__path +'/tmp/brank.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/knights/levelup', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            pp = req.query.pp
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!pp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter pp"})       
var image = await new knights.Up()
    .setAvatar(`${pp}`)
    .toAttachment();
  data = image.toBuffer();
  await fs.writeFileSync(__path +'/tmp/sup.png', data)
  res.sendFile(__path +'/tmp/sup.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/knights/bag', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            bg = req.query.bg,
            stone = req.query.stone,
            coal = req.query.coal,
            wood = req.query.wood,
            core = req.query.core,
            iore = req.query.iore,
            gore = req.query.gore,
            cingot = req.query.cingot,
            iingot = req.query.iingot,
            gingot = req.query.gingot,
            diamond = req.query.diamond,
            ruby = req.query.ruby,
            uranium = req.query.uranium,
            jadite = req.query.jadite,
            leather = req.query.leather,
            meat = req.query.meat,
            fish = req.query.fish
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!bg) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter bg"})
var image = await new knights.Bag()
    .setBackground(`${bg}`)
	.setStone(`${stone}`)
	.setCoal(`${coal}`)
	.setWood(`${wood}`)
	.setCore(`${core}`)
	.setIore(`${iore}`)
	.setGore(`${gore}`)
	.setCingot(`${cingot}`)
	.setIingot(`${iingot}`)
	.setGingot(`${gingot}`)
	.setDiamond(`${diamond}`)
	.setRuby(`${ruby}`)
	.setUranium(`${uranium}`)
	.setJadite(`${jadite}`)
	.setLeather(`${leather}`)
	.setMeat(`${meat}`)
	.setFish(`${fish}`)
  data = image.toBuffer();
  await fs.writeFileSync(__path +'/tmp/bag.png', data)
  res.sendFile(__path +'/tmp/bag.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})



router.get('/bot/welkom2', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            nama = req.query.nama,
            gc = req.query.gc,
            member = req.query.member,
            pp = req.query.pp,
            bg = req.query.bg            

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!nama) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nama"})
    if (!gc) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter gc"})
    if (!member) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter member"})
    if (!pp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter pp"})
    if (!bg) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter bg"})
       
var image = await new knights.Welcome2()
    .setAvatar(`${pp}`)
    .setUsername(`${nama}`) 
    .setBg(`${bg}`) 
    .setGroupname(`${gc}`) 
    .setMember(`${member}`) 
    .toAttachment();
    
  data = image.toBuffer();
  await fs.writeFileSync(__path +'/tmp/sewelkom2.png', data)
  res.sendFile(__path +'/tmp/sewelkom2.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/bot/goodbye2', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            nama = req.query.nama,
            member = req.query.member,
            pp = req.query.pp,
            bg = req.query.bg            

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!nama) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nama"})
    if (!member) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter member"})
    if (!pp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter pp"})
    if (!bg) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter bg"})
       
var image = await new knights.Goodbye2()
    .setAvatar(`${pp}`)
    .setUsername(`${nama}`) 
    .setBg(`${bg}`) 
    .setMember(`${member}`) 
    .toAttachment();
    
  data = image.toBuffer();
  await fs.writeFileSync(__path +'/tmp/segoodbye2.png', data)
  res.sendFile(__path +'/tmp/segoodbye2.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/bot/gfx1', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            nama = req.query.nama

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!nama) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nama"})
   
var image = await new knights.Gfx1()
    .setName(`${nama}`) 
    .toAttachment();
    
  data = image.toBuffer();
  await fs.writeFileSync(__path +'/tmp/gfx1.png', data)
  res.sendFile(__path +'/tmp/gfx1.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/bot/gfx2', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            nama = req.query.nama

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!nama) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nama"})
   
var image = await new knights.Gfx2()
    .setName(`${nama}`) 
    .toAttachment();
    
  data = image.toBuffer();
  await fs.writeFileSync(__path +'/tmp/gfx2.png', data)
  res.sendFile(__path +'/tmp/gfx2.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/bot/gfx3', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            text1 = req.query.text1,
            text2 = req.query.text2

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!text1) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text1"})
    if (!text2) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text2"})
   
var image = await new knights.Gfx3()
    .setText1(`${text1}`) 
    .setText2(`${text2}`)
    .toAttachment();
    
  data = image.toBuffer();
  await fs.writeFileSync(__path +'/tmp/gfx3.png', data)
  res.sendFile(__path +'/tmp/gfx3.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/bot/gfx4', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            text1 = req.query.text1,
            text2 = req.query.text2

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!text1) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text1"})
    if (!text2) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text2"})
   
var image = await new knights.Gfx4()
    .setText1(`${text1}`) 
    .setText2(`${text2}`)
    .toAttachment();
    
  data = image.toBuffer();
  await fs.writeFileSync(__path +'/tmp/gfx4.png', data)
  res.sendFile(__path +'/tmp/gfx4.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/bot/gfx5', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            text = req.query.text

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
   
var image = await new knights.Gfx5()
    .setText1(`${text}`) 
    .toAttachment();
    
  data = image.toBuffer();
  await fs.writeFileSync(__path +'/tmp/gfx4.png', data)
  res.sendFile(__path +'/tmp/gfx4.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/bot/gura', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            nama = req.query.nama

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!nama) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nama"})
   
var image = await new knights.Gura()
    .setName(`${nama}`) 
    .toAttachment();
    
  data = image.toBuffer();
  await fs.writeFileSync(__path +'/tmp/Gura.png', data)
  res.sendFile(__path +'/tmp/Gura.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/knights/inv', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            pp = req.query.pp,
            nama = req.query.nama,
            bg = req.query.bg,            
            coal = req.query.coal,
            stone = req.query.stone,
            ore = req.query.ore,
            ingot = req.query.ingot,
            wood = req.query.wood,
            fish = req.query.fish

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!pp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter pp"})
    if (!bg) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter bg"})
    if (!coal) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter coal"})
    if (!stone) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter stone"})
    if (!ore) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter ore"})
    if (!ingot) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter ingot"})
    if (!wood) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter wood"})
    if (!fish) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter fish"})
    
    
var image = await new knights.Inv()
    .setAvatar(`${pp}`)
    .setUsername(`${nama}`)
    .setBackground(`${bg}`)
    .setCoal(`${coal}`)
    .setStone(`${stone}`)
    .setOre(`${ore}`)
    .setIngot(`${ingot}`)
    .setWood(`${wood}`)
    .setFish(`${fish}`)
    .toAttachment();

  data = image.toBuffer();
  await fs.writeFileSync(__path +'/tmp/inv.png', data)
  res.sendFile(__path +'/tmp/inv.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/knights/spongebob', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            pp = req.query.pp
         
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!pp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter pp"})
    
var image = await new knights.Burn()
    .setAvatar(`${pp}`)
    .toAttachment();
  
  data = image.toBuffer();
  await fs.writeFileSync(__path +'/tmp/spongebob.png', data)
  res.sendFile(__path +'/tmp/spongebob.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/knights/patrick', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            pp = req.query.pp
         
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!pp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter pp"})
    
var image = await new kbeta.Patrick()
    .setAvatar(`${pp}`)
    .toAttachment();
  
  data = image.toBuffer();
  await fs.writeFileSync(__path +'/tmp/patrick.png', data)
  res.sendFile(__path +'/tmp/patrick.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/beta/hacker1', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            text = req.query.text
         
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
    
var image = await new kbeta.Hacker1()
    .setText(`${text}`)
    .toAttachment();
  
  data = image.toBuffer();
  await fs.writeFileSync(__path +'/tmp/hacker1.png', data)
  res.sendFile(__path +'/tmp/hacker1.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/beta/hacker2', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            pp = req.query.pp
         
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!pp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter pp"})
    
var image = await new kbeta.Hacker2()
    .setAvatar(`${pp}`)
    .toAttachment();
  
  data = image.toBuffer();
  await fs.writeFileSync(__path +'/tmp/hacker2.png', data)
  res.sendFile(__path +'/tmp/hacker2.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/beta/hacker3', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            pp = req.query.pp
         
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!pp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter pp"})
    
var image = await new kbeta.Hacker3()
    .setAvatar(`${pp}`)
    .toAttachment();
  
  data = image.toBuffer();
  await fs.writeFileSync(__path +'/tmp/hacker3.png', data)
  res.sendFile(__path +'/tmp/hacker3.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})
//next update apaan njink


router.get('/canvas/welkom', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            nama = req.query.nama,
            gc = req.query.gc,
            ppgc = req.query.ppgc,
            member = req.query.member,
            pp = req.query.pp,
            bg = req.query.bg            


	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!nama) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nama"})
    if (!gc) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter gc"})
    if (!member) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter member"})
    if (!ppgc) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter ppgc"})
    if (!pp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter pp"})
    if (!bg) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter bg"})
    
    
var image = await new knights.Welcome()
    .setUsername(`${nama}`)
    .setGuildName(`${gc}`)
    .setGuildIcon(`${ppgc}`)
    .setMemberCount(`${member}`)
    .setAvatar(`${pp}`)
    .setBackground(`${bg}`)
    .toAttachment();
  

  data = image.toBuffer();
  await fs.writeFileSync(__path +'/tmp/sewelkom.png', data)
  res.sendFile(__path +'/tmp/sewelkom.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/canvas/goodbye', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            nama = req.query.nama,
            gc = req.query.gc,
            ppgc = req.query.ppgc,
            member = req.query.member,
            pp = req.query.pp,
            bg = req.query.bg            


	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!nama) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nama"})
    if (!gc) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter gc"})
    if (!member) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter member"})
    if (!ppgc) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter ppgc"})
    if (!pp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter pp"})
    if (!bg) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter bg"})
    
    
var image = await new knights.Goodbye()
    .setUsername(`${nama}`)
    .setGuildName(`${gc}`)
    .setGuildIcon(`${ppgc}`)
    .setMemberCount(`${member}`)
    .setAvatar(`${pp}`)
    .setBackground(`${bg}`)
    .toAttachment();
  

  data = image.toBuffer();
  await fs.writeFileSync(__path +'/tmp/segoodbye.png', data)
  res.sendFile(__path +'/tmp/segoodbye.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})



router.get('/remove', (req, res, next) => {
    var apikey = req.query.apikey,
        status = req.query.status,
        apikeyInput  = req.query.apikeyInput,
        email = req.query.email,
        nomorhp = req.query.nomorhp
        name = req.query.name,
        age = req.query.age,
        country = req.query.country;
        exp = req.query.exp;

    if (!apikey) return res.json(loghandler.notparam)
    if (!(status && apikeyInput && email && nomorhp && name && age && country && exp)) return res.json(loghandler.notAddApiKey)
    if (apikey != 'GFL') return res.json(loghandler.invalidKey)

    try {
        zahirr.remove({
            status: status,
            apikey: apikeyInput,
            email: email,
            nomor_hp: nomorhp,
            name: name,
            age: age,
            country: country,
            exp: exp
        })
        .then(() => {
             res.json({
                  status: true,
                  creator: `${creator}`,
                  result: 'berhasil menghapus data, status : ' + status + ', apikey : ' + apikeyInput + ', email : ' + email + ', nomor_hp : ' + nomorhp + ', name :  ' + name + ', age : ' + age + ', country : ' + country + ', exp : ' + exp
              })
        })
    } catch (e) {
        console.log(e)
        res.json(loghandler.error)
    }
})

//=====tes

router.get('/kanpas/welkom3', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            nama = req.query.nama,
            gc = req.query.gc,
            pp = req.query.pp,
            bg = req.query.bg

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!nama) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nama"})
    if (!gc) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter gc"})
    if (!pp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter pp"})
    if (!bg) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter bg"})
    
var image = await new kanpas.Welcome()
  .setGuildIcon(`${pp}`)
  .setGuildName(`${nama}`)
  .setMemberCount(`${gc}`)
  .setBackground(`${bg}`)
  .toAttachment();
  

  data = image.toBuffer();
  await fs.writeFileSync(__path +'/tmp/welkom3.png', data)
  res.sendFile(__path+'/tmp/welkom3.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/kanpas/goodbye3', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            nama = req.query.nama,
            gc = req.query.gc,
            pp = req.query.pp,
            bg = req.query.bg

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!nama) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nama"})
    if (!gc) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter gc"})
    if (!pp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter pp"})
    if (!bg) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter bg"})
    
var image = await new kanpas.Goodbye()
  .setGuildIcon(`${pp}`)
  .setGuildName(`${nama}`)
  .setMemberCount(`${gc}`)
  .setBackground(`${bg}`)
  .toAttachment();
  

  data = image.toBuffer();
  await fs.writeFileSync(__path +'/tmp/goodbye3.png', data)
  res.sendFile(__path+'/tmp/goodbye3.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})

//===end
router.get('/kanpas/welkom', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            nama = req.query.nama,
            gc = req.query.gc,
            pp = req.query.pp,
            bg = req.query.bg

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!nama) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nama"})
    if (!gc) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter gc"})
    if (!pp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter pp"})
    if (!bg) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter bg"})
    
var image = await new kanpas.Welcome()
  .setGuildIcon(`${pp}`)
  .setGuildName(`${nama}`)
  .setMemberCount(`${gc}`)
  .setBackground(`${bg}`)
  .toAttachment();
  

  data = image.toBuffer();
  await fs.writeFileSync(__path +'/tmp/goodbye3.png', data)
  res.sendFile(__path+'/tmp/goodbye3.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/kanpas/goodbye', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            nama = req.query.nama,
            gc = req.query.gc,
            pp = req.query.pp,
            bg = req.query.bg

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!nama) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nama"})
    if (!gc) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter gc"})
    if (!pp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter pp"})
    if (!bg) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter bg"})
    
var image = await new kanpas.Goodbye()
  .setGuildIcon(`${pp}`)
  .setGuildName(`${nama}`)
  .setMemberCount(`${gc}`)
  .setBackground(`${bg}`)
  .toAttachment();
  

  data = image.toBuffer();
  await fs.writeFileSync(__path +'/tmp/goodbye3.png', data)
  res.sendFile(__path+'/tmp/goodbye3.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})






router.get('/level2', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            nama = req.query.nama,
            pp = req.query.pp,
            bg = req.query.bg,           
            xp = req.query.xp,           
            fullxp = req.query.fullxp,           
            color = req.query.color
            
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!nama) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nama"})
    if (!pp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter pp"})
    if (!bg) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter bg"})
    if (!xp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter xp"})
    if (!fullxp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter fullxp"})
    if (!color) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter color"})
    
    
const rank = await new scanvas.RankCard()
.setName(`${nama}`) 
.setAvatar(`${pp}`)
.setXp(xp)
.setColor(`#${color}`)
.setFullXp(fullxp)
.setBackground(`${bg}`)
.toAttachment();

 data = rank.toBuffer();
await fs.writeFileSync(__path +'/tmp/level.png', data)
  res.sendFile(__path+'/tmp/level.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})


//=======new FXC7========

router.get('/joox', async(req, res, next) => {
  var apikeyInput = req.query.apikey,
        query = req.query.query
  
  if (!apikey) return res.json(loghandler.notparam)
  if (!query) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})
  if (apikey != 'GFL') return res.json(loghandler.invalidKey)
  
  Joox(query)
  .then((result) => {
      res.json({
        status: true,
        code: 200,
        creator: `${creator}`,
        result
      })
    })
    .catch(e => {
         	res.json(loghandler.error)
})
})



router.get('/ytmp3', async(req, res, next) => {
  var apikeyInput = req.query.apikey,
        url = req.query.url


	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!url) return res.json(loghandler.noturl)

  ytDonlodMp3(url)
    .then((result) => {
      res.json({
        status: true,
        code: 200,
        creator: `${creator}`,
        result
      })
    })
    .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/ytmp4', async(req, res, next) => {
  var apikeyInput = req.query.apikey,
        url = req.query.url


	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!url) return res.json(loghandler.noturl)

     
  ytDonlodMp4(url)
    .then((result) => {
      res.json({
        status: true,
        code: 200,
        creator: `${creator}`,
        result
      })
    })
    .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/playmp3', async(req, res, next) => {
    var apikeyInput = req.query.apikey,
        query = req.query.query
  
  if (!apikey) return res.json(loghandler.notparam)
  if (!query) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})
  if (apikey != 'GFL') return res.json(loghandler.invalidKey)
  
    ytPlayMp3(query)
        .then((result) => {
            res.json(result);
        })
        .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/playmp4', async(req, res, next) => {
var apikeyInput = req.query.apikey,
        query = req.query.query
  
  if (!apikey) return res.json(loghandler.notparam)
  if (!query) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})
  if (apikey != 'GFL') return res.json(loghandler.invalidKey)
  
    ytPlayMp4(query)
        .then((result) => {
            res.json(result);
        })
        .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/dl/tiktok', async (req, res, next) => {
    var apikeyInput = req.query.apikey,
        url = req.query.url


	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!url) return res.json(loghandler.noturl)

     Tiktok(url)
     .then((data) => {
       res.json(data)
     })
    .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/ig', async(req, res, next) => {
  var apikeyInput = req.query.apikey,
        url = req.query.url

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!url) return res.json(loghandler.noturl)

  igDownload(url)
    .then((data) => {
      result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        id: data.id,
        shortCode: data.shortCode,
        caption: data.caption,
        result: data.url
      }
      res.json(result)
    })
    .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/stalk/ig', async(req, res, next) => {
  var apikeyInput = req.query.apikey,
        username = req.query.username
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!username) return res.json(loghandler.notusername)
    
  igStalk(username)
    .then((result) => {
      res.json({
        status : true,
        code: 200,
        creator : `${creator}`,
        result
      });
    })
    .catch(e => {
         	res.json(loghandler.error)
})
})


//=======end FXC7========

//===RA API

router.get('/stiker', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            query = req.query.query
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!query) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})

       Ra.stickerSearch(query)
        .then(data => {
        var result = data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result,
                 message : `jangan lupa follow ${creator}`
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/mangatoon', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            query = req.query.query
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!query) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})

       await Ra.ManggaToon(query)
        .then(data => {
        var result = data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result,
                 message : `jangan lupa follow ${creator}`
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

//end ra api
//skrep by gw 
router.get('/waifu2', (req, res, next) => {
    try {
    	var linky = ['https://results.dogpile.com/serp?qc=images&q=waifu&sc=SCBYWmK-IqMbAPsGTGrkO4P8-CeQE9Fp0BkIuPL9RDVMbuE9M6ypoXN2Hf8QtXGKZIFibPWDWOtn_hHCOqWiY24vuM3mRzMwXQ1ElX6c_FhmRftDSNynt8H-MXkLdeyIRT0SvxbGP1dbnP031-Zy_IuT-uUPLj-S9UsyumQZ-cG-r28FDiPI5o7297P_-h0s96FjW1QuN-hecMzuLU7X0qI6Ga7NdnqBQcJw840J2HQdhuSg4aXmJemVE-_iMnkLmnA3nph1tq4IICpdAAs7WYrOb_XifDAZh0WyfzMDPcoNcffLYpqBoZEpoIwuHJ8idFHUUZKwdElPUvJH6KcJhXSF1MrN8TK1eDKnUzgMiBCHCo3u2_Ev878Q1BmWknU0EmHixPkm_w9AyUWz8BvjGpkRnAZTX_jjsKG79Zzbe9UmsrTFUT2LNsnbV1b2pF_mwdx9woqjZ5-4MyKrYeGH4Zfk6uxfh0ea2_vFfZJkh9dV4GleZG4ZDK3mmoflGJYY6nvfCTgTB6BvgAB1PqqkBWqJfMU1GYWgRz-g676kiFd6VKjkThNhshZ1oUw3w14zMYkKUgMO3PZaWSXXnvzWxdOlut23invlKz9IYmXKUzUjuMEQfRXOXykt8XWK_lzfB_najxOAL_2Zp9kRs40mvuv382pYXBGp5YraQo2vT0RkYgs6qGIajDJNIRd-bUEFUGMiOCILJrgU8xcXZiYSkpHH0cnfBdNNh9ybHMD4Ghg-YB5ZYn3iE88tGqH6g6_HVhQy3hyAh5xymvs-yVPU0LEARIA26GdHtDZT0hcT5fsjmdN-bq-s9VhnCNGJFMXHku0gC4JODtYSHXByilBr-IUR5OhcvtlADzobN4etVvOmoeNY1hmFtR8XmT1yudc4SYwna61SmdCgn97eXvOH0-aF4YlXdxRhS6ora9Y0H6jTul05AA1kTuhtksWVrx3GNKcHMX-OZJIjIGU8aweQRhGvDbGxDB3MQG8HRcQicEPzw5xjiGYriwqGmoxuHZGnZb8jOykQnmrpDSrgK85DLubsxy5hYDdaE9R2HIYtPMh1A5SA1JBbq3uSsuwVbjhR1-WYjSGcpuOSiKmaPveNqV-0Bq3377j3Yd_Z9PTp18u0cYES0V4S2bz3CMzFUXw1A0gKFez6N5_pCtBimlIg1rM7V5Zj22KvlR8c2R9qMrO8YD9RurTaG8kMZTgm8bUgj2VkeGrz4hdMs8bXIz_uvZ1EAEfFZUdQoVmdtkzf8j-3hlK44rhJh3ofFZG0BAUsw7dtT1fYYZkanLNxE1Ns6G4UMBYqryma-7auKxKcgkhyX_J3UhCCtW8JaYpqFnsdCo3ExgLK6n8D8kDG-ARgVnkN42MtUxjWA2Lqufy_3VHGk_s6RSmo1xCgPSDJ5VSf2cpojvGfLPUjivNQs3N0IZIBXABKUy96CjOrRcfVq_S4yqdHfJ75KjzCVSrtroO5E6As9QkU0njmL_Dc-jWsJS-KZ-KYsoyUXvk7ZIKdxUZSefwlg62cGc0U1GipNmLTap9irMaf8d4-sA7w0za-4QT6mVhSMx7p14Dobo8rocH29ZnhRj7uJyXvGahq9d2Q4P_wE_dSeWAngZnB2pFeqWmqulmL36O_ixQrI-0esLqBgsCqvf2nvUFlTySoGXqX2egLMgVyv15JGWQQL5mxI6SzMoaAUQqgpRDKCcXwQgHFCzV1lbkji4bimaCCgXZFC2ATWF5swID0JPkIFjCPhSNFsiextaoaCqpcdH0PQLQwlEE3NbfRDeYTrpYP_PCWIbwh8l6coqGwMPJWWo-lmy3fV78Q9Ig7Tzs1vaBd_TLVDdDh0I7U2TdMT2CEEABxt7f0qM1fDAHIeFG7-qZwOt0xuvLtgjSi3x8MjehTZr4-u0HYEME_XwJoV1XGIn97pgWlCcRNw1RC87QG0GBkcKUW-270UQbDSzPOuciD6Jvs7uHKjy-lzju_0Q2Kf5-xpPWGhaNRtDjSw-E7','https://results.dogpile.com/serp?q=waifu&page=2&sc=52YMfttMEPzz20','https://results.dogpile.com/serp?q=waifu&page=3&sc=iyfRPp85I99Q20','https://results.dogpile.com/serp?q=waifu&page=4&sc=07VtnOkPGODm20'];
         var urls = linky[Math.floor(Math.random() * linky.length)];
        var options = {
            url: `${urls}`,
            method: "GET",
            headers: {
                "Accept": "text/html",
                "User-Agent": "Chrome"
            }
        }

        request(options, function(error, response, responseBody) {
            if (error) return

            $ = cheerio.load(responseBody)
            var links = $(".image a.link")
            var cari = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"))

            if (!cari.length) return
            var hasil = cari[Math.floor(Math.random() * cari.length)]

            res.json({
                status : true,
                creator : `${creator}`,
                result : {
                    image : hasil,
                },
                message : `by ${creator}`})
            })
    } catch (e) {}
})


router.get('/loli', (req, res, next) => {
    try {
    	var linky = ['https://results.dogpile.com/serp?qc=images&q=LOLI','https://results.dogpile.com/serp?q=LOLI&page=2&sc=yIbTvMawLWqx20','https://results.dogpile.com/serp?q=LOLI&page=3&sc=HGB9qn7Rsx7820'];
         var urls = linky[Math.floor(Math.random() * linky.length)];
        var options = {
            url: `${urls}`,
            method: "GET",
            headers: {
                "Accept": "text/html",
                "User-Agent": "Chrome"
            }
        }

        request(options, function(error, response, responseBody) {
            if (error) return

            $ = cheerio.load(responseBody)
            var links = $(".image a.link")
            var cari = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"))

            if (!cari.length) return
            var hasil = cari[Math.floor(Math.random() * cari.length)]

            res.json({
                status : true,
                creator : `${creator}`,
                result : {
                    image : hasil,
                },
                message : `by ${creator}`})
            })
    } catch (e) {}
})

router.get('/shota', (req, res, next) => {
    try {
    	var linky = ['https://results.dogpile.com/serp?q=Shota+anime&sc=2ZwOzd8GPmQQ20','https://results.dogpile.com/serp?q=Shota+anime&page=2&sc=VrmtiV0BBsgz20','https://results.dogpile.com/serp?q=Shota+anime&page=3&sc=bxi1gGGxXjwc20'];
         var urls = linky[Math.floor(Math.random() * linky.length)];
        var options = {
            url: `${urls}`,
            method: "GET",
            headers: {
                "Accept": "text/html",
                "User-Agent": "Chrome"
            }
        }

        request(options, function(error, response, responseBody) {
            if (error) return

            $ = cheerio.load(responseBody)
            var links = $(".image a.link")
            var cari = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"))

            if (!cari.length) return
            var hasil = cari[Math.floor(Math.random() * cari.length)]

            res.json({
                status : true,
                creator : `${creator}`,
                result : {
                    image : hasil,
                },
                message : `by ${creator}`})
            })
    } catch (e) {}
})


router.get('/nekonime', (req, res, next) => {
    try {
    	var linky = ['https://results.dogpile.com/serp?q=Neko+anime&sc=k1iSjHskjBkF20','https://results.dogpile.com/serp?q=Neko+anime&page=2&sc=JzpyiXU9Ybro20','https://results.dogpile.com/serp?q=Neko+anime&page=3&sc=tOR0fEAJOXXI20'];
         var urls = linky[Math.floor(Math.random() * linky.length)];
        var options = {
            url: `${urls}`,
            method: "GET",
            headers: {
                "Accept": "text/html",
                "User-Agent": "Chrome"
            }
        }

        request(options, function(error, response, responseBody) {
            if (error) return

            $ = cheerio.load(responseBody)
            var links = $(".image a.link")
            var cari = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"))

            if (!cari.length) return
            var hasil = cari[Math.floor(Math.random() * cari.length)]

            res.json({
                status : true,
                creator : `${creator}`,
                result : {
                    image : hasil,
                },
                message : `by ${creator}`})
            })
    } catch (e) {}
})


router.get('/depression', (req, res, next) => {
    try {
    	var linky = ['https://results.dogpile.com/serp?q=depression+anime+&sc=UAJrG239tQt420','https://results.dogpile.com/serp?q=depression+anime+&page=2&sc=6LMFqN0XWrQS20','https://results.dogpile.com/serp?q=depression+anime+&page=4&sc=q3aApBC1iNjz20'];
         var urls = linky[Math.floor(Math.random() * linky.length)];
        var options = {
            url: `${urls}`,
            method: "GET",
            headers: {
                "Accept": "text/html",
                "User-Agent": "Chrome"
            }
        }

        request(options, function(error, response, responseBody) {
            if (error) return

            $ = cheerio.load(responseBody)
            var links = $(".image a.link")
            var cari = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"))

            if (!cari.length) return
            var hasil = cari[Math.floor(Math.random() * cari.length)]

            res.json({
                status : true,
                creator : `${creator}`,
                result : {
                    image : hasil,
                },
                message : `by ${creator}`})
            })
    } catch (e) {}
})


//end scrape by Linz




router.get('/waifu', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
        
        await waifuR(res => {
		var result = res;
                res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/image', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            query = req.query.query
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
        if (!query) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})
        
        gis(query, async (error, result) => {
		var link = result
                res.json({
                 link
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

//new====canvas====new

router.get('/dead', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            image = req.query.image
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!image) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter image"})

       data = await new kj.Deadmc().getImage(`${image}`)
        await fs.writeFileSync(__path +'/tmp/dead.png', img)
        res.sendFile(__path+'/tmp/dead.png')
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/delete', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            image = req.query.image
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!image) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter image"})

       img = await new DIG.Delete().getImage(`${image}`)
        await fs.writeFileSync(__path +'/tmp/delete.png', img)
        res.sendFile(__path+'/tmp/delete.png')
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/beautiful', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            image = req.query.image
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!image) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter image"})

       img = await new DIG.Beautiful().getImage(`${image}`)
        await fs.writeFileSync(__path +'/tmp/beautiful.png', img)
  res.sendFile(__path+'/tmp/beautiful.png')
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/bobross', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            image = req.query.image
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!image) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter image"})

       img = await new DIG.Bobross().getImage(`${image}`)
        await fs.writeFileSync(__path +'/tmp/bobros.png', img)
  res.sendFile(__path+'/tmp/bobros.png')
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/hitler', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            image = req.query.image
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!image) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter image"})

       img = await new DIG.Hitler().getImage(`${image}`)
        await fs.writeFileSync(__path +'/tmp/hitler.png', img)
  res.sendFile(__path+'/tmp/hitler.png')
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/notstonk', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            image = req.query.image
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!image) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter image"})

       img = await new DIG.NotStonk().getImage(`${image}`)
        await fs.writeFileSync(__path +'/tmp/notstonk.png', img)
  res.sendFile(__path+'/tmp/notstonk.png')
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/poutine', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            image = req.query.image
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!image) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter image"})

       img = await new DIG.Poutine().getImage(`${image}`)
        await fs.writeFileSync(__path +'/tmp/poutine.png', img)
  res.sendFile(__path+'/tmp/poutine.png')
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/rip', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            image = req.query.image
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!image) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter image"})

       img = await new DIG.Rip().getImage(`${image}`)
        await fs.writeFileSync(__path +'/tmp/rip.png', img)
        res.sendFile(__path+'/tmp/rip.png')
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/trash', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            image = req.query.image
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!image) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter image"})

       img = await new DIG.Trash().getImage(`${image}`)
        await fs.writeFileSync(__path +'/tmp/trash.png', img)
        res.sendFile(__path+'/tmp/trash.png')
         .catch(e => {
         	res.json(loghandler.error)
})
})




router.get('/lisa', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            text = req.query.image
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!image) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       img = await new DIG.LisaPresentation().getImage(`${text}`)
        await fs.writeFileSync(__path +'/tmp/lisa.png', img)
  res.sendFile(__path+'/tmp/lisa.png')
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/gay', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            image = req.query.image
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!image) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter image"})

       img = await new DIG.Gay().getImage(`${image}`)
        await fs.writeFileSync(__path +'/tmp/gay.png', img)
  res.sendFile(__path+'/tmp/gay.png')
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/komunis', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            image = req.query.image
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!image) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter image"})

       img = await Caxinha.canvas.comunism(`${image}`);
        await fs.writeFileSync(__path +'/tmp/komunis.png', img)
  res.sendFile(__path+'/tmp/komunis.png')
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/wasted', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            image = req.query.image
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!image) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter image"})

       img = await Caxinha.canvas.wasted(`${image}`);
        await fs.writeFileSync(__path +'/tmp/wasted.png', img)
  res.sendFile(__path+'/tmp/wasted.png')
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/wolverine', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            image = req.query.image
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!image) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter image"})

       let hasil = `https://vacefron.nl/api/wolverine?user=${image}`
      data = await fetch(hasil).then(v => v.buffer())
        await fs.writeFileSync(__path +'/tmp/wolverine.png', data)
  res.sendFile(__path+'/tmp/wolverine.png')
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/amongus', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            name = req.query.name,
            impostor = req.query.impostor,
            color = req.query.color
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!name) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter name"})
    if (!impostor) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter impostor (true=impostor && false=not impostor)"})
    if (!color) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter color > list color black|blue|brown|cyan|darkgreen|lime|orange|pink|purple|red|white|yellow "})
    
    
       let hasil = `https://vacefron.nl/api/ejected?name=${name}&impostor=${impostor}&crewmate=${color}`
      data = await fetch(hasil).then(v => v.buffer())
        await fs.writeFileSync(__path +'/tmp/amongus.png', data)
  res.sendFile(__path+'/tmp/amongus.png')
         .catch(e => {
         	res.json(loghandler.error)
})
})

//greetings====canvas

router.get('/goodbye', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            nama = req.query.nama,
            discriminator = req.query.discriminator,
            member = req.query.member,
            gc = req.query.gc,
            pp = req.query.pp,
            bg = req.query.bg,            
            tcolor = req.query.tcolor,
            color = req.query.color

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!nama) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nama"})
    if (!discriminator) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter discriminator"})
    if (!member) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter member"})
    if (!gc) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter gc"})
    if (!pp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter pp"})
    if (!bg) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter bg"})
    if (!tcolor) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter tcolor"})
    if (!color) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter color"})
    
var image = await new Cannvas.Goodbye()
   .setUsername(`${nama}`)
  .setDiscriminator(`${discriminator}`)
  .setMemberCount(`${member}`)
  .setGuildName(`${gc}`)
  .setAvatar(`${pp}`)
  .setColor("border", `#${color}`)
  .setColor("username-box", `#${color}`)
  .setColor("discriminator-box", `#${color}`)
  .setColor("message-box", `#${color}`)
  .setColor("title", `#${tcolor}`)
  .setColor("avatar", `#${color}`)
  .setBackground(`${bg}`)
  .toAttachment();

  data = image.toBuffer();
  await fs.writeFileSync(__path +'/tmp/goodbye.png', data)
  res.sendFile(__path+'/tmp/goodbye.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})



router.get('/welcome', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            nama = req.query.nama,
            discriminator = req.query.discriminator,
            member = req.query.member,
            gc = req.query.gc,
            pp = req.query.pp,
            bg = req.query.bg,            
            tcolor = req.query.tcolor,
            color = req.query.color

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!nama) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nama"})
    if (!discriminator) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter discriminator"})
    if (!member) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter member"})
    if (!gc) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter gc"})
    if (!pp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter pp"})
    if (!bg) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter bg"})
    if (!tcolor) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter tcolor"})
    if (!color) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter color"})
    
var image = await new Cannvas.Welcome()
  .setUsername(`${nama}`)
  .setDiscriminator(`${discriminator}`)
  .setMemberCount(`${member}`)
  .setGuildName(`${gc}`)
  .setAvatar(`${pp}`)
  .setColor("border", `#${color}`)
  .setColor("username-box", `#${color}`)
  .setColor("discriminator-box", `#${color}`)
  .setColor("message-box", `#${color}`)
  .setColor("title", `#${tcolor}`)
  .setColor("avatar", `#${color}`)
  .setBackground(`${bg}`)
  .toAttachment();

  data = image.toBuffer();
  await fs.writeFileSync(__path +'/tmp/welcome.png', data)
  res.sendFile(__path+'/tmp/welcome.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/level', async (req, res, next) => {
          var apikeyInput = req.query.apikey,
            username = req.query.username,
            discrim = req.query.discrim,
            lvl = req.query.lvl,
            rang = req.query.rang,
            needxp = req.query.needxp,
            curxp = req.query.curxp,
            av = req.query.av,
            bg = req.query.bg  
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!username) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter username"})
    if (!discrim) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter discrim"})
    if (!lvl) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter lvl"})
    if (!rang) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter rang"})
    if (!needxp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter needxp"})
    if (!curxp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter curxp"})
    if (!av) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter av"})
    if (!bg) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter bg"})
    
    
    
     let img = await yuricanvas.rank({ 
            username, 
            discrim, 
            level: lvl, 
            rank: rang, 
            neededXP: needxp, 
            currentXP: curxp, 
            avatarURL: av, 
            color: "white", 
            background: `${bg}`
        });
        await fs.writeFileSync(__path +'/tmp/lvl.png', img)
  res.sendFile(__path+'/tmp/lvl.png')
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/welkom2', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            nama = req.query.nama,
            pp = req.query.pp,
            bg = req.query.bg,           
            bcolor = req.query.bcolor
            
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!nama) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nama"})
    if (!pp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter pp"})
    if (!bg) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter bg"})
    if (!bcolor) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter bcolor"})
    
    
let Welcome = await new scanvas.Welcome()
.setName(`${nama}`)
.setBackgroundColor(`#${bcolor}`) 
.setStrokeColor("#ffffff")  
.setTextColor("#ffffff") 
.setShadow(true)
.setAvatar(`${pp}`)
.setBackground(`${bg}`)
.toAttachment()
    
 data = Welcome.toBuffer();
  await fs.writeFileSync(__path +'/tmp/welkom2.png', data)
  res.sendFile(__path+'/tmp/welkom2.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/goodbye2', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            nama = req.query.nama,
            pp = req.query.pp,
            bg = req.query.bg,           
            bcolor = req.query.bcolor
            
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!nama) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nama"})
    if (!pp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter pp"})
    if (!bg) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter bg"})
    if (!bcolor) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter bcolor"})
    
let Goodbye = await new scanvas.Goodbye()
.setName(`${nama}`)
.setBackgroundColor(`#${bcolor}`) 
.setStrokeColor("#ffffff")  
.setTextColor("#ffffff") 
.setShadow(true)
.setAvatar(`${pp}`)
.setBackground(`${bg}`)
.toAttachment()
    
 data = Goodbye.toBuffer();
  await fs.writeFileSync(__path +'/tmp/goodbye2.png', data)
  res.sendFile(__path+'/tmp/goodbye2.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})

//===canvacord

router.get('/changemymind', async (req, res, next) => {
          var apikeyInput = req.query.apikey,
            text = req.query.text
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
    
    
     let img = await yuricanvas.changemymind(`${text}`)
        await fs.writeFileSync(__path +'/tmp/cmm.png', data)
  res.sendFile(__path+'/tmp/cmm.png')
         .catch(e => {
         	res.json(loghandler.error)
})
})

//swiftlite

router.get('/swiftlite/welkom', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            nama = req.query.nama,
            gc = req.query.gc,
            ppgc = req.query.ppgc,
            member = req.query.member,
            pp = req.query.pp,
            bg = req.query.bg            


	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!nama) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nama"})
    if (!gc) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter gc"})
    if (!member) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter member"})
    if (!ppgc) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter ppgc"})
    if (!pp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter pp"})
    if (!bg) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter bg"})
    
    
var image = await new swiftlite.Welcome()
    .setUsername(`${nama}`)
    .setGuildName(`${gc}`)
    .setGuildIcon(`${ppgc}`)
    .setMemberCount(`${member}`)
    .setAvatar(`${pp}`)
    .setBackground(`${bg}`)
    .toAttachment();
  

  data = image.toBuffer();
  await fs.writeFileSync(__path +'/tmp/swelkom.png', data)
  res.sendFile(__path +'/tmp/swelkom.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})



router.get('/swiftlite/goodbye', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            nama = req.query.nama,
            gc = req.query.gc,
            ppgc = req.query.ppgc,
            member = req.query.member,
            pp = req.query.pp,
            bg = req.query.bg            


	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!nama) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nama"})
    if (!gc) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter gc"})
    if (!member) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter member"})
    if (!ppgc) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter ppgc"})
    if (!pp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter pp"})
    if (!bg) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter bg"})
    
    
var image = await new swiftlite.Goodbye()
    .setUsername(`${nama}`)
    .setGuildName(`${gc}`)
    .setGuildIcon(`${ppgc}`)
    .setMemberCount(`${member}`)
    .setAvatar(`${pp}`)
    .setBackground(`${bg}`)
    .toAttachment();
  

  data = image.toBuffer();
  await fs.writeFileSync(__path +'/tmp/sgoodbye.png', data)
  res.sendFile(__path +'/tmp/sgoodbye.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})





//end===canvas===greetings


router.get('/ig/stalk', async (req, res, next) => {
    var apikeyInput = req.query.apikey,
        username = req.query.username
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!username) return res.json(loghandler.notusername)
    userInstagram(`${username}`)
    .then(user => {
            res.json({
                status : true,
                creator : `${creator}`,
                result : user
            })
        })
        .catch(e => {
             res.json({
                 status : false,
                 creator : `${creator}`,
                 message : "error, mungkin username anda tidak valid"
             })
         })
})


router.get('/anime/chara', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            search = req.query.search
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
        if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})
a.get_character_by_search(search)
  .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})



router.get('/tiktod', async (req, res, next) => {
    var apikeyInput = req.query.apikey,
        url = req.query.url


	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
     if (!url) return res.json(loghandler.noturl)

     TikTokScraper.getVideoMeta(url, options)
         .then(vid => {
             console.log(vid)
             res.json({
                 status: true,
                 creator: `${creator}`,
                 videoNoWm: vid
             })
         })
         .catch(e => {
             res.json(loghandler.invalidlink)
         })
})

router.get('/tiktod/stalk', async (req, res, next) => {
    var apikeyInput = req.query.apikey,
        username = req.query.username

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!username) return res.json(loghandler.notusername)


    TikTokScraper.getUserProfileInfo(username)
        .then(user => {
            res.json({
                status : true,
                creator : `${creator}`,
                result : user
            })
        })
        .catch(e => {
             res.json({
                 status : false,
                 creator : `${creator}`,
                 message : "error, mungkin username anda tidak valid"
             })
         })
})

router.get('/randomquote', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://python-api-zhirrr.herokuapp.com/api/random/quotes`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/ig/down', async (req, res, next) => {
    var apikeyInput = req.query.apikey,
        url = req.query.url


	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
     if (!url) return res.json(loghandler.noturl)

     instagramGetUrl(`${url}`)
         .then(res => {
             res.json({
                 status: true,
                 creator: `${creator}`,
                 link_cuk: `${res.url_list}`
             })
         })
         .catch(e => {
             res.json(loghandler.invalidlink)
         })
})


router.get('/infonpm', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            query = req.query.query
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!query) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})

       fetch(encodeURI(`https://registry.npmjs.org/${query}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result,
                 message : `jangan lupa follow ${creator}`
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/short/tiny', async (req, res, next) => {
    var apikeyInput = req.query.apikey,
        url = req.query.url

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
     if (!url) return res.json(loghandler.noturl)

     request(`https://tinyurl.com/api-create.php?url=${url}`, function (error, response, body) {
         try {
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result : {
                     link : `${body}`,
                 },
                 message : `jangan lupa follow ${creator}`
             })
         } catch (e) {
             console.log('Error :', color(e,'red'))
             res.json(loghandler.invalidlink)
         }
     })
})

router.get('/base', async (req, res, next) => {
	var type = req.query.type,
		encode = req.query.encode,
		decode = req.query.decode,
		apikeyInput = req.query.apikey;
		if (!apikeyInput) return res.json(loghandler.notparam)
		if (apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
		if (!type) return res.json({status: false, creator, code: 404, message: 'masukan parameter type, type yang tersedia : base64 , base32'})
		if (type == 'base64' && encode){
				Base("b64enc", encode)
				.then(result => {
					res.json({
						status:true,
						creator: `${creator}`,
						result
					})
				})
			} else if (type == 'base64' && decode){
				Base("b64dec", decode)
				.then(result => {
					res.json({
						status: true,
						creator: `${creator}`,
						result
					})
				})
			} else if (type == 'base32' && encode){
				Base('b32enc', encode)
				.then(result => {
					res.json({
						status:true,
						creator: `${creator}`,
						result
					})
				})
			} else if (type == 'base32' && decode){
				Base('b32dec', decode)
				.then(result => {
					res.json({
						status:true,
						creator: `${creator}`,
						result
					})
				})
			} else if(!(encode || decode)){
				res.json({
					status:false,
					creator: `${creator}`,
					message: "tambahkan parameter encode/decode"
				})
			} else {
				res.json(loghandler.error)
			}
})

router.get('/nulis', async (req, res, next) => {
	var text = req.query.text,
		 apikeyInput = req.query.apikey;
	if(!apikeyInput) return res.json(loghandler.notparam)
     if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
	 if(!text) return res.json(loghandler.nottext)
		Nulis(text)
		 .then(hasil => {
			fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=55e7971b786836b9966eca4528210ba8&image=${hasil}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
            })
           .catch(err => {
		  res.json(loghandler.error)
		   })
})

router.get('/textmaker', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'glitch' && theme != 'google-suggestion') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'glitch') {
        	if (!text2) return res.json(loghandler.nottext2)
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/make-tik-tok-text-effect-375.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&text_2=${text2}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=93f5c8966cfaf3ca19051ee9f85c14f3&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'google-suggestion') {
        	if (!text2) return res.json(loghandler.nottext2)
        if (!text3) return res.json(loghandler.nottext3)
            request.post({
                url: "https://photooxy.com/other-design/make-google-suggestion-photos-238.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&text_2=${text2}&text_3=${text3}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=55e7971b786836b9966eca4528210ba8&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/textmaker/game', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'pubg' && theme != 'battlefield') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'pubg') {
        	if (!text2) return res.json(loghandler.nottext2)
            try {
            request.post({
                url: "https://photooxy.com/battlegrounds/make-wallpaper-battlegrounds-logo-text-146.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&text_2=${text2}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=55e7971b786836b9966eca4528210ba8&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'battlefield') {
        	if (!text2) return res.json(loghandler.nottext2)
            request.post({
                url: "https://photooxy.com/fps-game-effect/create-battlefield-4-rising-effect-152.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&text_2=${text2}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=55e7971b786836b9966eca4528210ba8&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/textmaker/senja', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'coffee-cup' && theme != 'coffee-cup2') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'coffee-cup') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=55e7971b786836b9966eca4528210ba8&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'coffee-cup2') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/put-your-text-on-a-coffee-cup--174.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=55e7971b786836b9966eca4528210ba8&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/kisahnabi', async (req, res, next) => {
	var nabi = req.query.nabi,
		apikeyInput = req.query.apikey;

		if (!apikeyInput) return res.json(loghandler.notparam)
		if (apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
		Searchnabi(nabi)
		.then(result => {
			res.json({
				creator: creator,
				result
			})
		})
		.catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
})



router.get('/textmaker/lingz', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'metal-epek' && theme != 'scary-njir') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'metal-epek') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=55e7971b786836b9966eca4528210ba8&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'scary-njir') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=55e7971b786836b9966eca4528210ba8&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})


router.get('/textmaker/lmo', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'grapiti' && theme != 'bintang') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'grapiti') {
            try {
            request.post({
                url: "https://photooxy.com/banner-cover/graffiti-text-cover-222.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=55e7971b786836b9966eca4528210ba8&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'bintang') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=55e7971b786836b9966eca4528210ba8&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})


router.get('/infogempa', async (req, res, next) => {
	        var apikeyInput = req.query.apikey

		if (!apikeyInput) return res.json(loghandler.notparam)
		if (apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
		Gempa()
		.then(result => {
			res.json({
				creator: creator,
				result
			})
		})
		.catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
})

router.get('/hadits', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            kitab = req.query.kitab,
            nomor = req.query.nomor
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!kitab) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kitab"})
    if (!nomor) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nomor"})

       fetch(encodeURI(`https://hadits-api-zhirrr.vercel.app/books/${kitab}/${nomor}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/quran', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            surah = req.query.surah,
            ayat = req.query.ayat
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!surah) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter surah"})
    if (!ayat) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter ayat"})

       fetch(encodeURI(`https://alquran-apiii.vercel.app/surah/${surah}/${ayat}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/fbdown', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            url = req.query.url
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})

       fbdl.getInfo(url)
            .then(dat => {
            var result = dat
             res.json({
            status : true,
	        creator : `${creator}`,
	        message : `SI ${creator} SAD BOY EMG`,
	        result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})



router.get('/textmaker/metallic', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'neon' && theme != 'glow') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'neon') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=55e7971b786836b9966eca4528210ba8&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'glow') {
            request.post({
                url: "https://photooxy.com/other-design/create-metallic-text-glow-online-188.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=55e7971b786836b9966eca4528210ba8&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})


router.get('/textmaker/noti', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'metal-wolf' && theme != 'daun-kaki') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'metal-wolf') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=55e7971b786836b9966eca4528210ba8&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'daun-kaki') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=55e7971b786836b9966eca4528210ba8&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})


router.get('/textmaker/neon9', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != '3dwhite' && theme != 'heri-poter') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == '3dwhite') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/3d-text-effect-under-white-cube-217.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=55e7971b786836b9966eca4528210ba8&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'heri-poter') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=55e7971b786836b9966eca4528210ba8&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})


router.get('/textmaker/neon7', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'party' && theme != 'hemker') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'party') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/create-party-neon-text-effect-161.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=55e7971b786836b9966eca4528210ba8&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'hemker') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/text-under-web-matrix-effect-185.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=55e7971b786836b9966eca4528210ba8&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})


router.get('/anime/loli', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
       fetch(encodeURI(`https://rawcdn.githack.com/L-M0z/Api-raw-v/d3f7c5223fb402f1b7f7d9a53de4346cb591992d/loli.json`))
        .then(response => response.json())
        .then(data => {
        ni = JSON.parse(JSON.stringify(data));
        nim =  n[Math.floor(Math.random() * ni.length)];
        var result = nim;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfw/ntr', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
       fetch(encodeURI(`https://linz-api.herokuapp.com/api/anime-pic?genre=netorare`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfw/maid', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
       fetch(encodeURI(`https://linz-api.herokuapp.com/api/anime-pic?genre=maid`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfw/uglybastard', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
       fetch(encodeURI(`https://linz-api.herokuapp.com/api/anime-pic?genre=uglybastard`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/sfw/neko', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
       fetch(encodeURI(`https://linz-api.herokuapp.com/api/anime-pic?genre=neko`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/sfw/husbu', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
       fetch(encodeURI(`https://linz-api.herokuapp.com/api/anime-pic?genre=husbu`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/sfw/foxgirl', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
       fetch(encodeURI(`https://linz-api.herokuapp.com/api/anime-pic?genre=foxgirl`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/sfw/loli', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
       fetch(encodeURI(`https://linz-api.herokuapp.com/api/anime-pic?genre=loli`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfw/doujin', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
       fetch(encodeURI(`https://linz-api.herokuapp.com/api/anime-pic?genre=doujin`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})



router.get('/nsfw/yaoi', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
       fetch(encodeURI(`https://linz-api.herokuapp.com/api/anime-pic?genre=yaoi`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})




router.get('/genshin', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            search = req.query.search
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
        if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})

       fetch(encodeURI(`https://rawcdn.githack.com/L-M0z/Api-raw-v/0bfb230d51759cd3df1db9a107c8493eb4d1cf9c/Genshinimpact/${search}.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/textmaker/alam', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'summer' && theme != 'flower') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'summer') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=55e7971b786836b9966eca4528210ba8&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'flower') {
            request.post({
                url: "https://photooxy.com/art-effects/flower-typography-text-effect-164.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=55e7971b786836b9966eca4528210ba8&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/muslim/tahlil', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataTahlil.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/muslim/wirid', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataWirid.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/muslim/ayatkursi', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataAyatKursi.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/muslim/doaharian', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataDoaHarian.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/muslim/bacaanshalat', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataBacaanShalat.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/muslim/niatshalat', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataNiatShalat.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/muslim/kisahnabi', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataKisahNabi.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfw/ahegao', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://rawcdn.githack.com/Not-found-squad/hentong-raw/12855ba1dc86f55496ced2de80cb84ff1911a626/ahegao.json`))
        .then(response => response.json())
        .then(data => {
        nee = JSON.parse(JSON.stringify(data));
	    nimo =  nee[Math.floor(Math.random() * nee.length)];
        var result = nimo;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfw/ass', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://linz-api.herokuapp.com/api/anime-pic?genre=ass`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfw/bdsm', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://linz-api.herokuapp.com/api/anime-pic?genre=bdsm`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfw/blowjob', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://linz-api.herokuapp.com/api/anime-pic?genre=blowjob`))
        .then(response => response.json())
        .then(data => {
        var result = hyt;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfw/boobjob', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://rawcdn.githack.com/Not-found-squad/hentong-raw/12855ba1dc86f55496ced2de80cb84ff1911a626/boobjob.json`))
        .then(response => response.json())
        .then(data => {
        tet = JSON.parse(JSON.stringify(data));
	    tot =  tet[Math.floor(Math.random() * tet.length)];
        var result = tot;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfw/creampie', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://rawcdn.githack.com/Not-found-squad/hentong-raw/12855ba1dc86f55496ced2de80cb84ff1911a626/creampie.json`))
        .then(response => response.json())
        .then(data => {
        tat = JSON.parse(JSON.stringify(data));
	    titid =  tat[Math.floor(Math.random() * tat.length)];
        var result = titid;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfw/cuckold', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://rawcdn.githack.com/Not-found-squad/hentong-raw/12855ba1dc86f55496ced2de80cb84ff1911a626/cuckold.json`))
        .then(response => response.json())
        .then(data => {
        cuckold = JSON.parse(JSON.stringify(data));
	    eek =  cuckold[Math.floor(Math.random() * cuckold.length)];
        var result = eek;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfw/cum', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://linz-api.herokuapp.com/api/anime-pic?genre=cum`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/nsfw/elves', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://rawcdn.githack.com/Not-found-squad/hentong-raw/12855ba1dc86f55496ced2de80cb84ff1911a626/elves.json`))
        .then(response => response.json())
        .then(data => {
        elis = JSON.parse(JSON.stringify(data));
	    gty =  elis[Math.floor(Math.random() * elis.length)];
        var result = gty;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfw/ero', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://rawcdn.githack.com/Not-found-squad/hentong-raw/12855ba1dc86f55496ced2de80cb84ff1911a626/ero.json`))
        .then(response => response.json())
        .then(data => {
        eros = JSON.parse(JSON.stringify(data));
	    sens =  sens[Math.floor(Math.random() * eros.length)];
        var result = sens;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfw/femdom', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://linz-api.herokuapp.com/api/anime-pic?genre=femdom`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfw/feet', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://linz-api.herokuapp.com/api/anime-pic?genre=feet`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfw/gangbang', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://rawcdn.githack.com/Not-found-squad/hentong-raw/12855ba1dc86f55496ced2de80cb84ff1911a626/gangbang.json`))
        .then(response => response.json())
        .then(data => {
        gangg = JSON.parse(JSON.stringify(data));
	    bangbang =  bangbang[Math.floor(Math.random() * gangg.length)];
        var result = bangbang;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfw/gangbang', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://rawcdn.githack.com/Not-found-squad/hentong-raw/12855ba1dc86f55496ced2de80cb84ff1911a626/gangbang.json`))
        .then(response => response.json())
        .then(data => {
        gangg = JSON.parse(JSON.stringify(data));
	    bangbang =  bangbang[Math.floor(Math.random() * gangg.length)];
        var result = bangbang;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfw/glasses', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://linz-api.herokuapp.com/api/anime-pic?genre=glasses`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfw/hentai', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://linz-api.herokuapp.com/api/anime-pic?genre=hentai`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})



router.get('/nsfw/netorare', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://linz-api.herokuapp.com/api/anime-pic?genre=netorare`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})




router.get('/nsfw/hentai-gif', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://rawcdn.githack.com/Not-found-squad/hentong-raw/12855ba1dc86f55496ced2de80cb84ff1911a626/hnt_gifs.json`))
        .then(response => response.json())
        .then(data => {
        samg = JSON.parse(JSON.stringify(data));
	    ngengek =  samg[Math.floor(Math.random() * samg.length)];
        var result = ngengek;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})



router.get('/nsfw/incest', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://rawcdn.githack.com/Not-found-squad/hentong-raw/12855ba1dc86f55496ced2de80cb84ff1911a626/incest.json`))
        .then(response => response.json())
        .then(data => {
        incest = JSON.parse(JSON.stringify(data));
	    ences =  incest[Math.floor(Math.random() * incest.length)];
        var result = ences;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})



router.get('/nsfw/masturbation', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://linz-api.herokuapp.com/api/anime-pic?genre=masturbation`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfw/wp-nsfw', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://linz-api.herokuapp.com/api/anime-pic?genre=wallpapernsfw`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfw/nsfwneko', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://rawcdn.githack.com/Not-found-squad/hentong-raw/12855ba1dc86f55496ced2de80cb84ff1911a626/nsfwNeko.json`))
        .then(response => response.json())
        .then(data => {
        nemko = JSON.parse(JSON.stringify(data));
	    nisme =  nemko[Math.floor(Math.random() * nemko.length)];
        var result = nisme;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfw/panties', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://linz-api.herokuapp.com/api/anime-pic?genre=panties`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfw/pussy', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://linz-api.herokuapp.com/api/anime-pic?genre=pussy`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/nsfw/tentacles', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://linz-api.herokuapp.com/api/anime-pic?genre=tentacles`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfw/uniform', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://rawcdn.githack.com/Not-found-squad/hentong-raw/12855ba1dc86f55496ced2de80cb84ff1911a626/uniform.json`))
        .then(response => response.json())
        .then(data => {
        seragam = JSON.parse(JSON.stringify(data));
	    seklh =  seragam[Math.floor(Math.random() * seragam.length)];
        var result = seklh;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfw/thighs', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://linz-api.herokuapp.com/api/anime-pic?genre=thighs`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfw/yuri', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://rawcdn.githack.com/Not-found-squad/hentong-raw/12855ba1dc86f55496ced2de80cb84ff1911a626/yuri.json`))
        .then(response => response.json())
        .then(data => {
        yuris = JSON.parse(JSON.stringify(data));
	    lesb =  yuris[Math.floor(Math.random() * yuris.length)];
        var result = lesb;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/muslim/asmaulhusna', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataAsmaulHusna.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/muslim/niatshubuh', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatShubuh.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/muslim/niatdzuhur', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatDzuhur.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/muslim/niatmaghrib', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatMaghrib.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/muslim/niatisya', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatIsya.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/muslim/niatashar', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatAshar.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/wallpaper/cyberspace', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/CyberSpace.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/wallpaper/teknologi', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/Technology.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/wallpaper/muslim', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/Islamic.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/wallpaper/programming', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/Programming.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/wallpaper/pegunungan', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/Mountain.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/wikipedia', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            search = req.query.search
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
        if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/wiki?keyword=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/randomquote/muslim', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/quote?type=agamis`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/drakorasia', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            search = req.query.search
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
        if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})

       fetch(encodeURI(`http://docs-api-zahirrr.herokuapp.com/api/drakorasia?search=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/jadwalshalat', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            kota = req.query.kota
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
        if(!kota) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kota"})

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/Zhirrr-Database/main/adzan/${kota}/2021/03.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/fakedata', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            country = req.query.country
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
        if(!country) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter country"})

       fetch(encodeURI(`https://fakename-api-zhirrr.vercel.app/api/fakename?country=${country}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/hilih', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            kata = req.query.kata
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
        if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

       fetch(encodeURI(`https://hilih-api-zhirrr.vercel.app/api/hilih?kata=${kata}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/liriklagu', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            lagu = req.query.lagu
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
        if(!lagu) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

       fetch(encodeURI(`https://python-api-zhirrr.herokuapp.com/api/lirik?search=${lagu}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/chordlagu', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            lagu = req.query.lagu
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
        if(!lagu) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

       fetch(encodeURI(`https://python-api-zhirrr.herokuapp.com/api/chord?q=${lagu}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/random/asmaulhusna', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://python-api-zhirrr.herokuapp.com/api/random/asmaulhusna`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/kbbi', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            kata = req.query.kata
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
        if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

       fetch(encodeURI(`https://kbbi-api-zhirrr.vercel.app/api/kbbi?text=${kata}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/covidindo', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://covid19-api-zhirrr.vercel.app/api/covid-indonesia`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/covidworld', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://covid19-api-zhirrr.vercel.app/api/world`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/kodepos', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    kota = req.query.kota
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
	if(!kota) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kota"})

       fetch(encodeURI(`https://kodepos-api-zhirrr.vercel.app/?q=${kota}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/cuaca', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    kabupaten = req.query.kabupaten
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
	if(!kabupaten) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kabupaten"})
       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/cuaca?kabupaten=${kabupaten}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/random/meme', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/meme`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/quotes/kanye', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/quote?type=kanye`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/translate', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    kata = req.query.kata
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
	if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})
       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/translate?text=${kata}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/anime/kusonime', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    search = req.query.search
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
	if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})
       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/kusonime?search=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/gabut', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/bosan`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/manga', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    search = req.query.search
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
	if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})
       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/manga?keyword=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/random/wallpaper', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/random/wallpaper?genre=acak`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/kuis/caklontong', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/quote?type=caklontong`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/yt/play', async (req, res, next) => {
	var vid = [];
	var apikeyInput = req.query.apikey,
            search = req.query.search
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})

	var videos = []
	ytplay(search).then(async (resplay) => {
			var gasplay = resplay[0]
			
			ytdldown(gasplay,'multi')
			.then(result => {
				res.json({status:true,creator:creator,result})
			})
			.catch (e=>{
				console.log('Error :', color(e,'red'))
				res.json(loghandler.error)
			})
	})
	.catch (e => {
		console.log('Error : ', color(e,'red'))
	})
})



router.get('/yt/search', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            search = req.query.search
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})
	try {
scrapeYt.search(search, {
    type: "video"
}).then(videos => {
    res.json(videos);
})
} catch (err) {
    console.log('Error :', color(err, 'red'))
    res.json(loghandler.error)
  }
})

router.get('/yt', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
        url = req.query.url


	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!url) return res.json(loghandler.noturl)
	let playlistregex = /\/playlist\?list=/;
	let result = []
	try {
		if (playlistregex.test(url)){
			ytpl(url)
			.then(info => info.items)
			.then(info => {
				let video
				for(video of info){
					result.push({
						title: video.title,
						id: video.id,
						duration: video.duration
					})
				}
				res.json({
					status:true,
					creator: creator,
					result,
					message: 'jangan lupa follow ' + creator
				})
			})
			.catch(e => {
				console.log(e)
				res.json(loghandler.error)
			})
		} else {
			ytdl.getInfo(url)
			.then(info => {
				let duration = (info.lengthSeconds/60).toString()
				duration = duration.substring(0, duration.indexOf('.'))+':'+Math.floor((info.lengthSeconds%60).toString())
				const max = info.videoDetails.thumbnails.reduce((prev, current) => ((prev.height > current.height) ? prev : current));
					result.push({
						    id: info.videoDetails.videoId,
                            title: info.videoDetails.title,
                            description: info.videoDetails.description,
                            length: info.videoDetails.lengthSeconds,
                            view: info.videoDetails.viewCount,
                            date: info.videoDetails.publishDate,
                            thumbnail: max,
                            video:info.formats
                })
                res.json({
				status:true,
				creator: creator,
                result,
                message: 'jangan lupa follow ' + creator
                })
			})
			.catch (er => {
				console.log(er)
				res.json(loghandler.error)
				})
				}
				} catch (e) {
					console.log(e)
					res.json(loghandler.error)
					} 
	if (url && type == 'audio') {
		try {
    res.header('Content-Disposition', `attachment; filename="audio-zefian.mp3"`);
    ytdl(url, {
      format: 'mp3',
      filter: 'audioonly',
      filter: 'audioonly'
      }).pipe(res);

  } catch (err) {
    res.json(loghandler.error)
    console.log(loghandler.error)
  }
		} else if (url && type == 'video'){
			try {
    res.header('Content-Disposition', `attachment; filename="video-zefian.mp4"`);
    ytdl(url, {
      format: 'mp4',
    }).pipe(res);

  } catch (err) {
    res.json(loghandler.error)
    console.log(loghandler.error)
  }
  } 
})


router.get('/igdown', async (req, res, next) => {
    var apikeyInput = req.query.apikey,
        url = req.query.url


	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!url) return res.json(loghandler.noturl)

    var str = url
    var potong = str.split('?')
    var graph = "?__a=1"
    var potong2 = potong[0] + graph

    fetch(encodeURI(potong2))
        .then(response => response.json())
        .then(data => {
            var validasi = data["graphql"]["shortcode_media"]["__typename"];
            if (validasi == "GraphVideo") {
                var link = data.graphql.shortcode_media.video_url;
                res.json({
                    status: true,
                    creator: `${creator}`,
                    result: {
                        type: "Video",
                        url: link
                    },
                    message: "jangan lupa follow" + creator
                })
            } else if (validasi == "GraphImage") {
                var link = data.graphql.shortcode_media.display_url;
                res.json({
                    status: true,
                    creator: `${creator}`,
                    result: {
                        type: "Picture",
                        url: link
                    },
                    message: "jangan lupa follow" + creator
                })
            } else {
                res.json({
                    status: false,
                    creator: `${creator}`,
                    message: "mungkin terjadi error"
                })
            }
        })
        .catch(e => {
            console.log('Error:', color(e,'red'))
            res.json({status:false,creator: `${creator}`, message: "gagal, pastikan url anda benar:)"})
       })
})

router.get('/igstalk', async (req, res, next) => {
    var apikeyInput = req.query.apikey,
        username = req.query.username

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!username) return res.json(loghandler.notusername)

    fetch(encodeURI(`https://www.instagram.com/${username}/?__a=1`))
        .then(response => response.json())
        .then(data => {
             var bisnis_or = data.graphql.user.is_business_account == false ? "bukan bisnis": "ini bisnis"
             var verif_or =  data.graphql.user.is_verified == false ? "belum verified / centang biru": "sudah verified / centang biru"
             var response = {
                 status: true,
                 creator: `${creator}`,
                 result: {
                      username: `${data.graphql.user.username}`,
                      name: `${data.graphql.user.full_name}`,
                      biodata: `${data.graphql.user.biography}`,
                      followers: `${data.graphql.user.edge_followed_by.count}`,
                      following:`${data.graphql.user.edge_follow.count}`,
                      verified: verif_or,
                      business_account: bisnis_or,
                      post: `${data.graphql.user.edge_owner_to_timeline_media.count}`,
                      profile_picture: `${data.graphql.user.profile_pic_url}`,
                      profile_picture_hd: `${data.graphql.user.profile_pic_url_hd}`,
                 },
                 message: `jangan lupa follow ${creator}`
             }
             res.json(response)
        })
})



router.get('/kuis/tebakgambar', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/quote?type=tebakgambar`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


module.exports = router