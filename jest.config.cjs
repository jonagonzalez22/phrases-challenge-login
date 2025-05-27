const { createDefaultPreset } = require('ts-jest');

const tsJestTransformCfg = createDefaultPreset().transform;

module.exports = {
	testEnvironment: 'jsdom',
	transform: {
		...tsJestTransformCfg,
	},
	moduleNameMapper: {
		'\\.css$': '<rootDir>/jest-css-modules-mock.js',
	},
	testPathIgnorePatterns: ['/cypress/'],
};
