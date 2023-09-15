export default class Common{
    constructor() {
        this.$tile = (name) => $(`//div[@class="category-cards"]//h5[text()="${name}"]`)
        this.$tabButton = (value) => $(`//span[text()="${value}"]`)
        this.$tabTile = (value) => $(`//div//h5[text()="${value}"]/ancestor::div[@class="card mt-4 top-card"]`)
        this.$uploadButton = () => $(`//input[@id="uploadFile"]`) 
        this.$downloadButton = () => $(`//a[@id="downloadButton"]`)
     
    }


}