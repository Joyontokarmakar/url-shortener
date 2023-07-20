# url-shortener
## [Live Site](https://url-abbreviate.netlify.app/)

## Project Description
This project is create for make your url short. This project contains total three pages. Home page, Add page, and Edit page. Home page for show the all shortend url list. Home page get all url from local storage. If there has no shortend url, then it will show to "Add a url" button. If this page has url, there has a "Edit" button for each url. If user click on the Edit button, application will render edit page according to url's id. Then user can update the main(large) url. according to new url, application will generate a shorturl instead of previous one, and the previous one will remove from the localstorage. From this edit page, user can also delete the current url from the localstorage. Finally, the "Add" page. In this add page user can add a new url, according to this url application will create a short url also. New url will add into the local storage. If the user go to the "Home" page, user can see the all added url's here. From the url list, if the user click on the short url, it will redirect into the user's desire url. For shortened the url I use shortcode api.

## Whats's included

```
url-shortener-Project
├── React-js
│   └── vl8.2.0     
│
├── react-router-dom
│   └── v6.14.1
|  
├── Tailwind CSS
│   └── v3.3.2
|    
├── API
│   └── shrtcode API
|  
├── Pages
│   ├── Home
│   ├── Add
│   └── Edit
└── 
```

## To Run Project in your Local PC follow the following steps:

### Clone My Github Repository from:
```
https://github.com/Joyontokarmakar/url-shortener.git
```

### Installation

``` bash
$ npm install
```

or

``` bash
$ yarn
```

### Run

``` bash
$ npm run dev 
```

or 

``` bash
$ yarn dev
```


### For API

[API](https://shrtco.de/docs).
