import { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  // 入力欄に入力された値についてのuseState
  const [todoText, setTodoText] = useState("");

  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  // 未完了のリストを格納する配列をuseStateで宣言
  const [incompleteTodos, setIncompleteTodos] = useState([]);

  // 削除ボタンが押下されたら
  const onClickDelete = (index) => {
    // 現在の未完了タスクをnewTodosに格納
    const newTodos = [...incompleteTodos];
    // 削除処理
    newTodos.splice(index, 1);
    // 未完了のタスクを更新
    setIncompleteTodos(newTodos);
  };

  // 完了ボタンが押されたらの処理
  const onClickComplete = (index) => {
    // 現在の未完了タスクをnewTodosに格納
    const newIncompleteTodos = [...incompleteTodos];
    // 削除処理
    newIncompleteTodos.splice(index, 1);
    // 完了したTODOの配列を作成
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  // 完了のリストを格納する配列をuseStateで宣言
  const [completeTodos, setCompleteTodos] = useState([]);

  // 戻るボタンが押されたら
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />

      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />

      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
