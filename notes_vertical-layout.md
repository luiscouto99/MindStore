<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Static Template</title>
    <style>
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      .container {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      }

      header {
        background-color: peachpuff;
        min-height: 100px;
      }

      .lixo {
        min-height: 100px;
        background-color: antiquewhite;
        border: 1px solid black;
      }

      main {
        background-color: burlywood;
        flex-grow: 1;
      }

      footer {
        background-color: coral;
        min-height: 100px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <header>header</header>
      <main>
        <div class="lixo"></div>
        <div class="lixo"></div>
        <div class="lixo"></div>
        <div class="lixo"></div>
        <div class="lixo"></div>
        <div class="lixo"></div>
        <div class="lixo"></div>
        <div class="lixo"></div>
      </main>
      <footer>footer</footer>
    </div>
  </body>
</html>
