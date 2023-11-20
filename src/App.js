import BaseballController from "./controller/BaseballController.js";

class App {
  async play() {
    await new BaseballController().baseBallProcess();
  }
}

export default App;
