import { login } from './login';

describe('login', () => {
	const mockAlert = jest.fn();
	window.alert = mockAlert;

	const mockName = 'Karime';

	it('Deve exibir um alert com boas vindas', () => {
		login(mockName);
		expect(mockAlert).toHaveBeenCalledWith(`Bem Vindo(a) ${mockName}`);
	});

	it('Não deve exibir um alert com boas vindas sem o nome', () => {
		login(mockName);
		expect(mockAlert).not.toHaveBeenCalledWith('Bem Vindo(a)');
	});
});
