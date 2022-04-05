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
const popular_games = `games?key=${process.env.MY_API_KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=16`

// New Games:
const new_games = `games?key=${process.env.MY_API_KEY}&dates=${lastYear},${currentDate}&ordering=-released&page_size=16`

// Upcoming Games:
const upcoming_games = `games?key=${process.env.MY_API_KEY}&dates=${currentDate},${nextYear}&ordering=-added&page_size=16`

// Creating URLs:
export const popularGamesURL = () => `${base_URL}${popular_games}`
export const upcomingGamesURL = () => `${base_URL}${upcoming_games}`
export const newGamesURL = () => `${base_URL}${new_games}`

// Game Details:
export const gameDetailsURL = (game_id) => `${base_URL}games/${game_id}?key=${process.env.MY_API_KEY}`

//console.log(gameDetailsURL(638650))
