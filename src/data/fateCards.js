// Filter by target sex
// 0 = both
// 1 = male
// 2 = female

// Dress Level
// 0 = fully clothed
// 1 = Topless
// 2 = underwear
// 3 = naked

// Promouns
// th / p1h = he
// ts / p1s = him
// tp / p1p = his

// Spice levels
//-1 = all
// 0 = kissing
// 1 = touch/lick
// 2 = intercourse
// 3 = anal etc

//////// All Done

export const fateCards = [
  {
    name: "Rats!",
    message:
      "Good news, %target%! You just scored a free Opt Out!\n\nNow here’s the bad news: You are obligated to Opt Out of the next action of any sort you are involved in. Sorry.",
    target_sex: 0,
    spice_level: -1,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 1,
    delta_optOut: 1,
    can_opt_out: false,
    appropriate_for_bi_curious: true,
  },
  {
    name: "Raffle!",
    message:
      "Congratulations, %target%! You‘ve just won fifty dollars in this weeks Sunday school raffle!",
    target_sex: 0,
    spice_level: -1,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 1,
    delta_money: 50,
    can_opt_out: false,
    appropriate_for_bi_curious: true,
  },
  {
    name: "No secrets",
    message:
      "It’s the damndest thing. Due to an unfortunate mix-up involving a briefcase, a llama, two international terrorists, and a corkscrew, you were apprehended by the police on your way to work, shot full of sodium pentathol, and interrogated for two hours.\n\nThey eventually realized their error and released you, but you’re still feeling groggy from all that truth serum. What that means is that each player gets to ask you any one question, which you must answer honestly and completely.",
    target_sex: 0,
    spice_level: -1,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 1,
    can_opt_out: false,
    appropriate_for_bi_curious: true,
  },
  {
    name: "Them’s the breaks",
    message:
      "Congratulations, %target%! You won an all-expense-paid trip to Las Vegas, where you won $200 at the blackjack tables. You spent $100 of it on a celebration dinner, $75 on a massage, and $25 on cab fare, so the whole trip didn’t cost you a dime.\n\nWell, it wouldn’t have, ’cept your wallet got stolen at the airport. You had a hundred bucks in it, too. Bummer.",
    target_sex: 0,
    spice_level: -1,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 1,
    can_opt_out: false,
    appropriate_for_bi_curious: true,
    delta_money: -100,
  },
  {
    name: "Improving the Odds",
    message:
      "%target%, I don’t think you’ve had an exciting enough sex life so far... so I’m taking away one of your Opt Outs in the hopes that will improve things a bit for you. Here’s hoping that your encounters are good ones!",
    target_sex: 0,
    spice_level: -1,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 1,
    delta_optOut: -1,
    appropriate_for_bi_curious: true,
  },
  {
    name: "Dreaming",
    message:
      "Dreams are the stuff life is made of... and %target%, yours have been centering on %player1% lately. Describe an erotic dream about %1s%. Be detailed, explicit, and creative.",
    target_sex: 0,
    spice_level: -1,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 2,
    appropriate_for_bi_curious: true,
  },
  {
    name: "Hate when that happens",
    message:
      "There you were, right in the middle of the best sex you’ve had in months, and the police come barging through your door. Seems you woke your next-door neighbor with your screams. The judge fined you $50 for disturbing the peace.\n\nJust to add insult to injury, the officer called you a showoff, too.",
    target_sex: 0,
    spice_level: -1,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 1,
    delta_money: -50,
    appropriate_for_bi_curious: true,
  },
  {
    name: "Good news, bad news",
    message:
      "%target%, the BAD news is you were visited by the Angel of Death last night. The GOOD news is that he didn’t come for you... he came for your toaster oven. The BAD news is it cost you fifty bucks to replace it.",
    target_sex: 0,
    spice_level: -1,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 1,
    delta_money: -50,
    appropriate_for_bi_curious: true,
  },
  {
    name: "Good news, bad news",
    message:
      "The good news, %target%, is that you’ve been chosen to be on TV. The BAD news is it’s a talk show segment called “The Things People Do to Llamas.” But look on the bright side: at least they gave you $100 for appearing.",
    target_sex: 0,
    spice_level: -1,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 1,
    delta_money: 100,
    appropriate_for_bi_curious: true,
  },
  {
    name: "Fate is smiling!",
    message:
      "Hey, %target%! What’s that, just lying in the middle of the road? Looks like an Opt Out. Just sitting there, just like that. You pick it up, dust it off, and stick it in your pocket.",
    target_sex: 0,
    spice_level: -1,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 1,
    delta_optOut: 1,
    appropriate_for_bi_curious: true,
  },
  {
    name: "Bad news",
    message:
      "Your telephone bill just came in today, %target%. One hundred and fifty bucks for phone sex lines! Geez! You need to slow down, y’know?",
    target_sex: 0,
    spice_level: -1,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 1,
    delta_money: -150,
    appropriate_for_bi_curious: true,
  },
  {
    name: "Bad news, good news",
    message:
      "Well, %target%, the bad news is that you were foolish enough to leave your blinds open last night, and your nosey neighbor videotaped you having sex on the floor and turned the tape over to the police.\n\nThe GOOD news is that your behavior was unusual enough to come to the attention of the National Endowment for the Arts, which awarded you a grant. And after hiring a lawyer to sue your neighbor, you still had $100 left over!",
    target_sex: 0,
    spice_level: -1,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 1,
    delta_money: 100,
    appropriate_for_bi_curious: true,
  },
  {
    name: "The interview",
    message:
      "%target%, you need a new job. Something more fun, with better pay... and you know just the thing. You’re going to apply for a position at the local bordello, and %player1% is going to give you a %m2%-minute interview.\n\nFor those two minutes, starting when you click Do It, you will describe to %1s% why you think you’re right for the job. Explain in detail your qualifications, and any particular job-related skills you have. %player1% may inquire about your experience and relevant details about your skills.",
    target_sex: 2,
    spice_level: -1,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 2,
    appropriate_for_bi_curious: true,
  },
  {
    name: "Bad news",
    message:
      "Well, well, well. All this fast living has caught up with you, %target%... you’ve just ended up in the hospital with a--how to put this delicately--social disease. Cost you $100 to take care of it.",
    target_sex: 0,
    spice_level: -1,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 1,
    delta_money: -100,
    appropriate_for_bi_curious: true,
  },
  {
    name: "Rainy day",
    message:
      "Doncha just hate when that happens? The first time you’ve ever attended the Annual Nudists Barbecue Cookfest, and it got rained out. You barely had time to grab your underwear and head for the car before the heavens opened up.\n\nYou made quite a sight, %target%...in fact, one we’d all like to see. Go take a quick run through the shower... just enough to get soaking wet. Leave your underwear on.",
    target_sex: 0,
    spice_level: -1,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 1,
    appropriate_for_bi_curious: true,
  },
  {
    name: "Learning more",
    message:
      "We’d all like to find out more about you, %target%. Please describe for us how you lost your virginity. ",
    target_sex: 0,
    spice_level: -1,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 1,
    appropriate_for_bi_curious: true,
  },
  {
    name: "Telling secrets",
    message:
      "We’re all anxious to learn more about your deepest secrets, %target%. Please describe a recurring sexual fantasy for us.",
    target_sex: 0,
    spice_level: -1,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 1,
    appropriate_for_bi_curious: true,
  },
  {
    name: "Miscellaneous expenses",
    message:
      "Bad news, %target%. A large magazine is hosting a supermodel fashion shoot at your favorite beach. Why is this bad? Because every time you go there, the models keep flocking to you and trying to kiss you. It’s very annoying.\n\nSo annoying, in fact, that you had to go out and spend fifty bucks on pepper spray just to keep them away.",
    target_sex: 0,
    spice_level: -1,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 1,
    delta_money: -50,
    appropriate_for_bi_curious: true,
  },
  {
    name: "Tax time!",
    message:
      "Guess what, %target%? It’s TAX TIME! Property taxes just took a hundred and fifty dollar bite out of your wallet. Too bad!",
    target_sex: 0,
    spice_level: -1,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 1,
    delta_money: -150,
    appropriate_for_bi_curious: true,
  },
  {
    name: "How kinky are you?",
    message:
      "%target%, please describe for us what you consider to be your strangest sexual experience. It should be something that’s actually happened to you, or that you’ve actually done.",
    target_sex: 0,
    spice_level: -1,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 1,
    appropriate_for_bi_curious: true,
  },
  {
    name: "Good news, bad news",
    message:
      "Well, what do you know? There’s an Opt Out, %target%, lying on the ground right in front of you. You reach down to pick it up...\n\n...and get your pocket picked. For two hundred dollars. They do say nothing’s really free.",
    target_sex: 0,
    spice_level: -1,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 1,
    delta_money: -200,
    appropriate_for_bi_curious: true,
  },
  {
    name: "Fond memories",
    message:
      "%target%, we want to hear more about your sex life. Please describe to us the best orgasm you’ve ever had (or the one that sticks in your mind the most), and what you were doing at the time.",
    target_sex: 0,
    spice_level: -1,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 1,
    appropriate_for_bi_curious: true,
  },
  {
    name: "Tell us something",
    message:
      "%target%, please describe for us a place you have never had sex, but would like to. Describe what you’d like to do if you had the chance to have sex there.",
    target_sex: 0,
    spice_level: -1,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 1,
    appropriate_for_bi_curious: true,
  },
  {
    name: "The Escort",
    message:
      "%target%, you just attended an important business function,  and, not wanting to go alone, called Lucky’s Escorts for an escort. Who should show up at your doorstep but %player1%.\n\nLater that night, %1h% told you about the special, unadvertised deal...%1h% will satisfy you any way you desire, but if you’re game it’ll cost $200. Otherwise, one of you will have to Opt Out.\n\nIf you both decide not to Opt Out, you will lose $200, but you may ask %player1% to do anything you like within the current spice level, as long as it does not involve losing clothing and it does not involve orgasm.",
    target_sex: 0,
    spice_level: 1,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 2,
    target_dominant: true,
    player_submissive: true,
    delta_money: -200,
    appropriate_for_bi_curious: true,
  },
  {
    name: "Cruel fate",
    message:
      "I have consulted the Book of Fate, %target%, and it seems you’re fated to wear a blindfold for your next five turns. I hope your fellow players will lead you in the right direction.",
    target_sex: 0,
    spice_level: 1,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 1,
    target_blindfolded: true,
    blindfold: true,
    appropriate_for_bi_curious: true,
  },
  {
    name: "Alien abduction",
    message:
      "It never fails! First, you get a flat tire on your way to the store, then, while you’re changing it, a flying saucer descends from the heavens and snatches you up. Naturally, the aliens strip you,  examine you, and send you back buck naked.\n\n%player1%, you get to play the part of the alien examiner. Remove %target%’s underwear, put %ts% on the table, and give %ts% a thorough, top-to-bottom examination. There should be plenty of poking and prodding going on.",
    target_sex: 0,
    spice_level: 1,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,
    lose_dress_level: true,
    appropriate_for_bi_curious: true,
  },
  {
    name: "Hospital visit",
    message:
      "%target%, time for your gynecology exam, %player1% is your doctor for this visit. %player1%, put her on the table with her legs spread and examine her.\n\nUse a pair of gloves, if you have them. Examine her thoroughly, but don’t bring her to climax!",
    target_sex: 2,
    spice_level: 1,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,
    appropriate_for_bi_curious: true,
  },
  {
    name: "The exam",
    message:
      "%target%, time for your medical checkup! %player1%, you will be playing doctor for this examination. Reach inside %target%’s pants, grasp him firmly, and tell him to turn his head and cough.",
    target_sex: 1,
    spice_level: 1,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,
    appropriate_for_bi_curious: true,
  },
  {
    name: "Good news, bad news",
    message:
      "The bad news, %target%, is that you just had a brief hospital stay that cost you $100... insurance co-pay, you know. The good news is that your head nurse was %player1%, and %1h% was very... um, eager to make your stay pleasant.\n\nSo eager, in fact, that %1h% did exactly what head nurses the world over are famous for, and gave you some. Head, that is. %player1%, if you will please do the honors. Continue to orgasm.",
    target_sex: 0,
    spice_level: 1,
    dress_level_from: 2,
    dress_level_to: 3,
    number_of_participants: 2,
    delta_money: -100,
    appropriate_for_bi_curious: true,
  },
  {
    name: "Crossed paths",
    message:
      "It’s bad enough that you got caught peeping and sent to jail, %target%, but now you’ve been assigned to %player1% on your work detail...and the two of you are shackled together.\n\nYep, for the next five turns, you and %player1% are going to be handcuffed or tied together at the wrist. This might make things interesting if either of you gets involved in any other action...",
    target_sex: 0,
    spice_level: 1,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 2,
    rope: true,
    target_restrained: true,
    player_restrained: true,
    appropriate_for_bi_curious: true,
  },
  {
    name: "Secret fate",
    message:
      "I have consulted the Book of Fate, %target%, and here’s what’s in it for you. You are fated to go off by yourself in another room, remove your clothes, and penetrate yourself with a small dildo or other toy.\n\nOnce this is done, put the clothes you just took off back on, and rejoin the rest of us. The toy will remain in you until your clothes come off.",
    target_sex: 2,
    spice_level: 1,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 1,
    dildo: true,
    appropriate_for_bi_curious: true,
  },
  {
    name: "Cruel fate",
    message:
      "%target%, the hand of fate has touched you, and it is your fate to wear a collar (or something similar) for the rest of the game.",
    target_sex: 0,
    spice_level: 1,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 1,
    collar: true,
    appropriate_for_bi_curious: true,
  },
  {
    name: "Cruel fate",
    message:
      "I have consulted the Book of Fate, %target%, and it is your fate to wear a pair of clothespins or nipple clamps on your nipples for your next 3 turns.",
    target_sex: 0,
    spice_level: 2,
    dress_level_from: 2,
    dress_level_to: 3,
    number_of_participants: 1,
    target_pain_receiving: true,
    clothespin: true,
    appropriate_for_bi_curious: true,
  },
  {
    name: "Telling fables",
    message:
      "Here’s what fate has in store for you. First, you’re going to be mounted by %player1%, who’s going to fuck your brains out. While this is happening, you’re going to call someone of your choice on the phone and talk to that person.\n\nIf you get an answering machine, you should leave a message telling a story or fairy tale while %player1% is taking you. If there’s no answer, call somebody else!",
    target_sex: 0,
    spice_level: 2,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,
    appropriate_for_bi_curious: true,
  },
  {
    name: "Hospital visit",
    message:
      "It`s that time, %target%. You need your yearly proctological exam, and %player1% is your doctor. %player1%, please examine him. Lube him up and shove your finger up his ass. Be thorough.\n\nThe exam cost you a hundred bucks, too. Insurance deductible, you know.",
    target_sex: 1,
    spice_level: 3,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,
    target_anal_receiving: true,
    player_anal_giving: true,
    delta_money: -100,
    appropriate_for_bi_curious: true,
  },
  {
    name: "Deep, dark secrets",
    message:
      "We want to hear some of your darkest secrets, %target%. Please describe to us a sexual situation you ve been involved in that has made you feel perverted or dirty. Tell us what you were doing in the fantasy, and how you felt.",
    target_sex: 0,
    spice_level: -1,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 1,
    appropriate_for_bi_curious: true,
  },
  {
    name: "Twist of Fate",
    message:
      "I have consulted the Book of Fate, %target%, and it is your fate to have a rope tied around your torso, binding your breasts firmly, for the next five turns.",
    target_sex: 2,
    spice_level: 1,
    dress_level_from: 2,
    dress_level_to: 3,
    number_of_participants: 1,
    target_restrained: true,
    rope: true,
    appropriate_for_bi_curious: true,
  },
  {
    name: "Promises of the Future",
    message:
      "%target%, here’s your fate. You’re fated to reveal more about yourself--but not at a time of your choosing.\n\nGo into another room. While you are in private, remove your shirt and write on your body some sexually explicit thing you would like to have done to you, in detail. Then put your clothes back on, when your shirt comes off, the other players will be able to read what you’ve written.",
    target_sex: 0,
    spice_level: -1,
    dress_level_from: 0,
    dress_level_to: 1,
    number_of_participants: 1,
    appropriate_for_bi_curious: true,
  },
  {
    name: "Chance Meeting",
    message:
      "%target%, there you were at the airport, waiting for your plane, when you found out that your flight was cancelled. You went to the bar for a drink when you met %player1%, who was also supposed to be on the same flight.\n\nThe two of you got to talking, and the next thing you know, you started kissing, and from there it was just a short step to making out.\n\n%target%, kiss %player1% like the two of you have never met before. Run your hands over %1p% body while %1h% runs %1s% hands over you. Sadly, after this brief encounter, you will have to part ways...",
    target_sex: 0,
    spice_level: -1,
    dress_level_from: 0,
    dress_level_to: 1,
    number_of_participants: 2,
    appropriate_for_bi_curious: true,
  },
  {
    name: "Professional Misconduct",
    message:
      "%target%, you were feeling a bit blue, so you decided to see a hypnotherapist about it. As fate would have it, you ended up in the clutches of %player1%, a hypnotist of questionable ethics.\n\n%player1%, lie %target% down comfortably and tell %ts% that %th% is getting very sleepy. When you have %ts% in your power, order %ts% to start touching and fondling you however you like.\n\n%target%, you don't want to obey, but you can't stop yourself. You are in %1p% power. You will do whatever %1h% says, kissing, fondling, and touching %1s% however %1h% wants you to...as long as it does not involve orgasm.",
    target_sex: 0,
    spice_level: -1,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 2,
    appropriate_for_bi_curious: true,
  },
  {
    name: "Programmed!",
    message:
      "Oh, no! %target%, there you were just minding your own business when you were kidnapped and taken away to the secret lair of the mad scientist %player1% for experimentation!\n\n%player1% has secretly reprogrammed you so that whenever %1h% touches your shoulder, you become a sex-starved maniac who can only think about having sex with %1s%.\n\n%player1%, you need to test your programming. Whenever you touch %target%'s shoulder, %th% should stop talking and immediately start making out with you. When you stop touching it, %1h% should stop making out with you and start demanding to be released. Make sure you test the programming thoroughly!",
    target_sex: 0,
    spice_level: -1,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 2,
    appropriate_for_bi_curious: true,
  },
  {
    name: "Very Personal Ad",
    message:
      "You were feeling a bit frisky, %target%, so you decided to spend $25 on a classified 'casual encounters' ad. As fate would have it, %player1% responded to your ad.\n\nYou quite like the idea of a casual encounter with %1s%, so you don't waste any time before you start making out with %1s%. %player1% returns the enthusiasm.\n\nYou are getting going, groping and fondling each other, kissing each other enthusiastically, when you suddenly get a case of cold feet. Just when things are getting really steamy, you get up and walk away, leaving %player1% disappointed.",
    target_sex: 0,
    spice_level: -1,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 2,
    delta_money: -25,
    appropriate_for_bi_curious: true,
  },
  {
    name: "Yoga Instruction",
    message:
      "%target%, you've been wanting to try yoga for quite some time, and you spotted an ad for %player1%'s yoga school that got glowing reviews.\n\nYou get there to discover that %player1% has an unusual approach to yoga. The first thing %1h% does is insist on removing your underwear, because %1h% says you can't really get into the spirit of it unless you're naked.\n\nThen %1h% lies you down and places you in various postures in a very...hands on way, touching, stroking, and fondling whatever %1h% likes while %1h% is doing it. You're not sure about this, but hey, you spent $30 to be here, so you go along with it.",
    target_sex: 0,
    spice_level: 1,
    dress_level_from: 2,
    dress_level_to: 2,
    number_of_participants: 2,
    lose_dress_level: true,
    delta_money: -30,
    appropriate_for_bi_curious: true,
  },
  {
    name: "The Photo Shoot",
    message:
      "It seemed like such a simple idea, %target%. You wanted some good pictures of yourself to send to your family, so you decided to hire a photographer. As fate would have it, you didn't do much research, and you ended up with %player1%.\n\n%player1%, you are an erotic photographer. You had an initial session with %target% to show %ts% the kinds of poses you'd like to do. Position %ts% in poses you find sexy.\n\n%target%, you didn't expect this. You especially didn't expect how after posing you, %player1% would take off your shirt %and bra% for even more intimate poses. And you most especially didn't expect %player1% to start fondling and kissing you while %1h% was doing it! Still, you like the idea of what the pictures might be, so you go along with it.",
    target_sex: 0,
    spice_level: -1,
    dress_level_from: 0,
    dress_level_to: 0,
    number_of_participants: 2,
    lose_dress_level: true,
    appropriate_for_bi_curious: true,
  },
  {
    name: "Silence",
    message:
      "I have consulted the Book of Fate, %target%, and it is your fate to wear a gag until the next action you're involved in that requires you to speak, kiss, or otherwise use your mouth.",
    target_sex: 0,
    spice_level: -1,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 1,
    gag: true,
    appropriate_for_bi_curious: true,
  },
  {
    name: "Learning More",
    message:
      "%target%, we'd like to learn more about you. We'd like to get to know a bit better how you lost your virginity.\n\nBut we'd like more than just a story. This is show and tell, and %player1%, you are going to take the place of %target%'s first partner.\n\n%target%, describe what led up to you losing your virginity--how you made out, how you kissed, how you touched. %player1% will help you re-enact everything up to the moment...but not the moment itself! No actual sex and certainly no orgasm!",
    target_sex: 0,
    spice_level: -1,
    dress_level_from: 2,
    dress_level_to: 3,
    number_of_participants: 2,
    appropriate_for_bi_curious: true,
  },
  {
    name: "Alternative healing?",
    message:
      "%target%, you've just read a newspaper ad about a radical new alternative healing technique pioneered by %player1% that's guaranteed to cure insomnia, heartburn, and gallstones. The article was thin on details, but you figured you'd try it.\n\n%player1%, your revolutionary treatment is very hands-on. Put %target% under a blanket. Then, without peeking, slide your hands under the blanket, remove %tp% underwear, and run your hands all over %target%'s body from head to toe. The treatment requires you to sense %target%'s aura, and the only way to do that is to let your hands tavel over %tp% entire body.",
    target_sex: 0,
    spice_level: 1,
    dress_level_from: 2,
    dress_level_to: 2,
    number_of_participants: 2,
    lose_dress_level: true,
    appropriate_for_bi_curious: true,
  },
  {
    name: "Raffle",
    message:
      "When you volunteered to help with the charity raffle at work, %target%, you didn't realize that the thing that would be raffled off is you! Once you showed up and figured it out, it was too late to back out.\n\nGuess what, %player1%? You won the raffle! %target% is your prize. Give %ts% an inspection to make sure you're satisfied with the prize, pleae feel free to poke and prod at will. When you're done with the inspection, you may fondle, kiss, or do whatever else you like, providing you don't go between %tp% legs or do anything that causes orgasm.\n\n%target%, %player1% won you fair and square, you can't protest or resist.",
    target_sex: 0,
    spice_level: -1,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 2,
    appropriate_for_bi_curious: true,
  },
  {
    name: "Confusion",
    message:
      "The bondage porn company was looking to hire two new people, an accountant and a bondage star.\n\n%target%, you applied for the accounting job. Unfortunately, your application got put in the wrong pile. So when %player1% invited you in for an interview, the first thing %1h% did was tie your hands and feet together. Before you could explain the confusion, %player1% was already into the hands-on part of the interview, groping and squeezing you, putting %1p% fingers in your mouth, feeling you up all over.\n\nGood news, though! You got the job! And it pays so much better than accounting that you just can't help giving %player1% a big kiss when %1h% finally unties you.",
    target_sex: 0,
    spice_level: -1,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 2,
    appropriate_for_bi_curious: true,
  },
  {
    name: "Discipline",
    message:
      "When you took the job working as %player1%'s personal assistant, %target%, you didn't realize that %1h% had such strong ideas about discipline.\n\nSo when you made a typing mistake in a letter you wrote for %1s%, it was time to pay the piper.\n\n%player1%, grab %target% by the hair, pull %tp% head back, and blindfold %ts%. Slap %tp% face, twist %tp% nipples roughly through %tp% shirt, and tell %tp% that such mistakes won't be permitted in the future. While you're still holding %tp% hair, nuzzle %tp% neck, kiss %tp%, and tell %ts% that good performance will be rewarded, but poor performance will be severely punished.",
    target_sex: 0,
    spice_level: 3,
    dress_level_from: 0,
    dress_level_to: 0,
    number_of_participants: 2,
    blindfold: true,
    target_pain_receiving: true,
    target_blindfolded: true,
    player_pain_giving: true,
    appropriate_for_bi_curious: true,
  },
  {
    name: "Dream Interpreter",
    message:
      "%target%, you've been having strange dreams lately, centering around sexual images. You've gone to %player1%, a well-known dream interpreter, to help you figure out what they mean.\n\nDescribe an erotic dream in detail, while showing %player1% exactly what happens in it. When you are finished, %1h% will tell you what it means.",
    target_sex: 0,
    spice_level: -1,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 2,
    appropriate_for_bi_curious: true,
  },
  {
    name: "Street Performer",
    message:
      "There you were, %target%, just walking down the street, when you encountered %player1% doing a street performance as a statue. You were so impressed by %player1%'s performance that you asked %1s% to teach you %1p% secrets.\n\nIt turns out that the first rule of pretending to be a statue is to be able to ignore any distraction. %player1% agreed to teach you how to do this, but %1p% technique is...unorthodox.\n\n%player1%, for the next %m1% minute, you may place %target% into any pose you like. %target% must remain perfectly still in that pose while you try to distract %ts%, which you can do by fondling, groping, kissing, biting, squeezing, and feeling up %tp% body.",
    target_sex: 0,
    spice_level: -1,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 2,
    appropriate_for_bi_curious: true,
  },
  {
    name: "You're Under Arrest",
    message:
      "Guess what, %target%? You were just arrested for solicitation! Of course the charge is totally bogus, but you're still being booked into jail anyway.\n\nGuess what else? The officer who is processing you is %player1%.\n\n%player1%, you need to make sure %target% is not carrying contraband. Do a thorough strip-search of %target%, and I do mean thorough.",
    target_sex: 0,
    spice_level: 1,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,
    //
    lose_dress_level: true,
    //
    appropriate_for_bi_curious: true,
  },
  {
    name: "Shopping Sweepstakes",
    message:
      "Good news, %target%! You're the grand prize winner in a radio giveaway! You've just won a shopping spree at the Market, and $250 to spend however you like. Congratulations!",
    target_sex: 0,
    spice_level: -1,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 1,
    delta_money: 250,
    appropriate_for_bi_curious: true,
  },
  {
    name: "Professional Misconduct II",
    message:
      "%target%, you were feeling a bit blue, so you decided to see a hypnotherapist about it. As fate would have it, you ended up in the clutches of %player1%, a hypnotist of questionable ethics.\n\n%player1%, lie %target% down comfortably and tell %ts% that %th% is getting very sleepy. When you have %ts% in your power, order %ts% to start running %tp% hands over %tp% body, masturbating for you in any way you choose.\n\n%target%, you are powerless to resist. You will touch your body, fondle it, and do whatever else %1h% tells you to do. Sadly, the hypnosis prevents you from being able to come, however.",
    target_sex: 0,
    spice_level: -1,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,
    appropriate_for_bi_curious: true,
  },
  {
    name: "Psychic Encounters",
    message:
      "%target%, you decided to consult a well-known psychic, %player1%, to see what the future holds for you.\n\n%player1% examined your palm and then announced that you would soon be involved in a steamy, sordid affair...with %player2%. %player1% describes, in detail, exactly how you will make out with %player2% and what your hands will be doing while you're making out.\n\nAs you were leaving, wouldn't you know it? You bump into %player2%! And sure enough, you make out with %2s% exactly the way %player1% described.",
    target_sex: 0,
    spice_level: -1,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 3,
    appropriate_for_bi_curious: true,
  },
  {
    name: "A Secret Life",
    message:
      "%target%, nobody knows this, but you have secretly been living two lives. In one life, you are a respectable, upstanding citizen of a conservative town. In the other, you are a wild, popular Webcam performer.\n\nNobody knows, that is, until %player1% recognizes you from the Internet! In this conservative town, people might not react well if they learned your secret.\n\nSo %player1% decides to blackmail you! In exchange for %1p% silence, you will make out with %1s%, caressing, kissing, massaging, and fondling %1s% however %1h% likes. You have no choice but to go along, doing whatever %1h% says...as long as it does not involve removing clothing or anything that causes either of you to get off.",
    target_sex: 0,
    spice_level: -1,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 2,
    appropriate_for_bi_curious: true,
  },
  {
    name: "Atonement",
    message:
      "%target%, you feel like it's been a while since you properly atoned for your sins, so you decided it's probably time for a confession.\n\nUnfortunately, what you didn't know is that the priest was out to lunch, and filling in was...%player1%.\n\nYou are going to confess your sins to %player1%. Afterward, %1h% will tell you to do penance. Only not the kind of penance you're used to, instead of Hail Marys, he will direct you to do nipple-pinchings and masturbation.\n\nYou think it's a little odd, but who are you to question? Do what %player1% directs...as long as you don't reach orgasm!",
    target_sex: 0,
    spice_level: 1,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,
    appropriate_for_bi_curious: true,
  },
  {
    name: "Bread & Butter",
    message:
      "Ever wonder what the bologna in a sandwich feels like? %target%, you're the meat in the middle. %player1% is going to stand in front of you. %player1% will kiss you, caress you, and fondle you. While this is happening, %player2% will stand behind you, kiss your neck, and caress your body.\n\nThis is only going to go on for %d60% seconds, so enjoy it while it lasts!",
    target_sex: 0,
    spice_level: -1,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 3,
    appropriate_for_bi_curious: true,
  },
];
