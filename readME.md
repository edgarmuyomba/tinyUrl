## Web Client

To consume the API and interact with the URL shortener service, a web client has been developed using JavaScript. This client handles different API responses appropriately and displays errors accordingly. To use the web client, follow these steps:

1. Navigate to the `web-client` directory in the project repository:

   ```bash
   cd web-client
   ```
2. Start the Python HTTP server on port `8001` (to match the CORS_ALLOWED_ORIGINS in the API settings)
   ```bash
   python -m http.server 8001
   ```
3. Open your web browser and access the client at http://localhost:8001.
   The web client provides an intuitive interface for users to interact with the URL      shortener API and test its functionality