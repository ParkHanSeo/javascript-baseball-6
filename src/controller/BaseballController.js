import InputView from '../view/InputView.js'
import OutputView from '../view/OutputView.js'

class BaseballController {

    #baseBallNum;

    baseBallProcess() {
        this.#inputBaseballNumber();
    }

    async #inputBaseballNumber() {
        this.#baseBallNum = await InputView.inputBaseballNumber();
    }

}

export default BaseballController