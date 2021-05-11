webpackHotUpdate_N_E("pages/report",{

/***/ "./components/listReport.js":
/*!**********************************!*\
  !*** ./components/listReport.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_Ryan_Maruf_Documents_GitHub_store_management_system_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_Ryan_Maruf_Documents_GitHub_store_management_system_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_Ryan_Maruf_Documents_GitHub_store_management_system_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_Ryan_Maruf_Documents_GitHub_store_management_system_frontend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_Ryan_Maruf_Documents_GitHub_store_management_system_frontend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_data_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-data-table-component */ "./node_modules/react-data-table-component/dist/index.cjs.js");
/* harmony import */ var react_data_table_component__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_data_table_component__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "C:\\Users\\Ryan Maruf\\Documents\\GitHub\\store-management-system\\frontend\\components\\listReport.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(C_Users_Ryan_Maruf_Documents_GitHub_store_management_system_frontend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(C_Users_Ryan_Maruf_Documents_GitHub_store_management_system_frontend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(C_Users_Ryan_Maruf_Documents_GitHub_store_management_system_frontend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var ListReport = /*#__PURE__*/function (_Component) {
  Object(C_Users_Ryan_Maruf_Documents_GitHub_store_management_system_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(ListReport, _Component);

  var _super = _createSuper(ListReport);

  function ListReport() {
    Object(C_Users_Ryan_Maruf_Documents_GitHub_store_management_system_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ListReport);

    return _super.call(this);
  }

  Object(C_Users_Ryan_Maruf_Documents_GitHub_store_management_system_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ListReport, [{
    key: "render",
    value: function render() {
      var _this = this;

      var columns = [{
        name: 'Invoice No',
        selector: 'invoice_no',
        sortable: true
      }, {
        name: 'Invoice Date',
        selector: 'invoice_date',
        sortable: true
      }, {
        name: 'Product Name',
        selector: 'product_name',
        sortable: true
      }, {
        name: 'Product Category',
        selector: 'product_category',
        sortable: true
      }, {
        name: 'Product Code',
        selector: 'product_code',
        sortable: true
      }, {
        name: 'Unit Price',
        selector: 'unit_price',
        sortable: true
      }, {
        name: 'Discount Price',
        selector: 'discount_price',
        sortable: true
      }, {
        name: 'Quantity',
        selector: 'quantity',
        sortable: true
      }, {
        name: 'Total Price',
        selector: 'total_price',
        sortable: true
      }, {
        name: 'Seller',
        selector: 'seller_name',
        sortable: true
      }, {
        name: 'Delete',
        selector: 'id',
        sortable: true,
        cell: function cell(row) {
          return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
            className: "btn btn-danger ",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 30
            }
          }, "Print");
        }
      }];
      var data = [{
        id: 1,
        invoice_no: '12356',
        invoice_date: '22/5/2021',
        product_name: 'Asus Laptop',
        product_category: 'laptop',
        product_code: '1123',
        quantity: '2',
        unit_price: '45000',
        discount_price: 0,
        total_price: '90000',
        seller_name: 'Arif'
      }, {
        id: 1,
        invoice_no: '12396',
        invoice_date: '22/5/2021',
        product_name: 'Asus Laptop',
        product_category: 'laptop',
        product_code: '1123',
        quantity: '2',
        unit_price: '45000',
        discount_price: 100,
        total_price: '90000',
        seller_name: 'Arif'
      }, {
        id: 1,
        invoice_no: '12382',
        invoice_date: '26/5/2021',
        product_name: 'Acer Laptop',
        product_category: 'laptop',
        product_code: '1123',
        quantity: '1',
        unit_price: '85000',
        discount_price: 1000,
        total_price: '85000',
        seller_name: 'Sharif'
      }, {
        id: 1,
        invoice_no: '12347',
        invoice_date: '28/5/2021',
        product_name: 'Hp Laptop',
        product_category: 'laptop',
        product_code: '1123',
        quantity: '2',
        unit_price: '45000',
        discount_price: 500,
        total_price: '90000',
        seller_name: 'Sharif'
      }];
      return __jsx(react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 13
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
        className: "animated zoomIn",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 17
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        className: "mt-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 21
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        sm: 12,
        xs: 12,
        md: 12,
        lg: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 25
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 29
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"].Body, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 33
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
        fluid: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 37
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 41
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        md: 8,
        className: "mr-auto",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 45
        }
      }, __jsx("div", {
        className: "input-group ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 49
        }
      }, __jsx("h4", {
        className: "table-title mr-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 53
        }
      }, "Report List"), __jsx("input", {
        className: "form-control mx-2 ",
        type: "date",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 53
        }
      }), __jsx("input", {
        className: "form-control mx-2 ",
        type: "date",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 53
        }
      }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        className: "btn btn-primary mx-2 ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 53
        }
      }, "Print"))))), __jsx("hr", {
        className: "bg-secondary",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 37
        }
      }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
        fluid: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 37
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 41
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        sm: 12,
        xs: 12,
        md: 12,
        lg: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 45
        }
      }, __jsx(react_data_table_component__WEBPACK_IMPORTED_MODULE_7___default.a, {
        noHeader: true,
        paginationPerPage: 5,
        pagination: true,
        columns: columns,
        data: data,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 49
        }
      }))))))))));
    }
  }]);

  return ListReport;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ListReport);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9saXN0UmVwb3J0LmpzIl0sIm5hbWVzIjpbIkxpc3RSZXBvcnQiLCJjb2x1bW5zIiwibmFtZSIsInNlbGVjdG9yIiwic29ydGFibGUiLCJjZWxsIiwicm93IiwiZGF0YSIsImlkIiwiaW52b2ljZV9ubyIsImludm9pY2VfZGF0ZSIsInByb2R1Y3RfbmFtZSIsInByb2R1Y3RfY2F0ZWdvcnkiLCJwcm9kdWN0X2NvZGUiLCJxdWFudGl0eSIsInVuaXRfcHJpY2UiLCJkaXNjb3VudF9wcmljZSIsInRvdGFsX3ByaWNlIiwic2VsbGVyX25hbWUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7SUFFTUEsVTs7Ozs7QUFDRix3QkFBYztBQUFBOztBQUFBO0FBRWI7Ozs7NkJBQ1E7QUFBQTs7QUFDTCxVQUFNQyxPQUFPLEdBQUcsQ0FDWjtBQUNJQyxZQUFJLEVBQUUsWUFEVjtBQUVJQyxnQkFBUSxFQUFFLFlBRmQ7QUFHSUMsZ0JBQVEsRUFBRTtBQUhkLE9BRFksRUFNWjtBQUNJRixZQUFJLEVBQUUsY0FEVjtBQUVJQyxnQkFBUSxFQUFFLGNBRmQ7QUFHSUMsZ0JBQVEsRUFBRTtBQUhkLE9BTlksRUFXWjtBQUNJRixZQUFJLEVBQUUsY0FEVjtBQUVJQyxnQkFBUSxFQUFFLGNBRmQ7QUFHSUMsZ0JBQVEsRUFBRTtBQUhkLE9BWFksRUFpQlo7QUFDSUYsWUFBSSxFQUFFLGtCQURWO0FBRUlDLGdCQUFRLEVBQUUsa0JBRmQ7QUFHSUMsZ0JBQVEsRUFBRTtBQUhkLE9BakJZLEVBc0JaO0FBQ0lGLFlBQUksRUFBRSxjQURWO0FBRUlDLGdCQUFRLEVBQUUsY0FGZDtBQUdJQyxnQkFBUSxFQUFFO0FBSGQsT0F0QlksRUE0Qlo7QUFDSUYsWUFBSSxFQUFFLFlBRFY7QUFFSUMsZ0JBQVEsRUFBRSxZQUZkO0FBR0lDLGdCQUFRLEVBQUU7QUFI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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQWJKLEVBY0ksTUFBQyx5REFBRDtBQUFXLGFBQUssRUFBRSxJQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ksTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ksTUFBQyxtREFBRDtBQUFLLFVBQUUsRUFBRSxFQUFUO0FBQWEsVUFBRSxFQUFFLEVBQWpCO0FBQXFCLFVBQUUsRUFBRSxFQUF6QjtBQUE2QixVQUFFLEVBQUUsRUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMsaUVBQUQ7QUFDSSxnQkFBUSxFQUFFLElBRGQ7QUFFSSx5QkFBaUIsRUFBRSxDQUZ2QjtBQUdJLGtCQUFVLEVBQUUsSUFIaEI7QUFJSSxlQUFPLEVBQUVqQixPQUpiO0FBS0ksWUFBSSxFQUFFTSxJQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFESixDQURKLENBREosQ0FkSixDQURKLENBREosQ0FESixDQUZKLENBREosQ0FESjtBQXlDSDs7OztFQW5Lb0JZLCtDOztBQXNLVm5CLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JlcG9ydC44OTBmMWE3ZTQ4NzIzY2YwNmU4Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBGcmFnbWVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0J1dHRvbiwgQ2FyZCwgQ29sLCBDb250YWluZXIsIE1vZGFsLCBSb3d9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IERhdGFUYWJsZSBmcm9tIFwicmVhY3QtZGF0YS10YWJsZS1jb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIExpc3RSZXBvcnQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBjb2x1bW5zID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnSW52b2ljZSBObycsXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2ludm9pY2Vfbm8nLFxyXG4gICAgICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdJbnZvaWNlIERhdGUnLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdpbnZvaWNlX2RhdGUnLFxyXG4gICAgICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdQcm9kdWN0IE5hbWUnLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdwcm9kdWN0X25hbWUnLFxyXG4gICAgICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnUHJvZHVjdCBDYXRlZ29yeScsXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3Byb2R1Y3RfY2F0ZWdvcnknLFxyXG4gICAgICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdQcm9kdWN0IENvZGUnLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdwcm9kdWN0X2NvZGUnLFxyXG4gICAgICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnVW5pdCBQcmljZScsXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3VuaXRfcHJpY2UnLFxyXG4gICAgICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdEaXNjb3VudCBQcmljZScsXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpc2NvdW50X3ByaWNlJyxcclxuICAgICAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnUXVhbnRpdHknLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdxdWFudGl0eScsXHJcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ1RvdGFsIFByaWNlJyxcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAndG90YWxfcHJpY2UnLFxyXG4gICAgICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdTZWxsZXInLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzZWxsZXJfbmFtZScsXHJcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0RlbGV0ZScsXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2lkJyxcclxuICAgICAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2VsbDogcm93ID0+IDxCdXR0b24gIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyIFwiPlByaW50PC9CdXR0b24+XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXTtcclxuICAgICAgICBjb25zdCBkYXRhID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgICAgIGludm9pY2Vfbm86ICcxMjM1NicsXHJcbiAgICAgICAgICAgICAgICBpbnZvaWNlX2RhdGU6ICcyMi81LzIwMjEnLFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdF9uYW1lOiAnQXN1cyBMYXB0b3AnLFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdF9jYXRlZ29yeTonbGFwdG9wJyxcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RfY29kZTonMTEyMycsXHJcbiAgICAgICAgICAgICAgICBxdWFudGl0eTonMicsXHJcbiAgICAgICAgICAgICAgICB1bml0X3ByaWNlOic0NTAwMCcsXHJcbiAgICAgICAgICAgICAgICBkaXNjb3VudF9wcmljZTowLFxyXG4gICAgICAgICAgICAgICAgdG90YWxfcHJpY2U6JzkwMDAwJyxcclxuICAgICAgICAgICAgICAgIHNlbGxlcl9uYW1lOidBcmlmJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgICAgICBpbnZvaWNlX25vOiAnMTIzOTYnLFxyXG4gICAgICAgICAgICAgICAgaW52b2ljZV9kYXRlOiAnMjIvNS8yMDIxJyxcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RfbmFtZTogJ0FzdXMgTGFwdG9wJyxcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RfY2F0ZWdvcnk6J2xhcHRvcCcsXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0X2NvZGU6JzExMjMnLFxyXG4gICAgICAgICAgICAgICAgcXVhbnRpdHk6JzInLFxyXG4gICAgICAgICAgICAgICAgdW5pdF9wcmljZTonNDUwMDAnLFxyXG4gICAgICAgICAgICAgICAgZGlzY291bnRfcHJpY2U6MTAwLFxyXG4gICAgICAgICAgICAgICAgdG90YWxfcHJpY2U6JzkwMDAwJyxcclxuICAgICAgICAgICAgICAgIHNlbGxlcl9uYW1lOidBcmlmJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgICAgICBpbnZvaWNlX25vOiAnMTIzODInLFxyXG4gICAgICAgICAgICAgICAgaW52b2ljZV9kYXRlOiAnMjYvNS8yMDIxJyxcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RfbmFtZTogJ0FjZXIgTGFwdG9wJyxcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RfY2F0ZWdvcnk6J2xhcHRvcCcsXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0X2NvZGU6JzExMjMnLFxyXG4gICAgICAgICAgICAgICAgcXVhbnRpdHk6JzEnLFxyXG4gICAgICAgICAgICAgICAgdW5pdF9wcmljZTonODUwMDAnLFxyXG4gICAgICAgICAgICAgICAgZGlzY291bnRfcHJpY2U6MTAwMCxcclxuICAgICAgICAgICAgICAgIHRvdGFsX3ByaWNlOic4NTAwMCcsXHJcbiAgICAgICAgICAgICAgICBzZWxsZXJfbmFtZTonU2hhcmlmJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgICAgICBpbnZvaWNlX25vOiAnMTIzNDcnLFxyXG4gICAgICAgICAgICAgICAgaW52b2ljZV9kYXRlOiAnMjgvNS8yMDIxJyxcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RfbmFtZTogJ0hwIExhcHRvcCcsXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0X2NhdGVnb3J5OidsYXB0b3AnLFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdF9jb2RlOicxMTIzJyxcclxuICAgICAgICAgICAgICAgIHF1YW50aXR5OicyJyxcclxuICAgICAgICAgICAgICAgIHVuaXRfcHJpY2U6JzQ1MDAwJyxcclxuICAgICAgICAgICAgICAgIGRpc2NvdW50X3ByaWNlOjUwMCxcclxuICAgICAgICAgICAgICAgIHRvdGFsX3ByaWNlOic5MDAwMCcsXHJcbiAgICAgICAgICAgICAgICBzZWxsZXJfbmFtZTonU2hhcmlmJyxcclxuICAgICAgICAgICAgfSxcclxuXHJcblxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwiYW5pbWF0ZWQgem9vbUluXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwibXQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPXsxMn0geHM9ezEyfSBtZD17MTJ9IGxnPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udGFpbmVyIGZsdWlkPXt0cnVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBtZD17OH0gY2xhc3NOYW1lPVwibXItYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRhYmxlLXRpdGxlIG1yLTJcIj5SZXBvcnQgTGlzdDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG14LTIgXCIgdHlwZT0nZGF0ZScvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBteC0yIFwiIHR5cGU9J2RhdGUnLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBteC0yIFwiPlByaW50PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiYmctc2Vjb25kYXJ5XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udGFpbmVyIGZsdWlkPXt0cnVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzbT17MTJ9IHhzPXsxMn0gbWQ9ezEyfSBsZz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF0YVRhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub0hlYWRlcj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb25QZXJQYWdlPXs1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpc3RSZXBvcnQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=