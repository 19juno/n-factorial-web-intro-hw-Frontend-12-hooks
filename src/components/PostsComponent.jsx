import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import axios from "axios";
import { Button } from "@mui/material";
/*

HW - 4

Разработайте компонент PostsComponent, используя кастомный хук useFetch для выполнения асинхронного запроса к API и управления состоянием загрузки.

Основные шаги:

1) Используйте кастомный хук useFetch для загрузки данных о постах с 'https://jsonplaceholder.typicode.com/posts'. Хук должен предоставлять данные о постах, состояние загрузки, сообщение об ошибке и функцию для повторной загрузки данных.
2) Отобразите заголовок "Posts".
3) Пока данные загружаются, отображайте сообщение "Loading...".
4) В случае ошибки при загрузке данных покажите соответствующее сообщение.
5) Реализуйте кнопку, которая позволяет повторно загрузить данные о постах (используйте функцию refetch из useFetch).
6) После загрузки и в случае отсутствия ошибок отобразите список постов. Для каждого поста отобразите его заголовок и текст в элементе списка (<li>).

Цель задания: Улучшить навыки работы с пользовательскими хуками, асинхронными запросами и управлением состоянием в React.



*/

function PostsComponent() {
  const { data, isLoading, error, refetch } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  //console.log(data);
  //console.log(isLoading);
  //console.log(error);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.log(error);
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <Button
        style={{ marginLeft: 670, marginTop: 50 }}
        variant="contained"
        color="success"
        onClick={refetch}
      >
        Loading
      </Button>
      <h1 style={{ textAlign: "center" }}>Posts</h1>
      <ul>
        {data &&
          data.map((post) => (
            <li key={post.id}>
              <h2 style={{ color: "red" }}>
                Title: <span style={{ color: "white" }}>{post.title}</span>
              </h2>
              <p>{post.body}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
