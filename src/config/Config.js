const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const TIMEOUT = process.env.REACT_APP_API_TIMEOUT;
const AUTH0_DOMAIN = process.env.REACT_APP_AUTH0_DOMAIN;
const AUTH0_CLIENTID = process.env.REACT_APP_AUTH0_CLIENTID;

if (!API_BASE_URL) {
  throw new Error(
    '.env is missing the definition for REACT_APP_API_BASE_URL environment variable.',
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

export { API_BASE_URL, TIMEOUT, AUTH0_DOMAIN, AUTH0_CLIENTID };
