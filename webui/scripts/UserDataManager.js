import JSONCreator from "./JSONCreator.js"; // Import the JSONCreator module
export default class UserDataManager {
    // Initialize the GameData object
    userData = {
        name: "",
        id: null
    };

    setName(name) {
        this.userData.name = name;
    }
    async setId() {
        try {
            const response = await fetch("https://japp.42web.io/getid.php");
            const data = await response.json();
    
            if (data.next_id) {
                this.userData.id = data.next_id;
                return data.next_id; // gibt die ID zurück
            } else {
                throw new Error("Fehlerhafte Antwort vom Server");
            }
        } catch (error) {
            console.error("Fehler beim Abrufen der ID:", error);
            return null;
        }
    }
    
    save() {
        JSONCreator.data.userData = this.userData; // Save the game data to the JSONCreator object
    }

    // Get the current userData object (for debugging or display)
    getData() {
        return this.userData;
    }
}