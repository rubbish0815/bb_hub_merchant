/*jslint node: true */
"use strict";

exports.clientName = 'kt-byteball';
exports.minClientVersion = '2.1.0';

// https://console.developers.google.com
exports.pushApiProjectNumber = 0;
exports.pushApiKey = '';

exports.port = 6612;
//exports.myUrl = 'wss://mydomain.com/bb';
exports.bServeAsHub = true;
exports.bSaveJointJson = true;
exports.bLight = false;

// this is used by wallet vendor only, to redirect bug reports to developers' email
exports.bug_sink_email = 'admin@example.org';
exports.bugs_from_email = 'bugs@example.org';

exports.HEARTBEAT_TIMEOUT = 300*1000;

exports.storage = 'sqlite';

exports.hub="wss://byteball.org/bb-test";
exports.deviceName = 'kt-hub-merchant-test';
exports.permanent_paring_secret = '0000';
exports.KEYS_FILENAME = 'keys.json';

// home wallet (replace these values with the properties of your wallet that is to collect the revenue from sales)
exports.xPubKey = 'xpub6BnJRgfNeAmgkv42QLAvzSDyWDazuZgp1RLjB33yJCc6vtTs7QmgFDmzwFecaHopsKJhYgNqRbSsPtQjHCXRo591h13mFW7FhhMvqcsT67m';
exports.account = 6;
exports.homeDeviceAddress = '0HJBA2MU42AICBCFHPL33H75LWKQ5VCAG';

/* livenet
exports.initial_witnesses = [
	'BVVJ2K7ENPZZ3VYZFWQWK7ISPCATFIW3',
	'DJMMI5JYA5BWQYSXDPRZJVLW3UGL3GJS',
	'FOPUBEUPBC6YLIQDLKL6EW775BMV7YOH',
	'GFK3RDAPQLLNCMQEVGGD2KCPZTLSG3HN',
	'H5EZTQE7ABFH27AUDTQFMZIALANK6RBG',
	'I2ADHGP4HL6J37NQAD73J7E5SKFIXJOT',
	'JEDZYC2HMGDBIDQKG3XSTXUSHMCBK725',
	'JPQKPRI5FMTQRJF4ZZMYZYDQVRD55OTC',
	'OYW2XTDKSNKGSEZ27LMGNOPJSYIXHBHC',
	'S7N5FE42F6ONPNDQLCF64E2MGFYKQR2I',
	'TKT4UESIKTTRALRRLWS4SENSTJX6ODCW',
	'UENJPVZ7HVHM6QGVGT6MWOJGGRTUTJXQ'
];
*/

//testnet
exports.initial_witnesses = [
	'2FF7PSL7FYXVU5UIQHCVDTTPUOOG75GX',
	'2GPBEZTAXKWEXMWCTGZALIZDNWS5B3V7',
	'4H2AMKF6YO2IWJ5MYWJS3N7Y2YU2T4Z5',
	'DFVODTYGTS3ILVOQ5MFKJIERH6LGKELP',
	'ERMF7V2RLCPABMX5AMNGUQBAH4CD5TK4',
	'F4KHJUCLJKY4JV7M5F754LAJX4EB7M4N',
	'IOF6PTBDTLSTBS5NWHUSD7I2NHK3BQ2T',
	'O4K4QILG6VPGTYLRAI2RGYRFJZ7N2Q2O',
	'OPNUXBRSSQQGHKQNEPD2GLWQYEUY5XLD',
	'PA4QK46276MJJD5DBOLIBMYKNNXMUVDP',
	'RJDYXC4YQ4AZKFYTJVCR5GQJF5J6KPRI',
	'WELOXP3EOA75JWNO6S5ZJHOO3EYFKPIR'
];

exports.initial_peers = [
	'wss://byteball.org/bb-test'
];

exports.trustedRegistries = {
	'AM6GTUKENBYA54FYDAKX2VLENFZIMXWG': 'market'
};

console.log('finished hub conf');
