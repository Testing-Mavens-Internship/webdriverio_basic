import Common from "./Common.js";

class SearchResultsPage extends Common{
constructor(){
    super()
    this.$departureCityName=()=>$('//div[text()="From"]/..//div[@class="_3qBKP_ _1Jqgld"]/input[contains(@value,"Kochi")]')
    this.$arrivalCityName=(city)=>$(`//div[text()="To"]/..//div[@class="_3qBKP_ _1Jqgld"]/input[contains(@value,"${city}")]`)
}
}

export const searchResultsPage = new SearchResultsPage()