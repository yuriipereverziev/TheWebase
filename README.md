# Cборка Yurii Pereverziev

> Сборка работает на gulp версии 4.0. 

#### Для начала работы

1. ```clone this repo```
2. ```cd path/to/...```
3. ```npm install gulpjs/gulp-cli -g```  
> Установка последней версии Gulp CLI tools глобально (подробнее - [GitHub](https://github.com/gulpjs/gulp/blob/4.0/docs/getting-started.md) )

4. ```npm install```
6. ```run gulp``` 



## Начальная установка и настройка сборки Gulp 4.

sudo chown -R $USER:$GROUP ~/.npm   //право собственности на папки

ls -a  //Проверка содердимого папки.

npm list -g --depth=0  //Проверка глобальной установки.

npm init -y //Инициализация нового проекта package.json.

git init  //Инициализация репозитория.

touch gulpfile.js // Создание файла gulpfile.js

npm install gulp-cli -g   //Установка gulp-cli глобально.

npm install -D gulp //Установка Gulp локально.

npm install -D gulp-csso // Для удаления дублирования кода.

@htmlacademy/editorconfig-cli 
editorconfig-cli 
browser-sync 

npm i -D 

del 
gulp gulp-autoprefixer 
gulp-cheerio 
gulp-concat 
gulp-concat-css 
gulp-csso 
gulp-eslint 
gulp-imagemin 
gulp-install 
gulp-load-plugins 
gulp-minify 
gulp-notify 
gulp-plumber 
gulp-pug 
gulp-rename 
gulp-replace 
gulp-sass 
gulp-sourcemaps 
gulp-stylelint 
gulp-svg-sprite 
gulp-svgmin 
gulp-webp 
gulp-webpcss 
sass-lint 
stylelint 
stylelint-config-recess-order 
stylelint-config-standard



### Удаление папки на Github.

В командной строке перейдите в локальный репозиторий.
Убедитесь, что вы находитесь в ветке по умолчанию:

git checkout master

Команда рекурсивно удалит вашу папку: rm -r 

git rm -r folder-name

Зафиксируйте изменения:

git commit -m "Remove duplicated directory"

Нажмите изменения в вашем удаленном хранилище:

git push origin master








