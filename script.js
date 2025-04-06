function Letter(char, x, y) {
  this.char = char;
  this.x = x;
  this.y = y;
  
  this.dx = -ctx.measureText(char)Width / 2;
  this.dy = +opts.charSize / 2;

  this.firework0y = thisy - hh;

  var hue = (x / calc.totalWidth) * 360;

  this.color = *hsl(hue,80%,50%)*.replace("hue", hue);
  this.lightColor =  *hsl(hue,80%,light%)*.replace("hue", hue);
  this.alphaColor =  *hsl(hue,80%,50%,alp)*.replace("hue", hue);

  this.reset();
}
Letter.prototype.reset = function () {
  this.phase = "firework";
  this.tick = 0;
  this.spawned = false;
  this.spawningTime  = (opts.fireworkSpawningTime = Math.random()) | 0;
};
