import express from "express";
import fetch from "node-fetch";
import React from "react";
import { renderToString } from "react-dom/server";

import HomeRoot from "./roots/HomeRoot";
import ShopRoot from "./roots/ShopRoot";
import QuestivalRoot from "./roots/QuestivalRoot";
import ImpactRoot from "./roots/ImpactRoot";
import StoryRoot from "./roots/StoryRoot";
import MoreRoot from "./roots/MoreRoot";
import HelpRoot from "./roots/HelpRoot";
import AccountRoot from "./roots/AccountRoot";
import CartRoot from "./roots/CartRoot";
import InternationalRoot from "./roots/InternationalRoot";

import { ServerStyleSheet } from 'styled-components';

import fs from 'fs';
import compression from 'compression';
import cors from 'cors';
import path from 'path';
import bodyParser from 'body-parser';

var PORT = process.env.PORT || 3003;

const app = express();
app.use(compression());
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

var dataObj = {},
homeBundle = "",
shopBundle = "",
questivalBundle = "",
impactBundle = "",
storyBundle = "",
moreBundle = "",
helpBundle = "",
accountBundle = "",
cartBundle = "",
internationalBundle = "";

fs.readFile('./dist/js/home.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  homeBundle = data || "";
})
fs.readFile('./dist/js/shop.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  shopBundle = data || "";
})
fs.readFile('./dist/js/questival.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  questivalBundle = data || "";
})
fs.readFile('./dist/js/impact.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  impactBundle = data || "";
})
fs.readFile('./dist/js/story.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  storyBundle = data || "";
})
fs.readFile('./dist/js/more.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  moreBundle = data || "";
})
fs.readFile('./dist/js/help.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  helpBundle = data || "";
})
fs.readFile('./dist/js/account.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  accountBundle = data || "";
})
fs.readFile('./dist/js/cart.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  cartBundle = data || "";
})
fs.readFile('./dist/js/international.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  internationalBundle = data || "";
})

app.get('/', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, homeBundle, HomeRoot, "home"));
});
app.get('/shop', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, shopBundle, ShopRoot, "shop"));
});
app.get('/questival', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, questivalBundle, QuestivalRoot, "questival"));
});
app.get('/impact', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, impactBundle, ImpactRoot, "impact"));
});
app.get('/story', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, storyBundle, StoryRoot, "story"));
});
app.get('/more', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, moreBundle, MoreRoot, "more"));
});
app.get('/help', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, helpBundle, HelpRoot, "help"));
});
app.get('/account', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, accountBundle, AccountRoot, "account"));
});
app.get('/cart', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, cartBundle, CartRoot, "cart"));
});
app.get('/international', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, internationalBundle, InternationalRoot, "international"));
});

app.get('/images/:id', (req, res) => {
  res.set('Cache-Control', 'public, max-age=31557600');
  res.sendFile(path.join(__dirname, '../docs/images/' + req.params.id));
});

app.get('/health', (req, res) => res.send('OK'));

app.listen( PORT, () => {
  console.log('Running on http://localhost:' + PORT)
});


// functions!!!!!!!!!!!!!

function getQueries(req, res){
  const qOb = {};
  const queries = req && req._parsedUrl && req._parsedUrl.query && req._parsedUrl.query.split('&') ? req._parsedUrl.query.split('&') : [];
  if(queries.length){
    queries.forEach((x) => {
        var y = x.split('=');
        qOb[y[0]] = y[1];
    });
  }
  return qOb;
}

function fetcher(url){
	return fetch(url)
    .then((response) => {
        if(response.status !== 200) throw Error(response.statusText);
        return response.json();
    }).then((json) => {
        return json;
    }).catch(errHandle)
}

function returnHTML(data, bundle, Page, title){
    const dataString = JSON.stringify(data);
    const sheet = new ServerStyleSheet();
    const body = renderToString(sheet.collectStyles(<Page data={data}/>));
    const styles = sheet.getStyleTags();

    return `
            <html lang="en">
              <head>
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>${title}</title>
                <meta name="Description" content="${title}">
                <style>
                  body { margin: auto; font-family: 'Helvetica'; max-width: 1300px; }
                  a { text-decoration: none; color: #000; }
                </style>
                <link href="https://fonts.googleapis.com/css?family=Nanum+Gothic+Coding&display=swap" rel="stylesheet">
                ${styles}
              </head>
              <body>
                <script>window.os = window.os || {};</script>
                <script>window.__DATA__=${dataString}</script>
                <div id="app" role="main">${body}</div>
                <script>${bundle}</script>
              </body>
            </html>
          `;
}

function errHandle(err){
    console.log(err);
}
