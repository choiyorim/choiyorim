"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const user_resource_1 = require("../../../resource/user.resource");
const signUp_model_1 = require("../model/signUp.model");
class SignUpRoutes {
    constructor() {
        this.signUpRouter = express.Router();
        this.router();
    }
    router() {
        this.signUpRouter.post('/signUp', createUser);
    }
}
exports.SignUpRoutes = SignUpRoutes;
/**
 * route: 회원가입
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let userResource = new user_resource_1.UserResource(req.body);
        try {
            const result = yield signUp_model_1.signUp.createUser(userResource.getSignUp());
            res.send(result);
        }
        catch (err) {
            res.send(err.message);
        }
    });
}
exports.signUpRoutes = new SignUpRoutes();
//# sourceMappingURL=signUp.route.js.map