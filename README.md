# LA1303

### Beschreibung

Unsere Gruppe bestaht aus Justus Meister, Fabian Meyer und Elias Spycher

Wie wollen einen Musikplayer erstellen, man sollte Musik abspielen, pausieren, vorspulen und überspringen können. Wir erstellen das Backend und Frontend mit Visual Studio mittels Node.js.

### User Stories

| US-№ | Verbindlichkeit | Typ  | Beschreibung                       |
| ---- | --------------- | ---- | ---------------------------------- |
| 1    |Muss             |Funktional|Ich will als Benutzer einen Play Button haben um einen Song abzuspielen, um Musik hören zu können.|
| 2    |Muss             |Funktional|Ich will als Benutzer einen Song skippen können, um den Song nicht zu Ende hören müssen.|
| 3    |Muss             |Funktional|Ich will als Benutzer einen Song pausieren können, um den Player zu pasuieren.|
| 4    |Muss             |Funktional|Ich will als Benutzer von meinem Dateisystem ein Lied hochladen können, um meine eigene Musik zu spielen.|
| 5    |Muss             |Funktional|Ich will als Benutzer eine kleine Einleitung in den Musikplayer bekommen, damit ich weiss wie es funktioniert.|
| 6    |Muss             |Funktional||
| 7    |Muss             |Funktional||
| 8    |Muss             |Funktional||
| 9    |Muss             |Funktional||
| 10    |Muss             |Funktional||
| 11    |Muss             |Funktional||
| 12    |Muss             |Funktional||
| 13    |Muss             |Funktional||
| 14    |Muss             |Funktional||
| 15    |Muss             |Funktional||
| 16    |Muss             |Funktional||
| 17    |Muss             |Funktional||
| 18    |Muss             |Funktional||
| 19    |Muss             |Funktional||
| 20    |Muss             |Funktional||

### Planen

| US-№ | Datum           | Arbeitspaket  | Verantwortliche Person                       |
| ---- | --------------- | ---- | ---------------------------------- |
| -    | 17.11.2023           |Projekt wählen und Planung erstellen| Elias Spycher und Justus Meister |
| 1    | 24.11.2023           |Grundlegene Funktion Musik abzuspielen über Knopfdruck| Elias Spycher |
| 2    | 24.11.2023           |Menu Navigation erstellen | Elias Spycher |
| 3    | 01.12.2023           |Spielfeld erstellen| Elias Spycher |
| 4    | 01.12.2023           |Navigation der Schlange erstellen  | Elias Spycher |
| 5    | 01.12.2023           |Navigation des speziellen Modus erstellen  | Elias Spycher |
| 6    | 01.12.2023           |Bedienung der Schlange durch Tasteneingaben erstellen  | Elias Spycher |
| 7    | 08.12.2023           |ESC/Death Menu erstellen  | Elias Spycher |
| 8    | 08.12.2023           |Bedienung des ESC/Death Menu erstellen| Elias Spycher |
| 9    | 08.12.2023           |Kollision der Schlange mit Wand erstellen| Elias Spycher |
| 10    | 15.12.2023           |Score nach dem Spiel anzeigen implementieren| Elias Spycher |
| 11    | 15.12.2023           |Äpfel positionieren und Score zuweisen| Elias Spycher |
| 12    | 15.12.2023           |Schlangenwachstum erstellen| Elias Spycher |
| -    | 22.12.2023           |Portfolioeintrag schreiben| Elias Spycher |

### Testfälle

| TC-№ | Ausgangslage | Eingabe | Erwartete Ausgabe |
| ---- | ------------ | ------- | ----------------- |
| 1.1  | Programm gestartet|-|Es wird mittels eines Textes kurz erklärt wie man den Musikplayer bedient |
| 2.1  | Programm gestartet|Button für Dateisystem drücken|Explorer öffent sich|
| 2.1  | Explorer geöffnet|MP3 Datei ausgewählt  |Datei wird zur queue hinzugefügt|
| 2.1  | Datei in Queue vorhanden|  ||
| 2.1  | |  ||
| 2.1  | |  ||
| 2.1  | |  ||
| 2.1  | |  ||
| 2.1  | |  ||
| 2.1  | |  ||
| 2.1  | |  ||

### Testprotokoll

| TC-№ | Datum | Resultat | Tester |
| ---- | ----- | -------- | ------ |
| 1.1.1  |11.01.2023|OK|Elias Spycher|
| 2.2.1  |11.01.2023|OK|Elias Spycher|
| 3.2.2  |11.01.2023|OK|Elias Spycher|
| 4.4.1  |11.01.2023|OK|Elias Spycher|
| 5.5.1  |11.01.2023|OK|Elias Spycher|
| 6.6.1  |11.01.2023|OK|Elias Spycher|
| 7.6.2  |11.01.2023|OK|Elias Spycher|
| 8.6.3  |11.01.2023|OK|Elias Spycher|
| 9.6.4  |11.01.2023|OK|Elias Spycher|
| 10.6.5  |11.01.2023|OK|Elias Spycher|
| 11.6.6  |11.01.2023|OK|Elias Spycher|
| 12.6.7  |11.01.2023|OK|Elias Spycher|
| 13.6.8 |11.01.2023|OK|Elias Spycher|
| 14.6.9  |11.01.2023|OK|Elias Spycher|
| 14.6.10  |11.01.2023|OK|Elias Spycher|
| 15.7.1  |11.01.2023|OK|Elias Spycher|
| 16.8.1  |11.01.2023|OK|Elias Spycher|
| 17.8.2  |11.01.2023|OK|Elias Spycher|
| 18.8.3  |11.01.2023|OK|Elias Spycher|
| 19.8.4  |11.01.2023|OK|Elias Spycher|
| 20.9.1  |11.01.2023|OK|Elias Spycher|
| 21.10.1  |11.01.2023|OK|Elias Spycher|
| 22.11.1  |11.01.2023|OK|Elias Spycher|
| 23.11.2  |11.01.2023|OK|Elias Spycher|
| 24.11.3  |11.01.2023|OK|Elias Spycher|
| 25.12.1  |11.01.2023|NOK|Elias Spycher|

### Testbericht

Es funktionieren alle Testfälle ausser der Letzte. Das Projekt konnte vollständig implemntiert werden ausser die Funktion, dass die Schlange länger wird bei jedem Apfel.
