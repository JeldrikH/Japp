class UserDataManager {
    // Initialize the GameData object
    userData = {
        name: "",
        id: null
    };

    setName(name) {
        this.userData.name = name;
    }
    setId(id) {
        this.userData.id = id;
    }

    save() {
        JSONCreator.data.userData = this.userData; // Save the game data to the JSONCreator object
    }

    // Get the current userData object (for debugging or display)
    getData() {
        return this.userData;
    }
}