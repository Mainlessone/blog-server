"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = exports.User = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let User = class User extends mongoose_1.Document {
};
__decorate([
    mongoose_2.Prop({ required: true }),
    __metadata("design:type", String)
], User.prototype, "nickName", void 0);
__decorate([
    mongoose_2.Prop({ required: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    mongoose_2.Prop({ required: true }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    mongoose_2.Prop({ default: null }),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    mongoose_2.Prop({ default: null }),
    __metadata("design:type", String)
], User.prototype, "country", void 0);
__decorate([
    mongoose_2.Prop({ default: 'https://previews.123rf.com/images/nexusby/nexusby1810/nexusby181000286/111362910-default-avatar-placeholder-profile-icon-male.jpg' }),
    __metadata("design:type", String)
], User.prototype, "avatar", void 0);
__decorate([
    mongoose_2.Prop({ default: [], ref: 'Post' }),
    __metadata("design:type", Function)
], User.prototype, "posts", void 0);
User = __decorate([
    mongoose_2.Schema()
], User);
exports.User = User;
exports.UserSchema = mongoose_2.SchemaFactory.createForClass(User);
//# sourceMappingURL=user.schema.js.map