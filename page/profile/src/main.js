let anime_list = [
  "為美好的世界獻上祝福！",
  "Kanon",
  "Air",
  "Clannad",
  "天使降臨到我身邊！",
  "我們仍未知道那天所看見的花的名字。",
  "請問您今天要來點兔子嗎？",
  "小林家的龍女僕",
  "新世紀福音戰士",
  "鬼滅之刃",
  "關於我轉生變成史萊姆這檔事",
  "五等分的花嫁",
  "輝夜姬想讓人告白",
  "怕痛的我，把防禦力點滿就對了",
  "關於我在無意間被隔壁的天使變成廢柴這件事",
  "Re：從零開始的異世界生活",
];
let film_list = ["《你的名字》", "《天氣之子》", "《鈴芽之旅》"];

let game_list = [
  "Ever17 -the out of infinity-",
  "穢翼的尤斯蒂婭",
  "White Album 2",
  "君と彼女と彼女の戀",
  "eden*",
  "ISLAND",
];

$(document).ready(function () {
  anime_list.forEach((data) => {
    if (data) {
      $("#anime-list").append(`<li>${data}</li>`);
    }
  });

  film_list.forEach((data) => {
    if (data) {
      $("#film-list").append(`<li>${data}</li>`);
    }
  });

  game_list.forEach((data) => {
    if (data) {
      $("#game-list").append(`<li>${data}</li>`);
    }
  });

});

