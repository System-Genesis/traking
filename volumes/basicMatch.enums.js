"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DOMAIN_SUFFIXES = exports.AKA_UNITS = exports.SERVICE_TYPES = exports.RANKS = void 0;
const fieldNames_1 = require("./fieldNames");
exports.RANKS = ['unknown', 'rookie', 'champion', 'ultimate'];
exports.SERVICE_TYPES = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
exports.AKA_UNITS = [
    'gondor',
    'mordor',
    'wallmart',
    'es1',
    'es2',
    'es3',
    'es4',
    'es5',
    'ads1',
    'ads2',
    'ads3',
    'ads4',
    'ads5',
    'city1',
    'city2',
    'city3',
    'city4',
    'city5',
    'mm1',
    'mm2',
    'mm3',
    'mm4',
    'mm5',
];
exports.DOMAIN_SUFFIXES = [
    [fieldNames_1.default.sources.ads, '@rabiran.com'],
    [fieldNames_1.default.sources.es, '@jello.com'],
    [fieldNames_1.default.sources.adNN, '@adnn.com'],
    [fieldNames_1.default.sources.sf, '@leonardo.com'],
    [fieldNames_1.default.sources.city, '@city.com'],
    [fieldNames_1.default.sources.mir, '@city.com'],
];
//# sourceMappingURL=enums.js.map