import { v4 } from "uuid";

class Todo {
  id: string;
  text: string;

  constructor(text: string) {
    this.text = text;
    this.id = v4();
  }
}

export default Todo;