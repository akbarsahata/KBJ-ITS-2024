const express = require("express");
const faker = require("faker");
const sha1 = require("sha1");

const app = express();
const port = 3000;

// Function to convert snake_case to camelCase
function snakeToCamel([snakeStr, context]) {
  return [
    snakeStr.replace(/(_\w)/g, (matches) => matches[1].toUpperCase()),
    context,
  ];
}

// All PII and non-PII keys in different cases and languages
const piiKeysSnakeCaseEn = [
  ["name", "user_profile"],
  ["first_name", "user_profile"],
  ["last_name", "user_profile"],
  ["full_name", "user_profile"],
  ["email", "user_profile"],
  ["email_address", "user_profile"],
  ["user_email", "user_profile"],
  ["phone", "user_profile"],
  ["phone_number", "user_profile"],
  ["mobile", "user_profile"],
  ["contact_number", "user_profile"],
  ["address", "user_profile"],
  ["home_address", "user_profile"],
  ["street_address", "user_profile"],
  ["postal_address", "user_profile"],
  ["dob", "user_profile"],
  ["date_of_birth", "user_profile"],
  ["birth_date", "user_profile"],
  ["ssn", "user_profile"],
  ["social_security_number", "user_profile"],
  ["ssn_last4", "user_profile"],
  ["id", "user_profile"],
  ["national_id", "user_profile"],
  ["personal_id", "user_profile"],
  ["passport_id", "user_profile"],
  ["user_id", "user_profile"],
  ["employee_id", "user_profile"],
  ["tax_id", "user_profile"],
  ["tax_identification_number", "user_profile"],
  ["tin", "user_profile"],
  ["driver_license", "user_profile"],
  ["driver_license_number", "user_profile"],
  ["dl_number", "user_profile"],
  ["passport", "user_profile"],
  ["passport_number", "user_profile"],
  ["credit_card", "user_profile"],
  ["credit_card_number", "user_profile"],
  ["cc_number", "user_profile"],
  ["card_info", "user_profile"],
  ["bank_account", "user_profile"],
  ["bank_account_number", "user_profile"],
  ["account_number", "user_profile"],
  ["iban", "user_profile"],
  ["bic", "user_profile"],
  ["gender", "user_profile"],
  ["sex", "user_profile"],
  ["gender_identity", "user_profile"],
  ["ip", "user_profile"],
  ["ip_address", "user_profile"],
  ["user_ip", "user_profile"],
  ["location", "user_profile"],
  ["geolocation", "user_profile"],
  ["gps_coordinates", "user_profile"],
  ["latitude", "user_profile"],
  ["longitude", "user_profile"],
  ["contact", "user_profile"],
  ["contact_info", "user_profile"],
  ["contact_details", "user_profile"],
  ["photo", "user_profile"],
  ["profile_picture", "user_profile"],
  ["user_photo", "user_profile"],
  ["photo_url", "user_profile"],
  ["username", "user_profile"],
  ["user_name", "user_profile"],
  ["login_name", "user_profile"],
  ["screen_name", "user_profile"],
  ["password", "user_profile"],
  ["user_password", "user_profile"],
  ["pass_code", "user_profile"],
  ["auth_token", "user_profile"],
  ["nationality", "user_profile"],
  ["country_of_origin", "user_profile"],
  ["citizenship", "user_profile"],
  ["marital_status", "user_profile"],
  ["insurance", "medical_record"],
  ["insurance_number", "medical_record"],
  ["policy_number", "medical_record"],
  ["medical", "medical_record"],
  ["medical_record", "medical_record"],
  ["health_info", "medical_record"],
  ["diagnosis", "medical_record"],
  ["biometric", "medical_record"],
  ["fingerprint", "medical_record"],
  ["iris_scan", "medical_record"],
  ["face_id", "medical_record"],
  ["voice_print", "medical_record"],
  ["social", "user_profile"],
  ["social_media_profile", "user_profile"],
  ["social_id", "user_profile"],
  ["emergency_contact", "user_profile"],
  ["emergency_phone", "user_profile"],
  ["emergency_contact_name", "user_profile"],
];
const piiKeysCamelCaseEn = piiKeysSnakeCaseEn.map(snakeToCamel);

