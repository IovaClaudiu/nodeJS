const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Enter message</title></head>");
    res.write(
      `<body>
        <form action="/message" method="POST">
          <input type="text" name="message">
          <button type="submit">Send</button>
        </form>
      </body>`
    );
    res.write("</html>");
    return res.end();
  }
  // Redirect user
  if (url === "/message" && method === "POST") {
    const body = [];
    // will execute this until the full data is read, async execution.
    req.on("data", (chunk) => {
      // Acesta va veni sub forma de Buffer
      body.push(chunk);
    });

    // This part is executed async, it will not block the execution
    return req.on("end", () => {
      // Buffer will help us to create the data from the bits
      const data = Buffer.concat(body).toString();
      const message = data.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        if (err) {
          res.statusCode = 500;
          return res.end();
        } else {
          res.statusCode = 302;
          res.setHeader("Location", "/");
          return res.end();
        }
      });
    });
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Writting</h1></body>");
  res.write("</html>");
  res.end();
};

//module.exports = requestHandler;

exports = requestHandler;
