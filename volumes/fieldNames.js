"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    sources: {
        aka: 'aka',
        es: 'es_name',
        ads: 'ads_name',
        adNN: 'adNN_name',
        nvSQL: 'nvSQL_name',
        lmn: 'lmn_name',
        mdn: 'mdn_name',
        novaMM: 'novaMM_name',
        mm: 'mm_name',
        sf: 'sf_name',
        city: 'city_name',
        mir: 'mir_name',
    },
    aka: {
        serviceType: 'nstype',
        firstName: 'firstName',
        lastName: 'lastName',
        identityCard: 'tz',
        personalNumber: 'mi',
        rank: 'rnk',
        phone: 'phone',
        areaCode: 'areaCode',
        mobilePhone: 'mPhone',
        areaCodeMobile: 'mAreaCode',
        dischargeDay: 'rld',
        clearance: 'clearance',
        unitName: 'hr',
        telephoneType: 'telephoneType',
        uniqeFieldForDeepDiff: 'mi',
        birthDate: 'birthday',
        sex: 'sex',
        picture: 'picture',
    },
    es_name: {
        entityType: 'entity',
        firstName: 'firstName',
        lastName: 'lastName',
        identityCard: 'tz',
        personalNumber: 'mi',
        rank: 'rnk',
        phone: 'vphone',
        mobilePhone: 'cphone',
        dischargeDay: 'rld',
        hierarchy: 'hr',
        mail: 'mail',
        address: 'adr',
        job: 'tf',
        location: 'location',
        domainSuffix: '@jello.com',
        userName: 'userName',
        uniqeFieldForDeepDiff: 'tz',
        birthDate: 'birthday',
        sex: 'sex',
        serviceType: 'stype',
    },
    ads_name: {
        firstName: 'KfirstName',
        lastName: 'KlastName',
        guName: 'guName',
        job: 'Kjob',
        mail: 'mail',
        upn: 'userPrincipalName',
        hierarchy: 'hierarchy',
        sAMAccountName: 'sAMAccountName',
        domainSuffix: '@rabiran.com',
        domainPrefixField: 'sAMAccountName',
        uniqeFieldForDeepDiff: 'sAMAccountName',
        sPrefix: 'm',
        cPrefix: 'd',
        guPrefix: 'f',
    },
    adNN_name: {
        firstName: 'KfirstName',
        lastName: 'KlastName',
        fullName: 'Kjob',
        mail: 'mail',
        upn: 'userPrincipalName',
        hierarchy: 'hierarchy',
        sAMAccountName: 'sAMAccountName',
        extension: 'nn',
        domainSuffix: '@adnn',
        uniqeFieldForDeepDiff: 'userPrincipalName',
    },
    nvSQL_name: {
        firstName: 'KfirstName',
        lastName: 'KlastName',
        uniqueID: 'unid',
        hierarchy: 'hierarchy',
        pn: 'pn',
        identityCard: 'id',
        uniqeFieldForDeepDiff: 'unid',
    },
    city_name: {
        firstName: 'firstName',
        lastName: 'lastName',
        identityCard: 'tz',
        rank: 'rank',
        dischargeDay: 'rld',
        clearance: 'clearance',
        currentUnit: 'department',
        serviceType: 'stype',
        mobilePhone: 'telephone',
        personalNumber: 'personalNumber',
        mail: 'mail',
        job: 'job',
        profession: 'profession',
        hierarchy: 'hr',
        domainUsers: 'domUser',
        company: 'company',
        entityTypePrefix: {
            s: ['e', 'l', 'i'],
            c: ['g', 'j'],
            gu: ['m'],
        },
        uniqeFieldForDeepDiff: 'domUser',
        tags: 'tags',
        userTags: {
            transportable: 'transportable',
            information: 'information',
        },
        domains: 'domains',
        domainNames: {
            internal: 'local',
            external: 'external',
        },
        mirGUPrefixes: {
            ads: 'mads',
            adNN: 'madNN',
        },
    },
    mm_name: {
        userName: 'userName',
        firstName: 'firstName',
        lastName: 'lastName',
        fullName: 'fullName',
        mail: 'mail',
        personalNumber: 'personalNumber',
        identityCard: 'tz',
        hierarchy: 'hierarchy',
        domainSuffix: '@leonardo.com',
        uniqeFieldForDeepDiff: 'personalNumber',
        sex: 'sex',
        serviceType: 'stype',
        rank: 'rank',
        status: 'status',
        address: 'address',
        telephone: 'telephone',
        entityType: 'entity',
        dischargeDay: 'discharge',
        primaryDU: 'primaryDU',
        s: 'soldier',
    },
    sf_name: {
        userName: 'userName',
        firstName: 'firstName',
        lastName: 'lastName',
        fullName: 'fullName',
        mail: 'mail',
        personalNumber: 'personalNumber',
        identityCard: 'tz',
        hierarchy: 'hierarchy',
        domainSuffix: '@leonardo.com',
        uniqeFieldForDeepDiff: 'personalNumber',
        sex: 'sex',
        sfSexValues: {
            m: 'ז',
            f: 'נ',
        },
        serviceType: 'stype',
        rank: 'rank',
        status: 'status',
        address: 'address',
        telephone: 'telephone',
        entityType: 'entity',
        dischargeDay: 'discharge',
        primaryDU: 'primaryDU',
        s: 'soldier',
    },
    matchedRecord: {
        firstName: 'firstName',
        lastName: 'lastName',
        rank: 'rank',
        clearance: 'clearance',
        sex: 'sex',
        personalNumber: 'personalNumber',
        identityCard: 'identityCard',
        dischargeDay: 'dischargeDay',
        akaUnit: 'akaUnit',
        serviceType: 'serviceType',
        mobilePhone: 'mobilePhone',
        phone: 'phone',
        birthDate: 'birthDate',
        address: 'address',
        entityType: 'entityType',
        mail: 'mail',
        job: 'job',
        hierarchy: 'hierarchy',
        userID: 'userID',
        source: 'source',
        goalUserId: 'goalUserId',
    },
    entityTypeValue: {
        s: 'agumon',
        c: 'digimon',
        gu: 'tamar',
    },
    rootHierarchy: {
        ourCompany: 'wallmart',
        city: 'city_name',
    },
    unknown: 'unknown',
    invalidRankForPN: 'az',
};
//# sourceMappingURL=fieldNames.js.map