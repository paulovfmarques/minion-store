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
        USER_POOL_ID: "us-east-2_2tPdJoZte",
        APP_CLIENT_ID: "2rikkq7anotgadb1k5af81ovse",
        IDENTITY_POOL_ID: "us-east-2:68d09345-f21d-4006-be24-eebb7e37f1df",
    },
};

export default config;