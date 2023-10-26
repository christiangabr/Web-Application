const { loginInfo } = require('../Controllers/employee'); 

describe('loginInfo', () => {
  it('should respond with a JSON object', () => {
    const req = {};
    const res = {
      json: jest.fn()
    };

    loginInfo(req, res);
    const response = res.json.mock.calls[0][0];

    expect(response).toHaveProperty('name');
    expect(response.name).toEqual(expect.any(String)); // Validates that name is a string
    expect(response).toHaveProperty('email');
    expect(response.email).toEqual(expect.any(String)); // Validates that email is a string
    expect(response).toHaveProperty('password');
    expect(response.password).toEqual(expect.any(String)); // Validates that password is a string
  });
});
