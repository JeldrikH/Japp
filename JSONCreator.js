class JSONCreator {
    constructor(data) {
        this.data = data; // Die abstrakten Daten, die in JSON umgewandelt werden sollen
    }

    // Methode, um die Daten in JSON umzuwandeln
    toJSON() {
        try {
            return JSON.stringify(this.data, null, 2); // JSON mit Einrückung für bessere Lesbarkeit
        } catch (error) {
            console.error("Fehler beim Konvertieren der Daten in JSON:", error);
            return null;
        }
    }

    // Methode, um die JSON-Daten als Datei herunterzuladen
    downloadJSON(filename = "data.json") {
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
const dataUser = {
    name: "Max Mustermann",
    id: 12345
};

const dataQuestionaire = {
    type: "problem solving"
};
const dataGame = {
    type: "Odd One Out",
    difficulties: [1, 2, 2, 2, 3, 4, 3, 2],
    times: [23, 12, 421, 1, 21, 2, 21, 32, 3, 41, 32, 232],  // in seconds
    results: [1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0] // 0 = wrong, 1 = right, -9 = skipped
};
const dataTest = {
    type: "reasoning test",
    difficulties: [1, 2, 2, 2, 3, 4, 3, 2],
    times: [23, 12, 421, 1, 21, 2, 21, 32, 3, 41, 32, 232], // in seconds
    results: [1, 0, 0, 0, 0, 1, 1, 0, 1, -9, 0, -9] // 0 = wrong, 1 = right
};

const data = {
    user: dataUser,
    questionaire: dataQuestionaire,
    game: dataGame,
    test: dataTest
};

const jsonCreator = new JSONCreator(data);

// JSON-Daten anzeigen
console.log(jsonCreator.toJSON());

// JSON-Datei herunterladen
jsonCreator.downloadJSON("example.json");