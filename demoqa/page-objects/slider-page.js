class Slider {
    constructor() {
        this.$header = () => $(`//div[text()="Slider"]`);
        this.$sliderInput = () => $(`//input[@type="range"]`);
        this.$sliderValue = () => $(`//input[@id="sliderValue"]`);
    }
    /**
     * method for set slider value
     * @param {number} value 
     */
    async setSliderValue(value){
        await this.$sliderInput().setValue(value);
        await this.$sliderValue().waitForDisplayed({ timeout : 2000 });
    }
    /**
     * method for checking slider is moved
     * @param {number} value 
     * @param {number} displayed 
     * @returns 
     */
    async isSliderMoved(value, displayed){
        if(value == displayed){
            return true;
        }
    }
}

export const sliderPage = new Slider();