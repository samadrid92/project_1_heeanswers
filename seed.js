var db = require("./models");

var happyList = [
  {
    scripture: " Rejoice always, pray without ceasing, in everything give thanks; for this is the will of God in Christ Jesus for you.",
    verse: "1 Thessalonians 5:16-18",
    emotion: "happy",
    help_link: "1aaaaaa"
  },
  {
    scripture: "Rejoice in the Lord always. Again I will say, rejoice!",
    verse: "Philippians 4:4",
    emotion: "happy",
    help_link: "1bbbbbbbb"
  },
  {
    scripture: " Rejoicing in hope, patient in tribulation, continuing steadfastly in prayer",
    verse: "Romans 12:12",
    emotion: "happy",
    help_link: "1ccccccc"
  },
  {
    scripture: "Whom having not seen you love. Though now you do not see Him, yet believing, you rejoice with joy inexpressible and full of glory, receiving the end of your faith—the salvation of your souls.",
    verse: "1 Peter 1:8-9",
    emotion: "happy",
    help_link: "1ddddddd"
  },
  {
    scripture: " Until now you have asked nothing in My name. Ask, and you will receive, that your joy may be full.",
    verse: "John 16:24",
    emotion: "happy",
    help_link: "1eeeeee"
  }
];

var afraidList = [
  {
    scripture: "For I know the thoughts that I think toward you, says the Lord, thoughts of peace and not of evil, to give you a future and a hope.",
    verse: "Jeremiah 29:11",
    emotion: "afraid",
    help_link: "2aaaaaa"
  },
  {
    scripture: "Yea, though I walk through the valley of the shadow of death, I will fear no evil;For You are with me; Your rod and Your staff, they comfort me.",
    verse: "Psalm 23:4",
    emotion: "afraid",
    help_link: "2bbbbbbbb"
  },
  {
    scripture: "There is no fear in love; but perfect love casts out fear, because fear involves torment. But he who fears has not been made perfect in love.",
    verse: "1 John 4:18",
    emotion: "afraid",
    help_link: "2ccccccc"
  },
  {
    scripture: " But even if you should suffer for righteousness’ sake, you are blessed. “And do not be afraid of their threats, nor be troubled.",
    verse: "1 Peter 3:14",
    emotion: "afraid",
    help_link: "2ddddddd"
  },
  {
    scripture: "The Lord is my light and my salvation; Whom shall I fear? The Lord is the strength of my life; Of whom shall I be afraid?",
    verse: "Psalm 27:1",
    emotion: "afraid",
    help_link: "2eeeeee"
  }
];

var angryList = [
  {
    scripture: "Be angry, and do not sin”:[f] do not let the sun go down on your wrath, nor give place to the devil.",
    verse: "Ephesians 4:26-27",
    emotion: "angry",
    help_link: "3aaaaaa"
  },
  {
    scripture: "A fool vents all his feelings, But a wise man holds them back.",
    verse: "Proverbs 29:11",
    emotion: "angry",
    help_link: "3bbbbbbbb"
  },
  {
    scripture: "He who is slow to wrath has great understanding, But he who is impulsive exalts folly.",
    verse: "Proverbs 14:29",
    emotion: "angry",
    help_link: "3ccccccc"
  },
  {
    scripture: "So then, my beloved brethren, let every man be swift to hear, slow to speak, slow to wrath; for the wrath of man does not produce the righteousness of God.",
    verse: "James 1:19-20",
    emotion: "angry",
    help_link: "3ddddddd"
  },
  {
    scripture: "Do not hasten in your spirit to be angry, For anger rests in the bosom of fools.",
    verse: "Ecclesiastes 7:9",
    emotion: "angry",
    help_link: "3eeeeee"
  }
];

