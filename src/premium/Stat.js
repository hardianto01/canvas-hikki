const Canvas = require("canvas");

module.exports = class Stat {

    constructor() {
        this.bg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9qmH2D7bFOOcWpuOldMB54s9clDtQ3EmAmg&usqp=CAU";
        this.profile = "https://i.ibb.co/zHVJHHW/Profile.png";
        this.chara = "https://i.ibb.co/wCt3dr7/magician.png";
        this.energy = "https://i.ibb.co/3dFrDkg/Energy.png";
        this.health = "https://i.ibb.co/cFg8r0m/Health.png";
        this.chp = "10"; 
        this.nhp = "100";        
        this.cenergy = "10";
        this.nenergy = "100";
        this.caxe = "10";
        this.naxe = "100";      
        this.cpick = "100";      
        this.npick = "100";      
        this.csword = "10";
        this.nsword = "10";
        
    }
    //*****background
    setBg(value) {
        this.bg = value;
        return this;
    }
    setChara(value) {
        this.avatar = value;
        return this;
    }
    //*****health
    setHp(value) {
        this.chp = value;
        return this;
    }
    setFhp(value) {
        this.nhp = value;
        return this;
    }
    
    //*****energy
    setEnergy(value) {
        this.cenergy = value;
        return this;
    }
    setFenergy(value) {
        this.nenergy = value;
        return this;
    }
    
    //*****axe
    setAxe(value) {
        this.caxe = value;
        return this;
    }
    setFaxe(value) {
        this.naxe = value;
        return this;
    }
    
    //*****Pickaxe
    setPickaxe(value) {
        this.cpick = value;
        return this;
    }
    setFpick(value) {
        this.npick = value;
        return this;
    }
    //*****Sword
    setSword(value) {
        this.csword = value;
        return this;
    }
    setFsword(value) {
        this.nsword = value;
        return this;
    }
    
    async toAttachment() {
    
    

        const canvas = Canvas.createCanvas(600, 600);
        const ctx = canvas.getContext("2d");
        
        
        //bar hp
const currhp = this.chp;
const needhp = this.nhp;     
const health = (100 * currhp) / needhp;
const darah = (health * 210) / 100;

//bar energy
const curre = this.cenergy;
const neede = this.nenergy;     
const energy = (100 * curre) / neede;
const energi = (energy * 218) / 100;

//bar axe
const curraxe = this.caxe;
const needaxe = this.naxe;     
const axe = (100 * curraxe) / needaxe;
const kapak = (axe * 90) / 100;

//bar pickaxe
const currpick = this.cpick;
const needpick = this.npick;     
const pickaxe = (100 * currpick) / needpick;
const beliung = (pickaxe * 90) / 100;

//bar sword 
const csword = this.csword;
const nsword = this.nsword;     
const sword = (100 * csword) / nsword;
const pedang = (sword * 90) / 100;
        
        //background

  let iyga = await Canvas.loadImage(this.bg);
  ctx.drawImage(iyga, 0, 0, 600, 600);
  
  
  //frame background
  ctx.globalAlpha = 10;
  let imgb = await Canvas.loadImage(this.profile);
  ctx.drawImage(imgb, 0, 0, 600, 600);
  
  
  
      //bar health
	  ctx.fillStyle = "#CB5A8D";
	  ctx.fillRect(358, 111, 210, 25);
	  ctx.fillStyle = "#F44336";
	  ctx.fillRect(358, 111, darah, 25);
	  ctx.strokeStyle = "#ffffff";
	  ctx.lineWidth = 1;
	  ctx.strokeRect(358, 111, 210, 25);
      
      let iy = await Canvas.loadImage(this.health);
      ctx.drawImage(iy, 286, 50, 290, 145);
      
      //bar energi
      ctx.fillStyle = "#ffae89";
	  ctx.fillRect(352, 185, 218, 25);
	  ctx.fillStyle = "#ffe300";
	  ctx.fillRect(352, 185, energi, 25);
	  ctx.strokeStyle = "#ffffff";
	  ctx.lineWidth = 1;
	  ctx.strokeRect(352, 185, 218, 25);
        
        
        
        let petir = await Canvas.loadImage(this.energy);
        ctx.drawImage(petir, 300, 130, 280, 136);
        
        let chara = await Canvas.loadImage(this.chara);
        ctx.drawImage(character, -10, 15, 370, 370);
        
        
        
      
      //bar axe
      ctx.fillStyle = "#dde4e1";
	  ctx.fillRect(51, 503, 90, 5 + 5);
	  ctx.fillStyle = "#007e36";
	  ctx.fillRect(51, 503, kapak, 5 + 5)
	  ctx.strokeStyle = "#000000";
	  ctx.lineWidth = 2;
	  ctx.strokeRect(51, 503, 90, 5 + 5);
     
      //bar pickaxe
      ctx.fillStyle = "#dde4e1";
	  ctx.fillRect(179, 503, 90, 10);
	  ctx.fillStyle = "#007e36";
	  ctx.fillRect(179, 503, beliung, 10)
	  ctx.strokeStyle = "#000000";
	  ctx.lineWidth = 2;
	  ctx.strokeRect(179, 503, 90, 10);
        
      ctx.fillStyle = "#dde4e1";
	  ctx.fillRect(307, 503, 90, 10);
	  ctx.fillStyle = "#007e36";
	  ctx.fillRect(307, 503, pedang, 10)
	  ctx.strokeStyle = "#000000";
	  ctx.lineWidth = 2;
	  ctx.strokeRect(307, 503, 90, 10);
	
        return canvas;
    }
};
