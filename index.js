module.exports = {
	"globals": {
		"document": false,
		"window": false,
		"process": true
	},
	"extends": ["eslint:recommended", "plugin:react/recommended"],
	"rules": {
		"indent": [2, "tab", {"SwitchCase": 1}],
		"quotes": [1, "double", {"allowTemplateLiterals": true}],
		"sort-keys": 0,
		"object-shorthand": 1,
		"key-spacing": [1, {
			"beforeColon": false,
			"afterColon": true,
			"mode": "strict"
		}],
		"quote-props": 1,
		"comma-dangle": [2,"never"],
		"no-debugger": 0,
		"no-dupe-args": 2,
		"no-dupe-keys": 2,
		"no-duplicate-case": 2,
		"no-ex-assign": 2,
		"no-extra-boolean-cast": 2,
		"no-unreachable": 1,
		"no-unused-vars": 0,
		"no-console": 0,
		"no-mixed-spaces-and-tabs": 1,
		"no-useless-escape": 1,
		"no-redeclare": 1,
		"no-shadow": 1,
		"valid-jsdoc": 1,
		"valid-typeof": 2,
		"eqeqeq": [2,"smart"],
		"arrow-parens": [2,"always"],
		"arrow-spacing": [1,{"before":true,"after":true}],
		"constructor-super": 2,
		"prefer-const": 1,
		"prefer-arrow-callback": 1,
		"semi": [2, "always"],
		"space-before-function-paren": [1, {
			"anonymous": "always",
			"named": "always",
			"asyncArrow": "always"
		}],
		"react/display-name": 0,
		"react/prop-types": 1,
		"react/default-props-match-prop-types": 1,
		"react/no-access-state-in-setstate": 1,
		"react/destructuring-assignment": 1,
		"prefer-destructuring": ["error", {
			"VariableDeclarator": {
				"array": false,
				"object": true
			},
			"AssignmentExpression": {
				"array": false,
				"object": false
			}
		}, {
			"enforceForRenamedProperties": false
		}]
	},
	"parserOptions": {
		"sourceType": "module",
		"ecmaVersion": 2018,
		"ecmaFeatures": {
			"jsx": true,
			"modules": true
		}
	},
	"parser": "babel-eslint",
	"plugins": [
		"react"
	],
	"env" : {
		"browser" : false,
		"node" : true,
		"es6" : true,
		"mocha": true
	}
};
