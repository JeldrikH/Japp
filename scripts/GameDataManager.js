class GameDataManager {
    // Initialize the GameData object
    gameData = {
        type: "",
        difficulties: [],
        times: [],
        results: []
    };

    setGameType(type) {
        this.gameData.type = type;
    }
    // add a difficulty entry
    addDifficulty(difficulty) {
        this.gameData.difficulties.push({ difficulty });
    }
    // Add a time entry
    addTime(diff, time) {
        this.dataGame.times.push({ time });
    }

    // Add a result entry
    addResult(diff, result) {
        this.dataGame.results.push({ result });
    }

    save() {
        JSONCreator.data.gameData = this.gameData; // Save the game data to the JSONCreator object
    }

    // Get the current gameData object (for debugging or display)
    getData() {
        return this.gameData;
    }
}