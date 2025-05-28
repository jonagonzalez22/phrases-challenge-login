import { TextEncoder, TextDecoder } from 'util';

// Polyfill structuredClone solo si no existe
if (typeof global.structuredClone !== 'function') {
	global.structuredClone = (val: any) => {
		try {
			return JSON.parse(JSON.stringify(val));
		} catch {
			// Si falla la serialización, devolvemos el valor tal cual
			return val;
		}
	};
}

// Polyfill TextEncoder y TextDecoder si no existen
if (typeof global.TextEncoder === 'undefined') {
	global.TextEncoder = TextEncoder;
}
if (typeof global.TextDecoder === 'undefined') {
	global.TextDecoder = TextDecoder;
}

// Mock para window.matchMedia (para librerías que lo usan)
Object.defineProperty(window, 'matchMedia', {
	writable: true,
	value: jest.fn().mockImplementation((query) => ({
		matches: false,
		media: query,
		onchange: null,
		addListener: jest.fn(), // deprecated pero algunas libs lo usan
		removeListener: jest.fn(),
		addEventListener: jest.fn(),
		removeEventListener: jest.fn(),
		dispatchEvent: jest.fn(),
	})),
});
