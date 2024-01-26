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

| US-№ | Datum      | Arbeitspaket                                           | Verantwortliche Person           |
| ---- | ---------- | ------------------------------------------------------ | -------------------------------- |
| -    | 18.01.2024 | Projekt Idee wählen                                    | Elias Spycher und Justus Meister |
| -    | 19.01.2024 | Userstories, Testfälle und Planung erstellen           | Elias Spycher                    |
| 1    | 19.01.2024 | Grundlegene Funktion Musik abzuspielen über Knopfdruck | Elias Spycher, Justus Meister    |
| 2    | 26.01.2024 | Song skippen können                                    | Justus Meister                   |
| 3    | 26.01.2024 | Musik pausieren können                                 | Justus Meister                   |
| 4    | 26.01.2024 | Musik von Dateisystem verwenden                        | Fabian Meyer                     |
| 5    | 26.01.2024 | Einleitung über den Musikplayer                        | Elias Spycher                    |
| 6    | 26.01.2024 | Songs werden in Queue gespeichert,                     |                                  |
| 7    | 02.02.2024 | Testen und Testprotokoll ausfüllen                     | Elias Spycher                    |
| 8    | 18.01.2024 |                                                        |                                  |
| 9    | 18.01.2024 |                                                        |                                  |
| 3    | 18.01.2024 |                                                        |                                  |

### Testprotokoll

| TC-№    | Datum      | Resultat | Tester        |
| ------- | ---------- | -------- | ------------- |
| 1.1.1   | 11.01.2023 | OK       | Elias Spycher |
| 2.2.1   | 11.01.2023 | OK       | Elias Spycher |
| 3.2.2   | 11.01.2023 | OK       | Elias Spycher |
| 4.4.1   | 11.01.2023 | OK       | Elias Spycher |
| 5.5.1   | 11.01.2023 | OK       | Elias Spycher |
| 6.6.1   | 11.01.2023 | OK       | Elias Spycher |
| 7.6.2   | 11.01.2023 | OK       | Elias Spycher |
| 8.6.3   | 11.01.2023 | OK       | Elias Spycher |
| 9.6.4   | 11.01.2023 | OK       | Elias Spycher |
| 10.6.5  | 11.01.2023 | OK       | Elias Spycher |
| 11.6.6  | 11.01.2023 | OK       | Elias Spycher |
| 12.6.7  | 11.01.2023 | OK       | Elias Spycher |
| 13.6.8  | 11.01.2023 | OK       | Elias Spycher |
| 14.6.9  | 11.01.2023 | OK       | Elias Spycher |
| 14.6.10 | 11.01.2023 | OK       | Elias Spycher |
| 15.7.1  | 11.01.2023 | OK       | Elias Spycher |
| 16.8.1  | 11.01.2023 | OK       | Elias Spycher |
| 17.8.2  | 11.01.2023 | OK       | Elias Spycher |
| 18.8.3  | 11.01.2023 | OK       | Elias Spycher |
| 19.8.4  | 11.01.2023 | OK       | Elias Spycher |
| 20.9.1  | 11.01.2023 | OK       | Elias Spycher |
| 21.10.1 | 11.01.2023 | OK       | Elias Spycher |
| 22.11.1 | 11.01.2023 | OK       | Elias Spycher |
| 23.11.2 | 11.01.2023 | OK       | Elias Spycher |
| 24.11.3 | 11.01.2023 | OK       | Elias Spycher |
| 25.12.1 | 11.01.2023 | NOK      | Elias Spycher |

### Testbericht

Es funktionieren alle Testfälle ausser der Letzte. Das Projekt konnte vollständig implemntiert werden ausser die Funktion, dass die Schlange länger wird bei jedem Apfel.
