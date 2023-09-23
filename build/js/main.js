/******/ (function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Flag the module as loaded
    /******/ module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/ __webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/ __webpack_require__.c = installedModules;
  /******/
  /******/ // define getter function for harmony exports
  /******/ __webpack_require__.d = function (exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter,
      });
      /******/
    }
    /******/
  };
  /******/
  /******/ // define __esModule on exports
  /******/ __webpack_require__.r = function (exports) {
    /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: "Module",
      });
      /******/
    }
    /******/ Object.defineProperty(exports, "__esModule", { value: true });
    /******/
  };
  /******/
  /******/ // create a fake namespace object
  /******/ // mode & 1: value is a module id, require it
  /******/ // mode & 2: merge all properties of value into the ns
  /******/ // mode & 4: return value when already ns object
  /******/ // mode & 8|1: behave like require
  /******/ __webpack_require__.t = function (value, mode) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (
      mode & 4 &&
      typeof value === "object" &&
      value &&
      value.__esModule
    )
      return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, "default", {
      enumerable: true,
      value: value,
    });
    /******/ if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function (key) {
            return value[key];
          }.bind(null, key)
        );
    /******/ return ns;
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/ __webpack_require__.n = function (module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module["default"];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, "a", getter);
    /******/ return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/ __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/ __webpack_require__.p = "";
  /******/
  /******/
  /******/ // Load entry module and return exports
  /******/ return __webpack_require__(
    (__webpack_require__.s = "./src/js/main.js")
  );
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ "./src/js/main.js":
      /*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        // IMASK INIT
        function IMaskPhone() {
          const phoneInput = document.querySelectorAll(".js-phone");
          phoneInput.forEach((element) => {
            const maskOptions = {
              mask: "+{7} 000 000-00-00",
            };
            const mask = IMask(element, maskOptions);
          });
        }
        IMaskPhone();
        const accardions = document.querySelectorAll(".accardion");
        const openaccardion = (accardion) => {
          const content = accardion.querySelector(".accardion__body");
          accardion.classList.add("is-active");
          content.style.maxHeight = content.scrollHeight + "px";
        };
        const closeaccardion = (accardion) => {
          const content = accardion.querySelector(".accardion__body");
          accardion.classList.remove("is-active");
          content.style.maxHeight = null;
        };
        accardions.forEach((accardion) => {
          const intro = accardion.querySelector(".accardion__header");
          const content = accardion.querySelector(".accardion__body");
          intro.onclick = () => {
            if (content.style.maxHeight) {
              closeaccardion(accardion);
            } else {
              // accardions.forEach((accardion) => closeaccardion(accardion));
              openaccardion(accardion);
            }
          };
        });
        function toggleCheckbox() {
          const checkboxes = document.querySelectorAll(".js-checkbox");
          const selectAll = document.getElementById("select-all");
          selectAll.onclick = function () {
            for (var checkbox of checkboxes) {
              checkbox.checked = this.checked;
            }
          };
          checkboxes.forEach((element) => {
            element.onclick = function () {
              selectAll.checked = false;
              const checkboxesChecked = document.querySelectorAll(
                ".js-checkbox:checked"
              );
              if (checkboxesChecked.length == checkboxes.length) {
                selectAll.checked = true;
              }
            };
          });
        }
        toggleCheckbox();

        // increment & decrement
        function counter() {
          const minus = document.querySelectorAll(".js-action-minus");
          const plus = document.querySelectorAll(".js-action-plus");
          plus.forEach((element) => {
            element.addEventListener("click", (e) => {
              const valueInput = e.target.previousElementSibling;
              valueInput.value++;
            });
          });
          minus.forEach((element) => {
            element.addEventListener("click", (e) => {
              const valueInput = e.target.nextElementSibling;
              if (valueInput.value > 1) {
                valueInput.value--;
              }
            });
          });
        }
        counter();

        // Validation Form
        const forms = document.querySelectorAll("[data-form]");
        forms.forEach((element) => {
          const v = new vanillaValidation(element, {
            rules: {
              name: {
                required: true,
              },
              surname: {
                required: true,
              },
              email: {
                email: true,
                required: true,
              },
              phone: {
                required: true,
                digits: true,
              },
            },
            messages: {
              name: {
                required: "Укажите имя",
              },
              surname: {
                required: "Укажите фамилию",
              },
              email: {
                email: "Укажите правильную почту",
                required: "Укважите почту",
              },
              phone: {
                required: "Укважите номер телефона",
                digits: "Номер должен состоять из цифр",
              },
            },
            options: {
              submitHandler: function (event, form, validator) {
                console.log(form);
              },
            },
          });
        });

        // trigger pay now
        function payNow() {
          const payCheckbox = document.getElementById("pay-now");
          const submitBtn = document.querySelector(".js-form-submit");
          const submitText = submitBtn.innerText;
          payCheckbox.addEventListener("change", (e) => {
            const totalPrice =
              document.querySelector(".js-total-price").innerText;
            e.target.checked
              ? (submitBtn.innerHTML = `Оплатить ${totalPrice}`)
              : (submitBtn.innerHTML = submitText);
          });
        }
        payNow();

        // Micromodal INIT
        MicroModal.init({
          disableScroll: true,
        });

        // tabs function
        function tabInit() {
          const tabButtons = document.querySelectorAll(".tab-button");
          const tabs = document.querySelectorAll(".tab-content");

          // Set first tab-btn as selected and unhide the first tab
          tabButtons[0].classList.toggle("is-active", true);
          tabs[0].classList.toggle("hidden", false);
          tabButtons.forEach((tabButton) => {
            tabButton.addEventListener("click", (e) => {
              // Deselect all tab buttons...
              Array.from(e.target.parentNode.children).forEach((tabBtn) => {
                tabBtn.classList.toggle("is-active", false);
              });
              // Then mark this one as selected
              e.target.classList.toggle("is-active", true);
              const selectedTabId = e.target.dataset.tabContentId;
              const selectedTab = document.getElementById(selectedTabId);

              // Hide all the tabs...
              Array.from(selectedTab.parentNode.children).forEach((tab) => {
                tab.classList.toggle("hidden", true);
              });
              // Unhide selected tab
              selectedTab.classList.toggle("hidden", false);
            });
          });
        }
        tabInit();

        /***/
      },

    /******/
  }
);
