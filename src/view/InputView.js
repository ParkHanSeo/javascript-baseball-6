import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from '../contants/Message.js';

const InputView = {

    async inputBaseballNumber() {
        return await Console.readLineAsync(INPUT_MESSAGE.INPUT_NUMBER);
    },

    async inputRestartNumber() {
        return await Console.readLineAsync(INPUT_MESSAGE.INPUT_RESTART_NUMBER);
    }

}

export default InputView