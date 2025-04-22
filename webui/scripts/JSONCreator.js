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