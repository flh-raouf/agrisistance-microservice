<p align="center">
  <img src="https://res.cloudinary.com/dmbnrpayf/image/upload/v1726179947/Agrisistance/Agrisistance-Logo.png" width="85" alt="Agrisistance Logo" />
  <img />
  <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" />
</p>

# 🌱 AGRISISTANCE
  **A2SV-Agrisistance** is an AI-driven web application aimed at helping African farmers optimize land use and boost crop productivity. Utilizing advanced machine learning algorithms and data analytics, AGRISISTANCE offers actionable insights and personalized recommendations tailored to individual farming needs.

# Table of Contents

- [🌱 AGRISISTANCE](#-agristance)
- [Features](#features)
  - [Optimizing Land Use](#optimizing-land-use)
  - [Boosting Crop Productivity](#boosting-crop-productivity)
  - [Business Planning](#business-planning)
  - [Resource Management](#resource-management)
  - [Networking and Industrial Connections](#networking-and-industrial-connections)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Cloning the Repository](#cloning-the-repository)
  - [Installing Dependencies](#installing-dependencies)
  - [Setting Up Environment Variables](#setting-up-environment-variables)
    - [Google Authentication and Email Sending Setup](#google-authentication-and-email-sending-setup)
- [Running the Application](#running-the-application)
  - [Scenario 1: Using Docker Compose for Full Setup](#scenario-1-using-docker-compose-for-full-setup)
  - [Scenario 2: Using Docker for Databases Only, Manual Migrations and Services](#scenario-2-using-docker-for-databases-only-manual-migrations-and-services)
  - [Scenario 3: Running the Application Without Docker](#scenario-3-running-the-application-without-docker)
- [Flask Microservice](#run-the-flask-microservice)

- [Postman Documentation](#postman-documentation)
- [Contatct](#contact)
- [License](#license)



## Features

### Optimizing Land Use

- 🌿 Analyzes soil properties, weather conditions, and historical crop data.
- 🌾 Provides recommendations for optimal crop selection and planting schedules.

### Boosting Crop Productivity

- 💧 Personalized advice on irrigation, fertilization, and pest management.
- 📈 AI-driven insights to enhance crop yields.

### Business Planning

- 💼 Financial forecasts, market trends, and cost-benefit analyses.
- 🗺️ Strategic planning and decision-making support.

### Resource Management

- 💧 Monitors water usage and tracks seed and fertilizer inventory.
- 📊 Tools for efficient resource management.

### Networking and Industrial Connections

- 🌍 Connects farmers with related industries, such as delivery services and processing factories.
- 🔗 Streamlines supply chain processes and builds valuable industrial connections.

## Getting Started

Follow these steps to set up and run the AGRISISTANCE project locally:

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/): This project requires Node.js to run. Download and install it from [nodejs.org](https://nodejs.org/).
- [Git](https://git-scm.com/): You’ll need Git to clone the repository. Download and install it from [git-scm.com](https://git-scm.com/).
- [Docker](https://docker.com/): Docker is required to run the databases.

## Cloning the Repository

1. **Clone the repository**: Open your terminal or command prompt and run the following command:

    ```bash
    git clone https://github.com/flh-raouf/agrisistance-microservice.git
    ```

2. **Navigate to the project directory**:

    ```bash
    cd agrisistance-microservice
    ```

## Installing Dependencies

1. **Install project dependencies**: Run the following command to install all the required npm packages:

    ```bash
    npm install
    ```

## Setting Up Environment Variables

1. **Create a `.env` file** in the root directory of the project with the following structure:

    ```plaintext
    POSTGRES_USER='postgres'
    POSTGRES_PASSWORD='root'
    POSTGRES_LAND_DB="agrisistance_land_db"
    POSTGRES_USER_DB="agrisistance_user_db"
    POSTGRES_NETWORK_DB="agrisistance_network_db"

    DATABASE_LAND_URL='postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@0.0.0.0:5434/${POSTGRES_LAND_DB}?schema=public'
    DATABASE_USER_URL='postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@0.0.0.0:5435/${POSTGRES_USER_DB}?schema=public'
    DATABASE_NETWORK_URL='postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@0.0.0.0:5436/${POSTGRES_NETWORK_DB}?schema=public'

    REDIS_HOST = "agrisistance-redis-cache"
    REDIS_PORT = 6380


    USER_HOST = "agrisistance-user-service"
    LAND_HOST = "agrisistance-land-service"
    NETWORK_HOST = "agrisistance-network-service"

    API_GATEWAY_PORT = 9090
    USER_PORT = 9091
    LAND_PORT = 9092
    NETWORK_PORT = 9093


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

    PORT=''
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

### Scenario 1: Using Docker Compose for Full Setup

In this scenario, you can set up everything with Docker Compose, and the application will be ready without additional manual steps.

1. Ensure Docker is running, either in the foreground or background, before proceeding. 

2. Start the entire application by running the following command:

    ```bash
    docker-compose up
    ```

    This will automatically launch the databases, Redis cache, perform Prisma migrations, generate types, and start all microservices.

3. Verify that the services are running by executing:
    ```bash
      docker ps
    ```

4. Your project should now be available at `http://localhost:9090`.

If you encounter any issues try starting services one by one from the [docker-compose.yaml](./docker-compose.yaml)

5. In order to start Prisma Studio, follow these commands:
  ```bash
    docker-compose exec agrisistance-user-service npx prisma studio --schema=./apps/agrisistance-user-service/prisma/schema.user.prisma
  ```
  ```bash
    docker-compose exec agrisistance-land-service npx prisma studio --schema=./apps/agrisistance-land-service/prisma/schema.land.prisma
  ```
  ```bash
    docker-compose exec agrisistance-network-service npx prisma studio --schema=./apps/agrisistance-network-service/prisma/schema.network.prisma
  ```

---

### Scenario 2: Using Docker for Databases Only, Manual Migrations and Services

In this scenario, you use Docker Compose to launch the databases, but handle the migrations and microservices manually.

1. **Start Docker Containers for Databases and Redis Cache**:

  - Ensure that Docker is running, either in the foreground or background, before proceeding. 

    - Start the databases and Redis cache with:
      ```bash
      docker-compose up agrisistance-user-db agrisistance-land-db agrisistance-network-db agrisistance-redis-cache -d
      ```

      By following these steps, your databases should be up and running. To verify that everything is working correctly, run the following command:
      ```bash
        docker ps
      ```

2. **Run Prisma Migrations for Each Database**:

    - Migrate the land database:
      ```bash
      npx prisma migrate dev --schema=./apps/agrisistance-land-service/prisma/schema.land.prisma
      ```

    - Migrate the network database:
      ```bash
      npx prisma migrate dev --schema=./apps/agrisistance-network-service/prisma/schema.network.prisma
      ```

    - Migrate the user database:
      ```bash
      npx prisma migrate dev --schema=./apps/agrisistance-user-service/prisma/schema.user.prisma
      ```

3. **Generate Types for the Project**:

    - Generate types for the land service:
      ```bash
      npx prisma generate --schema=./apps/agrisistance-land-service/prisma/schema.land.prisma
      ```

    - Generate types for the network service:
      ```bash
      npx prisma generate --schema=./apps/agrisistance-network-service/prisma/schema.network.prisma
      ```

    - Generate types for the user service:
      ```bash
      npx prisma generate --schema=./apps/agrisistance-user-service/prisma/schema.user.prisma
      ```

    - Generate additional types for the user service (land and network schemas):
      ```bash
      npx prisma generate --schema=./apps/agrisistance-user-service/prisma/schema.land.prisma
      npx prisma generate --schema=./apps/agrisistance-user-service/prisma/schema.network.prisma
      ```

    

4. **Launch Databases with Prisma Studio**:

    - Open Prisma Studio for the land service:
      ```bash
      npx prisma studio --schema=./apps/agrisistance-land-service/prisma/schema.land.prisma
      ```

    - Open Prisma Studio for the network service:
      ```bash
      npx prisma studio --schema=./apps/agrisistance-network-service/prisma/schema.network.prisma
      ```

    - Open Prisma Studio for the user service:
      ```bash
      npx prisma studio --schema=./apps/agrisistance-user-service/prisma/schema.user.prisma
      ```

5. **Run the Project Services**:

  - Start the services in different terminals

    - Start the API Gateway service:
      ```bash
      npm run start:dev agrisistance-api-gateway
      ```

    - Start the user service:
      ```bash
      npm run start:dev agrisistance-user-service
      ```

    - Start the land service:
      ```bash
      npm run start:dev agrisistance-land-service
      ```

    - Start the network service:
      ```bash
      npm run start:dev agrisistance-network-service
      ```
    Your project should now be running at `http://localhost:9090`.

---

### Scenario 3: Running the Application Without Docker

If Docker is not available or causes issues, you can set up PostgreSQL and Redis locally and run the application manually.

1. Install PostgreSQL on your local machine if it’s not already installed. You can follow [PostgreSQL installation instructions](https://www.postgresql.org/download/) from their official website.

2. Set up the PostgreSQL databases by creating the necessary databases:

- Create the user database:

  ```
  CREATE DATABASE agrisistance_user_db;
  ```

- Create the land database:

  ```
  CREATE DATABASE agrisistance_land_db;
  ```

- Create the network database:

  ```
  CREATE DATABASE agrisistance_network_db;
  ```

3. Set up environment variables: Ensure that the `.env` file has the correct PostgreSQL connection details.

- Example PostgreSQL connection strings:

  ```
  POSTGRES_USER="postgres"
  POSTGRES_PASSWORD="root"

  POSTGRES_HOST=localhost
  POSTGRES_PORT=5432

  POSTGRES_USER_DB=agrisistance_user_db
  POSTGRES_LAND_DB=agrisistance_land_db
  POSTGRES_NETWORK_DB=agrisistance_network_db

  REDIS_HOST = 'localhost'
  REDIS_PORT = 6379
  ```

4. Install Redis locally by following the [Redis installation instructions](https://redis.io/docs/getting-started/installation/) from the Redis website.


5. **Run Prisma Migrations for Each Database**:

    - Migrate the land database:
      ```bash
      npx prisma migrate dev --schema=./apps/agrisistance-land-service/prisma/schema.land.prisma
      ```

    - Migrate the network database:
      ```bash
      npx prisma migrate dev --schema=./apps/agrisistance-network-service/prisma/schema.network.prisma
      ```

    - Migrate the user database:
      ```bash
      npx prisma migrate dev --schema=./apps/agrisistance-user-service/prisma/schema.user.prisma
      ```

6. **Generate Types for the Project**:

    - Generate types for the land service:
      ```bash
      npx prisma generate --schema=./apps/agrisistance-land-service/prisma/schema.land.prisma
      ```

    - Generate types for the network service:
      ```bash
      npx prisma generate --schema=./apps/agrisistance-network-service/prisma/schema.network.prisma
      ```

    - Generate types for the user service:
      ```bash
      npx prisma generate --schema=./apps/agrisistance-user-service/prisma/schema.user.prisma
      ```

    - Generate additional types for the user service (land and network schemas):
      ```bash
      npx prisma generate --schema=./apps/agrisistance-user-service/prisma/schema.land.prisma
      npx prisma generate --schema=./apps/agrisistance-user-service/prisma/schema.network.prisma
      ```

    

7. **Launch Databases with Prisma Studio**:

    - Open Prisma Studio for the land service:
      ```bash
      npx prisma studio --schema=./apps/agrisistance-land-service/prisma/schema.land.prisma
      ```

    - Open Prisma Studio for the network service:
      ```bash
      npx prisma studio --schema=./apps/agrisistance-network-service/prisma/schema.network.prisma
      ```

    - Open Prisma Studio for the user service:
      ```bash
      npx prisma studio --schema=./apps/agrisistance-user-service/prisma/schema.user.prisma
      ```

8. **Run the Project Services**:

  - Start the services in different terminals

    - Start the API Gateway service:
      ```bash
      npm run start:dev agrisistance-api-gateway
      ```

    - Start the user service:
      ```bash
      npm run start:dev agrisistance-user-service
      ```

    - Start the land service:
      ```bash
      npm run start:dev agrisistance-land-service
      ```

    - Start the network service:
      ```bash
      npm run start:dev agrisistance-network-service
      ```
    Your project should now be running at `http://localhost:9090`.

---

With these three scenarios, you should be able to run the project regardless of the user's environment, covering both Docker and non-Docker setups.

## Run the Flask Microservice:

  - The Flask microservice handles AI models. You can find the repository [here](https://github.com/flh-raouf/agrisistance-model-microservice).


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
