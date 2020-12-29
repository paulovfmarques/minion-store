const config = {
    s3: {
        REGION: "us-east-2",
        BUCKET: "bucket-minion-uploads",
    },
    apiGateway: {
        REGION: "us-east-2",
        URL: "https://cfe8wuaoq0.execute-api.us-east-2.amazonaws.com/dev",
    },
    cognito: {
        REGION: "us-east-2",
        USER_POOL_ID: "YOUR_COGNITO_USER_POOL_ID",
        APP_CLIENT_ID: "YOUR_COGNITO_APP_CLIENT_ID",
        IDENTITY_POOL_ID: "YOUR_IDENTITY_POOL_ID",
    },
};

export default config;