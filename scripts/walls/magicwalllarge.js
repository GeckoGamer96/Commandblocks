const shader=this.global.shaders.bittrium;

const magicwalllarge = extendContent(Wall, "magicwalllarge", {
    draw(tile){
	    Draw.shader(shader);
      Draw.rect(this.animRegion, tile.drawx(), tile.drawy());
	    Draw.shader();
    },
    load(){
      this.super$load();
      this.region=Core.atlas.find(this.name);
      this.animRegion=Core.atlas.find(this.name+"-anim");
    },
    handleDamage(tile,amount){
      return 1.0;
    },
    handleBulletHit(entity,bullet){
      entity.damage(1.0);
    }
});
