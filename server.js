const express = require("express");
const cors = require("cors");
const multer = require("multer");
const winston = require("winston");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 3000;

const logger = winston.createLogger({
  level: "info",
  format: winston.format.simple(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "logfile.log" }),
  ],
});

app.use(cors());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Pfad zum Musikordner
const musikOrdner = path.join(__dirname, "Musik samples");

app.get("/musikdateien", (req, res) => {
  logger.info("GET-Anfrage für Musikdateien empfangen.");

  fs.readdir(musikOrdner, (err, files) => {
    if (err) {
      logger.error("Fehler beim Lesen des Musikordners:", err);
      return res.status(500).json({ error: "Interner Serverfehler" });
    }

    const musikdateien = files.map((file) => ({ titel: file }));

    res.json(musikdateien);
  });
});

app.post(
  "/musikdateien/hinzufuegen",
  upload.single("musikdatei"),
  (req, res) => {
    logger.info("POST-Anfrage für das Hinzufügen einer Musikdatei empfangen.");

    if (!req.file) {
      logger.error("Keine Datei empfangen.");
      return res.status(400).json({ error: "Keine Datei empfangen." });
    }

    if (req.file.mimetype !== "audio/mpeg") {
      logger.error("Ungültiger Dateityp. Nur MP3-Dateien sind erlaubt.");
      return res
        .status(400)
        .json({ error: "Ungültiger Dateityp. Nur MP3-Dateien sind erlaubt." });
    }

    const dateiSpeicherort = path.join(musikOrdner, req.file.originalname);
    fs.writeFileSync(dateiSpeicherort, req.file.buffer);

    res.json({ success: true });
  }
);

app.listen(PORT, () => {
  logger.info(`Server läuft auf http://localhost:${PORT}`);
});
