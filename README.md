<p align="center">
  <img src="https://res.cloudinary.com/dmbnrpayf/image/upload/v1726179947/Agrisistance/Agrisistance-Logo.png" width="85" alt="Agrisistance Logo" />
  <img />
  <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" />
</p>

# 🌱 AGRISISTANCE
If you are reading this file that you came from [main branch](https://github.com/flh-raouf/agrisistance-microservice/tree/main). please follow this steps in order to run the project locally using only docker and without any furthur manual configurations

### Prerequisites

Before you begin, ensure you have the following installed:

- [Docker](https://docker.com/): Docker is required to run the databases.

## Cloning the Repository if you haven't

1. **Clone the repository**: Open your terminal or command prompt and run the following command:

    ```bash
    git clone -b local-deploy https://https://github.com/flh-raouf/agrisistance-microservice.git
    ```

2. **Navigate to the project directory**:

    ```bash
    cd agrisistance-microservice
    ```

## Setting Up Environment Variables

1. **Create a `.env` file** in the root directory of the project with the following structure:

    ```plaintext
    POSTGRES_USER='postgres'
    POSTGRES_PASSWORD='root'

    POSTGRES_LAND_DB="agrisistance_land_db"
    POSTGRES_USER_DB="agrisistance_user_db"
    POSTGRES_NETWORK_DB="agrisistance_network_db"

    DATABASE_USER_URL='postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@agrisistance-user-db:5432/${POSTGRES_USER_DB}?    schema=public'
    DATABASE_LAND_URL='postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@agrisistance-land-db:5432/${POSTGRES_LAND_DB}?    schema=public'
    DATABASE_NETWORK_URL='postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@agrisistance-network-db:5432/$   {POSTGRES_NETWORK_DB}?schema=public'

    API_GATEWAY_PORT = 9090
    USER_PORT = 9091
    LAND_PORT = 9092
    NETWORK_PORT = 9093

    REDIS_HOST = "agrisistance-redis-cache"
    REDIS_PORT = 6379

    EMAIL_USER=''
    EMAIL_PASSWORD='' 

    GOOGLE_CLIENT_ID=''
    GOOGLE_CLIENT_SECRET=''
    GOOGLE_REDIRECT_URI=''
    AGRISISTANCE_REDIRECT_URI=''
    GOOGLE_REFRESH_TOKEN=''

    TWILIO_SID=''
    TWILIO_API_KEY=''
    TWILIO_PHONE_NUMBER=''

    STRIPE_SECRET_KEY=''

    TOMMOROW_API_KEY='' 

    JWT_SECRET='' 

    CLOUDINARY_CLOUD_NAME=''
    CLOUDINARY_API_KEY=''
    CLOUDINARY_API_SECRET=''

    ```

2. **Explanation of Environment Variables**:

    - `POSTGRES_USER`, `POSTGRES_PASSWORD`, `POSTGRES_LAND_DB`, `POSTGRES_USER_DB`, `POSTGRES_NETWORK_DB`: Configuration for PostgreSQL databases.
    - `EMAIL_USER`, `EMAIL_PASSWORD`: Credentials for sending emails.
    - `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `GOOGLE_REDIRECT_URI`, `GOOGLE_REFRESH_TOKEN`: Configuration for Google authentication.
    - `TWILIO_SID`, `TWILIO_API_KEY`, `TWILIO_PHONE_NUMBER`: Credentials for Twilio SMS service.
    - `STRIPE_SECRET_KEY`: Secret key for Stripe payment processing.
    - `TOMMOROW_API_KEY`: API key for Tomorrow.io weather services.
    - `JWT_SECRET`: Secret key for JSON Web Tokens (JWT).
    - `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`: Credentials for Cloudinary image storage.

    **Google Authentication and Email Sending Setup**

    To enable Google authentication and email sending, follow these steps:

    1. **Go to Google Cloud Console**: 
        - Visit the [Google Cloud Console](https://console.cloud.google.com/) and log in with your Google account.
        - Create a new project by selecting the dropdown in the top left and clicking on “New Project.”

    2. **Enable Google+ API**:
         - Once the project is created, navigate to the **Library** section on the left sidebar.
        - Search for **Google+ API** and click on it.
        - Click **Enable** to activate the API for your project.

    3. **Set Up OAuth Consent Screen**:
        - In the left sidebar, go to **OAuth Consent Screen**.
        - Choose **External** and click **Create**.
        - Fill out the required fields on the first page of the form:
            - **App Name**: Enter the name of your application.
            - **User Support Email**: Select your email address.
            - **Email Addresses**: Add your email to the developer contact information.
        - Skip the other pages of the form; there's no need to fill them out unless required.
        - **Important**: Avoid uploading an application logo, as this may trigger Google's verification process, which can take additional time.
        - Click **Save and Continue** until the consent screen is configured.

    4. **Publish the App**:
        - After setting up the OAuth Consent Screen, you'll be in the "Test" phase by default.
        - Click **Publish App** to move your app from testing to production.

    5. **Create OAuth Client ID Credentials**:
        - Go to the **Credentials** section in the left sidebar.
        - Click **Create Credentials** and select **OAuth Client ID**.
        - Set **Application Type** to **Web Application** and provide a name for the credentials.
         - In the **Authorized JavaScript origins** section, add `http://localhost:PORT/` (replace `PORT` with the port number your application will use).
         - In the **Authorized redirect URIs** section, add the following two URIs:
           - **GOOGLE_REDIRECT_URI**: `https://developers.google.com/oauthplayground`
           - **AGRISISTANCE_REDIRECT_URI**: `http://localhost:PORT/api/auth/google/callback`
         - The first URI is for internal service use (email functionality), and the second is where users will be redirected after Google authentication.
         - Click **Create**.

    6. **Add Client ID and Client Secret to .env**:
        - Once the credentials are created, you will receive the **GOOGLE_CLIENT_ID** and **GOOGLE_CLIENT_SECRET**.
        - Add these values to your `.env` file:
         ```bash
         GOOGLE_CLIENT_ID='your-google-client-id'
         GOOGLE_CLIENT_SECRET='your-google-client-secret'
         ```

    7. **Generate Google Refresh Token**:
        - The refresh token is necessary for email functionality (sending emails).
        - Visit the [OAuth Playground](https://developers.google.com/oauthplayground).
        - In the left section, scroll down to **Step 1** and enter the following scope: `https://mail.google.com`.
        - At the top right, click on the settings icon and check **Use your own OAuth credentials**.
        - Enter your **GOOGLE_CLIENT_ID** and **GOOGLE_CLIENT_SECRET** from the `.env` file.
        - Click **Authorize APIs** and proceed through the account selection and consent screens.
        - In **Step 2**, click **Exchange authorization code for tokens**.
        - In **Step 3**, click **Refresh access token** to get the refresh token.
        - Copy the refresh token and add it to your `.env` file:
         ```bash
         GOOGLE_REFRESH_TOKEN='your-refresh-token'
         ```
         - Ignore the access token since it expires after one hour; your server will generate it as needed using the refresh token.

    - `TWILIO_SID` and `TWILIO_API_KEY`: Sign in to [Twilio](https://www.twilio.com/) and generate these from the API section.

    - `STRIPE_SECRET_KEY`: Log in to [Stripe](https://stripe.com/) and generate a secret key from the API section.

    - `TOMMOROW_API_KEY`: Obtain your API key from [Tomorrow.io](https://www.tomorrow.io/).

    - `JWT_SECRET`: Generate a random JWT secret using `openssl rand -base64 32` on your terminal.

    - `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`: Obtain these from [Cloudinary](https://cloudinary.com/).

    

## Running the Application

1. Ensure Docker is running, either in the foreground or background, before proceeding. 

2. Start the entire application by running the following command:

    ```bash
    docker-compose up -d
    ```

    This will automatically launch the databases, Redis cache, perform Prisma migrations, generate types, and start all microservices.

3. Verify that the services are running by executing:
    ```bash
      docker ps
    ```

4. Your project should now be available at `http://localhost:9090`.

If you encounter any issues try starting services one by one following the same order as defined in the [docker-compose.yaml](./docker-compose.yaml)

5. In order to start Prisma Studio, follow these commands:
  ```bash
    docker-compose exec agrisistance-user-service npx prisma studio --schema=./apps/agrisistance-user-service/prisma/schema.user.prisma
  ```
  Your user database should now  be available at  `http://localhost:5555`
  ```bash
    docker-compose exec agrisistance-land-service npx prisma studio --schema=./apps/agrisistance-land-service/prisma/schema.land.prisma
  ```
  Your land database should now  be available at  `http://localhost:5556`
  ```bash
    docker-compose exec agrisistance-network-service npx prisma studio --schema=./apps/agrisistance-network-service/prisma/schema.network.prisma
  ```
  Your network database should now  be available at  `http://localhost:5557`




6. **Run the Flask Microservice**:

    - The Flask microservice handles AI models. You can find the repository [here](https://github.com/AGRISISTANCE/Agrisistance-Model-Backend).


 ## Postman Documentation

   After running the server, you can use the Postman collection to test the available endpoints. The Postman documentation provides a detailed overview of all the requests you can make to interact with the API.

   - You can find the Postman documentation for this project [here](https://documenter.getpostman.com/view/32136798/2sAXqngkQA).

   Make sure the server is running at `http://localhost:9090` before testing the endpoints in Postman.

## Contact

For inquiries or feedback, reach out to us at:

- 📧 Email: [ma_fellahi@esi.dz](mailto:ma_fellahi@esi.dz)
- 🌐 WhatsApp: +213 551 61 19 83
- **GitHub :** [flh-raouf](https://github.com/flh-raouf)


## License

This project is licensed under the Apache 2.0 License. See the [LICENSE](./LICENSE) file for more information.
