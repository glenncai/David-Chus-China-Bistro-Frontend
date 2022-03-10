const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const API_IMG_URL = process.env.REACT_APP_API_IMG_URL;
const TIMEOUT = process.env.REACT_APP_API_TIMEOUT;
const AUTH0_DOMAIN = process.env.REACT_APP_AUTH0_DOMAIN;
const AUTH0_CLIENTID = process.env.REACT_APP_AUTH0_CLIENTID;
const AUTH0_CLAIMS_URL = process.env.REACT_APP_AUTH0_CLAIMS_URL;
const AUTH0_AUDIENCE = process.env.REACT_APP_AUTH0_AUDIENCE;

if (!API_BASE_URL) {
  throw new Error(
    '.env is missing the definition for REACT_APP_API_BASE_URL environment variable.',
  );
}

if (!API_IMG_URL) {
  throw new Error(
    '.env is missing the definition for REACT_APP_API_IMG_URL environment variable.',
  );
}

if (!TIMEOUT) {
  throw new Error(
    '.env is missing the definition for REACT_APP_API_TIMEOUT environment variable.',
  );
}

if (!AUTH0_DOMAIN) {
  throw new Error(
    '.env is missing the definition for REACT_APP_AUTH0_DOMAIN environment variable.',
  );
}

if (!AUTH0_CLIENTID) {
  throw new Error(
    '.env is missing the definition for REACT_APP_AUTH0_CLIENTID environment variable.',
  );
}

if (!AUTH0_CLAIMS_URL) {
  throw new Error(
    '.env is missing the definition for REACT_APP_AUTH0_CLAIMS_URL environment variable.',
  );
}

if (!AUTH0_AUDIENCE) {
  throw new Error(
    '.env is missing the definition for REACT_APP_AUTH0_AUDIENCE environment variable.',
  );
}

export {
  API_BASE_URL,
  API_IMG_URL,
  TIMEOUT,
  AUTH0_DOMAIN,
  AUTH0_CLIENTID,
  AUTH0_CLAIMS_URL,
  AUTH0_AUDIENCE,
};
