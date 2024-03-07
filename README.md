# LA1303

### Beschreibung

Unsere Gruppe bestaht aus Justus Meister, Fabian Meyer und Elias Spycher

Wie wollen einen Musikplayer erstellen, man sollte Musik abspielen, pausieren, vorspulen und überspringen können. Wir erstellen das Backend und Frontend mit Visual Studio und Node.js. Somit kann man über den Local Host den Server starten und dann die Website mittels einer Url aufrufen

### User Stories

| US-№ | Verbindlichkeit | Typ        | Beschreibung                                                                                                                                                  |
| ---- | --------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | Muss            | Funktional | Ich will als Benutzer einen Play Button haben um einen Song abzuspielen, um Musik hören zu können.                                                            |
| 2    | Muss            | Funktional | Ich will als Benutzer einen Song skippen können, um den Song nicht zu Ende hören müssen.                                                                      |
| 3    | Muss            | Funktional | Ich will als Benutzer einen Song pausieren können, um den Player zu pausieren.                                                                                |
| 4    | Muss            | Funktional | Ich will als Benutzer von meinem Dateisystem ein Lied hochladen können, um meine eigene Musik zu spielen.                                                     |
| 5    | Muss            | Funktional | Ich will als Benutzer eine kleine Einleitung in den Musikplayer bekommen, damit ich weiss wie es funktioniert.                                                |
| 6    | Muss            | Funktional | Ich will als Benutzer, dass die Songs in einer Queue sichtbar sind, die Queue soll mit einem Button gelert werden können, um neue Musik hinzufügen zu können. |
| 7    | Muss            | Funktional | Ich will als Benutzer, dass der nächste Song automatisch abgespielt wird, sobald der vorherige Zuende ist, dass ich selber nichts machen muss.                |
| 8    | Kann            | Funktional | Ich will als benutzer die Lautstärke regulieren können, um meinen Ohren einen gefallen zu machen.                                                             |

### Testfälle

| TC-№ | Ausgangslage             | Eingabe                          | Erwartete Ausgabe                                                         |
| ---- | ------------------------ | -------------------------------- | ------------------------------------------------------------------------- |
| 5.1  | Website geöffnet         | -                                | Es wird mittels eines Textes kurz erklärt wie man den Musikplayer bedient |
| 4.1  | Website geöffnet         | Button für Dateisystem drücken   | Explorer öffent sich                                                      |
| 4.2  | Explorer geöffnet        | MP3 Datei ausgewählt             | Datei wird zur queue hinzugefügt                                          |
| 1.1  | Datei wird hinzugefügt   | Play Button Clicken              | Erster Song wird abgespielt                                               |
| 2.1  | Song wird abgespielt     | Skip Button Clicken              | Song wird geskippt, der nächste In der Queue wird abgespielt              |
| 3.1  | Song wird abgespielt     | Pause Button Clicken             | Song wird pausiert                                                        |
| 3.2  | Song wurde pausiert      | Play Botton/Pause Button Clicken | Song wird weitergespielt                                                  |
| 6.1  | Song hinzugefügt         | -                                | Songs werden in der Queue angezeigt                                       |
| 6.2  | Songs in Queue vorhanden | Clear Queue Button Clicken       | Queue wird gelöscht                                                       |
| 7.1  | Song in Queue zu Ende    | -                                | Nächster Song wird abgespielt                                             |
| 8.1  | Website geöffent         | Regler wird nach links bewegt    | Musik Lautstärke sinkt                                                    |
| 8.2  | Website geöffent         | Regler wird nach rechts bewegt   | Musik Lautstärke steigt                                                   |

### Planen

| US-№ | Datum      | Arbeitspaket                                           | Verantwortliche Person                      |
| ---- | ---------- | ------------------------------------------------------ | ------------------------------------------- |
| -    | 18.01.2024 | Projekt Idee wählen                                    | Elias Spycher und Justus Meister            |
| -    | 19.01.2024 | Userstories, Testfälle und Planung erstellen           | Elias Spycher                               |
| 1    | 19.01.2024 | Grundlegene Funktion Musik abzuspielen über Knopfdruck | Elias Spycher, Justus Meister               |
| 2    | 26.01.2024 | Song skippen können                                    | Justus Meister                              |
| 3    | 26.01.2024 | Musik pausieren können                                 | Justus Meister                              |
| 4    | 26.01.2024 | Musik von Dateisystem verwenden                        | Fabian Meyer                                |
| 5    | 26.01.2024 | Einleitung über den Musikplayer                        | Elias Spycher                               |
| 6    | 26.01.2024 | Songs werden in Queue gespeichert                      | Fabian Meyer                                |
| 7    | 02.02.2024 | Abspielen des nächsten Songs automatisieren            | Fabian Meyer                                |
| 8    | 02.02.2024 | Lautstärken Regler erstellen                           | Justus Meister                              |
| 9    | 23.02.2024 | Testen und Testprotokoll ausfüllen                     | Elias Spycher                               |
| 10   | 23.02.2024 | Lernbericht schreiben                                  | Elias Spycher, Fabian Meyer, Justus Meister |

### Testprotokoll

| TC-№   | Datum      | Resultat | Tester        |
| ------ | ---------- | -------- | ------------- |
| 1.5.1  | 23.02.2023 | OK       | Elias Spycher |
| 2.4.1  | 23.02.2023 | OK       | Elias Spycher |
| 3.4.2  | 23.02.2023 | OK       | Elias Spycher |
| 4.1.1  | 23.02.2023 | OK       | Elias Spycher |
| 5.2.1  | 23.02.2023 | OK       | Elias Spycher |
| 6.3.1  | 23.02.2023 | OK       | Elias Spycher |
| 7.3.2  | 23.02.2023 | OK       | Elias Spycher |
| 8.6.1  | 23.02.2023 | OK       | Elias Spycher |
| 9.6.2  | 23.02.2023 | OK       | Elias Spycher |
| 10.7.1 | 23.02.2023 | OK       | Elias Spycher |
| 11.8.1 | 23.02.2023 | OK       | Elias Spycher |
| 12.8.2 | 23.02.2023 | OK       | Elias Spycher |

### Testbericht

Das Projekt funktioniert ziemlich fehlerfrei. Es konnten Alle funktionen umgesetzt werden.
