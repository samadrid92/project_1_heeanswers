var db = require("./models");

var help_happyList = [
  {
    title: 'pharell happy music video',
    help_link: 'https://youtu.be/y6Sxv-sUYtM' ,
    emotion: 'happy'
  },
  {
    title: 'baby and dogs compilation',
    help_link: 'https://youtu.be/ilMzs1UHEmw',
    emotion: 'happy'
  },
  {
    title: 'im happy quiz',
    help_link: 'http://www.brainyquote.com/quotes/keywords/i_am_happy.html',
    emotion: 'happy'
  }
];

var help_afraidList = [
  {
    title: 'shia do it video',
    help_link: 'https://youtu.be/cc18WsYnlfc',
    emotion: 'afraid'
  },
  {
    title: 'preacher afraid video',
    help_link: 'https://youtu.be/RXzfDmZIt5g',
    emotion: 'afraid'
  },
  {
    title: 'life hack afraid article',
    help_link: 'http://www.lifehack.org/289886/even-the-greatest-was-once-beginner-dont-afraid',
    emotion: 'afraid'
  }
];

var help_angryList = [
  {
    title: 'stonewall jackson angry video',
    help_link: 'https://youtu.be/Y0PvvIL-bLo?t=40s',
    emotion: 'angry'
  },
  {
    title: '2-step process of angry',
    help_link: 'https://www.psychologytoday.com/blog/evolution-the-self/201208/powerful-two-step-process-get-rid-unwanted-anger',
    emotion: 'angry'
  },
  {
    title: 'anger control',
    help_link: 'http://www.apa.org/topics/anger/control.aspx',
    emotion: 'angry'
  }
];

var help_sadList = [
  {
    title: 'tips on getting happy',
    help_link: 'https://youtu.be/S5nAdEgH0Ms',
    emotion: 'sad'
  },
  {
    title: 'buzzfeed happy video',
    help_link: 'https://youtu.be/uMR-LKT_Yhw',
    emotion: 'sad'
  },
  {
    title: 'webmd get happy',
    help_link: 'http://www.webmd.com/balance/guide/choosing-to-be-happy',
    emotion: 'sad'
  }
];

var help_lostList = [
  {
    title: 'ted talk find yourself',
    help_link: 'https://youtu.be/vVsXO9brK7M',
    emotion: 'lost'
  },
  {
    title: 'find yourself video' ,
    help_link: 'https://youtu.be/c7v4e4_Yfv4',
    emotion: 'lost'
  },
  {
    title: 'huffington post find yourself',
    help_link: 'http://www.huffingtonpost.com/lamisha-serfwalls/7-tips-to-find-yourself-when-youre-feeling-lost_b_7514516.html',
    emotion: 'lost'
  }
];


/// SCRIPTURES
var happyList = [
  {
    scripture: " Rejoice always, pray without ceasing, in everything give thanks; for this is the will of God in Christ Jesus for you.",
    verse: "1 Thessalonians 5:16-18",
    emotion: "happy",
    help_link: help_happyList
  },
  {
    scripture: "Rejoice in the Lord always. Again I will say, rejoice!",
    verse: "Philippians 4:4",
    emotion: "happy",
    help_link: help_happyList
  },
  {
    scripture: " Rejoicing in hope, patient in tribulation, continuing steadfastly in prayer",
    verse: "Romans 12:12",
    emotion: "happy",
    help_link: help_happyList
  },
  {
    scripture: "Whom having not seen you love. Though now you do not see Him, yet believing, you rejoice with joy inexpressible and full of glory, receiving the end of your faith—the salvation of your souls.",
    verse: "1 Peter 1:8-9",
    emotion: "happy",
    help_link: help_happyList
  },
  {
    scripture: " Until now you have asked nothing in My name. Ask, and you will receive, that your joy may be full.",
    verse: "John 16:24",
    emotion: "happy",
    help_link: help_happyList
  }
];