const nonPiiKeysSnakeCaseEn = [
  ["product_name", "e_commerce"],
  ["product_description", "e_commerce"],
  ["price", "e_commerce"],
  ["quantity", "e_commerce"],
  ["category", "e_commerce"],
  ["brand", "e_commerce"],
  ["color", "e_commerce"],
  ["size", "e_commerce"],
  ["weight", "e_commerce"],
  ["dimensions", "e_commerce"],
  ["material", "e_commerce"],
  ["sku", "e_commerce"],
  ["stock_status", "e_commerce"],
  ["rating", "e_commerce"],
  ["review", "e_commerce"],
  ["discount", "e_commerce"],
  ["promotion", "e_commerce"],
  ["availability", "e_commerce"],
  ["shipping_cost", "e_commerce"],
  ["delivery_time", "e_commerce"],
  ["warranty", "e_commerce"],
  ["manufacturer", "e_commerce"],
  ["supplier", "e_commerce"],
  ["store", "e_commerce"],
  ["location", "e_commerce"],
  ["region", "e_commerce"],
  ["country", "e_commerce"],
  ["currency", "e_commerce"],
  ["language", "e_commerce"],
  ["website", "e_commerce"],
  ["url", "e_commerce"],
  ["image_url", "e_commerce"],
  ["video_url", "e_commerce"],
  ["barcode", "e_commerce"],
  ["qr_code", "e_commerce"],
  ["serial_number", "e_commerce"],
  ["batch_number", "e_commerce"],
  ["production_date", "e_commerce"],
  ["expiry_date", "e_commerce"],
  ["model_number", "e_commerce"],
  ["version", "e_commerce"],
  ["release_date", "e_commerce"],
  ["features", "e_commerce"],
  ["specifications", "e_commerce"],
];
const nonPiiKeysCamelCaseEn = nonPiiKeysSnakeCaseEn.map(snakeToCamel);

const piiKeysSnakeCaseId = [
  ["nama", "user_profile"],
  ["nama_depan", "user_profile"],
  ["nama_belakang", "user_profile"],
  ["nama_lengkap", "user_profile"],
  ["email", "user_profile"],
  ["alamat_email", "user_profile"],
  ["email_pengguna", "user_profile"],
  ["telepon", "user_profile"],
  ["nomor_telepon", "user_profile"],
  ["ponsel", "user_profile"],
  ["nomor_kontak", "user_profile"],
  ["alamat", "user_profile"],
  ["alamat_rumah", "user_profile"],
  ["alamat_jalan", "user_profile"],
  ["alamat_pos", "user_profile"],
  ["tgl_lahir", "user_profile"],
  ["tanggal_lahir", "user_profile"],
  ["tgl_kelahiran", "user_profile"],
  ["bpjs", "user_profile"],
  ["nomor_bpjs", "user_profile"],
  ["nomor_ktp", "user_profile"],
  ["ktp", "user_profile"],
  ["no_ktp", "user_profile"],
  ["nomor_identitas", "user_profile"],
  ["nomor_paspor", "user_profile"],
  ["id_pengguna", "user_profile"],
  ["id_karyawan", "user_profile"],
  ["npwp", "user_profile"],
  ["nomor_npwp", "user_profile"],
  ["tin", "user_profile"],
  ["sim", "user_profile"],
  ["nomor_sim", "user_profile"],
  ["nomor_dl", "user_profile"],
  ["paspor", "user_profile"],
  ["nomor_paspor", "user_profile"],
  ["kartu_kredit", "user_profile"],
  ["nomor_kartu_kredit", "user_profile"],
  ["nomor_cc", "user_profile"],
  ["info_kartu", "user_profile"],
  ["rekening_bank", "user_profile"],
  ["nomor_rekening_bank", "user_profile"],
  ["nomor_rekening", "user_profile"],
  ["iban", "user_profile"],
  ["bic", "user_profile"],
  ["jenis_kelamin", "user_profile"],
  ["kelamin", "user_profile"],
  ["identitas_gender", "user_profile"],
  ["ip", "user_profile"],
  ["alamat_ip", "user_profile"],
  ["ip_pengguna", "user_profile"],
  ["lokasi", "user_profile"],
  ["geolokasi", "user_profile"],
  ["koordinat_gps", "user_profile"],
  ["lintang", "user_profile"],
  ["bujur", "user_profile"],
  ["kontak", "user_profile"],
  ["info_kontak", "user_profile"],
  ["detail_kontak", "user_profile"],
  ["foto", "user_profile"],
  ["foto_profil", "user_profile"],
  ["foto_pengguna", "user_profile"],
  ["url_foto", "user_profile"],
  ["nama_pengguna", "user_profile"],
  ["nama_user", "user_profile"],
  ["nama_login", "user_profile"],
  ["nama_layar", "user_profile"],
  ["kata_sandi", "user_profile"],
  ["sandi_pengguna", "user_profile"],
  ["kode_sandi", "user_profile"],
  ["token_auth", "user_profile"],
  ["kebangsaan", "user_profile"],
  ["negara_asal", "user_profile"],
  ["kewarganegaraan", "user_profile"],
  ["status_perkawinan", "user_profile"],
  ["asuransi", "medical_record"],
  ["nomor_asuransi", "medical_record"],
  ["nomor_polis", "medical_record"],
  ["medis", "medical_record"],
  ["rekam_medis", "medical_record"],
  ["info_kesehatan", "medical_record"],
  ["diagnosis", "medical_record"],
  ["biometrik", "medical_record"],
  ["sidik_jari", "medical_record"],
  ["pindai_iris", "medical_record"],
  ["id_wajah", "medical_record"],
  ["cetak_suara", "medical_record"],
  ["sosial", "user_profile"],
  ["profil_media_sosial", "user_profile"],
  ["id_sosial", "user_profile"],
  ["kontak_darurat", "user_profile"],
  ["telepon_darurat", "user_profile"],
  ["nama_kontak_darurat", "user_profile"],
];
const piiKeysCamelCaseId = piiKeysSnakeCaseId.map(snakeToCamel);

