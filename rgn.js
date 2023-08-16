/*!
* Chess Assist (https://chessassist.net)
* Copyright (c) ENDGAME SOFTWARE, LLC. All rights reserved.
*/
function bakne() {
    chrome.debugger.onDetach.addListener(function () {
      chrome.storage.local.set({
        function_atpl: false
      });
    });
    chrome.runtime.onMessage.addListener(function (_0x5d361b, _0x46f046) {
      if (typeof _0x5d361b == "string") {
        if (_0x5d361b == "lga-datas-atch") {
          chrome.debugger.attach({
            tabId: _0x46f046.tab.id
          }, "1.3");
        } else if (_0x5d361b == "lga-datas-dtch") {
          chrome.debugger.getTargets(function (_0xa5e3d2) {
            for (var _0x2c4a9d = _0xa5e3d2.length - 1; _0x2c4a9d >= 0; _0x2c4a9d--) {
              if (typeof _0xa5e3d2[_0x2c4a9d] != "undefined" && _0xa5e3d2[_0x2c4a9d].type == "page" && _0xa5e3d2[_0x2c4a9d].attached == true) {
                chrome.debugger.detach({
                  tabId: _0xa5e3d2[_0x2c4a9d].tabId
                });
              }
            }
          });
        }
      } else if (typeof _0x5d361b == "object") {
        if (_0x5d361b.val0 == "lga-datas-snmd") {
          switch (_0x5d361b.val1) {
            case "p":
              chrome.debugger.sendCommand({
                tabId: _0x46f046.tab.id
              }, "Input.dispatchMouseEvent", {
                type: "mousePressed",
                x: _0x5d361b.val2,
                y: _0x5d361b.val3,
                button: "left",
                clickCount: 1
              });
              break;
            case "r":
              chrome.debugger.sendCommand({
                tabId: _0x46f046.tab.id
              }, "Input.dispatchMouseEvent", {
                type: "mouseReleased",
                x: _0x5d361b.val2,
                y: _0x5d361b.val3,
                button: "left",
                clickCount: 1
              });
              break;
          }
        }
      }
    });
  }
  bakne();