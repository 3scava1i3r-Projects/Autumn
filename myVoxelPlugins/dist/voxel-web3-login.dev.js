"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Modal = require("voxel-modal");

var ModalDialog =
/*#__PURE__*/
function (_Modal) {
  _inherits(ModalDialog, _Modal);

  function ModalDialog(game, opts) {
    _classCallCheck(this, ModalDialog);

    return _possibleConstructorReturn(this, _getPrototypeOf(ModalDialog).call(this, game, ModalDialog.createDialogContent(opts)));
  }

  _createClass(ModalDialog, null, [{
    key: "createDialogContent",
    value: function createDialogContent(opts) {
      if (!opts.contents) opts.contents = [];
      var box;
      alert("kjsdnv");

      if (typeof document !== "undefined") {
        // covers the (almost) entire page, for alignment purposes
        var aligner = document.createElement("div");
        aligner.setAttribute("class", "voxel-modal-dialog-aligner");
        aligner.setAttribute("style", "\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        top: 0px;\n        left: 0px;\n        width: 100%;\n        height: 90%;\n        position: fixed;\n        pointer-events: none;\n        "); // note: height not 100% to give some room for voxel-inventory-hotbar
        // the overall dialog box element

        box = document.createElement("div");
        box.setAttribute("class", "voxel-modal-dialog");
        box.style.border = "6px outset gray";
        box.style.visibility = "hidden";
        box.style.zIndex = 1;
        box.style.pointerEvents = "auto"; // reset pointer-events:none on parent (to allow clicks through canvas)

        box.style.backgroundImage = "linear-gradient(rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.5) 100%)";
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = opts.contents[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var content = _step.value;
            box.appendChild(content);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        aligner.appendChild(box);
        document.body.appendChild(aligner);
      }

      opts.element = box;
      return opts;
    }
  }]);

  return ModalDialog;
}(Modal);

module.exports = ModalDialog;