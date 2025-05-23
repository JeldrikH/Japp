export default class JSONCreator {
    static data = JSONCreator.loadData(); // Load data from localStorage on initialization

    // Methode, um die Daten in JSON umzuwandeln
    static toJSON() {
        try {
            return JSON.stringify(this.data, null, 2); // JSON mit Einrückung für bessere Lesbarkeit
        } catch (error) {
            console.error("Fehler beim Konvertieren der Daten in JSON:", error);
            return null;
        }
    }

    // Load data from localStorage
    static loadData() {
        try {
            const savedData = localStorage.getItem("JSONCreatorData");
            return savedData ? JSON.parse(savedData) : {
                userData: null,
                questionaireData: null,
                gameData: null,
                testData: null
            };
        } catch (error) {
            console.error("Error loading data from localStorage:", error);
            return {
                userData: null,
                questionaireData: null,
                gameData: null,
                testData: null
            };
        }
    }

    // Save data to localStorage
    static saveData() {
        try {
            localStorage.setItem("JSONCreatorData", JSON.stringify(this.data));
        } catch (error) {
            console.error("Error saving data to localStorage:", error);
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

    static isDataValid(data) {
        if (!data) return false; // Ensure data is not null or undefined
        // Überprüfen, ob die Daten gültig sind (z.B. nicht null und nicht leer)
        for (const value of Object.values(data)) {
            if (value === null || value === undefined || (Array.isArray(value) && value.length === 0)) {
                return false;
            }
        }
        return true;;
    }

    // Methode, um die JSON-Daten an einen Server zu senden
    static async sendToServer(url="https://qweqwrtqwew.atwebpages.com/save.php") {
        if (!JSONCreator.isDataValid(this.data)) {
            throw new Error("Data is invalid or incomplete. Aborting request.");
        }

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
