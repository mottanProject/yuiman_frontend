import React from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const AccountCreate = () => {
  const navigate =useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    axios.post('http://localhost:8080/api/v1/account-create', {
      name: data.get('name'),
      mailaddress: data.get('mailaddress'),
      slackname: data.get('slackname'),
      password1: data.get('password1'),
      password2: data.get('password2')
    },
    { headers: {
      'Accept': 'application/json'
    }})
      .then(response => {
        console.log(response.data);
        navigate('/login');
      }).catch(error => {
        console.log(error);
      });
  };

  return (
    <>
      <body className="parent">
      <main className="createaccount" id="">
      <img className="title"
           src="../images/title_large.svg"
           alt="プロフィール画像をアップロード" />
      <h1>新規アカウント登録</h1>
      <form action="" onSubmit={(event) => handleSubmit(event)}>
        <label className="form-label">ニックネーム:</label>
        <input type="text" className="createinput" name="name" id="name" />
        <br />
        <label className="createinput">メールアドレス:</label>
        <input type="email" className="createinput" name="mailaddress" id="mailaddress" />
        <br />
        <label>Slack名:</label>
        <input required type="text" className="createinput" name="slackname" id="slackname" />
        <br />
        <label>パスワード:</label>
        <input required type="password" className="createinput" name="password1" id="password1" />
        <br />
        <label>パスワード再入力: </label>
        <input required type="password" className="createinput" name="password2" id="password2" />
        <br />
        <button className="btn-normal" type="submit">確認</button>
      </form>

      </main>
      </body>
    </>
  );
};

export default AccountCreate;
