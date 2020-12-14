// JavaScript Document
(function (doc, win) {
        var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function () {				
                var clientWidth = docEl.clientWidth; //获取设备尺寸       
			    if (!clientWidth) return;
                if(clientWidth>=640){ //设计稿宽度
                     docEl.style.fontSize = '100px';
                }else{								
                    docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
                }
            };
        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false); //绑定事件
        doc.addEventListener('DOMContentLoaded', recalc, false);
		
})(document, window);
// (function (win) {
//     var doc = win.document;
//     var docEl = doc.documentElement;
//     var tid;
//     function refreshRem() {
//         var width = docEl.getBoundingClientRect().width;
//         if (width > 750) { // 最大宽度
//             width = 750;
//         }
//         var rem = width / 3.75;
//         docEl.style.fontSize = rem + 'px';
//     }
//     win.addEventListener('resize', function () {
//         clearTimeout(tid);
//         tid = setTimeout(refreshRem, 300);
//     }, false);
//     win.addEventListener('pageshow', function (e) {
//         if (e.persisted) {
//             clearTimeout(tid);
//             tid = setTimeout(refreshRem, 300);
//         }
//     }, false);
//     refreshRem();
// })(window);