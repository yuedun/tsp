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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Elastic = void 0;
const { Client } = require('@elastic/elasticsearch');
const config_1 = require("../config");
const client = new Client({ node: config_1.elastic });
class Elastic {
    search() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield client.search({
                    index: 'elk-nginxdomainname-2020-06-03',
                    body: {
                        query: {
                            match: {
                                referer: ""
                            }
                        }
                    }
                });
                return result;
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    info() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield client.info();
                return result;
            }
            catch (error) {
                console.error(error);
            }
        });
    }
}
exports.Elastic = Elastic;
