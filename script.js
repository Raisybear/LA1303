document.addEventListener("DOMContentLoaded", () => {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)(); // AudioContext erstellen

  const playButton = document.getElementById("playButton");
  const pauseButton = document.getElementById("pauseButton");
  const dateiInput = document.getElementById("dateiInput");
  const hinzufuegenButton = document.getElementById("hinzufuegenButton");
  const playlist = document.getElementById("playlist");

  let audioBuffer = null;
  let audioSource = null;
  let songCounter = 1; // Zähler für den Song-Index

  // Musik abspielen
  const playMusic = () => {
    if (audioBuffer && !audioSource) {
      audioSource = audioContext.createBufferSource();
      audioSource.buffer = audioBuffer;
      audioSource.connect(audioContext.destination);
      audioSource.start();

      playButton.disabled = true;
      pauseButton.disabled = false;

      // Event-Listener für das Ende der Wiedergabe, um die Schaltflächen zurückzusetzen
      audioSource.addEventListener("ended", () => {
        audioSource = null;
        playButton.disabled = false;
        pauseButton.disabled = true;
      });
    }
  };

  // Musik pausieren
  const pauseMusic = () => {
    if (audioSource) {
      audioSource.stop();
      audioSource = null;

      playButton.disabled = false;
      pauseButton.disabled = true;
    }
  };

  // Stoppe die Musik
  const stopMusic = () => {
    if (audioSource) {
      audioSource.stop();
      audioSource = null;

      playButton.disabled = false;
      pauseButton.disabled = true;
    }
  };

  // Lade eine Musikdatei (ohne automatische Wiedergabe)
  const loadMusic = async () => {
    try {
      stopMusic(); // Stoppe den aktuellen Song, falls vorhanden

      const response = await fetch(
        "http://localhost:3000/musikdateien/1/stream"
      ); // Beispiel-URL für Musikdatei
      const arrayBuffer = await response.arrayBuffer();
      audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

      playButton.disabled = false;
      pauseButton.disabled = true;
    } catch (error) {
      console.error("Fehler beim Laden der Musik:", error);
    }
  };

  // Event-Listener für Play- und Pause-Buttons
  playButton.addEventListener("click", playMusic);
  pauseButton.addEventListener("click", pauseMusic);

  // Lade die Musik beim Seitenladen
  loadMusic();

  // Event-Listener für Hinzufügen-Button
  hinzufuegenButton.addEventListener("click", () => {
    dateiInput.click(); // Öffne den Dateiauswahldialog, wenn auf den Hinzufügen-Button geklickt wird
  });

  // Event-Listener für Dateiauswahl
  dateiInput.addEventListener("change", async () => {
    const selectedFile = dateiInput.files[0];

    if (selectedFile) {
      try {
        const arrayBuffer = await selectedFile.arrayBuffer();
        audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

        loadMusic(); // Lade die Musik neu, um den aktuellen Song zu setzen
        playMusic(); // Starte die Wiedergabe

        // Füge den Song zur Playlist hinzu
        const playlistItem = document.createElement("li");
        playlistItem.textContent = selectedFile.name; // Nutze den Dateinamen als Titel
        playlist.appendChild(playlistItem);

        // Füge einen Event-Listener zum Abspielen des Songs in der Playlist hinzu
        playlistItem.addEventListener("click", () => {
          loadMusic(); // Lade die Musik neu, um den aktuellen Song zu setzen
          playMusic(); // Starte die Wiedergabe
        });

        songCounter++;
      } catch (error) {
        console.error("Fehler beim Laden der ausgewählten Datei:", error);
      }
    }
  });
});
