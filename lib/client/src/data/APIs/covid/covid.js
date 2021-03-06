"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTwenty = void 0;
const axios_1 = __importDefault(require("axios"));
const getTwenty = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield axios_1.default
        .get("https://api.covidtracking.com/v2/us/daily.json")
        .then(({ data }) => {
        let twenty = data.data.slice(66, data.data.length + 1);
        let twentyOne = data.data.slice(0, 66);
        const pair = [twenty, twentyOne];
        return pair;
    })
        .catch((err) => {
        console.error(err);
    });
});
exports.getTwenty = getTwenty;
(0, exports.getTwenty)();
