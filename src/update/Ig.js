const Canvas = require("canvas");

module.exports = class Ig {

    constructor() {
        this.bg = "https://i.ibb.co/D7HJhLM/Ig-card.jpg";
        this.avatar = "https://i.ibb.co/G5mJZxs/rin.jpg";
        this.username = "lingz._m";
        this.post = "1";
        this.followers = "1";
        this.following = "1";
    }
     //avatar
    setAvatar(value) {
        this.avatar = value;
        return this;
    }
    //username
    setUsername(value) {
        this.username = value;
        return this;
    }
    //post
    setPost(value) {
        this.post = value;
        return this;
    }
    //followers
    setFollowers(value) {
        this.followers = value;
        return this;
    }
    //following
    setFollowing(value) {
        this.following = value;
        return this;
    }
    async toAttachment() {
    
    
        // Create canvas
        const canvas = Canvas.createCanvas(1200, 600);
        const ctx = canvas.getContext("2d");
       
   
        // Draw background
        let background = await Canvas.loadImage(this.bg);
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);



         //avatar
  
        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = 10;
        ctx.strokeStyle = this.colorAvatar;
        ctx.arc(200, 330, 160, 0, Math.PI * 2, true);
        ctx.stroke();
        ctx.closePath();
        ctx.clip();
        let avatar = await Canvas.loadImage(this.avatar);
        ctx.drawImage(avatar, 40, 170, 320, 320);
        ctx.restore();
        
        
        ctx.globalAlpha = 1;
        ctx.font = "900 45px Arial";
        ctx.textAlign = 'center';
        ctx.fillStyle = "white";
        ctx.fillText(this.followers, 800, 280);
        
        //stone
        ctx.globalAlpha = 1;
        ctx.font = "900 45px Arial";
        ctx.textAlign = 'center';
        ctx.fillStyle = "white";
        ctx.fillText(this.post, 505, 280);
        
        ctx.font = "900 45px Arial";
        ctx.textAlign = 'center';
        ctx.fillStyle = "white";
        ctx.fillText(this.following, 1080, 280);
        
        
        ctx.globalAlpha = 1;
        ctx.font = "bold 67px arial";
        ctx.fillStyle = "white";
        ctx.textAlign = 'left';
        ctx.fillText(this.username, 140, 100);
       
	   
        return canvas;
    }
};
