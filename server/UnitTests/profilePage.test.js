const { checkProfile } = require('../Controllers/profile'); 

describe('checkProfile', () => {
  it('should respond with a JSON object', () => {
    const req = {};
    const res = {
      json: jest.fn()
    };

    checkProfile(req, res);
    const response = res.json.mock.calls[0][0];

    expect(response).toHaveProperty('email');
    expect(response.email).toEqual(expect.any(String)); // Validates that email is a string
    expect(response).toHaveProperty('fullName');
    expect(response.fullName).toEqual(expect.any(String)); // Validates that fullName is a string
    expect(response).toHaveProperty('address1');
    expect(response.address1).toEqual(expect.any(String)); // Validates that address1 is a string
    expect(response).toHaveProperty('address2');
    expect(response.address2).toEqual(expect.any(String)); // Validates that address2 is a string
    expect(response).toHaveProperty('city');
    expect(response.city).toEqual(expect.any(String)); // Validates that city is a string
    expect(response).toHaveProperty('state');
    expect(response.state).toEqual(expect.any(String)); // Validates that state is a string
    expect(response).toHaveProperty('zipCode');
    expect(response.zipCode).toEqual(expect.any(String)); // Validates that zipCode is a string
  });
});