var afraidList = [
  {
    scripture: "For I know the thoughts that I think toward you, says the Lord, thoughts of peace and not of evil, to give you a future and a hope.",
    verse: "Jeremiah 29:11",
    emotion: "afraid",
    help_linki: help_afraidList
  },
  {
    scripture: "Yea, though I walk through the valley of the shadow of death, I will fear no evil;For You are with me; Your rod and Your staff, they comfort me.",
    verse: "Psalm 23:4",
    emotion: "afraid",
    help_link: help_afraidList
  },
  {
    scripture: "There is no fear in love; but perfect love casts out fear, because fear involves torment. But he who fears has not been made perfect in love.",
    verse: "1 John 4:18",
    emotion: "afraid",
    help_link: help_afraidList
  },
  {
    scripture: " But even if you should suffer for righteousness’ sake, you are blessed. “And do not be afraid of their threats, nor be troubled.",
    verse: "1 Peter 3:14",
    emotion: "afraid",
    help_link: help_afraidList
  },
  {
    scripture: "The Lord is my light and my salvation; Whom shall I fear? The Lord is the strength of my life; Of whom shall I be afraid?",
    verse: "Psalm 27:1",
    emotion: "afraid",
    help_link: help_afraidList
  }
];

var angryList = [
  {
    scripture: "Be angry, and do not sin”: do not let the sun go down on your wrath, nor give place to the devil.",
    verse: "Ephesians 4:26-27",
    emotion: "angry",
    help_link: help_angryList
  },
  {
    scripture: "A fool vents all his feelings, But a wise man holds them back.",
    verse: "Proverbs 29:11",
    emotion: "angry",
    help_link: help_angryList
  },
  {
    scripture: "He who is slow to wrath has great understanding, But he who is impulsive exalts folly.",
    verse: "Proverbs 14:29",
    emotion: "angry",
    help_link: help_angryList
  },
  {
    scripture: "So then, my beloved brethren, let every man be swift to hear, slow to speak, slow to wrath; for the wrath of man does not produce the righteousness of God.",
    verse: "James 1:19-20",
    emotion: "angry",
    help_link: help_angryList
  },
  {
    scripture: "Do not hasten in your spirit to be angry, For anger rests in the bosom of fools.",
    verse: "Ecclesiastes 7:9",
    emotion: "angry",
    help_link: help_angryList
  }
];

var sadList= [
  {
    scripture: "Finally, brethren, whatever things are true, whatever things are noble, whatever things are just, whatever things are pure, whatever things are lovely, whatever things are of good report, if there is any virtue and if there is anything praiseworthy, meditate on these things.",
    verse: "Philippians 4:8",
    emotion: "sad",
    help_link: help_sadList
  },
  {
    scripture: "And the Lord, He is the One who goes before you. He will be with you, He will not leave you nor forsake you; do not fear nor be dismayed.",
    verse: "Deuteronomy 31:8",
    emotion: "sad",
    help_link: help_sadList
  },
  {
    scripture: "The righteous cry out, and the Lord hears, And delivers them out of all their troubles.",
    verse: "Psalm 34:17",
    emotion: "sad",
    help_link: help_sadList
  },
  {
    scripture: "These things I have spoken to you, that in Me you may have peace. In the world you will have tribulation; but be of good cheer, I have overcome the world.",
    verse: "John 16:33",
    emotion: "sad",
    help_link: help_sadList
  },
  {
    scripture: " Beloved, do not think it strange concerning the fiery trial which is to try you, as though some strange thing happened to you; but rejoice to the extent that you partake of Christ’s sufferings, that when His glory is revealed, you may also be glad with exceeding joy",
    verse: "1 Peter 4:12-13",
    emotion: "sad",
    help_link: help_sadList
  }
];

var lostList = [
  {
    scripture: "for the Son of Man has come to seek and to save that which was lost.",
    verse: "Luke 19:10",
    emotion: "lost",
    help_link: help_lostList
  },
  {
    scripture: "Turn Yourself to me, and have mercy on me, For I am desolate and afflicted. The troubles of my heart have enlarged; Bring me out of my distresses!",
    verse: "Psalm 25:16-17",
    emotion: "lost",
    help_link: help_lostList
  },
  {
    scripture: "Fear not, for I am with you; Be not dismayed, for I am your God. I will strengthen you, Yes, I will help you, I will uphold you with My righteous right hand.",
    verse: "Isaiah 41:10",
    emotion: "lost",
    help_link: help_lostList
  },
  {
    scripture: "The Lord is my strength and my shield; My heart trusted in Him, and I am helped; Therefore my heart greatly rejoices, And with my song I will praise Him.",
    verse: "Psalm 28:7",
    emotion: "lost",
    help_link: help_lostList
  },
  {
    scripture: "Let not your heart be troubled; you believe in God, believe also in Me. In My Father’s house are many mansions; if it were not so, I would have told you. I go to prepare a place for you.",
    verse: "John 14:1-2",
    emotion: "lost",
    help_link: help_lostList
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
