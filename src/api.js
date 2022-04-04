// Base URL:
const base_URL = "https://api.rawg.io/api/"

// Getting Current Month and Day:
const getCurrentMonth = () => {
    // The getMonth() method starts with January being month number 0, so we just put a "+ 1" on it.
    const month = new Date().getMonth() + 1
    if(month < 10) return `0${month}`
    else return month
}
const getCurrentDay = () => {
    const day = new Date().getDate()
    if(day < 10) return `0${day}`
    else return day
}

// Getting YYYY/MM/DD
const currentYear = new Date().getFullYear()
const currentMonth = getCurrentMonth()
const currentDay = getCurrentDay()
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`

// Getting Last and Next Year:
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`

// Popular Games:
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=16`

export const popularGamesURL = () => `${base_URL}${popular_games}`

console.log(popularGamesURL())
