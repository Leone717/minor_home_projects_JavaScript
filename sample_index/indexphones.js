//basics class
class Mobile {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    call(){
        console.log('Calling...');
    }

    turnOn(){
        console.log('Turn on...');        
    }

    turnOff(){
        console.log('Turn off...');
    }
    
}
//classes, inheritance
class SamsungMobile extends Mobile{

    constructor(name,type){
        super(name,type);
    }

    run(){
        console.log('I have Android 9.0 "Pie" with One UI 1.1 system');
    }

    camera(){
        console.log('Take photo with 12MP Telephoto Camera OIS + 12MP Wide-angle Camera OIS + 16MP Ultra Wide Camera ');
    }

}

class HuaweiMobile extends Mobile{

    constructor(name,type){
        super(name,type);
    }

    run(){
        console.log('I have EMUI 9.1 (Based on Android 9) system');
    }

    camera(){
        console.log('I have 40 MP (Wide Angle Lens, f/1.6 aperture,OIS) + 20 MP (Ultra Wide Angle Lens, f/2.2 aperture) + 8 MP (Telephoto, f/3.4 aperture,OIS)');
    }
}

class NokiaMobile extends Mobile{

    constructor(name,type){
        super(name,type);
    }
    
    run(){
        console.log('I have Symbian 6.1, Series 60 v1.0 UI system');
    }

    camera(){
        console.log('I have no camera, sorry');
    }

}
// constructors
const sillyPhone = new Mobile('SillyPhone', '0-1');
const samsungMobile = new SamsungMobile('Samsung', 'Galaxy S10');
const huaweiMobile = new HuaweiMobile('Huawei', 'P30 Pro')
const nokiaMobile = new NokiaMobile('Nokia', 'N-Gage')

console.log(' ');
console.log(samsungMobile);
console.log(samsungMobile.name +  ' ' + samsungMobile.type);
samsungMobile.call();
samsungMobile.run();
samsungMobile.camera();

console.log(' ');
console.log(huaweiMobile);
console.log(huaweiMobile.name + ' ' +  huaweiMobile.type);
huaweiMobile.call();
huaweiMobile.run();
huaweiMobile.camera();

console.log(' ');
console.log(nokiaMobile);
console.log(nokiaMobile.name + ' ' + nokiaMobile.type);
nokiaMobile.call();
nokiaMobile.run();
nokiaMobile.camera();
