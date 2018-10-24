(()=>{

    let initCordova = (function(){
        let onDeviceReady = function(){
            console.log("cordova app: device ready");
            window.ngAppComponent.cordovaReady();
            //document.addEventListener('backbutton', this.onBackKeyDown, false);
        };

        let onBackKeyDown = function(){
            console.log("hard-back button clicked");
            //window.ngAppComponent.onBackPressed();
        }

        console.log("initializing cordova app...");
        document.addEventListener('deviceready', onDeviceReady.bind(this), false);
    });
    let coreHybridApp = initCordova();

})();