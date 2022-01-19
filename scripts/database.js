

const database = {
    fish: [
        {
            name: "Lion Fish",
            species: "Species: Pterois volitans",
            length: "Length: Up to 18 inches",
            location: "Location: Indo-pacific and South Pacific",
            food: "Food: Mollusks and other smaller fish",
            image: "../imgs/lionfish.png"
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish =>({...fish}))
}

