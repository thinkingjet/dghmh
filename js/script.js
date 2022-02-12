// var request = ne w XMLHttpRequest()
// request.open('GET', 'https://getpickuplines.herokuapp.com/lines/random', true)
// request.onload = function () {
//   // Begin accessing JSON data here
//   var data = JSON.parse(this.response)
// document.addEventListener("DOMContentLoaded", async function () {
//   const data = await fetch("https://getpickuplines.herokuapp.com/lines/random");
//   //" https://gnews.io/api/v4/search?q=weather&token=a38e7f1225ce41d278a77b285823c848"
//   const json = await data.json();
//   console.log(json);
// });
/*(() => {
  fetch("https://getpickuplines.herokuapp.com/lines/random")
    .then((response) => response.json())
    .then((data) => console.log(data));
})();
// request.send()
*/ //
const getlines = () => {
  const lines = [
    "I heard you're good in Algebra. Can you replace my X without asking Y.",
    "Baby, if you were words on a page, you'd be fine print.",
    "We’re not socks, but I think we’d make a great pair.",
    "You must be a campfire. Because you're super hot and I want s'more.",
    "Are you an omelette? Because you're making me egg-cited!",
    "I’ll give up my morning cereal to spoon you instead.",
    "Hi, I’m Mr. Right. Someone said you were looking for me?",
    "If you were a flower you'd be a damnnn-delion",
    "Put down that cupcake... you're sweet enough already.",
    "Most guys need 3 meals a day to keep going... I just need eye contact from you.",
    "If Internet Explorer is brave enough to ask you to be your default browser, I’m brave enough to ask you out!",
    "You know how they say skin is the largest organ on the human body? Not in my case.",
    "You must be Jamaican, because Jamaican me crazy.",
    "If I could reach out and hold a star for everytime you've made me smile, I'd hold the sky in the palm of my hand.",
    "If we shared a garden, I'd put my tulips and your tulips together. (tulips = two lips)",
    "When I'm older, I'll look back at all of my crowning memories, and I'll think of the day my children were born, the day I got married, and the day that I met you.",

    "Are you a parking ticket? ‘Cause you’ve got fine written all over you.",
    "There must be something wrong with my eyes, I can’t take them off you.",
    "Do you have a pencil? Cause I want to erase your past and write our future.",
    "Do you know what my shirt is made of ? Boyfriend/girlfriend material?",
    "When I was walking by, I noticed you stalking so.. what’s up?",
    "Your shirt has to go, but you can stay.",
    "I was wondering if you had an extra heart. Mine was just stolen.",
    "I seem to have lost my phone number. Can I have yours?",
    "Did the sun come out or did you just smile at me?",
    "I’m lost. Can you give me directions to your heart?",
    "Hello. Cupid called. He wants to tell you that he needs my heart back.",
    "Hi, how was heaven when you left it?",
    "Was your dad a boxer? Because damn, you’re a knockout!",
    "Are you sure you’re not tired? You’ve been running through my mind all day.",
    "Hey, tie your shoes! I don’t want you falling for anyone else.",
    "I may not be a genie, but I can make your dreams come true.",
    "You know what material this is? [Grab your shirt] Boyfriend material.",
    "I’d say God Bless you, but it looks like he already did.",
    "Was you father an alien? Because there’s nothing else like you on Earth!",
    "Is there an airport nearby or is it my heart taking off?",
    "Do I know you? ‘Cause you look a lot like my next girlfriend/boyfriend.",
    "You might be asked to leave soon. You are making the other women look bad.",
    "I’m not a photographer, but I can picture me and you together.",
    "Is your name Google? Because you have everything I’ve been searching for.",
    "If nothing lasts forever, will you be my nothing?",
    "Hey, you’re pretty and I’m cute. Together we’d be Pretty Cute.",
    "Do you believe in love at first sight or should I pass by again?",
    "Are you religious? Because you’re the answer to all my prayers.",
    "Are you my phone charger? Because without you, I’d die.",
    "Hello, I’m a thief, and I’m here to steal your heart.",
    "Is it hot in here or is it just you?",
    "They say Disneyland is the happiest place on earth. Well apparently, no one has ever been standing next to you.",
    "Are you a dictionary? Cause you’re adding meaning to my life.",
    "Can I follow you home? Cause my parents always told me to follow my dreams.",
    "For some reason, I was feeling a little off today. But when you came along, you definitely turned me on.",
    "You must be a broom, ‘cause you just swept me off my feet.",
    "You don’t need keys to drive me crazy.",
    "Are you from Tennessee? Because you’re the only ten I see!",
    "I must be in a museum, because you truly are a work of art.",
    "There’s only one thing I want to change about you, and that’s your last name.",
    "You remind me of a magnet, because you sure are attracting me over here!",
    "I’m sorry, were you talking to me? [No] Well then, please start.",
    "Is your dad a terrorist? Cause you’re the bomb.",
    "Are you from Russia? ‘Cause you’re russian my heart rate!",
    "Didn’t I see you on the cover of Vogue?",
    "My buddies bet me that I wouldn’t be able to start a conversation with the hottest person in the bar. Wanna buy some drinks with their money?",
    "Kanye feel the love tonight?",
    "Somebody call the cops, because it’s got to be illegal to look that good!",
    "Are you a magician? Because whenever I look at you, everyone else disappears!",
    "Aside from being sexy, what do you do for a living?",
    "Can you take me to the doctor? Because I just broke my leg falling for you.",
    "Would you grab my arm, so I can tell my friends I’ve been touched by an angel?",
    "Sorry, but you owe me a drink. [Why?] Because when I looked at you, I dropped mine.",
    "I’m no mathematician, but I’m pretty good with numbers. Tell you what, give me yours and watch what I can do with it.",
    "Was your father a thief? ‘Cause someone stole the stars from the sky and put them in your eyes.",
    "Did it hurt? When you fell from heaven?",
  ];

  let pickupLine = Math.floor(Math.random() * 71);
  document.querySelector(".blog-title").innerHTML = lines[pickupLine];
};