var sadList= [
  {
    scripture: "Finally, brethren, whatever things are true, whatever things are noble, whatever things are just, whatever things are pure, whatever things are lovely, whatever things are of good report, if there is any virtue and if there is anything praiseworthy, meditate on these things.",
    verse: "Philippians 4:8",
    emotion: "sad",
    help_link: "4aaaaaa"
  },
  {
    scripture: "And the Lord, He is the One who goes before you. He will be with you, He will not leave you nor forsake you; do not fear nor be dismayed.",
    verse: "Deuteronomy 31:8",
    emotion: "sad",
    help_link: "4bbbbbbbb"
  },
  {
    scripture: "The righteous cry out, and the Lord hears, And delivers them out of all their troubles.",
    verse: "Psalm 34:17",
    emotion: "sad",
    help_link: "4ccccccc"
  },
  {
    scripture: "These things I have spoken to you, that in Me you may have peace. In the world you will have tribulation; but be of good cheer, I have overcome the world.",
    verse: "John 16:33",
    emotion: "sad",
    help_link: "4ddddddd"
  },
  {
    scripture: " Beloved, do not think it strange concerning the fiery trial which is to try you, as though some strange thing happened to you; but rejoice to the extent that you partake of Christ’s sufferings, that when His glory is revealed, you may also be glad with exceeding joy",
    verse: "1 Peter 4:12-13",
    emotion: "sad",
    help_link: "4eeeeee"
  }
];

var lostList = [
  {
    scripture: "for the Son of Man has come to seek and to save that which was lost.",
    verse: "Luke 19:10",
    emotion: "lost",
    help_link: "5aaaaaa"
  },
  {
    scripture: "Turn Yourself to me, and have mercy on me, For I am desolate and afflicted. The troubles of my heart have enlarged; Bring me out of my distresses!",
    verse: "Psalm 25:16-17",
    emotion: "lost",
    help_link: "5bbbbbbbb"
  },
  {
    scripture: "Fear not, for I am with you; Be not dismayed, for I am your God. I will strengthen you, Yes, I will help you, I will uphold you with My righteous right hand.",
    verse: "Isaiah 41:10",
    emotion: "lost",
    help_link: "5ccccccc"
  },
  {
    scripture: "The Lord is my strength and my shield; My heart trusted in Him, and I am helped; Therefore my heart greatly rejoices, And with my song I will praise Him.",
    verse: "Psalm 28:7",
    emotion: "lost",
    help_link: "5ddddddd"
  },
  {
    scripture: "Let not your heart be troubled; you believe in God, believe also in Me. In My Father’s house are many mansions; if it were not so, I would have told you. I go to prepare a place for you.",
    verse: "John 14:1-2",
    emotion: "lost",
    help_link: "5eeeeee"
  }
];

db.Scripture.remove({}, function(err, scriptures){

  db.Scripture.create(happyList, function(err, happyScriptures){
    if (err) { return console.log('ERROR', err); }
    console.log("all happyScriptures:", happyScriptures);
    console.log("created", happyScriptures.length, "emotion-scriptures");
  });

  db.Scripture.create(afraidList, function(err, afraidScriptures){
    if (err) { return console.log('ERROR', err); }
    console.log("all afraidScriptures:", afraidScriptures);
    console.log("created", afraidScriptures.length, "emotion-scriptures");
  });

  db.Scripture.create(angryList, function(err, angryScriptures){
    if (err) { return console.log('ERROR', err); }
    console.log("all angryScriptures:", angryScriptures);
    console.log("created", angryScriptures.length, "emotion-scriptures");
  });

  db.Scripture.create(sadList, function(err, sadScriptures){
    if (err) { return console.log('ERROR', err); }
    console.log("all sadScriptures:", sadScriptures);
    console.log("created", sadScriptures.length, "emotion-scriptures");
  });

  db.Scripture.create(lostList, function(err, lostScriptures){
    if (err) { return console.log('ERROR', err); }
    console.log("all lostScriptures:", lostScriptures);
    console.log("created", lostScriptures.length, "emotion-scriptures");
    process.exit();
  });

});
