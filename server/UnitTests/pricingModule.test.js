const createPrice = require('../Controllers/priceModule').createPrice; 
const pM = require('../models/priceModuleModel'); 

describe('createPrice Function', () => {
  it('should create a new price when all fields are provided', async () => {
    const req = {
      body: {
        gallonsReq: 10, // Example value
        deliveryAddress: '123 Example St', // Example value
        deliveryDate: '2023-11-01', // Example value
        suggestedPrice: 2.5, // Example value
        totalAmountDue: 25, // Example value
      },
      user: {
        _id: 'user_id', // Example user ID
      },
    };

    const mockCreatedPrice = {
      _id: 'price_id', // Example price ID
      // Add other properties as needed
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    // Mock the create method of the priceModuleModel (pM)
    pM.create = jest.fn(() => mockCreatedPrice);

    await createPrice(req, res);

    // Check if status and json functions are called with the correct arguments
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockCreatedPrice);
  });

  it('should return an error when required fields are missing', async () => {
    const req = {
      body: {
        // Missing required fields
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await createPrice(req, res);

    // Check if status and json functions are called with the correct arguments
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      error: 'Please fill in all the fields',
      emptyFields: ['gallonsReq', 'deliveryAddress', 'deliveryDate', 'suggestedPrice', 'totalAmountDue'],
    });
  });

  it('should return an error when there is an exception during price creation', async () => {
    const req = {
      body: {
        // Provide valid data here
      },
      user: {
        _id: 'user_id',
      },
    };

    const error = new Error('Test error message');

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    // Mock the create method of the priceModuleModel (pM) to throw an error
    pM.create = jest.fn(() => {
      throw error;
    });

    await createPrice(req, res);

    // Check if status and json functions are called with the correct arguments
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: error.message });
  });
});