const {favorites, anotherKey} = require("./animals.json");

function amountOfFavoriteAnimals() {
    return favorites.length;
};

module.exports = {
    favoriteAnimals: amountOfFavoriteAnimals
};