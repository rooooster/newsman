# newsman

_Front-end development of Newsman pages_

### Used

[Jekyll](https://jekyllrb.com/) - static site generator based on [Ruby](https://www.ruby-lang.org/)

[Gulp](http://gulpjs.com/) - build system based on [NodeJS](https://nodejs.org/)

[Coriolan UI](https://coriolan-ui.github.io/) - [Sass](http://sass-lang.com/) mixins pack

[GitHub Pages](https://pages.github.com/) - free hosting

### Run

`npm i`

`gulp watch`

### Making svg-font

1) Put your svg image `name.svg` into `./assets/img/svg-icons/` folder

2) Do `gulp font`

3) Now you can add your svg icon in html `<span class='icon-name'></span>`

4) But better in sass:

    .block {
        &__my-icon {
            @extend .icon;
            @extend .icon-name;
        }
    }

#### Have fun! :)
