module.exports = {
	env     : { es6: true, browser: true },
	extends : [
		`airbnb-base`,
		`eslint:recommended`,
	],
	rules: {
		"consistent-return" : `error`,
		"brace-style"       : [`error`, `allman`],
		"space-in-parens"   : [`error`, `always`],
		"linebreak-style"   : [`off`],
		indent              : [`error`, `tab`],
		"no-tabs"           : [`error`, { allowIndentationTabs: true }],
		quotes              : [`error`, `backtick`],
		"key-spacing"       : [`error`, {
			align:
            { beforeColon: true, afterColon: true, on: `colon` },
		}],
	},
};
