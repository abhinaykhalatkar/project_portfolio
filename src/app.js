import { animation } from './backAnimation';
import { clickHandler } from './clickHandler';
class App {
  static run() {
    animation();
    const introClick = new clickHandler();
    introClick.eventHandler();
  }
}
App.run();