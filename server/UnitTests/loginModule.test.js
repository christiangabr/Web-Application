const User = require('../models/userModel'); // Import your user schema model
const validator = require('validator');
const bcrypt = require('bcrypt');

describe('User Signup Validation', () => {
  let mockUser;

  beforeEach(() => {
    // Create a mock user object for testing
    mockUser = {
      email: 'test@example.com',
      password: 'TestPassword123',
    };
  });

  it('should throw an error for missing email and password', async () => {
    // Modify the mock user to have missing email and password
    mockUser.email = '';
    mockUser.password = '';

    // Use an async function to call signup and expect it to throw an error
    await expect(User.signup(mockUser.email, mockUser.password)).rejects.toThrowError('All fields must be filled');
  });

  it('should throw an error for an invalid email', async () => {
    // Modify the mock user to have an invalid email
    mockUser.email = 'invalidemail';

    await expect(User.signup(mockUser.email, mockUser.password)).rejects.toThrowError('Email is not valid');
  });

  it('should throw an error for a weak password', async () => {
    // Modify the mock user to have a weak password
    mockUser.password = 'weakpassword';

    await expect(User.signup(mockUser.email, mockUser.password)).rejects.toThrowError('Password is not strong enough');
  });

  it('should throw an error if email already exists', async () => {
    // Create a mock user with the same email to simulate an existing user
    const existingUser = new User({ email: mockUser.email, password: 'hashedPassword' });

    // Mock the findOne method to simulate an existing user
    User.findOne = jest.fn().mockResolvedValue(existingUser);

    await expect(User.signup(mockUser.email, mockUser.password)).rejects.toThrowError('Email already exists');
  });

  it('should create a new user if input is valid', async () => {
    // Mock the required methods and objects
    validator.isEmail = jest.fn().mockReturnValue(true);
    validator.isStrongPassword = jest.fn().mockReturnValue(true);
    bcrypt.genSalt = jest.fn().mockResolvedValue('salt');
    bcrypt.hash = jest.fn().mockResolvedValue('hashedPassword');

    // Create the user
    const user = await User.signup(mockUser.email, mockUser.password);

    // Assert that the created user has the expected email and a hashed password
    expect(user.email).toBe(mockUser.email);
    expect(user.password).toBe('hashedPassword');
  });
});