const nonPiiKeysSnakeCaseId = [
  ["nama_produk", "e_commerce"],
  ["deskripsi_produk", "e_commerce"],
  ["harga", "e_commerce"],
  ["kuantitas", "e_commerce"],
  ["kategori", "e_commerce"],
  ["merek", "e_commerce"],
  ["warna", "e_commerce"],
  ["ukuran", "e_commerce"],
  ["berat", "e_commerce"],
  ["dimensi", "e_commerce"],
  ["bahan", "e_commerce"],
  ["sku", "e_commerce"],
  ["status_stok", "e_commerce"],
  ["penilaian", "e_commerce"],
  ["ulasan", "e_commerce"],
  ["diskon", "e_commerce"],
  ["promosi", "e_commerce"],
  ["ketersediaan", "e_commerce"],
  ["biaya_pengiriman", "e_commerce"],
  ["waktu_pengiriman", "e_commerce"],
  ["garansi", "e_commerce"],
  ["produsen", "e_commerce"],
  ["pemasok", "e_commerce"],
  ["toko", "e_commerce"],
  ["lokasi", "e_commerce"],
  ["wilayah", "e_commerce"],
  ["negara", "e_commerce"],
  ["mata_uang", "e_commerce"],
  ["bahasa", "e_commerce"],
  ["situs_web", "e_commerce"],
  ["url", "e_commerce"],
  ["url_gambar", "e_commerce"],
  ["url_video", "e_commerce"],
  ["kode_batang", "e_commerce"],
  ["kode_qr", "e_commerce"],
  ["nomor_seri", "e_commerce"],
  ["nomor_batch", "e_commerce"],
  ["tanggal_produksi", "e_commerce"],
  ["tanggal_kadaluarsa", "e_commerce"],
  ["nomor_model", "e_commerce"],
  ["versi", "e_commerce"],
  ["tanggal_rilis", "e_commerce"],
  ["fitur", "e_commerce"],
  ["spesifikasi", "e_commerce"],
];
const nonPiiKeysCamelCaseId = nonPiiKeysSnakeCaseId.map(snakeToCamel);

// Randomly select case and language versions
function getRandomizedKeys() {
  const useSnakeCase = Math.random() > 0.5;
  const useIndonesian = Math.random() > 0.5;
  const piiKeys = useIndonesian
    ? useSnakeCase
      ? piiKeysSnakeCaseId
      : piiKeysCamelCaseId
    : useSnakeCase
    ? piiKeysSnakeCaseEn
    : piiKeysCamelCaseEn;
  const nonPiiKeys = useIndonesian
    ? useSnakeCase
      ? nonPiiKeysSnakeCaseId
      : nonPiiKeysCamelCaseId
    : useSnakeCase
    ? nonPiiKeysSnakeCaseEn
    : nonPiiKeysCamelCaseEn;

  return { piiKeys, nonPiiKeys, useIndonesian, useSnakeCase };
}

