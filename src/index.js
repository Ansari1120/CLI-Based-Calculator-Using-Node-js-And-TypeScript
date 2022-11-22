#! /usr/bin/env node

export const __esModule = true;
import * as chalk_1 from "chalk";
import * as inquirer_1 from "inquirer";
import * as chalk_animation_1 from "chalk-animation";
import { createSpinner } from "nanospinner";
("use strict");
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y["return"]
                  : op[0]
                  ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };

var playerName;
var sleep = function (ms) {
  if (ms === void 0) {
    ms = 2000;
  }
  return new Promise(function (r) {
    return setTimeout(r, ms);
  });
};
//Welcome Screen
var welcome = function () {
  return __awaiter(void 0, void 0, void 0, function () {
    var rainbowTitle;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          rainbowTitle = chalk_animation_1["default"].rainbow(
            "This is the simple Calculator?\n        Developed by Ahmed Ali Ansari \n"
          );
          return [4 /*yield*/, sleep()];
        case 1:
          _a.sent();
          rainbowTitle.stop();
          return [2 /*return*/];
      }
    });
  });
};
// User Name Input
var askName = function () {
  return __awaiter(void 0, void 0, void 0, function () {
    var answers;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [
            4 /*yield*/,
            inquirer_1["default"].prompt({
              name: "user_name",
              type: "input",
              message: "What is your name? ",
              default: function () {
                return "User";
              },
            }),
          ];
        case 1:
          answers = _a.sent();
          playerName = answers.user_name;
          console.log("Hey There ! ".concat(playerName));
          return [2 /*return*/];
      }
    });
  });
};
var calculator = {
  add: function (number1, number2) {
    return number1 + number2;
  },
  sub: function (number1, number2) {
    return number1 - number2;
  },
  division: function (number1, number2) {
    return number1 / number2;
  },
  Multiplication: function (number1, number2) {
    return number1 * number2;
  },
};
console.clear();
await welcome();
await askName();
var want_to_Continue;
var _loop_1 = async function () {
  //Input Option and numbers from user
  var question = function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var operators;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [
              4 /*yield*/,
              inquirer_1["default"].prompt([
                {
                  name: "available_operations",
                  type: "list",
                  message: "Please use Arrow key to Select your option!\n",
                  choices: [
                    "Addition",
                    "Substraction",
                    "Division",
                    "Multiplication",
                  ],
                },
                {
                  name: "num1",
                  type: "number",
                  message: "enter first number : ",
                  default: function () {
                    return console.error();
                  },
                },
                {
                  name: "num2",
                  type: "number",
                  message: "enter second number : ",
                  default: function () {
                    return console.error();
                  },
                },
              ]),
            ];
          case 1:
            operators = _a.sent();
            // await question();
            return [
              2 /*return*/,
              handleAnswer(
                operators.available_operations,
                operators.num1,
                operators.num2
              ),
            ];
        }
      });
    });
  };
  //making a choice function
  var handleAnswer = function (choose_operations, number1, number2) {
    return __awaiter(void 0, void 0, void 0, function () {
      var answer, spinner;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            spinner = (0, createSpinner)("Calculating...").start();
            return [4 /*yield*/, sleep()];
          case 1:
            _a.sent();
            switch (choose_operations) {
              case "Addition":
                answer = calculator.add(number1, number2);
                spinner.success({
                  text: "\nThe Result of Addition is : ".concat(
                    chalk_1["default"].bold.bgBlueBright(answer)
                  ),
                });
                break;
              case "Substraction":
                answer = calculator.sub(number1, number2);
                spinner.success({
                  text: "\nThe Result of Substraction is : ".concat(
                    chalk_1["default"].bold.bgBlueBright(answer)
                  ),
                });
                break;
              case "Division":
                answer = calculator.division(number1, number2);
                spinner.success({
                  text: "\nThe Result of Division is : ".concat(
                    chalk_1["default"].bold.bgBlueBright(answer)
                  ),
                });
                break;
              case "Multiplication":
                answer = calculator.Multiplication(number1, number2);
                spinner.success({
                  text: "\nThe Result of Multiplication is : ".concat(
                    chalk_1["default"].bold.bgBlueBright(answer)
                  ),
                });
                break;
              default:
                console.log("Invalid Choice !");
            }
            return [2 /*return*/];
        }
      });
    });
  };
  var want_to_calculate_more = function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var choice;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [
              4 /*yield*/,
              inquirer_1["default"].prompt({
                name: "want_to_calculate_more",
                type: "confirm",
                message: "Do you want to continue for more operations ? ",
              }),
            ];
          case 1:
            choice = _a.sent();
            want_to_Continue = choice.want_to_calculate_more;
            return [2 /*return*/];
        }
      });
    });
  };
  await question();
  await want_to_calculate_more();
  console.clear();
};
do {
  _loop_1();
} while (want_to_Continue == true);
