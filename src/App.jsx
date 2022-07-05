import { useState } from "react";
import "./styles.css";

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
  const [incompleteTodos, setIncompleteTodos] = useState([
    "ああああ",
    "いいいい"
  ]);

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
  const [completeTodos, setCompleteTodos] = useState(["うううう"]);

  // 戻るボタンが押されたら

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>

      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              // ループで回す場合何個目の要素なのかを裏側に渡すために必要
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                {/* 関数に引数を渡したい場合はアロー関数を作成する */}
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>

      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
