export default class JSONCreator {
    static data = {
        user: null,
        questionaire: null,
        game: null,
        test: null
    };

    // Methode, um die Daten in JSON umzuwandeln
    static toJSON() {
        try {
            return JSON.stringify(this.data, null, 2); // JSON mit Einrückung für bessere Lesbarkeit
        } catch (error) {
            console.error("Fehler beim Konvertieren der Daten in JSON:", error);
            return null;
        }
    }

    // Methode, um die JSON-Daten als Datei herunterzuladen
    static downloadJSON(filename = "data.json") {
        const jsonData = this.toJSON();
        if (!jsonData) return;

        const blob = new Blob([jsonData], { type: "application/json" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        link.click();
        URL.revokeObjectURL(link.href); // Speicher freigeben
    }

    // Methode, um die JSON-Daten an einen Server zu senden
    static async sendToServer(url="https://japp.42web.io/save.php") {
        const jsonData = this.toJSON();
        if (!jsonData) return;

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: jsonData
            });

            if (!response.ok) {
                throw new Error(`Server returned status ${response.status}`);
            }

            const result = await response.json();
            console.log("Server-Antwort:", result);
            return result;
        } catch (error) {
            console.error("Fehler beim Senden der Daten an den Server:", error);
            return null;
        }
    }
}

// Beispiel: Nutzung der Klasse
const userData = {
    name: "Max Mustermann",
    id: 12345
};


// JSON-Daten anzeigen
//console.log(jsonCreator.toJSON());

// JSON-Datei herunterladen
//jsonCreator.downloadJSON("example.json");