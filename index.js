const express = require('express')
const app = express()

app.all("/*", (req, res) => {
    res.json({
      method: req.method,
      url: req.url,
      header: req.headers,
      body: req.body,
      query: req.query,
      params: req.params,
      cookies: req.cookies,
    });
  });
  
  app.listen(process.env.PORT || 3000)