// get english keys from indonesia keys
function getEnglishKeys(key, keys) {
  const index = keys.findIndex((element) => element[0] === key);
  return keys[index][0];
}

// Context-aware value generation
function generateContextualValue([key, context], useIndonesian = false, keys) {
  key = useIndonesian ? getEnglishKeys(key, keys) : key;
  switch (context) {
    case "user_profile":
      return generateUserProfileValue(key);
    case "e_commerce":
      return generateEcommerceValue(key);
    case "medical_record":
      return generateMedicalRecordValue(key);
    default:
      return faker.lorem.word();
  }
}

// Define contextual generators for different fields
function generateUserProfileValue(key) {
  switch (key) {
    case "name":
    case "full_name":
    case "first_name":
    case "last_name":
      return faker.name.findName();
    case "email":
    case "email_address":
    case "user_email":
      return faker.internet.email();
    case "phone":
    case "phone_number":
    case "mobile":
    case "contact_number":
      return faker.phone.phoneNumber();
    case "address":
    case "home_address":
    case "street_address":
    case "postal_address":
      return faker.address.streetAddress();
    case "dob":
    case "date_of_birth":
    case "birth_date":
      return faker.date
        .past(50, new Date(2000, 0, 1))
        .toISOString()
        .split("T")[0];
    case "ssn":
    case "social_security_number":
    case "ssn_last4":
      return faker.random.alphaNumeric(9);
    case "id":
    case "national_id":
    case "personal_id":
    case "passport_id":
    case "user_id":
    case "employee_id":
    case "tax_id":
    case "tax_identification_number":
    case "tin":
      return faker.random.alphaNumeric(10);
    case "driver_license":
    case "driver_license_number":
    case "dl_number":
      return faker.random.alphaNumeric(8);
    case "passport":
    case "passport_number":
      return faker.random.alphaNumeric(9);
    case "credit_card":
    case "credit_card_number":
    case "cc_number":
    case "card_info":
      return faker.finance.creditCardNumber();
    case "bank_account":
    case "bank_account_number":
    case "account_number":
    case "iban":
    case "bic":
      return faker.finance.account();
    case "gender":
    case "sex":
    case "gender_identity":
      return faker.name.gender();
    case "ip":
    case "ip_address":
    case "user_ip":
      return faker.internet.ip();
    case "location":
    case "geolocation":
    case "gps_coordinates":
    case "latitude":
    case "longitude":
      return `${faker.address.latitude()}, ${faker.address.longitude()}`;
    case "contact":
    case "contact_info":
    case "contact_details":
      return faker.phone.phoneNumber();
    case "photo":
    case "profile_picture":
    case "user_photo":
    case "photo_url":
      return faker.image.avatar();
    case "username":
    case "user_name":
    case "login_name":
    case "screen_name":
      return faker.internet.userName();
    case "password":
    case "user_password":
    case "pass_code":
      return faker.internet.password();
    case "auth_token":
      return faker.random.alphaNumeric(20);
    case "nationality":
    case "country_of_origin":
    case "citizenship":
      return faker.address.country();
    case "marital_status":
      return faker.random.arrayElement(["Single", "Married", "Divorced", "Widowed"]);
    case "insurance":
    case "insurance_number":
    case "policy_number":
      return faker.random.alphaNumeric(10);
    case "medical":
    case "medical_record":
    case "health_info":
    case "diagnosis":
      return faker.lorem.words(3);
    case "biometric":
    case "fingerprint":
    case "iris_scan":
    case "face_id":
    case "voice_print":
      return `biometric_hash_${sha1(faker.datatype.uuid())}`;
    case "social":
    case "social_media_profile":
    case "social_id":
      return faker.internet.userName();
    case "emergency_contact":
    case "emergency_phone":
    case "emergency_contact_name":
      return faker.name.findName();
    default:
      return faker.lorem.word();
  }
}

