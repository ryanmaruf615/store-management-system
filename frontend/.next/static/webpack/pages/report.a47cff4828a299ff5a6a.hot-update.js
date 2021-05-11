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
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 45
        }
      }, __jsx("h4", {
        className: "table-title mr-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 49
        }
      }, "Report List"), __jsx("div", {
        className: "input-group ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 49
        }
      }, __jsx("input", {
        className: "form-control mx-2 ",
        type: "date",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 53
        }
      }), __jsx("input", {
        className: " form-control mx-2 ",
        type: "date",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 53
        }
      }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        className: " btn btn-primary mx-2 ",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9saXN0UmVwb3J0LmpzIl0sIm5hbWVzIjpbIkxpc3RSZXBvcnQiLCJjb2x1bW5zIiwibmFtZSIsInNlbGVjdG9yIiwic29ydGFibGUiLCJjZWxsIiwicm93IiwiZGF0YSIsImlkIiwiaW52b2ljZV9ubyIsImludm9pY2VfZGF0ZSIsInByb2R1Y3RfbmFtZSIsInByb2R1Y3RfY2F0ZWdvcnkiLCJwcm9kdWN0X2NvZGUiLCJxdWFudGl0eSIsInVuaXRfcHJpY2UiLCJkaXNjb3VudF9wcmljZSIsInRvdGFsX3ByaWNlIiwic2VsbGVyX25hbWUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7SUFFTUEsVTs7Ozs7QUFDRix3QkFBYztBQUFBOztBQUFBO0FBRWI7Ozs7NkJBQ1E7QUFBQTs7QUFDTCxVQUFNQyxPQUFPLEdBQUcsQ0FDWjtBQUNJQyxZQUFJLEVBQUUsWUFEVjtBQUVJQyxnQkFBUSxFQUFFLFlBRmQ7QUFHSUMsZ0JBQVEsRUFBRTtBQUhkLE9BRFksRUFNWjtBQUNJRixZQUFJLEVBQUUsY0FEVjtBQUVJQyxnQkFBUSxFQUFFLGNBRmQ7QUFHSUMsZ0JBQVEsRUFBRTtBQUhkLE9BTlksRUFXWjtBQUNJRixZQUFJLEVBQUUsY0FEVjtBQUVJQyxnQkFBUSxFQUFFLGNBRmQ7QUFHSUMsZ0JBQVEsRUFBRTtBQUhkLE9BWFksRUFpQlo7QUFDSUYsWUFBSSxFQUFFLGtCQURWO0FBRUlDLGdCQUFRLEVBQUUsa0JBRmQ7QUFHSUMsZ0JBQVEsRUFBRTtBQUhkLE9BakJZLEVBc0JaO0FBQ0lGLFlBQUksRUFBRSxjQURWO0FBRUlDLGdCQUFRLEVBQUUsY0FGZDtBQUdJQyxnQkFBUSxFQUFFO0FBSGQsT0F0QlksRUE0Qlo7QUFDSUYsWUFBSSxFQUFFLFlBRFY7QUFFSUMsZ0JBQVEsRUFBRSxZQUZkO0FBR0lDLGdCQUFRLEVBQUU7QUFIZCxPQTVCWSxFQWlDWjtBQUNJRixZQUFJLEVBQUUsZ0JBRFY7QUFFSUMsZ0JBQVEsRUFBRSxnQkFGZDtBQUdJQyxnQkFBUSxFQUFFO0FBSGQsT0FqQ1ksRUFzQ1o7QUFDSUYsWUFBSSxFQUFFLFVBRFY7QUFFSUMsZ0JBQVEsRUFBRSxVQUZkO0FBR0lDLGdCQUFRLEVBQUU7QUFIZCxPQXRDWSxFQTJDWjtBQUNJRixZQUFJLEVBQUUsYUFEVjtBQUVJQyxnQkFBUSxFQUFFLGFBRmQ7QUFHSUMsZ0JBQVEsRUFBRTtBQUhkLE9BM0NZLEVBZ0RaO0FBQ0lGLFlBQUksRUFBRSxRQURWO0FBRUlDLGdCQUFRLEVBQUUsYUFGZDtBQUdJQyxnQkFBUSxFQUFFO0FBSGQsT0FoRFksRUFxRFo7QUFDSUYsWUFBSSxFQUFFLFFBRFY7QUFFSUMsZ0JBQVEsRUFBRSxJQUZkO0FBR0lDLGdCQUFRLEVBQUUsSUFIZDtBQUlJQyxZQUFJLEVBQUUsY0FBQUMsR0FBRztBQUFBLGlCQUFJLE1BQUMsc0RBQUQ7QUFBUyxxQkFBUyxFQUFDLGlCQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFKO0FBQUE7QUFKYixPQXJEWSxDQUFoQjtBQTREQSxVQUFNQyxJQUFJLEdBQUcsQ0FDVDtBQUNJQyxVQUFFLEVBQUUsQ0FEUjtBQUVJQyxrQkFBVSxFQUFFLE9BRmhCO0FBR0lDLG9CQUFZLEVBQUUsV0FIbEI7QUFJSUMsb0JBQVksRUFBRSxhQUpsQjtBQUtJQyx3QkFBZ0IsRUFBQyxRQUxyQjtBQU1JQyxvQkFBWSxFQUFDLE1BTmpCO0FBT0lDLGdCQUFRLEVBQUMsR0FQYjtBQVFJQyxrQkFBVSxFQUFDLE9BUmY7QUFTSUMsc0JBQWMsRUFBQyxDQVRuQjtBQVVJQyxtQkFBVyxFQUFDLE9BVmhCO0FBV0lDLG1CQUFXLEVBQUM7QUFYaEIsT0FEUyxFQWNUO0FBQ0lWLFVBQUUsRUFBRSxDQURSO0FBRUlDLGtCQUFVLEVBQUUsT0FGaEI7QUFHSUMsb0JBQVksRUFBRSxXQUhsQjtBQUlJQyxvQkFBWSxFQUFFLGFBSmxCO0FBS0lDLHdCQUFnQixFQUFDLFFBTHJCO0FBTUlDLG9CQUFZLEVBQUMsTUFOakI7QUFPSUMsZ0JBQVEsRUFBQyxHQVBiO0FBUUlDLGtCQUFVLEVBQUMsT0FSZjtBQVNJQyxzQkFBYyxFQUFDLEdBVG5CO0FBVUlDLG1CQUFXLEVBQUMsT0FWaEI7QUFXSUMsbUJBQVcsRUFBQztBQVhoQixPQWRTLEVBMkJUO0FBQ0lWLFVBQUUsRUFBRSxDQURSO0FBRUlDLGtCQUFVLEVBQUUsT0FGaEI7QUFHSUMsb0JBQVksRUFBRSxXQUhsQjtBQUlJQyxvQkFBWSxFQUFFLGFBSmxCO0FBS0lDLHdCQUFnQixFQUFDLFFBTHJCO0FBTUlDLG9CQUFZLEVBQUMsTUFOakI7QUFPSUMsZ0JBQVEsRUFBQyxHQVBiO0FBUUlDLGtCQUFVLEVBQUMsT0FSZjtBQVNJQyxzQkFBYyxFQUFDLElBVG5CO0FBVUlDLG1CQUFXLEVBQUMsT0FWaEI7QUFXSUMsbUJBQVcsRUFBQztBQVhoQixPQTNCUyxFQXdDVDtBQUNJVixVQUFFLEVBQUUsQ0FEUjtBQUVJQyxrQkFBVSxFQUFFLE9BRmhCO0FBR0lDLG9CQUFZLEVBQUUsV0FIbEI7QUFJSUMsb0JBQVksRUFBRSxXQUpsQjtBQUtJQyx3QkFBZ0IsRUFBQyxRQUxyQjtBQU1JQyxvQkFBWSxFQUFDLE1BTmpCO0FBT0lDLGdCQUFRLEVBQUMsR0FQYjtBQVFJQyxrQkFBVSxFQUFDLE9BUmY7QUFTSUMsc0JBQWMsRUFBQyxHQVRuQjtBQVVJQyxtQkFBVyxFQUFDLE9BVmhCO0FBV0lDLG1CQUFXLEVBQUM7QUFYaEIsT0F4Q1MsQ0FBYjtBQXlEQSxhQUNJLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMseURBQUQ7QUFBVyxpQkFBUyxFQUFDLGlCQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRUksTUFBQyxtREFBRDtBQUFLLGlCQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ksTUFBQyxtREFBRDtBQUFLLFVBQUUsRUFBRSxFQUFUO0FBQWEsVUFBRSxFQUFFLEVBQWpCO0FBQXFCLFVBQUUsRUFBRSxFQUF6QjtBQUE2QixVQUFFLEVBQUUsRUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMsb0RBQUQsQ0FBTSxJQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSSxNQUFDLHlEQUFEO0FBQVcsYUFBSyxFQUFFLElBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSSxNQUFDLG1EQUFEO0FBQUssVUFBRSxFQUFFLENBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUksaUJBQVMsRUFBQyxrQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLEVBRUk7QUFBSyxpQkFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQU8saUJBQVMsRUFBQyxvQkFBakI7QUFBc0MsWUFBSSxFQUFDLE1BQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFESixFQUVJO0FBQU8saUJBQVMsRUFBQyxxQkFBakI7QUFBdUMsWUFBSSxFQUFDLE1BQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGSixFQUdJLE1BQUMsc0RBQUQ7QUFBUyxpQkFBUyxFQUFDLHdCQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhKLENBRkosQ0FESixDQURKLENBREosRUFhSTtBQUFJLGlCQUFTLEVBQUMsY0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBYkosRUFjSSxNQUFDLHlEQUFEO0FBQVcsYUFBSyxFQUFFLElBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSSxNQUFDLG1EQUFEO0FBQUssVUFBRSxFQUFFLEVBQVQ7QUFBYSxVQUFFLEVBQUUsRUFBakI7QUFBcUIsVUFBRSxFQUFFLEVBQXpCO0FBQTZCLFVBQUUsRUFBRSxFQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ksTUFBQyxpRUFBRDtBQUNJLGdCQUFRLEVBQUUsSUFEZDtBQUVJLHlCQUFpQixFQUFFLENBRnZCO0FBR0ksa0JBQVUsRUFBRSxJQUhoQjtBQUlJLGVBQU8sRUFBRWpCLE9BSmI7QUFLSSxZQUFJLEVBQUVNLElBTFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURKLENBREosQ0FESixDQWRKLENBREosQ0FESixDQURKLENBRkosQ0FESixDQURKO0FBeUNIOzs7O0VBbktvQlksK0M7O0FBc0tWbkIseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVwb3J0LmE0N2NmZjQ4MjhhMjk5ZmY1YTZhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIEZyYWdtZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7QnV0dG9uLCBDYXJkLCBDb2wsIENvbnRhaW5lciwgTW9kYWwsIFJvd30gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgRGF0YVRhYmxlIGZyb20gXCJyZWFjdC1kYXRhLXRhYmxlLWNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgTGlzdFJlcG9ydCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IGNvbHVtbnMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdJbnZvaWNlIE5vJyxcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaW52b2ljZV9ubycsXHJcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0ludm9pY2UgRGF0ZScsXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2ludm9pY2VfZGF0ZScsXHJcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ1Byb2R1Y3QgTmFtZScsXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3Byb2R1Y3RfbmFtZScsXHJcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdQcm9kdWN0IENhdGVnb3J5JyxcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAncHJvZHVjdF9jYXRlZ29yeScsXHJcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ1Byb2R1Y3QgQ29kZScsXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3Byb2R1Y3RfY29kZScsXHJcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdVbml0IFByaWNlJyxcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAndW5pdF9wcmljZScsXHJcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0Rpc2NvdW50IFByaWNlJyxcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGlzY291bnRfcHJpY2UnLFxyXG4gICAgICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdRdWFudGl0eScsXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3F1YW50aXR5JyxcclxuICAgICAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnVG90YWwgUHJpY2UnLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICd0b3RhbF9wcmljZScsXHJcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ1NlbGxlcicsXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NlbGxlcl9uYW1lJyxcclxuICAgICAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRGVsZXRlJyxcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaWQnLFxyXG4gICAgICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjZWxsOiByb3cgPT4gPEJ1dHRvbiAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgXCI+UHJpbnQ8L0J1dHRvbj5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICAgICAgaW52b2ljZV9ubzogJzEyMzU2JyxcclxuICAgICAgICAgICAgICAgIGludm9pY2VfZGF0ZTogJzIyLzUvMjAyMScsXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0X25hbWU6ICdBc3VzIExhcHRvcCcsXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0X2NhdGVnb3J5OidsYXB0b3AnLFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdF9jb2RlOicxMTIzJyxcclxuICAgICAgICAgICAgICAgIHF1YW50aXR5OicyJyxcclxuICAgICAgICAgICAgICAgIHVuaXRfcHJpY2U6JzQ1MDAwJyxcclxuICAgICAgICAgICAgICAgIGRpc2NvdW50X3ByaWNlOjAsXHJcbiAgICAgICAgICAgICAgICB0b3RhbF9wcmljZTonOTAwMDAnLFxyXG4gICAgICAgICAgICAgICAgc2VsbGVyX25hbWU6J0FyaWYnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgICAgIGludm9pY2Vfbm86ICcxMjM5NicsXHJcbiAgICAgICAgICAgICAgICBpbnZvaWNlX2RhdGU6ICcyMi81LzIwMjEnLFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdF9uYW1lOiAnQXN1cyBMYXB0b3AnLFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdF9jYXRlZ29yeTonbGFwdG9wJyxcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RfY29kZTonMTEyMycsXHJcbiAgICAgICAgICAgICAgICBxdWFudGl0eTonMicsXHJcbiAgICAgICAgICAgICAgICB1bml0X3ByaWNlOic0NTAwMCcsXHJcbiAgICAgICAgICAgICAgICBkaXNjb3VudF9wcmljZToxMDAsXHJcbiAgICAgICAgICAgICAgICB0b3RhbF9wcmljZTonOTAwMDAnLFxyXG4gICAgICAgICAgICAgICAgc2VsbGVyX25hbWU6J0FyaWYnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgICAgIGludm9pY2Vfbm86ICcxMjM4MicsXHJcbiAgICAgICAgICAgICAgICBpbnZvaWNlX2RhdGU6ICcyNi81LzIwMjEnLFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdF9uYW1lOiAnQWNlciBMYXB0b3AnLFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdF9jYXRlZ29yeTonbGFwdG9wJyxcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RfY29kZTonMTEyMycsXHJcbiAgICAgICAgICAgICAgICBxdWFudGl0eTonMScsXHJcbiAgICAgICAgICAgICAgICB1bml0X3ByaWNlOic4NTAwMCcsXHJcbiAgICAgICAgICAgICAgICBkaXNjb3VudF9wcmljZToxMDAwLFxyXG4gICAgICAgICAgICAgICAgdG90YWxfcHJpY2U6Jzg1MDAwJyxcclxuICAgICAgICAgICAgICAgIHNlbGxlcl9uYW1lOidTaGFyaWYnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgICAgIGludm9pY2Vfbm86ICcxMjM0NycsXHJcbiAgICAgICAgICAgICAgICBpbnZvaWNlX2RhdGU6ICcyOC81LzIwMjEnLFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdF9uYW1lOiAnSHAgTGFwdG9wJyxcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RfY2F0ZWdvcnk6J2xhcHRvcCcsXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0X2NvZGU6JzExMjMnLFxyXG4gICAgICAgICAgICAgICAgcXVhbnRpdHk6JzInLFxyXG4gICAgICAgICAgICAgICAgdW5pdF9wcmljZTonNDUwMDAnLFxyXG4gICAgICAgICAgICAgICAgZGlzY291bnRfcHJpY2U6NTAwLFxyXG4gICAgICAgICAgICAgICAgdG90YWxfcHJpY2U6JzkwMDAwJyxcclxuICAgICAgICAgICAgICAgIHNlbGxlcl9uYW1lOidTaGFyaWYnLFxyXG4gICAgICAgICAgICB9LFxyXG5cclxuXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJhbmltYXRlZCB6b29tSW5cIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJtdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc209ezEyfSB4cz17MTJ9IG1kPXsxMn0gbGc9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250YWluZXIgZmx1aWQ9e3RydWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIG1kPXs4fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0YWJsZS10aXRsZSBtci0yXCI+UmVwb3J0IExpc3Q8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBteC0yIFwiIHR5cGU9J2RhdGUnLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCIgZm9ybS1jb250cm9sIG14LTIgXCIgdHlwZT0nZGF0ZScvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiAgY2xhc3NOYW1lPVwiIGJ0biBidG4tcHJpbWFyeSBteC0yIFwiPlByaW50PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiYmctc2Vjb25kYXJ5XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udGFpbmVyIGZsdWlkPXt0cnVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzbT17MTJ9IHhzPXsxMn0gbWQ9ezEyfSBsZz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF0YVRhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub0hlYWRlcj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb25QZXJQYWdlPXs1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpc3RSZXBvcnQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=