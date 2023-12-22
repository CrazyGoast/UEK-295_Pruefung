# ÜK 295 LB Element B

In diesem Programm geht es darum, dass man einen Task speichern, ihn bearbeiten 
und auch wieder löschen kann. Wenn man will kann man auch die einzelnen Task mit ihrer
zugewiesenen Id aufrufen.

## Description

Das vorliegende Programm ist eine RESTful-Anwendung, die die Verwaltung von Aufgaben (Tasks) ermöglicht. Es bietet verschiedene Endpunkte, um Tasks in einem Array zu speichern, zu bearbeiten und zu löschen. Zusätzlich kann man einzelne Tasks mit ihrer zugeordneten ID abrufen.

Hier ist eine kurze Beschreibung der Hauptfunktionen und Bestandteile des Programms:

1. **Task-Verwaltung:**
   - Benutzer können neue Tasks erstellen und in einem Array speichern.
   - Es besteht die Möglichkeit, existierende Tasks zu bearbeiten und zu aktualisieren.
   - Auch das Löschen von Tasks ist möglich.

2. **Abrufen von Tasks:**
   - Jeder Task ist mit einer eindeutigen ID versehen, über die einzelne Tasks abgerufen werden können.
   - Anhand der ID können spezifische Details zu einem bestimmten Task angezeigt werden.

3. **Authentifizierung und Sicherheit:**
   - Es gibt eine separate Komponente für die Authentifizierung (`Authentifizierung`), die vermutlich für die Sicherheit und Zugriffskontrolle verantwortlich ist.
   - Die genaue Implementierung der Authentifizierung ist nicht im Codeausschnitt enthalten, aber sie scheint eine wichtige Rolle zu spielen, um den Zugriff auf die Task-Verwaltung zu kontrollieren.

4. **Dokumentation und API-Interaktion:**
   - Das Programm verwendet Swagger, um die API-Dokumentation bereitzustellen und die Interaktion mit den Endpunkten zu erleichtern.
   - Die API-Dokumentation ist über den Pfad '/swagger-ui/' verfügbar.

5. **Server-Setup:**
   - Die Anwendung läuft auf einem Express-Server und ist auf Port 3000 konfiguriert.

Zusammenfassend ist das Programm eine RESTful-Anwendung, die die Verwaltung von Tasks ermöglicht, mit Funktionen zum Hinzufügen, Bearbeiten, Löschen und Abrufen von Aufgaben. Es integriert auch Sicherheitsmaßnahmen für die Authentifizierung und bietet eine detaillierte API-Dokumentation über Swagger.

## Erste Schritte

Herzlich willkommen zur Task-Verwaltungsanwendung! Um mit der Nutzung der Anwendung zu beginnen, folgen Sie bitte diesen Schritten:

**1. Installation der erforderlichen Software:**
- Stellen Sie sicher, dass Node.js auf Ihrem System installiert ist, da die Anwendung auf Node.js basiert.
- Öffnen Sie Ihre Befehlszeile oder Ihr Terminal und navigieren Sie zum Projektverzeichnis.

**2. Installation der Abhängigkeiten:**
- Führen Sie den Befehl `npm install` aus, um alle erforderlichen Pakete und Abhängigkeiten für die Anwendung zu installieren.

**3. Starten der Anwendung:**
- Verwenden Sie den Befehl `npm start`, um den Server zu starten. Die Anwendung wird standardmäßig auf Port 3000 laufen.

**4. API-Dokumentation einsehen:**
- Öffnen Sie Ihren Webbrowser und geben Sie `http://localhost:3000/swagger-ui/` ein, um die interaktive API-Dokumentation über Swagger zu erkunden. Hier finden Sie Details zu den verfügbaren Endpunkten und deren Verwendung.

**5. Interaktion mit der Anwendung:**
- Verwenden Sie eine API-Client-Software wie cURL, Postman oder HTTP-Anfragen, um mit den Endpunkten der Task-Verwaltungsanwendung zu interagieren.
  - Erstellen Sie neue Tasks, bearbeiten Sie vorhandene, löschen Sie sie oder rufen Sie bestimmte Tasks anhand ihrer IDs ab.

**6. Authentifizierung (falls erforderlich):**
- Falls die Anwendung eine Authentifizierung erfordert, nutzen Sie die entsprechenden Endpunkte oder Methoden, um sich zu authentifizieren und Zugriff zu erhalten.

**7. Anpassungen und Weiterentwicklung:**
- Die Anwendung ist offen für Anpassungen und Erweiterungen. Sie können den Quellcode bearbeiten, um Funktionen hinzuzufügen oder anzupassen, um Ihren Anforderungen gerecht zu werden.

Vielen Dank für die Nutzung unserer Task-Verwaltungsanwendung! Wir hoffen, dass Sie damit effektiv Ihre Aufgaben organisieren können.

### Programm Starten

Um das Programm zu starten können Sie die folgenden Schritte befolgen:

**1. Öffnen des Terminals in Visual Studio Code:**
   - Starten Sie Visual Studio Code.
   - Klicken Sie oben im Menü auf "Terminal" und wählen Sie "Neues Terminal öffnen".

**2. Navigieren zum richtigen Verzeichnis:**
   - Verwenden Sie den Befehl `cd Pfad/zum/Projektverzeichnis`, um zum Verzeichnis zu navigieren, in dem sich die Task-Verwaltungsanwendung befindet. Ersetzen Sie `Pfad/zum/Projektverzeichnis` durch den tatsächlichen Pfad des Verzeichnisses auf Ihrem System.

**3. Starten des Programms:**
   - Geben Sie den Befehl `node server.js` im Terminal ein und drücken Sie die Eingabetaste. Dieser Befehl startet den Server und die Task-Verwaltungsanwendung.

**4. Zugriff auf die Anwendung:**
   - Öffnen Sie Ihren Webbrowser und navigieren Sie zu `http://localhost:3000/swagger-ui`, um auf die laufende Task-Verwaltungsanwendung zuzugreifen. Beachten Sie, dass die Anwendung standardmäßig auf Port 3000 läuft. Falls der Port geändert wurde, passen Sie die URL entsprechend an.

Nachdem Sie diese Schritte ausgeführt haben, sollten Sie Zugriff auf die Task-Verwaltungsanwendung über den Browser haben und die verschiedenen API-Endpunkte über die Swagger-Benutzeroberfläche erkunden können.

Bitte stellen Sie sicher, dass alle Pfadangaben und Befehle korrekt eingegeben wurden, um das Programm erfolgreich zu starten und darauf zuzugreifen.

## Autoren

Adrian Bischoff

[GitHub](https://github.com/CrazyGoast)

## Quellen

Inspiration, code snippets, etc.
* [Readme-Template](https://gist.github.com/DomPizzie/7a5ff55ffa9081f2de27c315f5018afc#file-readme-template-md)