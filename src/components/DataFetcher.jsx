import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

// Основные шаги:

// 1) С помощью useState создайте состояния для списка постов и строки поиска.
// 2) Используйте useEffect для загрузки списка постов с использованием Axios из https://jsonplaceholder.typicode.com/posts при монтировании компонента.
// 3) Примените useMemo для оптимизации фильтрации постов по заголовку, которая зависит от изменения списка постов и строки поиска.
// 4) Реализуйте элемент input для ввода строки поиска. Используйте состояние для управления его значением и обновляйте его при каждом изменении.
// 5) Отобразите отфильтрованные посты в списке (<ul>), где каждый пост (<li>) включает заголовок.

// Цель: Повысить понимание работы с асинхронными запросами, управлением состоянием и оптимизацией рендеринга в React.

function DataFetcher() {
  const [data, setData] = useState([]);
  const [counter, setCounter] = useState(0);
  const [postId, setPostId] = useState("");

  const fetchData = useCallback(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then((res) => setData(res.data));
  }, [postId]);
  // console.log(data);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="column">
      <input
        type="number"
        placeholder=""
        value={postId}
        onChange={(e) => setPostId(e.target.value)}
      />
      <button onClick={fetchData}>Fetch Data</button>
      <ul>{data && data.map((post) => <li>{post.name}</li>)}</ul>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      {counter}
    </div>
  );
}

export default DataFetcher;
