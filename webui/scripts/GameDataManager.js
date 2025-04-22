import JSONCreator from "./JSONCreator.js"; // Import the JSONCreator module
export default class GameDataManager {
    // Initialize the GameData object
    gameData = {
        type: "",
        difficulties: [],
        times: [],
        results: []
    };
    // Add level entries
    addGameData(diff, time, result) {
        this.gameData.difficulties.push({ difficulty: diff }); // Add a difficulty entry
        this.gameData.times.push({ time }); // Add a time entry
        this.gameData.results.push({ result }); // Add a result entry
    }

    setGameType(type) {
        this.gameData.type = type;
    }

    save() {
        JSONCreator.data.gameData = this.gameData; // Save the game data to the JSONCreator object

        //temporary: download the JSON file
        JSONCreator.downloadJSON("gameData.json"); // Download the JSON file with the game data
    }

    // Get the current gameData object (for debugging or display)
    getData() {
        return this.gameData;
    }
}