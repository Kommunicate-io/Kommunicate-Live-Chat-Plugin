 function RingToneService() {
     var _this = this;
     var MAX_VOLUME = 1;
     _this.loadRingTone = function (url, notificationToneOption) {
         var data = {
             src: [url],
             loop: notificationToneOption.loop,
             html5: true
         };
         data.volume = (notificationToneOption && notificationToneOption.volume != null) ? notificationToneOption.volume : MAX_VOLUME;
         return new Howl(data);
     };
     _this.loadChatPopupTone = function (url) {
         return new Howl({
             src: [url],
             html5: true,
             volume: 0.8
         });
     };
 }