function generateEcommerceValue(key) {
  switch (key) {
    case "product_name":
      return faker.commerce.productName();
    case "product_description":
      return faker.commerce.productDescription();
    case "price":
      return faker.commerce.price();
    case "quantity":
      return faker.datatype.number({ min: 1, max: 100 });
    case "sku":
      return faker.random.alphaNumeric(10);
    case "shipping_cost":
      return faker.commerce.price(5, 20);
    case "category":
      return faker.commerce.department();
    case "brand":
      return faker.company.companyName();
    case "discount":
      return `${faker.datatype.number({ min: 5, max: 30 })}%`;
    case "availability":
      return faker.random.boolean() ? "In Stock" : "Out of Stock";
    case "warranty":
      return `${faker.datatype.number({ min: 1, max: 3 })} years`;
    default:
      return faker.lorem.word();
  }
}

function generateMedicalRecordValue(key) {
  switch (key) {
    case "name":
    case "patient_name":
      return faker.name.findName();
    case "medical_id":
      return faker.random.uuid();
    case "diagnosis":
      return faker.lorem.words(3);
    case "treatment":
      return faker.lorem.words(3);
    case "insurance":
      return faker.company.companyName();
    case "contact":
      return faker.phone.phoneNumber();
    case "birth_date":
      return faker.date
        .past(80, new Date(2000, 0, 1))
        .toISOString()
        .split("T")[0];
    case "biometric":
      return `fingerprint_hash_${sha1(faker.datatype.uuid())}`;
    default:
      return faker.lorem.word();
  }
}

// Flatten nested JSON objects for easier processing
function flattenObject(obj, parent = "", res = {}) {
  for (let key in obj) {
    let propName = parent ? `${parent}.${key}` : key;
    if (typeof obj[key] === "object" && obj[key] !== null) {
      flattenObject(obj[key], propName, res);
    } else {
      res[propName] = obj[key];
    }
  }
  return res;
}

// Randomly decide if a value should be plain or hashed
function randomizeValue(value, isPii) {
  if (!isPii) return [value, 0]; // Marker 0 for non-PII data
  const hashed = Math.random() > 0.5;
  return hashed ? [sha1(value), 1] : [value, 2]; // Marker 1 for hashed, 2 for plain PII
}

// Generate arbitrary JSON with context-aware keys and values
function generateArbitraryJson(depth = 2, context = "default") {
  const json = {};
  const resultTuples = [];

  const { piiKeys, nonPiiKeys, useIndonesian } = getRandomizedKeys();

  // Randomly decide number of keys to generate
  const keyCount = Math.floor(Math.random() * 10) + 5;

  for (let i = 0; i < keyCount; i++) {
    const isPiiKey = Math.random() > 0.5;
    const piiKeyIndex = Math.floor(Math.random() * piiKeys.length);
    const nonPiiKeyIndex = Math.floor(Math.random() * nonPiiKeys.length);
    const [key, context] = isPiiKey ? piiKeys[piiKeyIndex] : nonPiiKeys[nonPiiKeyIndex];

    // Generate nested structure randomly
    let currentObj = json;
    let nestedKeys = [];
    for (let j = 0; j < depth && Math.random() > 0.5; j++) {
      const nestedKey = nonPiiKeys[Math.floor(Math.random() * nonPiiKeys.length)][0];
      nestedKeys.push(nestedKey);
      currentObj[nestedKey] = currentObj[nestedKey] || {};
      currentObj = currentObj[nestedKey];
    }

    nestedKeys.push(key);

    // Generate value based on context
    const value = generateContextualValue([key, context], useIndonesian, isPiiKey ? piiKeys : nonPiiKeys);
    const [finalValue, marker] = randomizeValue(value, isPiiKey);

    // Assign the value and marker to the generated key path
    currentObj[key] = finalValue;
    resultTuples.push([nestedKeys.join("."), finalValue, marker]);
  }

  return { json, resultTuples };
}

// Define a route to generate arbitrary JSON with optional context
app.get("/*", (req, res) => {
  const contexts = ["user_profile", "e_commerce", "medical_record", "default"];
  const context = contexts[Math.floor(Math.random() * contexts.length)];
  const { json, resultTuples } = generateArbitraryJson(2, context);

  res.json({
    requestPath: req.path,
    headers: req.headers,
    data: json,
    keyValueLabels: resultTuples,
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
