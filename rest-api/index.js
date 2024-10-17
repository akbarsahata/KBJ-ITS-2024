const express = require('express');
const faker = require('faker');
const sha1 = require('sha1');

const app = express();
const port = 3000;

// List of potential PII-related keys
const piiKeys = [
  'firstName', 'lastName', 'email', 'phoneNumber', 'address', 'dob', 'ssn', 'passportNumber',
  'creditCard', 'bankAccount', 'idNumber', 'username', 'gender', 'ipAddress'
];

// List of non-PII keys for generating random data
const nonPiiKeys = [
  'sessionId', 'status', 'item', 'transactionId', 'orderId', 'product', 'category', 'quantity', 'price'
];

// Helper function to flatten nested JSON objects
function flattenObject(obj, parent = '', res = {}) {
  for (let key in obj) {
    let propName = parent ? `${parent}.${key}` : key;
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      flattenObject(obj[key], propName, res);
    } else {
      res[propName] = obj[key];
    }
  }
  return res;
}

// Helper function to randomly decide if a value should be plain or hashed
function randomizeValue(value, isPii) {
  if (!isPii) {
    // Return non-PII data with marker 0
    return [value, 0];
  }
  // Decide whether to hash the value or not
  const hashed = Math.random() > 0.5;
  if (hashed) {
    return [sha1(value), 1];  // Hashed with marker 1
  } else {
    return [value, 2];  // Plain value with marker 2
  }
}

// Function to generate arbitrary JSON with potential PII keys
function generateArbitraryJson(depth = 2) {
  const json = {};
  const resultTuples = [];
  
  // Randomly decide how many keys to generate
  const keyCount = Math.floor(Math.random() * 10) + 5;

  for (let i = 0; i < keyCount; i++) {
    const isPiiKey = Math.random() > 0.5;  // Randomly decide if it's a PII key
    const key = isPiiKey 
      ? piiKeys[Math.floor(Math.random() * piiKeys.length)] 
      : nonPiiKeys[Math.floor(Math.random() * nonPiiKeys.length)];
    
    // Generate nested structure randomly
    let currentObj = json;
    let nestedKeys = [key];
    for (let j = 0; j < depth && Math.random() > 0.5; j++) {
      const nestedKey = faker.random.word();
      nestedKeys.push(nestedKey);
      currentObj[nestedKey] = currentObj[nestedKey] || {};
      currentObj = currentObj[nestedKey];
    }

    // Generate value (plain or hashed)
    const value = isPiiKey ? faker.fake("{{" + key + "}}") : faker.commerce.productName();  // Non-PII: use random product names
    const [finalValue, marker] = randomizeValue(value, isPiiKey);

    // Assign value to the generated key
    currentObj[key] = finalValue;

    // Store the flattened key with marker
    resultTuples.push([nestedKeys.join('.'), `${finalValue}:${marker}`]);
  }

  return { json, resultTuples };
}

// Define a route that generates arbitrary JSON
app.get('/generate-json', (req, res) => {
  const { json, resultTuples } = generateArbitraryJson();
  
  res.json({
    generatedJson: json,
    keyValueTuples: resultTuples
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});