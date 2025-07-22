db = db.getSiblingDB('test'); // make sure we're in the test DB
db.insurances.insertMany([

  {
    "property_address": "123 Main St, Springfield",
    "property_size": 1800,
    "construction_year": 2001,
    "insurance_amount": 250000,
    "insured_person": "John Doe",
    "policy_expiration": "2025-12-31"
  },
  {
    "property_address": "45 Oak Lane, Riverdale",
    "property_size": 2100,
    "construction_year": 1995,
    "insurance_amount": 310000,
    "insured_person": "Jane Smith",
    "policy_expiration": "2024-09-30"
  },
  {
    "property_address": "789 Pine Dr, Centerville",
    "property_size": 1500,
    "construction_year": 2010,
    "insurance_amount": 195000,
    "insured_person": "Alice Johnson",
    "policy_expiration": "2026-03-15"
  },
  {
    "property_address": "321 Elm St, Lakeview",
    "property_size": 2400,
    "construction_year": 2005,
    "insurance_amount": 360000,
    "insured_person": "Bob Lee",
    "policy_expiration": "2025-07-01"
  }
]);