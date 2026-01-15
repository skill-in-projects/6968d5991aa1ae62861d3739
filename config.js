// API Configuration
// The backend service URL will be automatically configured after deployment.
// If this is empty after deployment, check Railway dashboard:
// Service → Settings → Domains to get your service URL.
const CONFIG = {
    API_URL: ""
};

// Ensure CONFIG is globally accessible
if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
}
