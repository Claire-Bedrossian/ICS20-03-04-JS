// Copyright (c) 2022 Claire Bedrossian All rights reserved
//
// Created by: Claire Bedrossian
// Created on: Nov 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-03-04-JS/sw.js", {
    scope: "/ICS20-03-04-JS/",
  })
}

/**
 * This function converts degrees fahrenheit to degrees celsius.
 */
function myButtonClicked() {
    // input
    const fahrenheit = parseFloat(document.getElementById("fahrenheit-number").value)

    //process
    const celsius = (fahrenheit - 32) * 5 / 9
  
    // output
    document.getElementById("degrees-celsius").innerHTML =
      "Degrees celsius is equal to: " + celsius.toFixed(2) + " °C"
}
