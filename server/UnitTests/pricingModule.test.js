const { pricefromBackEnd } = require('../Controllers/priceModule'); 

describe('pricefromBackEnd', () => {
  it('should respond with a JSON object', () => {
    const req = {};
    const res = {
      json: jest.fn()
    };

    pricefromBackEnd(req, res);
    const response = res.json.mock.calls[0][0];

    expect(response).toHaveProperty('gallonsReq');
    expect(response.gallonsReq).toEqual(expect.any(Number)); // Validates that gallonsReq is a number
    expect(response).toHaveProperty('deliveryAddress');
    expect(response.deliveryAddress).toEqual(expect.any(String)); // Validates that deliveryAddress is a string
    expect(response).toHaveProperty('deliveryDate');
    expect(response.deliveryDate).toEqual(expect.any(String)); // Validates that deliveryDate is a string
    expect(response).toHaveProperty('suggestedPrice');
    expect(response.suggestedPrice).toEqual(expect.any(Number)); // Validates that suggestedPrice is a number
    expect(response).toHaveProperty('totalAmountDue');
    expect(response.totalAmountDue).toEqual(expect.any(Number)); // Validates that totalAmountDue is a number
  });
});
