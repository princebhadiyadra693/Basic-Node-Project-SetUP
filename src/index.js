const express = require('express');
const { ServerConfig, Logger } = require(`./config`);

const app = express();

app.listen(ServerConfig.PORT, () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
    Logger.info("sucessfully started the server");
    // message, label
})