Сначала создадим каталог, инициализируем npm, установим веб-пакет локально и установим webpack-cli(инструмент, используемый для запуска веб-пакета из командной строки):

mkdir webpack-demo
cd webpack-demo
npm init -y
npm install webpack webpack-cli --save-dev

Создаю папку src и файл index.js
в корневую папку добавляю index.html

создаю webpack.config.js точка входа './src/index.js',
выход 'main.js'
в package.json добавляю скрипт "build": "webpack" после этого сборку можно запускать командой
npm run build

npm i html-webpack-plugin
в директории src создаю файл template.html

запускаю сборку -> npm i -g http-server и проверяю изменения по адресу 127.0.0.1:8080/dist
устанавливаю DevServer npm install --save-dev webpack-dev-server
запускаю npx webpack serve

npm i dotenv
npm i copy-webpack-plugin
npm i uglifyjs-webpack-plugin

установка JSON Server
npm i json-server
добавляю db.json
стартую сервер
json-server --watch db.json


