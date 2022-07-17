const emojis = ["😍" ,"😊" ,"😂", "😁"];

const emoji = document.querySelector("#emoji");

const emojiRandom = emojis[Math.floor(Math.random()* emojis.length)];


emoji.innerText = emojiRandom;