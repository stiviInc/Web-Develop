const _caliber = new WeakMap();
const _reload = new WeakMap();
class Gun{
    constructor(name,type,caliber){
        this.name = name;
        this.type = type;
        _caliber.set(this,caliber);
        _reload.set(this, () => `Reloading ${name}`)
    }

    shoot(){
        return `Shooting a ${this.name} and after ${_reload.get(this)()}`;
    }

    get _caliber(){
        return _caliber.get(this);
    }
}

const _totalBullets = new WeakMap();
class Pistol extends Gun{
    constructor(name,type,caliber,totalBullets){
        super(name,type,caliber);
        _totalBullets.set(this,totalBullets);
    }

    shoot(){
        return `Shooting a pistol`;
    }
}

//Exporting more than one class!
module.exports.Gun = Gun;
module.exports.Pistol = Pistol;

//Export just a single class
//module.exports = Pistol;