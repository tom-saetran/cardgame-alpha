// Card Generator

const cards = []
const series = "A"
const numCards = 10000

const foilChanceInPercentage = 3
const reverseFoilChanceInPercentage = 0.1
const fullFoilChanceInPercentage = 0.001

class Card {
    foil = isFoil()
    reverseFoil = isReverseFoil()
    fullFoil = isFullFoil()
    uuid = getUUID()
}

const isFoil = () => Math.random() * 100 < foilChanceInPercentage
const isReverseFoil = () => Math.random() * 100 < reverseFoilChanceInPercentage
const isFullFoil = () => Math.random() * 100 < fullFoilChanceInPercentage

const generateCards = numberOfCards => {
    for (let i = 0; i < numberOfCards; i++) {
        generateCard(i + 1)
    }
}
const generateCard = index => {
    card = new Card()
    card.series = series
    card.mintNomberOf = `#${index}/${numCards}`
    card.mintNumber = index
    card.mintId = index - 1
    card.name = getName(index % 14)
    card.color = ""
    card.description = ""
    saveCard(card)
}

const getName = index => {
    const names = ["Abblabaa DeathStar", "Beatleses Battlebots", "Cheries BeliverBot", "Dire Straights", "Eminoms Plumboms", "Frank Znaphta", "Gary Mourne", "Hellowine", "In Fires", "Jimi Zamdrix", "Kylie Monologue", "Lady Haha", "Mari Flynn Mansion", "Nine meter Nails"]
    return names[index]
}

const getUUID = () => {
    "00000000-0000-0000-0000-000000000000"
}

const saveCard = card => {
    card.saved = true
    cards.push(card)
}

const consoleOut = () => {
    let numFoil = 0
    let numReverseFoil = 0
    let numFullFoil = 0

    cards.forEach(card => {
        numFoil += card.foil
        numReverseFoil += card.reverseFoil
        numFullFoil += card.fullFoil
    })

    console.log("   Generated:\n")
    console.log("        Foil: " + numFoil + "/" + numCards)
    console.log("Reverse Foil: " + numReverseFoil + "/" + numCards)
    console.log("   Full Foil: " + numFullFoil + "/" + numCards)
}

generateCards(numCards)
consoleOut()
