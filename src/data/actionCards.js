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

export const actionCards = [
  {
    name: "All the way down",
    message:
      "Okay, %target%, lie down on your stomach and close your eyes. %player1%, begin nibbling the back of %target%’s neck. While you do this, run your hands along %tp% shoulders, back, and sides.\n\nWhen you have finished nibbling %target%'s neck, massage your way down %tp% body, working your way all the way down %tp% legs to %tp% feet.",
    target_sex: 0,
    spice_level: 0,
    dress_level_from: 0,
    dress_level_to: 2,
    number_of_participants: 2,
    appropriate_for_bi_curious: true,
  },
  {
    name: "The vampire card",
    message:
      "Time for a more personal introduction. %target%, you will sit in %player1%’s lap. For the next %d20% seconds, %player1% will nibble, bite, and lick your neck and ears. Time will start when you click “Do It.”\n\n%player1%, you and %target% may, if you wish, feel free to let your hands roam over each other's bodies while this happens...provided you do not go under any clothing.",
    target_sex: 0,
    spice_level: 0,
    dress_level_from: 0,
    dress_level_to: 2,
    number_of_participants: 2,
    appropriate_for_bi_curious: true,
  },
  {
    name: "Magic Touch",
    message:
      "%target%, lie down comfortably on your stomach. For the next %d60% seconds, %player1% will offer you a sensual massage of your back and shoulders. Time starts when you click Do It.\n\n%player1%, please feel free to kiss the back of %target%'s neck if you like.",
    target_sex: 0,
    spice_level: 0,
    dress_level_from: 0,
    dress_level_to: 2,
    number_of_participants: 2,
    appropriate_for_bi_curious: true,
  },
  {
    name: "Nibble n Tease",
    message:
      "Let’s get a bit risqué! %player1%, press your nose against %target%’s chest. Then, slowly, circle %tp% right breast, and nip at %tp% right nipple through %tp% shirt until %target% squirms.\n\nWhen that happens, trace a path back to where you started, and do the same thing to %target%’s left nipple.",
    target_sex: 0,
    spice_level: 0,
    dress_level_from: 0,
    dress_level_to: 0,
    number_of_participants: 2,
    appropriate_for_bi_curious: true,
  },
  {
    name: "Vive l’France!",
    message:
      "%player1%, time to give %target% a deep, passionate kiss. Take it slow, and use plenty of tongue. During this kiss, you may caress, fondle, or touch any unclothed part of %tp% body that you want.",
    target_sex: 0,
    spice_level: 0,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Mission: Difficult",
    message:
      "%player1%, your task, should you choose to accept it, is to remove %target%’s shirt %and bra%...\n\n...without use of your hands.\n\nGood luck!",
    target_sex: 0,
    spice_level: 0,
    dress_level_from: 0,
    dress_level_to: 0,
    number_of_participants: 2,

    lose_dress_level: true,
    appropriate_for_bi_curious: true,
  },
  {
    name: "Personal Servant",
    message:
      "%player1%, you are %target%’s obedient servant. You are to remove %tp% shirt %and bra% in whatever manner %th% chooses. %target% will tell you exactly how to do this, and what else to do while you are doing it. %target% may, for example, tell you how and where to kiss %ts%, stroke %ts%, and so on.\n\n%target%, you can be as creative as you want. If you like, you may tell %player1% to kiss, caress, stroke, massage, or fondle you, it's entirely up to you.\n\n%player1%, your job is to follow %target%’s instructions, completely and to the letter.",
    target_sex: 0,
    spice_level: 0,
    dress_level_from: 0,
    dress_level_to: 0,
    number_of_participants: 2,

    lose_dress_level: true,
    appropriate_for_bi_curious: true,

    target_dominant: true,
    player_submissive: true,
  },
  {
    name: "Play coy...",
    message:
      "%player1%, you and %target% are on your first date. Things start getting heavy... Caress %target% and kiss her neck, then remove her shirt and bra and fondle her breasts.\n\n%target% is unsure about this at first, so will play coy and try to prevent you from removing her clothing. Ultimately, though, you persevere, seducing %ts% with your kisses and caresses, and the clothing comes off.",
    target_sex: 2,
    spice_level: 0,
    dress_level_from: 0,
    dress_level_to: 0,
    number_of_participants: 2,

    target_resisting: true,

    lose_dress_level: true,
    appropriate_for_bi_curious: true,
  },
  {
    name: "Hunting Tiger",
    message:
      "%player1%, you’re a big hunting cat. %target% looks like a prey animal to you. Stalk him, tackle him, pin him to the ground, and rip his shirt from his body.\n\nOnce his shirt is off, devour his bare chest, paying particularly close attention to his nipples. Feel free to let your hands wander wherever you like while you're doing this.",
    target_sex: 1,
    spice_level: 0,
    dress_level_from: 0,
    dress_level_to: 0,
    number_of_participants: 2,

    player_forceful: true,

    lose_dress_level: true,
    appropriate_for_bi_curious: true,
  },
  {
    name: "Soft kisses and smiles",
    message:
      "%target%, relax and close your eyes. %player1% will begin kissing your face, starting at your forehead and touring your eyelids, ears, cheeks, and neck, and finally give you a long, deep, passionate kiss on the lips.\n\nYou should return the kiss with enthusiasm. Feel free to let your hands run up %1p% back while you kiss.",
    target_sex: 0,
    spice_level: 0,
    dress_level_from: 0,
    dress_level_to: 1,
    number_of_participants: 2,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Gently, from behind...",
    message:
      "%player1%, stand behind %target%. Wrap your arms around %tp% body, kiss %tp% neck, caress %tp% chest, and then run your hands up under %tp% shirt. While you continue to kiss and nibble %tp% neck, slide %tp% shirt %and bra% off...slowly and sensuously.",
    target_sex: 0,
    spice_level: 0,
    dress_level_from: 0,
    dress_level_to: 0,
    number_of_participants: 2,

    lose_dress_level: true,
    appropriate_for_bi_curious: true,
  },
  {
    name: "A mild tease...",
    message:
      "%player1%, stand up and take %target% in your arms for a soft kiss. Sensuously caress %tp% body while you press against %ts%. Run your hands all over %tp% body.\n\nWhen you have %tp% attention, slide your hands up under %tp% shirt and play with %tp% nipples. Keep kissing %ts% while you do this.",
    target_sex: 0,
    spice_level: 0,
    dress_level_from: 0,
    dress_level_to: 1,
    number_of_participants: 2,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Exploration",
    message:
      "%target%, lie on your stomach and close your eyes. %player1% will begin kissing you on the back of your neck, then slowly work %1p% way down your back, gently kissing and licking until reaching your waist.\n\n%player1%, while you're doing this, please feel free to let your hands roam up and down %target%'s sides or over %target%'s back, or anywhere else you like.",
    target_sex: 0,
    spice_level: 0,
    dress_level_from: 1,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: true,
  },
  {
    name: "The human touch",
    message:
      "%player1%, %target% is to stand passively before you. Slide your hands along the curves of %tp% body, then slowly slip off %tp% shirt %and bra%. Once this is done, get in front of %target% and kiss and lick each nipple for a minute or so.\n\n%target%, remain passive while this is happening. You should not move, speak, or touch %1s% in any way.",
    target_sex: 0,
    spice_level: 0,
    dress_level_from: 0,
    dress_level_to: 0,
    number_of_participants: 2,

    lose_dress_level: true,
    appropriate_for_bi_curious: true,
  },
  {
    name: "Light touch",
    message:
      "%player1%, kiss %target% on %tp% inner wrist. Continue working your way up %tp% arm until you reach %tp% neck. Don’t rush.",
    target_sex: 0,
    spice_level: 0,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Getting acquainted",
    message:
      "%target%, lie passively on your back while %player1% kneels over you. %player1%, run your hands along the shape of %tp% body under %tp% clothes. Start at %tp% shoulders, and follow %tp% curves down to %tp% feet, then retrace your path back up again.\n\nThis should be a get-acquainted caress, don’t rush, but don’t linger over any particular place, either.",
    target_sex: 0,
    spice_level: 0,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: true,
  },
  {
    name: "More heat",
    message:
      "Let’s turn up the heat a little. %target%, lie on your back with your arms above your head. %player1% will get on top of you and pin your body against %1p% while kissing you passionately. You enjoy this, return %1p% kisses with enthusiasm.\n\nThis kiss will last for %d30% seconds, at the end of which time you should both be quite breathless. Time begins when you click “Do it.”",
    target_sex: 0,
    spice_level: 0,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Frisk ’em!",
    message:
      "%player1%, you’re a police officer on %1p% beat. You spot %target% behaving suspiciously. Order %ts% to lean against the wall, and give %tp% a thorough pat-down for concealed weapons. Don't miss any potential hiding places! It's important to be sure %th% has been thoroughly searched.",
    target_sex: 0,
    spice_level: 0,
    dress_level_from: 0,
    dress_level_to: 2,
    number_of_participants: 2,

    appropriate_for_bi_curious: false,
  },
  {
    name: "Hints & Promises",
    message:
      "%player1%, take %target%’s hand in yours. Extend his index finger, and begin lightly licking and nibbling at the tip. Then, slowly lick the length of his finger, and finally take it teasingly into your mouth.\n\nAfter you have teased his finger for a while, suck on it in earnest, as though it were...well, you get the idea. ",
    target_sex: 1,
    spice_level: 0,
    dress_level_from: 0,
    dress_level_to: 2,
    number_of_participants: 2,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Getting more serious...",
    message:
      "Okay, %player1%, let’s get more risqué. Remove %target%’s pants for %ts%, then have %ts% lie comfortably on %tp% back. Massage %tp% feet and ankles, then slowly work your way up %tp% legs until you end at %tp% inner thighs. Continue massaging and carressing %tp% inner thighs and trace your fingers around %tp% underwear, but do not go over or inside it.",
    target_sex: 0,
    spice_level: 0,
    dress_level_from: 1,
    dress_level_to: 1,
    number_of_participants: 2,

    lose_dress_level: true,
    appropriate_for_bi_curious: false,
  },
  {
    name: "Feelin’ up...",
    message:
      "Doesn’t the sight of exposed flesh drive you mad? %player1%, let’s see how passionate you are. Kiss %target% intensely while running your hand up %tp% inner thigh, until you are feeling up %tp% crotch.\n\nKeep this up until you make %target% squirm. However, no cheating! Your hand must stay OUTSIDE of %tp% pants, and don’t let either of you lose control!",
    target_sex: 2,
    spice_level: 0,
    dress_level_from: 2,
    dress_level_to: 2,
    number_of_participants: 2,

    appropriate_for_bi_curious: false,
  },
  {
    name: "Still more teasing",
    message:
      "%player1%, stand up and take %target% in your arms. Hold %ts% tightly against your body, and grope and fondle %ts% while you kiss %ts% passionately. The whole time, you should be grinding your hips against %tp% crotch.\n\n%target%, you enjoy the tease, return the attention enthusiastically. Let your hands run up and down %player1% while %1h% grinds against you. Feel free to kiss %1p% neck while this is happening.",
    target_sex: 0,
    spice_level: 0,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: false,
  },
  {
    name: "So close, yet so far",
    message:
      "%target%, lie back and relax while %player1% kneels over you.\n\n%player1%, beginning at the most sensitive part of %target%’s inner thighs, trace the outlines of %tp% underwear with your tongue. You may caress %tp% legs or kiss %tp% belly while you do this, but you may not go under, over, or into %tp% underwear.",
    target_sex: 0,
    spice_level: 0,
    dress_level_from: 2,
    dress_level_to: 2,
    number_of_participants: 2,

    appropriate_for_bi_curious: false,
  },
  {
    name: "Voyage of discovery",
    message:
      "%player1%, you are about to embark on a voyage of exploration. As %target% sits passively, you are going to kiss every square inch of exposed flesh, beginning at %tp% right ear.\n\nNo going out of bounds! Any place covered by clothing is off-limits. Sorry!",
    target_sex: 0,
    spice_level: 0,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Light touch",
    message:
      "%target%, close your eyes while %player1% sensuously caresses your breasts until your nipples become erect.\n\n%player1%, you should make this experience as sensual as possible. You may caress %target%’s neck, face, and back as well, and you may also kiss her neck, face, or shoulders if you like, but you should focus your attention primarily on her breasts.",
    target_sex: 2,
    spice_level: 0,
    dress_level_from: 1,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Another challenge",
    message:
      "OK, %player1%, time for a bit of fun. While %target% stands in front of you, you will kiss your way down %tp% body, starting at %tp% forehead. You may not touch %ts% at all with your hands.\n\nWhen you reach %tp% waist, you are going to unfasten %tp% pants, still without use of your hands. Once this is done, remove them (but not %tp% underwear!) however you see fit.",
    target_sex: 0,
    spice_level: 0,
    dress_level_from: 1,
    dress_level_to: 1,
    number_of_participants: 2,

    lose_dress_level: true,
    appropriate_for_bi_curious: true,
  },
  {
    name: "Relaxation",
    message:
      "%target%, lie on your back on the floor. %player1% will kneel by your head and offer you a breast and upper body massage for %d60% seconds.",
    target_sex: 2,
    spice_level: 0,
    dress_level_from: 1,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Behind the knee",
    message:
      "%target%, please lie passively on your stomach. %player1% is going to kiss and lick the sensitive parts of your legs, paying particular attention to your inner thighs and behind your knees.",
    target_sex: 0,
    spice_level: 0,
    dress_level_from: 2,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Playing coy",
    message:
      "%target%, you and %player1% are on your first date. The two of you are making out, and things progress to the point where %player1% tries to slip you out of your pants.\n\nYou’re not too sure about this, so act shy...but as %player1% fondles, caresses, and kisses you, you find that you can’t resist, and off they come.",
    target_sex: 0,
    spice_level: 0,
    dress_level_from: 1,
    dress_level_to: 1,
    number_of_participants: 2,

    lose_dress_level: true,
    appropriate_for_bi_curious: true,
  },
  {
    name: "More teasing...",
    message:
      "%target%, you’re going to sit back while %player1% sits in your lap. %player1%, for the next %m2% minutes, wriggle against %tp% crotch while kissing %ts% teasingly in whatever manner you choose. Feel free to stroke, caress, or fondle any unclothed part of %tp% body while you do.\n\n%target%, during all of this you are not allowed to touch %player1% or participate actively in any way, your role is simply to enjoy the experience. ",
    target_sex: 1,
    spice_level: 0,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: false,
  },
  {
    name: "A closer introduction",
    message:
      "%player1%, hold %target% tightly against you and run your hands up and down %tp% back while giving %ts% twenty small kisses on %tp% face, neck, ears, and shoulders.",
    target_sex: 0,
    spice_level: 0,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Who’s teasing whom?",
    message:
      "%player1%, you are to stand behind %target%. While %target% reaches around, holds you against %ts%, and grinds backward against you, you will run your hands down %tp% body and unfasten %tp% pants.\n\nWhen this is done, %target% will turn around and continue to grind and wriggle against you while you remove %tp% pants. You may not remove %tp% underwear yet, however.",
    target_sex: 0,
    spice_level: 0,
    dress_level_from: 1,
    dress_level_to: 1,
    number_of_participants: 2,

    lose_dress_level: true,
    appropriate_for_bi_curious: false,
  },
  {
    name: "Just a hint",
    message:
      "%player1%, you will lie on your back on the floor while %target% gets on her hands and knees over you. Spend the next %d60% seconds kissing her. While you do this, run your hands over %ts%, stroking her neck, sides, arms, and breasts.",
    target_sex: 2,
    spice_level: 0,
    dress_level_from: 1,
    dress_level_to: 2,
    number_of_participants: 2,

    appropriate_for_bi_curious: true,
  },
  {
    name: "On Top of the World",
    message:
      "%target%, %player1% is going to lie on %1p% back and let you kneel over %1s%. %player1%’s job is to remove your pants from %1p% position  beneath you. Your job is to make it hard.\n\nYou may wiggle and squirm against %1p% body, kiss %1s%, nuzzle %1s%, grind against %1s%, and otherwise do whatever you can to distract %1s% from taking off your pants. Don't make it TOO difficult, though! When all is said and done, off they come. ",
    target_sex: 0,
    spice_level: 0,
    dress_level_from: 1,
    dress_level_to: 1,
    number_of_participants: 2,

    lose_dress_level: true,
    appropriate_for_bi_curious: true,
  },
  {
    name: "Personal Instruction",
    message:
      "%target%, it’s time to show %player1% what you like. Take %1p% hands and place them on your body wherever you choose. Move %1p% hands over your body while you describe, in detail, how and where you like to be touched. Show %1s% all the places that get you going.\n\nThere are rules, though. You may not take off, or go under, any of your clothes!",
    target_sex: 0,
    spice_level: 0,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Jumping in feet first",
    message:
      "%player1%, this is a simple one. You are going to stimulate %target%’s nipples by tugging and tweaking them until they’re erect. The catch? You may use only your toes.\n\nIf you still have your shoes on, take them off for this card--but put them back when you’re done!",
    target_sex: 0,
    spice_level: 0,
    dress_level_from: 1,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Woodpecker kisses",
    message:
      "%player1%, in the next %d10% seconds (starting from when you hit “Do It”), you will kiss %target% 10 times on 10 different unclothed parts of %tp% body. You may choose where to kiss %ts%, any place not covered by clothing is fair game.",
    target_sex: 0,
    spice_level: 0,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Innocent fun",
    message:
      "%player1%, please massage %target%’s temples for %d60% seconds. A timer will start automatically when you hit “Do It.” If you like, you may kiss %tp% forehead while you do this.",
    target_sex: 0,
    spice_level: 0,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Explorations",
    message:
      "%player1%, spend the next %m2% minutes (starting from when you click “Do It”) kissing %target% on any part of %tp% body you wish.\n\nYou may not remove any clothing, but other than that, feel free to kiss %ts% wherever and however you choose.",
    target_sex: 0,
    spice_level: 0,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Let's see it all!",
    message:
      "%player1%, stand behind %target%. Kiss the back of her neck as you massage her shoulders. Allow your hands to roam down her body, fondle her breasts and caress her stomach while you continue the kisses.\n\nWhen you reach %target%'s panties, slide one hand inside. Penetrate her with your fingers, and slide her panties off with your other hand. Don’t bring her off yet! Save that for later...",
    target_sex: 2,
    spice_level: 1,
    dress_level_from: 2,
    dress_level_to: 2,
    number_of_participants: 2,

    lose_dress_level: true,
    appropriate_for_bi_curious: false,
  },
  {
    name: "How sweet it is",
    message:
      "%player1%, you're feeling hungry...and %target% looks like a tempting dessert. Drizzle some whipped cream on any exposed part of %tp% body and feast away.\n\nShow some restraint! You may not move or remove any clothing, nor may you lick or touch any unexposed part of %tp% flesh...",
    target_sex: 0,
    spice_level: 1,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 2,

    cream: true,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Worshipping Venus",
    message:
      "%player1%, as %target% stands before you like a goddess, you fall to your knees awestruck by her beauty. Kneel in front of her, kiss and lick her nipples, and run your hand up her inner thigh.\n\nOnce you reach her panties, press your thumb against her clitoris and stroke her until she is aquiver with sexual energy. You may not, however, go inside her panties...and don’t bring her to climax yet!",
    target_sex: 2,
    spice_level: 1,
    dress_level_from: 2,
    dress_level_to: 2,
    number_of_participants: 2,

    appropriate_for_bi_curious: false,
  },
  {
    name: "Piece of cake",
    message:
      "Okay, %player1%, this is an easy one: You are to remove %target%’s underwear without the use of your hands. What could be simpler?",
    target_sex: 0,
    spice_level: 1,
    dress_level_from: 2,
    dress_level_to: 2,
    number_of_participants: 2,

    lose_dress_level: true,
    appropriate_for_bi_curious: false,
  },
  {
    name: "The upper hand",
    message:
      "%target%, you’re feeling very aggressive today. You and %player1% are going to kneel on the floor and kiss one another passionately until you think you’re both appropriately excited.\n\nWhen you feel like you’re ready, attack %player1%, wrestle %1s% to the ground, pin %1s% down, and straddle %1s%. Grind your hips against %1p% until %1h% is insane with lust. Make sure neither of you gets off, though!",
    target_sex: 2,
    spice_level: 1,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: false,
  },
  {
    name: "Seductive charms",
    message:
      "%target%, %player1% is slowly seducing you...and you feel helpless to resist. Close your eyes and relax as %player1% backs you against a wall and pins your hands above your head.\n\n%player1%, you will hold %target% there with one hand while your other hand roams down %tp% body. Unfasten %tp% pants and arouse %ts% by sliding your hand into %tp% underwear. You may not remove the underwear, and no orgasm allowed!\n\nWhen you believe %th% is aroused, take off %tp% pants, but leave the underwear on.",
    target_sex: 0,
    spice_level: 1,
    dress_level_from: 1,
    dress_level_to: 1,
    number_of_participants: 2,

    lose_dress_level: true,
    appropriate_for_bi_curious: false,
  },
  {
    name: "Messy situation, part I",
    message:
      "Have you ever heard the expression “Sex is dirty only if it’s done right?” %player1%, please kneel in front of %target%, grasp his cock firmly, and stroke him until he explodes all over you.\n\nAfter he has done so, give him a nice, close hug to show him how much you appreciate him. If you’ve done this properly, you should both end up quite a mess. (Hey, sex is supposed to be messy! That’s one of its charms!)",
    target_sex: 1,
    spice_level: 1,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    target_will_orgasm: true,

    appropriate_for_bi_curious: false,
  },
  {
    name: "Hints and Promises",
    message:
      "%player1%, let’s see how imaginative you are. While your hands roam all over %target%’s body, explain to %ts%, in detail, precisely what you would like to do to %ts% once all %tp% clothes finally come off. Be explicit, describe the kinds of sexual acts you would like to perform on %ts%.\n\nYou may kiss, nibble, and fondle whatever unclothed parts of %target%’s body you wish while you do this. Keep it up for %d90% seconds. Time starts when you hit ”Do It.”",
    target_sex: 0,
    spice_level: 1,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: false,
  },
  {
    name: "Up close & personal",
    message:
      "Time to take it all off! %player1%, you are to remove %target%’s underwear, exposing him in all his glory. Then, position him however you want him and get him hard, without touching him with your hands.\n\nBe as creative as you want, you may rub, stroke, and caress him any way you choose to, but use of hands is strictly forbidden. Don’t let him climax just yet, either.",
    target_sex: 1,
    spice_level: 1,
    dress_level_from: 2,
    dress_level_to: 2,
    number_of_participants: 2,

    lose_dress_level: true,
    appropriate_for_bi_curious: false,
  },
  {
    name: "Intimate massage for him",
    message:
      "%player1%, %target% is going to enjoy an intimate massage at your hands. While he lies on his back, you will begin massaging his shoulders, and work your way down to his feet. Pay special attention to his nipples.\n\nWhen you reach his penis, you should linger for an extra minute or so, stroking and rubbing before moving down toward his feet. Be careful not to bring him off, though! The whole massage should not take more than five minutes.",
    target_sex: 1,
    spice_level: 1,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: false,
  },
  {
    name: "Intimate massage for her",
    message:
      "%player1%, %target% is going to enjoy an intimate massage at your hands. While she lies on her back, you will begin massaging her shoulders, and work your way down to her feet. Pay special attention to her breasts and nipples.\n\nLinger for an extra minute at her thighs. Penetrate her with your fingers, and run your thumb along her clitoris before moving down toward her feet. Be careful not to bring her off!",
    target_sex: 2,
    spice_level: 1,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: false,
  },
  {
    name: "A not-so-mild tease",
    message:
      "%player1%, you are going to lie on your back while %target% straddles you. Strip off her shirt and bra, and kiss her passionately while she grinds her hips against you as though riding you to pleasure.\n\n%target%, you should keep riding %1s% while allowing %1s% to kiss and fondle your breasts until you have %1s% too agitated to take any more. At that point, you should stand up, smile at %1s%, and say “Just kidding!” Don’t let %1s% orgasm!",
    target_sex: 2,
    spice_level: 1,
    dress_level_from: 0,
    dress_level_to: 0,
    number_of_participants: 2,

    lose_dress_level: true,
    appropriate_for_bi_curious: false,
  },
  {
    name: "First hints",
    message:
      "%player1%, you’re going to help get things started by removing %target%’s shoes and socks and taking %tp% right foot in your hand. Describe explicitly and in detail one pleasurable thing you would like to do to %ts% for each toe. It may be as mild or as dirty as you like, but please be vivid in your descriptions!",
    target_sex: 0,
    spice_level: 0,
    dress_level_from: 0,
    dress_level_to: 0,
    number_of_participants: 2,

    lose_dress_level: true,
    appropriate_for_bi_curious: true,
  },
  {
    name: "What I like",
    message:
      "%target%, you’re going to begin showing %player1% some of the things you like. Take %1p% hands and slide them under your shirt, and for the next %d60% seconds show %1s% how to fondle and caress you.\n\nWhile you are showing %1s% how you like to be touched, you may also feel free to kiss %1p% face and neck. %player1%, please feel free to kiss %target% as well.",
    target_sex: 2,
    spice_level: 1,
    dress_level_from: 0,
    dress_level_to: 0,
    number_of_participants: 2,

    appropriate_for_bi_curious: true,
  },
  {
    name: "More of what I like",
    message:
      "%target%, it’s time to continue %player1%’s education in the things you like. Place %1p% hands anywhere on your body that you wish, and for %d60% seconds demonstrate how you like to be touched. While this is happening, there should be plenty of kissing and nibbling, too.\n\nOf course, there is a catch. You may not put %1p% hands underneath any of your clothing, and of course you may not have %1s% touch you in any way that might cause orgasm.",
    target_sex: 0,
    spice_level: 1,
    dress_level_from: 1,
    dress_level_to: 2,
    number_of_participants: 2,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Still more of what I like",
    message:
      "%target%, let’s take %player1%’s education even further. Place %1p% hands between your legs (inside your underwear, if you like) and for %d60% seconds show %1s% how to touch and rub you. Do not, however, let things get to the point where you reach orgasm.",
    target_sex: 0,
    spice_level: 1,
    dress_level_from: 2,
    dress_level_to: 2,
    number_of_participants: 2,

    appropriate_for_bi_curious: false,
  },
  {
    name: "Santa’s little helper",
    message:
      "Remember visiting Santa Claus when you were young? %target%, Christmas is early this year, and %player1% is filling in for Santa. Sit on %1p% lap and give %1s% a wish list of things you hope will happen to you as the evening goes on.\n\nBe creative and explicit! While you're giving %player1% your list, %1h% should let his hands wander over your body. Both of you should be getting quite excited by the time you’re through.",
    target_sex: 2,
    spice_level: 1,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: true,
  },
  {
    name: "The strip search",
    message:
      "%player1%, this time it’s your turn to play policeman. %target% seems to be behaving suspiciously to you, pin him against the wall and frisk him.\n\nYou will find a suspicious bulge in his pants, which will necessitate removing the pants to verify that it is not a concealed weapon. Caution is always advisable, please be thorough!",
    target_sex: 1,
    spice_level: 1,
    dress_level_from: 1,
    dress_level_to: 1,
    number_of_participants: 2,

    lose_dress_level: true,
    appropriate_for_bi_curious: false,
  },
  {
    name: "Simple pleasures",
    message:
      "%player1%, this is an easy one. You are going to take a sponge and some warm water and give %target% a sponge bath. Start at %tp% head and work down to %tp% feet, make sure you don’t take longer than five minutes.",
    target_sex: 0,
    spice_level: 1,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    sponge: true,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Heating up",
    message:
      "%player1%, sit back and relax. %target% is going to tease you by putting on some music and giving you a VERY sexy lap dance. She will grind against you, bite you, and fondle you, you may not touch her, however.\n\n%target%, when you have %player1% revved up, remove your underwear, sit on %1p% lap, and give him one final long, deep kiss.",
    target_sex: 2,
    spice_level: 1,
    dress_level_from: 2,
    dress_level_to: 2,
    number_of_participants: 2,

    lose_dress_level: true,
    appropriate_for_bi_curious: false,
  },
  {
    name: "Heating up",
    message:
      "%player1%, sit back and relax while %target% puts on a male revue for you. He will waggle his ass for you and grind against you, but you may not touch him in any way.\n\n%target%, when you have %player1% frustrated, allow %1s% to remove your underwear, but don’t permit %1s% to touch you.",
    target_sex: 1,
    spice_level: 1,
    dress_level_from: 2,
    dress_level_to: 2,
    number_of_participants: 2,

    lose_dress_level: true,
    appropriate_for_bi_curious: true,
  },
  {
    name: "Bad doggie!",
    message:
      "%player1%, you’re a bad doggie! Crawl over to %target%, pant at %ts%, lick %ts%, and hump %tp% leg. Pant and whimper and bark while you do this.",
    target_sex: 0,
    spice_level: 1,
    dress_level_from: 0,
    dress_level_to: 2,
    number_of_participants: 2,

    target_humiliation_receiving: true,

    appropriate_for_bi_curious: true,
  },
  {
    name: "More bad doggie!",
    message:
      "%player1%, you’re going to play bad doggie. As a standard form of doggie greeting, you will jump up in %target%’s lap, lick %ts% enthusiastically, and then sniff at %tp% crotch.",
    target_sex: 0,
    spice_level: 1,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 2,

    target_humiliation_receiving: true,

    appropriate_for_bi_curious: false,
  },
  {
    name: "My favorite things",
    message:
      "%target%, please get into your favorite sexual position and invite %player1% to join you. Show %1s% how you like your sex. You may grind, kiss, fondle, touch, caress, bite, or claw as you wish...\n\n...but you may NOT remove, or go under, any clothing. No penetration and no climaxing, either!",
    target_sex: 0,
    spice_level: 1,
    dress_level_from: 2,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: false,
  },
  {
    name: "Foot fetish",
    message:
      "%target%, do you like feet? Let’s find out. %player1%, snuggle your feet down between %target%’s legs and keep them there for %m1% minute. Try to get %ts% as excited as you possibly can, without bringing %ts% to orgasm.",
    target_sex: 0,
    spice_level: 1,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: false,
  },
  {
    name: "Object lessons",
    message:
      "%target%, for the next %m2% minutes please show %player1% your favorite form of foreplay. Guide %1p% hands as necessary, while showing %1s% how to kiss, caress, stroke, and fondle you.\n\nThis should be foreplay only! You may kiss, nibble, grind, squeeze, and fondle all you like, but no going between the legs, no moving or removing any clothing. Sorry.",
    target_sex: 0,
    spice_level: 1,
    dress_level_from: 2,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Be creative",
    message:
      "%player1%, your job is to give %target% an orgasm. But here’s the catch--you may not use your fingers, hands, tongue, or genitals to do it. Anything else is fair game, but those parts of your body are off-limits.\n\nYou also may not use any kind of toy or other device. You’ll have to be creative. When you’re done, have %ts% return the favor, and give you an orgasm--also without using fingers, hands, tongue, or genitals. Have fun!",
    target_sex: 0,
    spice_level: 1,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    target_will_orgasm: true,
    others_will_orgasm: true,

    appropriate_for_bi_curious: false,
  },
  {
    name: "Explorations",
    message:
      "%player1%, you’re going to try to bring %target% to orgasm, using only your toes. She will sit in front of you and allow you to stroke and penetrate her with your big toe until she is writhing in ecstasy. You have %m3% minutes, starting from when you click Do It, to bring her off.\n\n%target%, if you don't get off in that amount of time, too bad. Hope you’re up to it!",
    target_sex: 2,
    spice_level: 1,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    target_will_orgasm: true,

    appropriate_for_bi_curious: false,
  },
  {
    name: "Roleplaying",
    message:
      "%target%, you’re a ruthless pirate, ransacking a village, and %player1% is a helpless villager who didn’t make it out in time. Swoop on %1s% and take %1s% sexually however you like. Have your way with %1s% until you are satisfied.",
    target_sex: 1,
    spice_level: 2,
    dress_level_from: 2,
    dress_level_to: 3,
    number_of_participants: 2,

    target_will_orgasm: true,
    others_will_orgasm: true,

    target_dominant: true,
    target_forceful: true,

    player_submissive: true,
    player_resisting: true,

    appropriate_for_bi_curious: false,
  },
  {
    name: "Taking it off",
    message:
      "%target%, we want to see it all. Give %player1% the grand finale of a strip tease. Stand in front of %player1%, dance around and run your hands over your body, then remove your underwear for %1s% and toss it to %1s% when you’re done. Try to make %1s% quiver with excitement.",
    target_sex: 0,
    spice_level: 1,
    dress_level_from: 2,
    dress_level_to: 2,
    number_of_participants: 2,

    lose_dress_level: true,
    appropriate_for_bi_curious: true,
  },
  {
    name: "Pearl necklace",
    message:
      "%target%, while %player1% kneels in front of you, you will tittyfuck %1s%. Stroke your stiff rod against %1p% chest until you explode all over %1s% body.\n\n%player1%, while this is happening, you will masturbate to orgasm yourself.",
    target_sex: 1,
    spice_level: 1,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    target_will_orgasm: true,
    others_will_orgasm: true,

    appropriate_for_bi_curious: false,
  },
  {
    name: "Stand for it",
    message:
      "%player1%, how coordinated are you? Stand in front of %target%, wrap your arms around %ts%, and fuck %ts% passionately, standing up. ",
    target_sex: 0,
    spice_level: 2,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    target_will_orgasm: true,
    others_will_orgasm: true,

    appropriate_for_bi_curious: false,
  },
  {
    name: "Intimate massage",
    message:
      "%player1%, please find some massage oil, and spread it liberally on %target%’s breasts and body. Give her a thorough breast massage until she’s completely turned on.",
    target_sex: 2,
    spice_level: 1,
    dress_level_from: 1,
    dress_level_to: 3,
    number_of_participants: 2,

    massage_oil: true,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Passive fun",
    message:
      "%target%, this one is simple. You’re going to bend over a table and let %player1% take you from behind, doggie-style.\n\n%player1%, you may use whatever items, objects, toys, or body parts you want to bring %target% to the heights of pleasure. You may not get off yourself, though. Sorry!",
    target_sex: 2,
    spice_level: 2,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    target_will_orgasm: true,

    appropriate_for_bi_curious: false,
  },
  {
    name: "Passive fun",
    message:
      "%target%, while you sit quietly, %player1% is going to sit in your lap. As %1h% straddles you, %1h% will impale %1s%self on you and take you to the heights of ecstasy.",
    target_sex: 1,
    spice_level: 2,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    target_will_orgasm: true,
    others_will_orgasm: true,

    appropriate_for_bi_curious: false,
  },
  {
    name: "Things to come",
    message:
      "%player1%, let’s give %target% a hint of things to come (so to speak). Slide your arms around him, and kiss him while you unzip his pants. Stroke him for %d60% seconds (no orgasm!), then zip him back up.",
    target_sex: 1,
    spice_level: 1,
    dress_level_from: 0,
    dress_level_to: 1,
    number_of_participants: 2,

    appropriate_for_bi_curious: false,
  },
  {
    name: "Things to come",
    message:
      "%player1%, let’s give %target% a hint of things to come (so to speak). Take her in your arms, kiss her, and slide your hand into her panties. Finger her for %d60% seconds, but do not penetrate her, and no orgasm!",
    target_sex: 2,
    spice_level: 1,
    dress_level_from: 0,
    dress_level_to: 2,
    number_of_participants: 2,

    appropriate_for_bi_curious: false,
  },
  {
    name: "Getting ready",
    message:
      "%player1%, please get some massage oil, and thoroughly oil every exposed bit of %target%’s body. Feel free to touch or stroke whatever you like while you do this, provided you don't get %ts% off.",
    target_sex: 0,
    spice_level: 1,
    dress_level_from: 2,
    dress_level_to: 3,
    number_of_participants: 2,

    massage_oil: true,

    appropriate_for_bi_curious: false,
  },
  {
    name: "Top to bottom",
    message:
      "Okay, %player1%, here’s the deal. %target% is going to stand in front of you, and you’ll start by kissing %tp% neck, ears, and mouth. Then, work your way down %tp% body, kissing at %ts% through %tp% clothing.\n\nKeep going down, kissing %tp% torso, stomach, thighs, legs, and ankles, until you reach %tp% feet. Then, remove %tp% shoes and socks and continue kissing %tp% feet.",
    target_sex: 0,
    spice_level: 0,
    dress_level_from: 0,
    dress_level_to: 0,
    number_of_participants: 2,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Warm-up",
    message:
      "%player1%, time to get %target% warmed up for what’s ahead. Kiss and caress her thighs, and stroke her clitoris through her panties. Continue until she’s so wet you can feel it through her underwear.\n\nYou may not move, remove, or go inside her underwear! No penetration, either, and be careful not to bring her to orgasm.",
    target_sex: 2,
    spice_level: 1,
    dress_level_from: 2,
    dress_level_to: 2,
    number_of_participants: 2,

    appropriate_for_bi_curious: false,
  },
  {
    name: "Warm-up",
    message:
      "%player1%, time to get %target% ready. Kiss and caress his thighs, and stroke his cock through his underwear. Keep stroking until he’s erect.\n\nYou may not move, remove, or go into his underwear, and be careful not to bring him off yet.",
    target_sex: 1,
    spice_level: 1,
    dress_level_from: 32,
    dress_level_to: 2,
    number_of_participants: 2,

    appropriate_for_bi_curious: false,
  },
  {
    name: "Taking It Off!",
    message:
      "%player1%, you are to start by taking %target% in your arms for a long, slow, deep kiss. Run your hands up and down along %tp% bare back while you do this.\n\nThen, kneel in front of %ts% and remove %target%’s underwear. Draw a heart on %tp% ass with a pen or marker. Once you’ve done this, please kiss %ts% in the spot you’ve marked.",
    target_sex: 0,
    spice_level: 1,
    dress_level_from: 2,
    dress_level_to: 2,
    number_of_participants: 2,

    lose_dress_level: true,
    appropriate_for_bi_curious: true,
  },
  {
    name: "Finger fun",
    message:
      "%player1%, let your fingers do the walking! Bend %target% over your lap and explore her with your fingertips. Let them run along her back, across her thighs, over her ass, and down between her legs. Penetrate her with your fingers until she’s squirming. Be careful, though, not to bring her to orgasm!",
    target_sex: 2,
    spice_level: 1,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: false,
  },
  {
    name: "Tease ’n’ Grind",
    message:
      "%target%, you’re to lie on your back and allow %player1% to straddle you. %player1%, get over %target% and slide down his shaft, allowing him to penetrate you as slowly as possible.\n\nWhen you’ve lowered yourself completely, grind your hips against him. Do not allow any thrusting, and neither of you should orgasm, just grind against each other for about a minute or so.",
    target_sex: 1,
    spice_level: 2,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: false,
  },
  {
    name: "Bark like a dog",
    message:
      "%target%, you’re going to make %player1% bark like a dog! Get %1s% on %1p% hands and knees and take %1s% from behind, doggy-style. Put your hands on %1p% shoulders and keep thrusting. %player1%, you should bark enthusiastically until you both reach orgasm.",
    target_sex: 1,
    spice_level: 2,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    others_will_orgasm: true,
    target_will_orgasm: true,

    appropriate_for_bi_curious: false,

    target_humiliation_receiving: true,
  },
  {
    name: "Panty-sniffing",
    message:
      "%target%, you’re going to help %player1% indulge %1p% panty-sniffing fetish. First, take %1s% in your arms and kiss %1s% deeply while you grind your hips against %1s%. Both of you should run your hands all over each other while you kiss and grind.\n\nWhen you feel yourself getting turned on, slide off your panties and present them to %1s% to smell.",
    target_sex: 2,
    spice_level: 1,
    dress_level_from: 2,
    dress_level_to: 2,
    number_of_participants: 2,

    lose_dress_level: true,
    appropriate_for_bi_curious: false,
  },
  {
    name: "At the Beach",
    message:
      "%target%, you’re sunbathing topless at the beach, and you’ve caught %player1%’s eye. While you lie on the floor, invite %1s% to oil your back for you.\n\n%player1%, you will, naturally, comply. When you’ve oiled %target%’s back, slide off her panties and continue to oil her ass.",
    target_sex: 2,
    spice_level: 1,
    dress_level_from: 2,
    dress_level_to: 2,
    number_of_participants: 2,

    massage_oil: true,

    lose_dress_level: true,
    appropriate_for_bi_curious: false,
  },
  {
    name: "Getting things started",
    message:
      "%player1%, start by giving %target% a long kiss, with lots of tongue. Then, caress %tp% sides, lifting %tp% shirt out of the way, and begin licking and sucking on %tp% nipples.\n\nWhen %target%’s nipples begin to respond, remove %tp% shirt %and bra% entirely, slide your hand between %tp% legs, and fondle %ts% through %tp% pants while you continue to lick %tp% nipples.",
    target_sex: 0,
    spice_level: 1,
    dress_level_from: 0,
    dress_level_to: 0,
    number_of_participants: 2,

    lose_dress_level: true,
    appropriate_for_bi_curious: false,
  },
  {
    name: "Opening moves",
    message:
      "%target%, you are going to sit on %player1%’s lap facing %1s%, wrap your arms around %1p% neck, and kiss %1s% passionately. %player1%, while she grinds her hips into your lap, caress and fondle her breasts.\n\nWhen you start to get excited, slide your hands under her shirt, and remove her shirt and bra. Then suck on each nipple for at least ten seconds while she keeps grinding against you.",
    target_sex: 2,
    spice_level: 1,
    dress_level_from: 0,
    dress_level_to: 0,
    number_of_participants: 2,

    lose_dress_level: true,
    appropriate_for_bi_curious: true,
  },
  {
    name: "Snowball",
    message:
      "Remember eating snowcones at the carnival? This is nothing like that. What you’re going to do, %player1%, is kneel in front of %target%, take his cock deep in your mouth, and suck him until he comes in your mouth.\n\nSince sharing is a virtue (and turnabout is fair play), once you have brought him off you will give %target% a long, deep kiss. Give him the full mouthful! (This technique is called a 'snowball', in case you’re curious.)",
    target_sex: 1,
    spice_level: 1,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    target_will_orgasm: true,

    appropriate_for_bi_curious: false,
  },
  {
    name: "Follow the trail",
    message:
      "For this, %target%, you will need some whipped cream (or strawberry topping, or anything else that suits your fancy). Starting anywhere on your body, mark a trail that you’d like %player1% to follow with %1p% tongue.\n\nYour path may go anywhere you want, and end anywhere you want. %player1% will follow it from beginning to end...but may take no more than 3 minutes. Orgasm is strictly prohibited.",
    target_sex: 0,
    spice_level: 1,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    cream: true,

    appropriate_for_bi_curious: false,
  },
  {
    name: "Sweet tease",
    message:
      "Let’s get undressed! %target%, %player1% is going to begin kissing and licking your neck. Without rushing, %1h% will keep kissing %1s% way down your body, letting %1p% lips roam down your chest and over your belly, all the way down to your waist. Upon reaching your waist, %player1% should stop and remove your underwear.\n\nOnce the underwear comes off, %player1% will lick you right where it counts...ONCE. Only once. That’s it. (Life is cruel.)",
    target_sex: 0,
    spice_level: 1,
    dress_level_from: 2,
    dress_level_to: 2,
    number_of_participants: 2,

    lose_dress_level: true,
    appropriate_for_bi_curious: false,
  },
  /////////
  {
    name: "Coy roleplaying",
    message:
      "%target%, you and %player1% are on your first date, and things are heating up. As you caress and kiss, %player1% becomes aroused at the thought of tasting you. You’re not sure if you want that, so %player1% has to persuade you.\n\nWhile continuing to kiss, stroke, and seduce you, %player1% will beg and plead with you to let %1s% go down on you. You hold out for a while, but finally relent, and allow %1s% to learn your taste. Just a little, though...no orgasm!",
    target_sex: 0,
    spice_level: 1,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: false,
  },
  {
    name: "Testing the water",
    message:
      "%player1%, you’re going to sit at %target%’s feet and remove his shoes and socks. When you have done so, see how aroused you can get him by giving each of his big toes a blowjob.",
    target_sex: 1,
    spice_level: 0,
    dress_level_from: 0,
    dress_level_to: 0,
    number_of_participants: 2,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Taste of things to come",
    message:
      "%player1%, you are to stand in front of %target% and kiss her neck, shoulders, and breasts while running your hands down her body. Slide one hand into her panties and finger her until she is dripping with excitement.\n\nWhen she is quite wet, remove your hand from her panties and bring your fingers up to her lips for her to taste. Allow her to lick and suck your fingers until they are completely clean.",
    target_sex: 2,
    spice_level: 1,
    dress_level_from: 2,
    dress_level_to: 2,
    number_of_participants: 2,

    appropriate_for_bi_curious: false,
  },
  {
    name: "You know what you want",
    message:
      "%target%, you want someting buried deep inside you. Right now. Name any object (dildo, fingers, vibrator, whatever you want except a cock), and have %player1% penetrate you with it. Tell %1s% precisely what to do with it to get you off.",
    target_sex: 2,
    spice_level: 1,
    dress_level_from: 2,
    dress_level_to: 3,
    number_of_participants: 2,

    target_will_orgasm: true,

    appropriate_for_bi_curious: false,
  },
  {
    name: "I know what you want",
    message:
      "%target%, you are so horny you want something buried deep inside your pussy, and %player1% knows just the thing. Take whatever %1h% offers you...dildo, fingers, cock, anything %1h% wants.\n\n%player1%, bring %target% to orgasm using whatever you like...but do not orgasm yourself!",
    target_sex: 2,
    spice_level: 2,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    target_will_orgasm: true,

    appropriate_for_bi_curious: false,
  },
  {
    name: "Nibble here & there",
    message:
      "%player1%, %target% is going to stand in front of you. Beginning at %tp% neck, kiss and lick your way down %tp% body until you reach %tp% feet. If you encounter anything that protrudes, bite it.",
    target_sex: 0,
    spice_level: 2,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: false,
  },
  {
    name: "Audience participation",
    message:
      "%target%, have %player1% sit in front of you and watch as you masturbate with your fingers until you come. When you are finished, extend your fingers and allow %1s% to lick them clean.",
    target_sex: 2,
    spice_level: 1,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    target_will_orgasm: true,

    appropriate_for_bi_curious: false,
  },
  {
    name: "Seduction",
    message:
      "%target%, begin by sitting on %player1%’s lap. While %player1% kisses your neck and fondles your breasts, take %1p% right index finger in your mouth and suck it until it is thoroughly wet.\n\nWhen %1p% finger is wet, %player1% will slide %1p% hand between your legs and penetrate you with it. %player1% will finger you until you are drenched, but should not bring you off.",
    target_sex: 2,
    spice_level: 1,
    dress_level_from: 2,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: false,
  },
  {
    name: "Revelation",
    message:
      "%target%, have %player1% watch as you masturbate through your panties until they are drenched with your juices. When they are thoroughly soaked, remove them and caress %player1%’s face and body with them.",
    target_sex: 2,
    spice_level: 1,
    dress_level_from: 2,
    dress_level_to: 2,
    number_of_participants: 2,

    lose_dress_level: true,
    appropriate_for_bi_curious: false,
  },
  {
    name: "Target practice",
    message:
      "%target%, instruct %player1% to kneel in front of you with %1p% mouth open. You will masturbate and aim for %1p% mouth, but you may not get closer than six inches to %1s%. When you come, %player1% should try to catch and swallow as much as possible.\n\n%player1%, while this is happening, feel free to masturbate in any manner you like--but you may not orgasm, and don’t forget to catch %target%’s come!",
    target_sex: 1,
    spice_level: 1,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    target_will_orgasm: true,

    appropriate_for_bi_curious: false,
  },
  {
    name: "Just following orders",
    message:
      "%target%, %player1% is going to go down on you, but you must tell %1s%, move by move, in detail, exactly what to do to arouse you. %player1%, stop before %th% reaches orgasm.",
    target_sex: 0,
    spice_level: 1,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: false,
  },
  {
    name: "Warming up",
    message:
      "Now that your shirt is off, %target%, %player1% is going to try to arouse you further by caressing your breasts and nipples with a vibrator until your nipples are erect.",
    target_sex: 2,
    spice_level: 0,
    dress_level_from: 1,
    dress_level_to: 1,
    number_of_participants: 2,

    dildo: true,

    appropriate_for_bi_curious: true,
  },
  {
    name: "First date hijinks",
    message:
      "%target%, imagine that you and %player1% are on your first real date and are becoming intimate for the first time. You want %1s% to pleasure you with a dildo or vibrator (or other toy of your choice), but %1h% is new to that sort of thing and is reluctant.\n\nWhile %player1% plays coy, persuade %1s% to use the toy on you. Tell %1s% exactly how to use it on you, and how good it feels. Describe how much you like it. %player1% should make it difficult, but ultimately, of course, you do persuade %1s%. While %1h% uses it on you, tell %1s% exactly what to do with it until you come.",
    target_sex: 2,
    spice_level: 1,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    target_will_orgasm: true,
    dildo: true,

    appropriate_for_bi_curious: false,
  },
  {
    name: "Teasing",
    message:
      "%player1%, give %target% a long, deep French kiss, then work down %tp% neck, shoulders, chest, and waist until you reach %tp% underwear. Don’t rush.\n\nWhen you get there, you’re going to tease %ts% by licking %ts% through %tp% underwear until %th% is ready to scream. Do not bring %ts% off, though. You may not move or remove %tp% underwear, either.",
    target_sex: 0,
    spice_level: 1,
    dress_level_from: 2,
    dress_level_to: 2,
    number_of_participants: 2,

    appropriate_for_bi_curious: false,
  },
  {
    name: "Numbers, please!",
    message:
      "%target%, lie on your back in the middle of the floor. %player1% will get on %1p% hands and knees, facing in the opposite direction, over you and French-kiss you passionately.\n\nWhen you’re both excited, %1h% should crawl slowly down your body, licking and nibbling you as %1h% goes, until %1h% reaches your thighs. The two of you will then take each other in a 69 until you are both quite satisfied.",
    target_sex: 0,
    spice_level: 1,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    target_will_orgasm: true,
    others_will_orgasm: true,

    appropriate_for_bi_curious: false,
  },
  {
    name: "How does it feel?",
    message:
      "%target%, please allow %player1% to blindfold you and spread you out on your back. When you are ready, %1h% will penetrate you with an object (a toy, or %1p% fingers, or whatever) of %1p% choice...although %1h% may not have intercourse with you!\n\nWhile %1h% stimulates you, you should describe, out loud, exactly what %1h% is doing with it, and how it feels. Keep describing it until you come.",
    target_sex: 2,
    spice_level: 1,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    target_will_orgasm: true,

    appropriate_for_bi_curious: false,
  },
  {
    name: "Institute of Higher Learning",
    message:
      "%target%, you’re the instructor at the School of Oral Pleasures, and %player1% is your student. Describe to %1s% exactly how you like to receive oral sex, using a dildo or similar object, if %1h% doesn’t understand, please demonstrate.\n\nWhen you have made your lesson perfectly clear, give %player1% %1p% final exam by allowing %1s% to suck you off.",
    target_sex: 1,
    spice_level: 1,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    target_will_orgasm: true,
    dildo: true,

    appropriate_for_bi_curious: false,
  },
  {
    name: "Aggression",
    message:
      "%player1%, you’re feeling very aggressive today. Slam %target% hard against the wall, pin %ts% there by %tp% wrists, and kiss %ts% passionately on the mouth. Be rough. Use plenty of tongue.\n\n%target%, you feel very passive, when %1h% attacks you, submit to %1s% and return %1p% kisses with enthusiasm.",
    target_sex: 0,
    spice_level: 0,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 2,

    target_submissive: true,
    player_dominant: true,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Explorations",
    message:
      "%target%, this is the idea: Bring %player1% close to you, and put your arms around %1s%. Then, begin kissing %1s%. Stick out your tongue, and allow %1s% to wrap %1p% lips around it and give your tongue a blowjob.",
    target_sex: 1,
    spice_level: 1,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Lipstick",
    message:
      "%player1%, this one’s easy. Apply some red lipstick (if you have it). Then go down on %target% until he is right on the edge of orgasm. Then stop. What could be easier?",
    target_sex: 1,
    spice_level: 1,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: false,
  },
  {
    name: "Sensations",
    message:
      "%player1%, please find a blindfold and blindfold %target%. Then, stroke, fondle, and caress her breasts, paying close attention to her nipples. You may kiss and lick them if you like, as well.\n\nIf they become hard, roll them between your fingers and draw them into your mouth.\n\n%target%, while %1h% does this, describe out loud how it feels. You may only do this for %m2% minutes, so %player1%, blindfold her before you hit Do It!",
    target_sex: 2,
    spice_level: 0,
    dress_level_from: 1,
    dress_level_to: 3,
    number_of_participants: 2,

    blindfold: true,
    target_blindfolded: true,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Lost in Darkness",
    message:
      "%player1%, you will be blindfolded by %target%. When the blindfold is in place, get on your hands and knees in front of %ts%. You will then feel, kiss, and nuzzle your way from %tp% toes up to %tp% face. When you reach %tp% face, you’ll be rewarded with a long, deep kiss.",
    target_sex: 0,
    spice_level: 0,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 2,

    blindfold: true,
    player_blindfolded: true,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Erotic action",
    message:
      "%player1%, you’re going to give %target% %tp% own private erotic dance. Get as close as you want, and make it as steamy as you can.\n\n%target% is not allowed to touch you, however. In fact, to ensure that %th% obeys the rules, please tie %tp% hands behind %tp% back before you begin.",
    target_sex: 0,
    spice_level: 0,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 2,

    rope: true,
    target_restrained: true,

    appropriate_for_bi_curious: true,
  },
  {
    name: "More hints",
    message:
      "%target%, you will instruct %player1% to lie on %1p% back on the floor. You should then remove your pants (but not underwear!) and kneel over %1p% face for %d30% seconds.\n\n%player1%, please take advantage of the opportunity to explore %target%’s inner thighs, and anywhere else you can reach, with your tongue.",
    target_sex: 2,
    spice_level: 1,
    dress_level_from: 1,
    dress_level_to: 1,
    number_of_participants: 2,

    lose_dress_level: true,
    appropriate_for_bi_curious: false,
  },
  {
    name: "More pleasure",
    message:
      "%player1%, please find a vibrator, dildo, or similar object. You are to kneel between %target%’s thighs, penetrate her with it, and lick her clitoris while you work the toy.\n\nAs %1h% does this, %target%, you should caress his head and describe, out loud, how it feels. Continue until orgasm.",
    target_sex: 2,
    spice_level: 1,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    target_will_orgasm: true,
    dildo: true,

    appropriate_for_bi_curious: false,
  },
  {
    name: "Around the World",
    message:
      "This is a game called “Around the World.” %target%, choose a toy (vibrator, dildo, etc) and give it to %player1%. %player1%, you will penetrate her with the toy and use it to bring her off.\n\nOnce she has reached climax, penetrate her orally with it, and fuck her mouth for as long as it took her to climax. Finally, for your last stop on the world tour, penetrate her anally with the toy and fuck her ass for the same amount of time.",
    target_sex: 2,
    spice_level: 3,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    target_will_orgasm: true,
    dildo: true,
    target_anal_receiving: true,
    target_anal_giving: true,

    appropriate_for_bi_curious: false,
  },
  {
    name: "More finger action",
    message:
      "%target%, get down on your hands and knees with your ass in the air. %player1%, you are  going to finger-fuck %target% anally. Use plenty of lube! %target% will give you step by step directions, which you will follow.\n\nWhile you're doing this, you may use your other hand to caress, fondle, or stroke %target% however and wherever you like. You may not allow %target% to come, however.",
    target_sex: 0,
    spice_level: 3,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    lube: true,

    appropriate_for_bi_curious: false,
  },
  {
    name: "That’s stimulating!",
    message:
      "%player1%, you’re going to remove %target%’s shirt %and bra%, and lick and pinch %tp% nipples until they stand at attention.\n\nSimple enough, right? Now, when they are erect, place clothespins or nipple clamps on %tp% nipples and continue tugging and tweaking them until %th% is writhing with pleasure, or pain--either one.",
    target_sex: 0,
    spice_level: 0,
    dress_level_from: 0,
    dress_level_to: 0,
    number_of_participants: 2,

    clothespin: true,
    target_pain_receiving: true,
    player_pain_giving: true,

    lose_dress_level: true,
    appropriate_for_bi_curious: false,
  },
  {
    name: "Explorations",
    message:
      "%target%, let’s see how many places on %player1%’s body you can find to stimulate yourself. Kneel over %1s% and explore every nook of %1p% body with your erect cock.\n\nBe creative! Penetrate %1s% everywhere you can think of, including between %1p% toes, between %1p% thighs, under %1p% arms... You may not stay in any one place for longer than two strokes, however, and you may not come.",
    target_sex: 1,
    spice_level: 2,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: false,
  },
  {
    name: "Frustration",
    message:
      "Here’s the scoop, %target%. %player1% will tie you securely to a chair, so you can’t wriggle even an inch. Then, %1h% is going to torment you mercilessly. How? By crawling all over you, of course, for %m2% minutes (time starts after you are tied).\n\n%player1%, you should get up close and personal with %target%. Caress %ts%, crawl into %tp% lap, lick %ts% wherever takes your fancy, touch and fondle yourself in front of %ts%, grind against %ts%, stroke and caress %ts%, kiss %ts% however you want...but do not bring %ts%, or yourself, off.",
    target_sex: 0,
    spice_level: 1,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    rope: true,
    target_restrained: true,

    appropriate_for_bi_curious: false,
  },
  {
    name: "Adventure card",
    message:
      "%target%, you want it in the ass, and you want it now. Choose an object of any kind you want (toy, body part, whatever), and have %player1% fuck you anally with it.\n\nUnder no circumstances, however, should you allow %player1% to do anything which will cause either of you to orgasm.",
    target_sex: 0,
    spice_level: 3,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    target_anal_receiving: true,
    player_anal_giving: true,

    appropriate_for_bi_curious: false,
  },
  {
    name: "Adventure card",
    message:
      "%player1%, you’re going to give %target% the pleasure of knowing you personally and intimately. Carefully lubricate his cock, then bend over and ask him to take you up the ass until he comes. You are not allowed to orgasm, though.",
    target_sex: 1,
    spice_level: 3,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    lube: true,
    target_anal_giving: true,
    player_anal_receiving: true,

    others_will_orgasm: true,

    appropriate_for_bi_curious: false,
  },
  {
    name: "Learning to count",
    message:
      "Question: What’s '71?'\nAnswer: 69 with two fingers up the ass!\n\n%player1%, lie down while %target% gets over you. The two of you will 69 one another while fingering each other anally. Continue until you both reach climax.",
    target_sex: 0,
    spice_level: 3,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    target_will_orgasm: true,
    others_will_orgasm: true,

    target_anal_giving: true,
    target_anal_receiving: true,

    player_anal_giving: true,
    player_anal_receiving: true,

    appropriate_for_bi_curious: false,
  },
  {
    name: "Seven Knots",
    message:
      "This is a technique called the '7 Knots to Heaven.' %player1%, find a cord or string, about 12' long, and tie seven large knots in it. When this is done, gently insert the cord in %target%’s anus.\n\nWhen you have done so, you will stimulate %target% manually or orally (your choice) until %th% nears orgasm. At the moment of climax, tug the cord out, one knot at a time. If you get the timing right, the result should be quite dramatic.",
    target_sex: 0,
    spice_level: 3,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    target_will_orgasm: true,
    target_anal_receiving: true,
    player_anal_giving: true,
    rope: true,

    appropriate_for_bi_curious: false,
  },
  {
    name: "Bound for Pleasure",
    message:
      "This is very simple. %player1%, %target% is going to tie your hands behind your back hand and bind your ankles together.\n\nThen %th% will force you to your knees in front of %ts%. At that point, %th% will place your head between %tp% legs and hold you there while you use your mouth and tongue to bring %ts% off. Easy enough, yes?",
    target_sex: 0,
    spice_level: 3,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    target_will_orgasm: true,
    rope: true,
    target_dominant: true,
    player_submissive: true,
    player_restrained: true,

    appropriate_for_bi_curious: false,
  },
  {
    name: "A classic fuck",
    message:
      "Here’s another simple one. %player1%, %target% is going to bend you over the table and take you up the ass until he comes. Feel free to come yourself, if you like. Anal sex is fun!",
    target_sex: 1,
    spice_level: 3,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    target_anal_giving: true,
    player_anal_receiving: true,

    target_will_orgasm: true,
    others_will_orgasm: true,

    appropriate_for_bi_curious: false,
  },
  {
    name: "Adventure card",
    message:
      "Lie back and relax, %target%. %player1%, your job will be to pleasure her with your hand. Begin by massaging her clitoris with your fingers, then gradually penetrate her more and more deeply until you have inserted as much of your hand as you can.\n\nKeep working your hand bit by bit, using small motions, until you make her orgasm. ",
    target_sex: 2,
    spice_level: 1,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    target_will_orgasm: true,

    appropriate_for_bi_curious: false,
  },
  {
    name: "B&D, anyone?",
    message:
      "Okay, here’s the scoop. %player1%, please tie %target% securely, spread-eagled across the table top. (If you don’t have a big enough table, tie %ts% spreadeagle on the floor.) When %th% is properly situated, climb on top of %ts% and have your way with %ts%.\n\nThere is a catch, of course. You may continue to fuck %ts% for so long as neither of you reaches climax. When one of you is on the brink, you should stop, untie %ts%, and say “Just kidding!”",
    target_sex: 0,
    spice_level: 3,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    rope: true,
    target_restrained: true,

    appropriate_for_bi_curious: false,
  },
  {
    name: "Wanting more",
    message:
      "%target%, you want something up your ass. Take whatever %player1% offers. No orgasm.",
    target_sex: 0,
    spice_level: 3,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    target_anal_receiving: true,
    player_anal_giving: true,

    appropriate_for_bi_curious: false,
  },
  {
    name: "Adventure time",
    message:
      "%target%, please lie on your back and spread your legs. %player1%, get between her legs and lick her while penetrating her with your fingers.\n\nOnce your fingers are sufficiently wet with her juices, slide them up her ass while you continue to lick her. Keep licking and fingering her ass until you bring her off.",
    target_sex: 2,
    spice_level: 3,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    target_anal_receiving: true,
    player_anal_giving: true,

    appropriate_for_bi_curious: false,
  },
  {
    name: "Adventure time",
    message:
      "%target%, please lie on your back. %player1%, lubricate your fingers thoroughly, then slide your index finger into %target%’s ass and take his shaft in your mouth. Suck and finger him until you bring him to orgasm.",
    target_sex: 1,
    spice_level: 3,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    target_will_orgasm: true,
    lube: true,

    target_anal_receiving: true,
    player_anal_giving: true,

    appropriate_for_bi_curious: false,
  },
  {
    name: "Role-playing",
    message:
      "%player1%, you’re the sex predator, and you’ve just kidnapped %target% against %tp% will. Tie %ts% securely to a chair, grab %ts% by the hair, and begin kissing %ts% roughly on %tp% face, neck, and mouth.\n\n%target%, you struggle and resist at first, but for some reason you find something strangely erotic about your captivity, and eventually you stop struggling and kiss %player1% back, quite against your will.",
    target_sex: 0,
    spice_level: 0,
    dress_level_from: 0,
    dress_level_to: 2,
    number_of_participants: 2,

    rope: true,
    target_submissive: true,
    target_resisting: true,
    player_dominant: true,
    player_forceful: true,

    appropriate_for_bi_curious: false,
  },
  {
    name: "Perfect submission",
    message:
      "%player1%, time to submit to %target%’s will. Allow %ts% to put a collar and leash around your neck. Once you’re leashed, get on your hands and knees and allow %ts% to lead you to the center of the room.\n\n%target%, once you’ve led %1s% there, order %1s% to go down on you. Direct %1s% to continue until you are thoroughly aroused, then order %1s% to stop.",
    target_sex: 0,
    spice_level: 1,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    collar: true,
    leash: true,

    target_dominant: true,
    player_submissive: true,

    appropriate_for_bi_curious: false,
  },
  {
    name: "Pony ride",
    message:
      "Saddle up, %player1%! %target%, get %player1% down on %1p% hands and knees, put a collar on %1s%, and ride %1s% around the room. Make one full circuit of the room.",
    target_sex: 0,
    spice_level: 1,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 2,

    collar: true,
    player_humiliation_receiving: true,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Risqué fun",
    message:
      "%target%, please take a dildo (or some other object of your choice) and slowly penetrate yourself with it, masturbating with it in front of %player1% until you're ready to come.\n\nWhen she is close to orgasm, %player1%, you’re going to take the other end in your mouth. Now, without using your hands, stroke it firmly in and out of %target% until you bring her to orgasm.",
    target_sex: 2,
    spice_level: 2,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    target_will_orgasm: true,
    dildo: true,

    appropriate_for_bi_curious: false,
  },
  {
    name: "Restrained caress",
    message:
      "%player1%, imagine you and %target% are on your first date, and you’re getting to know each other physically for the very first time. You should kiss, touch, rub, and explore one another’s bodies.\n\nHere’s the catch, though. Just to make things interesting, you’re not going to make any use of your hands. In fact, both of you should have your hands bound or cuffed behind your backs before you begin.",
    target_sex: 0,
    spice_level: 0,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 2,

    target_restrained: true,
    player_restrained: true,

    appropriate_for_bi_curious: false,
  },
  {
    name: "Restrained passion",
    message:
      "%player1%, you’ve been invited home with %target%, and you and %th% are locked in the throes of passion for the first time. Take %ts% in your favorite way. There’s a catch: Before you begin, you will both have your hands bound behind your backs.\n\nOh, and one more thing: Assuming you can work out the difficulties involved in not using your hands, you may bring %target% and yourself to the brink of orgasm, but not over. This one’s tough all over. Sorry.",
    target_sex: 0,
    spice_level: 2,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    rope: true,
    target_restrained: true,
    player_restrained: true,

    appropriate_for_bi_curious: false,
  },
  {
    name: "Turnabout",
    message:
      "%target%, it’s time for a little turnabout. You’re going to bend %player1% over a table and stand behind %1s%. Then, reach between your legs and masturbate. With the same hand, penetrate %player1% anally with your thumb.\n\nYou may continue until you climax, if you wish. You should not, however, allow %player1% that pleasure.",
    target_sex: 2,
    spice_level: 3,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    target_will_orgasm: true,

    target_anal_giving: true,
    player_anal_receiving: true,

    appropriate_for_bi_curious: false,
  },
  {
    name: "Having your way",
    message:
      "%target%, please tie %player1%’s hands together in front of %1s%. Then lay %1s% on %1p% back, and straddle %1p% face. Ride %1p% face until it is thoroughly wet with your excitement, but stop before you reach orgasm!",
    target_sex: 2,
    spice_level: 1,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    rope: true,
    player_restrained: true,

    appropriate_for_bi_curious: false,
  },
  {
    name: ".",
    message:
      "%target%, please get down on your hands and knees. %player1%, your job is to get behind him and stroke his cock while licking his asscheeks, anus, and balls. Keep it up until he’s ready to scream, but don’t allow him to orgasm.",
    target_sex: 1,
    spice_level: 3,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: false,
  },
  {
    name: "Fun for her",
    message:
      "%target%, please get down on your hands and knees. %player1%, you’re going to get behind her. Kiss her asscheeks, and lick her anus while you penetrate her with your fingers. Keep it up until she’s ready to scream, but don’t bring her off.",
    target_sex: 2,
    spice_level: 3,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    target_anal_receiving: true,
    player_anal_giving: true,

    appropriate_for_bi_curious: false,
  },
  {
    name: "Risqué fun for her",
    message:
      "%player1%, here’s your task. First, tie %target% spreadeagle on her back. Then, climb atop her and do anything necessary to get her juices flowing. Grind against her, penetrate her, finger her...whatever it takes.\n\nYou may not--repeat, may NOT--bring yourself to orgasm. When she’s ready,  bury your face between her legs and make her come with your tongue.",
    target_sex: 2,
    spice_level: 2,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    target_will_orgasm: true,
    rope: true,
    target_restrained: true,

    appropriate_for_bi_curious: false,
  },
  {
    name: "Adult fun",
    message:
      "%player1%, you’re going to lay %target% on his back and straddle him. Lower yourself slowly onto his shaft unti you’ve impaled yourself fully, then, rest your full weight on him while you pinch and tug on his nipples.\n\nRemain stationary and order him to beg for pleasure. Continue tugging his nipples until you’re satisfied with his begging, then begin bobbing up and down on him until he’s near the point of pleasure. Once he’s almost at orgasm, stand up and walk away.",
    target_sex: 1,
    spice_level: 2,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    target_humiliation_receiving: true,
    player_humiliation_giving: true,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Shoe fetish",
    message:
      "%target%, you will temporarily put your shoes back on (or better yet, a pair of boots if you have them) and stand before %player1% wearing nothing but those shoes. %player1%, you’re going ot express all your sexual longing and desire for %target%...but only to %tp% shoes.\n\nYou should stroke, lick, and caress %tp% shoes. Touch them as though they were %target%’s body, and demonstrate how you’d love to be caressing %ts%.",
    target_sex: 0,
    spice_level: 3,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Squeal for it!",
    message:
      "%target%, how would you like to explore the classics? Get %player1% down on %1p% hands and knees, kneel behind %1s%, and tell %1s% that you’re going to make %1s% squeal like a pig.\n\nEnter %1s% anally, from behind, and thrust into %1s% while %1h% makes squealing noises until you come. No orgasm for %1s%, though!",
    target_sex: 1,
    spice_level: 3,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    target_humiliation_giving: true,
    target_anal_giving: true,
    player_humiliation_receiving: true,
    player_anal_receiving: true,

    lube: true,

    appropriate_for_bi_curious: true,
  },
  {
    name: "What’s good for the goose",
    message:
      "%target%, %player1% is going to be your audience. Sit in front of %1s% with your legs spread and make %1s% watch as you penetrate yourself and masturbate with a dildo or other toy of your choice.\n\nOnce you have brought yourself off, pin %player1% down on %1p% back. Get on top of %1s% and penetrate %1s% orally with the toy you used. Fuck %1p% mouth with it for as long as it took you to orgasm with it.",
    target_sex: 2,
    spice_level: 3,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    dildo: true,
    target_dominant: true,
    player_submissive: true,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Enough isn’t enough",
    message:
      "This is very straightforward, %player1%, you’re going over %target%’s lap for six spankings. Here’s the catch.\n\nThe first spanking can be as hard as %th% wants it to be. And after that? Well, after that it gets interesting.\n\nYou see, %player1%, each succeeding spank is going to be harder than the one before it. Why? Because after each spank, you’re going to beg for a harder one. %target% will, of course, oblige--but only after you’ve begged sufficiently.",
    target_sex: 0,
    spice_level: 0,
    dress_level_from: 2,
    dress_level_to: 3,
    number_of_participants: 2,

    target_pain_giving: true,
    player_pain_receiving: true,
    player_humiliation_receiving: true,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Proper respect",
    message:
      "%player1%, you need to show the proper respect for %target%. You are going to do this by kneeling and kissing %target%’s feet most humbly. While you are doing this, %th% gets to smack your inviting ass. Five times.",
    target_sex: 0,
    spice_level: 0,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 2,

    target_dominant: true,
    target_pain_giving: true,
    player_pain_receiving: true,
    player_submissive: true,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Around the rim",
    message:
      "Guess what, %player1%? You are going to kiss %target%’s ass. Literally. To be more specific, for the next %m1% minute you’re going to let your tongue explore %tp% anus while you stimulate %ts% with your fingers. ",
    target_sex: 0,
    spice_level: 3,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    target_anal_receiving: true,
    player_anal_giving: true,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Yes, master",
    message:
      "%player1%, %target% is your rightful liege, and as a good servant, you’re going to get on your hands and knees while %th% delivers ten sound thwacks with a paddle or similar instrument.\n\nAfter each whack, you are going to say “Thank you,” and address %target% by a different title ('thank you, master/mistress,' 'thank you, Maestro,' and the like). You may not use the same title twice.",
    target_sex: 0,
    spice_level: 3,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 2,

    target_dominant: true,
    player_submissive: true,
    target_pain_giving: true,
    player_pain_receiving: true,

    paddle: true,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Double your fun",
    message:
      "%player1%, find two suitable toys or other objects. %target% is going to lie in her back and allow you to pleasure her. Penetrate her with both toys, one vaginally and one anally, and bring her to ecstasy.",
    target_sex: 2,
    spice_level: 3,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    dildo: true,
    lube: true,
    target_anal_receiving: true,
    player_anal_giving: true,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Breakfast of Champions",
    message:
      "You know, %player1%, they do say that breakfast is the most important meal of the day. Please find a donut or other pastry (if you can) and place it on a saucer in front of %target%.\n\nNow, stand behind %target% and jerk him off on the pastry. Then have breakfast. If you didn't find a donut or pastry, you'll just have to lick up what's on the saucer. Enjoy!",
    target_sex: 1,
    spice_level: 2,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Adult fun",
    message:
      "%player1%, here’s the plan. First, you’re going to bind %target%’s hands behind %tp% back and tie %tp% feet together. Then, sit in front of %ts%, force %ts% down to %tp% knees, and bury %tp% face between your legs.\n\nPin %ts% there with your legs, and use a pair of scissors to cut off %tp% underwear. Take your time about it, and feel free to spank %ts% while you’re at it.",
    target_sex: 0,
    spice_level: 5,
    dress_level_from: 2,
    dress_level_to: 2,
    number_of_participants: 2,

    target_restrained: true,
    target_pain_receiving: true,
    player_pain_giving: true,
    scissors: true,
    rope: true,

    lose_dress_level: true,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Adult fun",
    message:
      "%target%, get down on your hands and knees. %player1%, get behind her and mount her doggy-style in any way you see fit. Grab a handful of her hair, pull her head back, and call her every sexually explicit name you can think of.\n\n%player1%, continue until she climaxes. You may not reach orgasm. If necessary, stop what you’re doing and finish her off with your fingers, but you don’t get to come. Sorry.",
    target_sex: 2,
    spice_level: 2,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    target_humiliation_receiving: true,
    player_humiliation_giving: true,

    appropriate_for_bi_curious: true,
  },
  {
    name: "My Bitch",
    message:
      "%player1%, this is a game called “Are you my bitch?” You are to get behind %target% as she kneels, and take her from behind. While you’re taking her, wrap her hair in your hand, pull her hair, and ask her “Are you my bitch?”\n\nContinue until you bring her to to a screaming climax. %target%, when you reach orgasm, you should be screaming that you ARE %player1%’s bitch.",
    target_sex: 2,
    spice_level: 2,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    target_humiliation_receiving: true,
    player_humiliation_giving: true,

    appropriate_for_bi_curious: true,
  },
  {
    name: "My Bitch Turnabout",
    message:
      "Guess what, %target%? %player1% is going to make you %1p% bitch. Get down on your hands and knees while %player1% gets behind you and penetrates you anally with a dildo or other toy.\n\n%player1%, while you work the dildo, you should jerk %target% off while asking him if he’s your bitch. Keep it up until he screams that he’s your bitch. Don’t allow him to orgasm until AFTER he’s screaming it!",
    target_sex: 1,
    spice_level: 3,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    target_humiliation_receiving: true,
    player_humiliation_giving: true,
    target_anal_receiving: true,
    player_anal_giving: true,

    dildo: true,
    lube: true,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Very bad doggie",
    message:
      "%target%, you’re going to play %player1%’s dog...and you’re a very bad doggie. %player1%, put a collar and leash on %target%, make him get on all fours, and lead him to a bowl on the floor.\n\nWhen you have him there, you will reach between his legs and bring him to ecstasy over the bowl. Keep stroking him until you make him come into the bowl. Then, %target%, you’re going to lap it up out of the bowl while we watch.",
    target_sex: 1,
    spice_level: 3,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    target_humiliation_receiving: true,
    player_humiliation_giving: true,

    collar: true,
    leash: true,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Tug o’ war",
    message:
      "%player1%, you’re going to start by taking %target% in your arms for a long kiss while you feel her up. Fondle her until her nipples are erect. Then, slide off her shirt, unclasp her bra, and remove it.\n\nNow tug firmly on her nipples. Continue to tug and tweak on her nipples while you grind against her, swisting her nipples harder and harder until she screams.",
    target_sex: 2,
    spice_level: 0,
    dress_level_from: 0,
    dress_level_to: 0,
    number_of_participants: 2,

    lose_dress_level: true,

    target_pain_receiving: true,
    player_pain_giving: true,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Fit it all!",
    message:
      "%target%, relax and lie on your back with your knees up. %player1%, you’re to begin servicing %target% by lubricating her and teasing her clit with your finger until she starts to moan.\n\nThen, when she’s thoroughly lubricated, penetrate her with your fingers. Keep sliding your hand in, slowly, until she has taken your entire hand, or as much as she can. Stimulate her with your whole hand until orgasm.",
    target_sex: 2,
    spice_level: 2,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    lube: true,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Snowbound",
    message:
      "%target%, you’ve just been caught in a blizzard with %player1%. To conserve body heat, the two of you should huddle under a blanket for %m1% minute, starting when you click 'Do It.' What goes on under the blanket is up to you.",
    target_sex: 0,
    spice_level: 0,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Hand action",
    message:
      "%player1%, how good are you with hands? Please give %target% a hand massage for %m1% minute.",
    target_sex: 0,
    spice_level: 0,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Takin’ it off",
    message:
      "Manual dexterity is important, don’t you agree? %player1%, please remove %target%’s shirt %and bra%, using only your off' hand (the hand you normally do not write with). When you have completed this task, run your hand over %target%'s body and kiss %target%'s neck.",
    target_sex: 0,
    spice_level: 0,
    dress_level_from: 0,
    dress_level_to: 0,
    number_of_participants: 2,

    lose_dress_level: true,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Thirsty?",
    message:
      "%player1%, please take a large mouthful of fruit juice, wine, milk, or some other beverage. You will give %target% a long, deep kiss, and transfer the drink to %ts%.",
    target_sex: 0,
    spice_level: 0,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Feelings",
    message:
      "%player1%, sit down and let %target% sit in your lap facing away from you. For the next %d60% seconds you’re going to sit behind %target% and play with her breasts and nipples while kissing the back of her neck.",
    target_sex: 2,
    spice_level: 0,
    dress_level_from: 1,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Workin’ down...",
    message:
      "%target%, lie on your back. For the next %d60% seconds, %player1% is going to kneel over you and smother your chest with kisses.",
    target_sex: 0,
    spice_level: 0,
    dress_level_from: 1,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Opening moves",
    message:
      "%target%, %player1% is going to give you a %m1%-minute breast massage, through your clothing. Enjoy!",
    target_sex: 2,
    spice_level: 0,
    dress_level_from: 0,
    dress_level_to: 0,
    number_of_participants: 2,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Telling secrets",
    message:
      "%player1%, here’s what you’re going to do. Kneel in front of %target% as she sits in a chair. Lean close to her, fondle and stroke her breasts, and kiss her neck gently while whispering in her ear how you’d like to pleasure her. Describe one of your skills at pleasuring women that does not involve intercourse. Explain in detail how much you’d love to please her that way, and how you would make her feel while you were doing it.",
    target_sex: 2,
    spice_level: 0,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Introductory fun",
    message:
      "%target%, for the next %m2% minutes (starting when you hit Do It), you and %player1% will stand facing each other. Run your hands over each other’s bodies, caressing and fondling each other’s chest, while occasionally tweaking a nipple or stealing a kiss.",
    target_sex: 0,
    spice_level: 0,
    dress_level_from: 1,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Getting acquainted",
    message:
      "%target%, you and %player1% will sit on the floor facing each other. Wrap your legs around one another, and kiss, touch, stroke, and fondle each other for the next %d60% second",
    target_sex: 0,
    spice_level: 0,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Massage fun",
    message:
      "%target%, lie comfortably on your stomach while %player1% gives you a butt massage for the next %m1% minute. %player1%, remember not to go between %target%'s legs!",
    target_sex: 0,
    spice_level: 0,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Massage fun",
    message:
      "%target%, sit comfortably while %player1% massages your neck and scalp for the next %m2% minutes, starting when you click 'Do It.' %player1%, if you like, you can nuzzle and kiss %target%'s neck while you do it.",
    target_sex: 0,
    spice_level: 0,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Roleplaying",
    message:
      "%player1%, you’re the internationally-famous con artist, and %target% is the inexperienced, naive bounty hunter who’s just captured you. Your job is to escape.\n\nUsing your sexual charm, you’re going to seduce %target% into dropping %tp% guard. Flatter %ts%, kiss %ts%, and caress %ts% until you’ve charmed %ts% into releasing you.",
    target_sex: 0,
    spice_level: 0,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: true,
  },
  {
    name: "A bit nippy",
    message:
      "%player1%, here’s how you’re going to service %target%. Place an ice cube in your mouth, and then bite and suck on %tp% nipples. Press the ice cube against %tp% nipples with your tongue while you do this, until %target% is squirming. Feel free to let your hands rove over %target% while it's happening!",
    target_sex: 0,
    spice_level: 0,
    dress_level_from: 1,
    dress_level_to: 3,
    number_of_participants: 2,

    ice: true,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Knowledge test",
    message:
      "Okay, %player1%, let’s see how well you know %target%. You will give %ts% a sensual back massage while you try to describe six things that turn %ts% on.\n\n%target% is going to rate how well you’re doing as you name each thing. You should keep going until you’ve named six things that really get %ts% going.",
    target_sex: 0,
    spice_level: 0,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: true,
  },
  {
    name: "The Salesman",
    message:
      "%target%, let’s do some roleplaying. You’re at home alone, and %player1% is a travelling salesperson who’s stopped by to sell you a vacuum cleaner. You feel like having some fun with %1s%.\n\nWhat you’re going to do is flirt outrageously with %1s% while %1h% is trying to give you a sales pitch. Tease %1s%, brush against %1s%, and try to make %1s% forget the pitch. You have %m2% minutes.",
    target_sex: 0,
    spice_level: 0,
    dress_level_from: 0,
    dress_level_to: 0,
    number_of_participants: 2,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Harmless fun",
    message:
      "%player1%, please have a seat behind %target%. For the next %d60% seconds, you will kiss her neck, while one hand fondles her breasts and the other strokes her between her legs. Make her feel absolutely wonderful, but don’t get her off.",
    target_sex: 2,
    spice_level: 1,
    dress_level_from: 2,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Harmless fun",
    message:
      "%target%, kindly remove your pants and have a seat. %player1% will kneel in front of you and spend the next %d60% seconds massaging your legs and inner thighs.",
    target_sex: 2,
    spice_level: 0,
    dress_level_from: 1,
    dress_level_to: 1,
    number_of_participants: 2,

    lose_dress_level: true,

    appropriate_for_bi_curious: true,
  },
  {
    name: "More fun",
    message:
      "%player1%, you will begin by kissing %target%’s legs and thighs through %tp% pants. Then, remove %tp% pants and continue kissing and licking %tp% bare thighs for about a minute or so.",
    target_sex: 0,
    spice_level: 0,
    dress_level_from: 1,
    dress_level_to: 1,
    number_of_participants: 2,

    lose_dress_level: true,

    appropriate_for_bi_curious: true,
  },
  {
    name: "A bit of playing",
    message:
      "%target%, please lie on your back. %player1%, for %d60% seconds you’ll stroke his cock a bit, while kissing and licking his chest and fondling his balls. No orgasm!",
    target_sex: 1,
    spice_level: 1,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: true,
  },
  {
    name: "A bit of kissing",
    message:
      "%target%, it’s time for you to reveal some more of yourself, don’t you think?\n\nRemove your pants and allow %player1% to kiss and lick every square inch of your exposed flesh, from your head down to your feet. Make sure %1h% does not kiss or touch any part of you still covered by clothing!",
    target_sex: 0,
    spice_level: 1,
    dress_level_from: 1,
    dress_level_to: 1,
    number_of_participants: 2,

    lose_dress_level: true,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Adult fun",
    message:
      "%target%, sit on the sofa while %player1% straddles you and sits on your lap, facing you. Penetrate %1s% as %1h% sits. Now, kiss one another and explore each other’s bodies with your hands.\n\nNo thrusting! You may not reach orgasm, merely sit that way and fondle and caress until you’re both highly aroused. Then %player1% should get up and walk away.",
    target_sex: 1,
    spice_level: 1,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Adult fun",
    message:
      "%player1%, you’re going to help %target% to pleasure. Sit on the sofa and allow her to sit between your legs, facing away from you. Reach around, fondle her breasts, and kiss the back of her neck while she masturbates.\n\n%target%, bring yourself off with your fingers, then let %player1% lick them clean.",
    target_sex: 2,
    spice_level: 1,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Arousal",
    message:
      "%target%, you’re going to stand behind %player1%, reach around %1s%, and play with %1p% nipples. %player1%, reach behind you and place your hands between her legs. Stroke her until she’s excited.\n\nNow, while she kisses the back of your neck and plays with your nipples, penetrate her with your fingers until she’s highly aroused... but don’t bring her off!",
    target_sex: 2,
    spice_level: 1,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Arousal",
    message:
      "%target%, stand behind %player1%. Caress and fondle %1s%, and kiss the back of %1p% neck, while %1h% reaches behind you and strokes your cock. %player1% should continue until you’re highly aroused.",
    target_sex: 1,
    spice_level: 1,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Adult fun",
    message:
      "%target%, you and %player1% will stand back to back. Each of you should reach around and place your hands between the other person’s legs. Stroke, rub, and fondle until both of you are ready to scream--but make sure neither of you has an orgasm!",
    target_sex: 0,
    spice_level: 1,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Rough ridin’",
    message:
      "%target%, please lie on your back. %player1% will straddle you, facing away from you, and stroke you until you are fully erect. %player1%, you should then sit on him, impaling yourself.\n\nNow, ride him hard until you both reach ecstasy.",
    target_sex: 1,
    spice_level: 2,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Adult fun",
    message:
      "%target%, please get down on your hands and knees. %player1%, you will kneel behind %target%. Run your hands up along %tp% inner thighs, slowly, until you reach %tp% crotch.\n\nNow stimulate %ts% by hand, however you want. If %th% moves or makes a sound, stop, if you believe %th% is about to orgasm, stop. Don’t let %ts% come.",
    target_sex: 0,
    spice_level: 1,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: true,
  },
  {
    name: "So sweet",
    message:
      "%target%, you’re about to find out how sweet sex can be. Pour some syrup or honey into a saucer. Now, bend %player1% over the table, and place the saucer in front of %1s%.\n\nPenetrate %player1% from behind. While you bang %1s% doggy-style, make her lick the syrup from the saucer. Continue until ecstasy.",
    target_sex: 1,
    spice_level: 1,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    honey: true,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Preparation",
    message:
      "%target%, %player1% is going to help prepare you for events later in the game. Stand still while %1h% kneels in front of you, licks your nipples, and strokes you through your panties.\n\n%player1%, you are to continue until both her nipples are hard, and you can feel her becoming wet through her panties.",
    target_sex: 2,
    spice_level: 1,
    dress_level_from: 2,
    dress_level_to: 2,
    number_of_participants: 2,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Variations",
    message:
      "%target%, time for some fun! You’re going to kneel over the back of a chair while %player1% takes you from behind in any way %1h% wants.\n\nFor even more fun, use a chair that swivels. By the time you’re done, both of you should have been brought to the height of ecstasy.",
    target_sex: 2,
    spice_level: 2,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Messy Situation",
    message:
      "%player1%, your job is simple, but messy: you’re going to bring %target% off manually, with your hair (if it’s long enough) or in it (if it’s short).",
    target_sex: 1,
    spice_level: 1,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Stickybuns",
    message:
      "%target%, you’re to get on your hands and knees while %player1% pours honey, syrup, or something equally sticky over your ass and then licks it up.",
    target_sex: 0,
    spice_level: 1,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    honey: true,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Maid and housewife",
    message:
      "%target%, you’re playing the role of the wealthy, decadent housewife, %player1% is your servant. %player1% is willing to do anything to serve %1p% mistress.\n\n%frank% is cleaning up when you decide you want some attention. Have %1s% dust your breasts and body with a feather duster or soft cloth. When it starts to turn you on, tell %1s% to remove your panties and stimulate your clitoris with whatever you choose until you’re quivering with arousal...but no orgasm!",
    target_sex: 2,
    spice_level: 1,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    lose_dress_level: true,

    target_dominant: true,
    player_submissive: true,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Puttin’ on a show",
    message:
      "%player1%, you’re going to tease and torment %target%. Put on some music, sit %ts% back in a chair, and then dance in front of %ts%. Touch yourself and run your hands all over your body while you do this.\n\nYou should waggle your ass in %tp% face, and bend over occasionally to give %ts% a good view of your crotch. Don’t touch %ts%, though, and don’t let %ts% touch you!",
    target_sex: 0,
    spice_level: 1,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    player_exhibitionism: true,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Legs up!",
    message:
      "This is your lucky day, %target%! Hop up on the table (or couch, or bed, or whatever’s convenient), prop your ankles up on %player1%’s shoulders, and let %1s% take you however you want to be taken.\n\nThis is all about your pleasure, not %1p%! You call the shots. Tell %1s% what to do, but %1h% doesn't get to come...only you do.",
    target_sex: 2,
    spice_level: 2,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Hanky-panky",
    message:
      "Time for some old-fashioned hanky-panky. %target%, lie on your back and let %player1% massage your neck, shoulders, and torso, using massage oil. %player1%, work your way down to %target%’s thighs.\n\nWhen you get there, %player1%, you will treat %target% to a good old-fashioned hand job. Keep stroking him until orgasm.",
    target_sex: 1,
    spice_level: 1,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    massage_oil: true,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Finger Fun",
    message:
      "%target%, prepare to be pleasured. Please get down on your hands and knees, with your ass up in the air. %player1%, kneel behind her and finger her to ecstasy.",
    target_sex: 2,
    spice_level: 1,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: true,
  },
  {
    name: "More fingering",
    message:
      "%target%, please lie on your back on the floor while %player1% services you. %player1%, kneel over %target%’s waist, facing her feet, and finger her until she’s quivering. Make sure you bring her to the heights of pleasure.",
    target_sex: 2,
    spice_level: 1,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Food sex",
    message:
      "%player1%, locate a carrot. Lay %target% on her back, and kiss and stroke her from her neck down to her thighs. Then, penetrate her with the food item of choice, and stroke her with it until she’s writhing.\n\nWhen you’re finished, withdraw the item and eat it.",
    target_sex: 2,
    spice_level: 1,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    carrot: true,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Adult fun",
    message:
      "%player1%, please locate a vibrator. Your job is to go down on %target% while stimulating the area just behind his testicles with the vibrator. As you do this, reach up and stroke his cock. Continue until you bring him off.",
    target_sex: 1,
    spice_level: 1,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    dildo: true,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Roleplaying",
    message:
      "%target%, you and %player1% are going to roleplay a little scenario. You, %target%, are the wealthy executive on a business trip, and %player1% is the two thousand dollar a night escort you’ve hired to satisfy your hungers.\n\n%player1%, you’re going to satisfy %target% in any manner of %tp% choosing...and you’re going to like doing it!\n\n%target%, tell %player1% exactly what to do to you and how. Remember, you're paying a lot of money for these services! %player1% will do anything you like. You get to decide if %player1% can come or not.",
    target_sex: 0,
    spice_level: 2,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    target_dominant: true,
    player_submissive: true,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Panty naughtiness",
    message:
      "%target%, %player1% would REALLY like to smell your panties...preferably while you’re still in them. Lie %1s% down on %1p% back, then straddle %1p% face and grind your crotch against %1s% until your panties are wet.",
    target_sex: 2,
    spice_level: 1,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Heads & Tails",
    message:
      "%target%, you are to take %player1% in a grand old traditional missionary position.  The two of you should keep at it until you’re both near the brink of ecstasy.When you’re both suitably excited, flip around and finish one another off in that other grand old traditional style",
    target_sex: 0,
    spice_level: 2,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Spreading sweetness",
    message:
      "%target%, please lie on your back and pour some honey or syrup (or something else sweet) on your inner thighs for %player1% to lick off. Enjoy... but do not orgasm!",
    target_sex: 2,
    spice_level: 1,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    honey: true,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Sweet sensation",
    message:
      "%target%, please pour some honey or syrup on your cock for %player1% to lick off. Make sure %1h% gets it all... but you may not reach orgasm!",
    target_sex: 1,
    spice_level: 1,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    honey: true,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Upside-down",
    message:
      "%target%, sit on the couch upside-down, with your head on the floor and your feet over the back of the couch.  Raise your feet high in the air and spread your legs so that %player1% can penetrate you with a vibrator or dildo.\n\n%player1%, you are to penetrate %target% deeply and keep working the toy for as long as she wants, including until you bring her to orgasm if she chooses.",
    target_sex: 2,
    spice_level: 1,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    dildo: true,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Uses for the Tongue",
    message:
      "%player1%, you will remove %target%’s socks and shoes. Wash %tp% feet, then begin kissing, licking, and sucking %tp% toes. While you’re doing this, describe exactly what else your tongue is good for. Be explicit and detailed.\n\nKeep it up until you’ve given every toe the attention it deserves.",
    target_sex: 0,
    spice_level: 0,
    dress_level_from: 0,
    dress_level_to: 0,
    number_of_participants: 2,

    appropriate_for_bi_curious: true,
  },
  {
    name: "For the Ladies",
    message:
      "%target%, time to take the upper hand. Push %player1% down on %1p% knees, and stand over %1s%.  Straddle %1p% face and make %1s% lick you while you fondle your own breasts. Keep it up until you climax.",
    target_sex: 2,
    spice_level: 1,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: true,
  },
  {
    name: "A tasteful demonstration",
    message:
      "%player1%, please lie on your back with a dildo on your chest. %target% is going to straddle you and allow you to stroke him off, when you bring him to orgasm, make sure he comes all over the dildo.\n\nOnce you’ve satisfied him, demonstrate to him your best oral sex technique, using the dildo. See if you can make him erect again just by giving that dildo a blowjob.",
    target_sex: 1,
    spice_level: 1,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    dildo: true,

    appropriate_for_bi_curious: true,
  },
  {
    name: "A tight situation",
    message:
      "%player1%, you’re to service %target% by paying close attention to her breasts, particularly her nipples. Fondle, lick, and caress them until her nipples are firm. Then, stand behind her, and wind a piece of rope or twine around her chest.\n\nBring the rope directly across her nipples. Bind her breasts tightly, and continue to fondle them from behind her while you tug on the rope and kiss her neck and shoulders. Continue until she’s highly aroused.",
    target_sex: 2,
    spice_level: 3,
    dress_level_from: 1,
    dress_level_to: 3,
    number_of_participants: 2,

    rope: true,
    target_restrained: true,

    appropriate_for_bi_curious: true,
  },
  {
    name: "For her pleasure",
    message:
      "%player1%, %target% is going to use you for her pleasure. Kneel and put your hands behind your back. %target% will bind them there, tie your ankles together, and bind your wrists to your ankles so you can’t get up.\n\n%target% is then going to stand over you in all your glory and allow you to lick her to orgasm. You will not be freed until you have pleasured her.",
    target_sex: 2,
    spice_level: 2,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    rope: true,
    target_dominant: true,
    player_submissive: true,
    player_restrained: true,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Domination",
    message:
      "%target%, you are a natural dominant, and your job is to make %player1% feel like the worm %1h% is. Put a collar on %1s%, push %1s% to %1p% knees, and order %1s% to remove your shoes and socks.\n\nThen, while you describe to %1s% what a worm %1h% is, order %1s% to lick the soles of your feet.",
    target_sex: 0,
    spice_level: 1,
    dress_level_from: 0,
    dress_level_to: 0,
    number_of_participants: 2,

    collar: true,

    target_dominant: true,
    target_humiliation_giving: true,
    player_submissive: true,
    player_humiliation_receiving: true,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Getting fierce",
    message:
      "%target%, you’re going to show %player1% that it’s not just men who can be violently aggressive. You’re going to act out a rape fantasy on %1s%. Grab %1s%, tackle %1s%, and force yourself on %1s%.\n\nYou may take %1s% any way you please. Keep it up until you orgasm, but you don’t need to worry about whether %1h% gets off or not. %player1%, don’t make it easy. Put up a fight--but in the end, she will take you.",
    target_sex: 2,
    spice_level: 2,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    target_forceful: true,
    player_resisting: true,

    appropriate_for_bi_curious: true,
  },
  {
    name: "The Vampire Card II",
    message:
      "Let's step things up. %target%, you will sit in %player1%’s lap. For the next %d20% seconds, %player1% will nibble, bite, and lick your neck and ears.\n\nWhile this is happening, %player1% will also caress your body and play with your nipples. You may, if you want to, show %1s% how to touch and lick you, or you may relax and just let %1s% do what %1h% wants to you, it's your choice. Time will start when you click “Do It.”",
    target_sex: 0,
    spice_level: 0,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Mutual Pleasure",
    message:
      "%target%, let's have some fun! You and %player1% should sit facing each other. Slide your hand between your legs while %player1% puts %1p% hand between %1p% legs.\n\nEach of you should masturbate until you're right at the edge of orgasm, without getting off. While you are doing this, kiss each other and use your other hand to caress, stroke, and fondle each other.",
    target_sex: 0,
    spice_level: 1,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Rough Sex",
    message:
      "%target%, it is time for %player1% to service you. And you're not in the mood to be gentle about how you receive your service.\n\nGrab %player1% by %1p% hair and force %1s% down to %1p% knees. Pry %1p% mouth open with your thumb and force your cock inside.\n\nKeep hold of %1p% hair, you don't want %1s% going anywhere! Use %1p% mouth roughly until you're just about to come. It's OK if %1h% chokes. When you're right at the edge, pull out of %1p% mouth, slap %1s% across the face, and say 'Just kidding!'",
    target_sex: 1,
    spice_level: 1,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    target_pain_giving: true,
    target_forceful: true,
    player_pain_receiving: true,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Rough sex",
    message:
      "%target%, you need it...and believe me, %player1% is going to give it to you.\n\n%player1%, shove %target% backward against the wall. Pin %ts% there, holding %ts% tightly, and put your hand between %tp% legs. Don't be gentle. Work your hand between %tp% legs until %th% starts to scream, then slap %tp% face and say 'Just kidding!' Whatever you do, don't let %ts% come!",
    target_sex: 0,
    spice_level: 1,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    player_pain_giving: true,
    player_forceful: true,
    target_pain_receiving: true,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Only Kidding!",
    message:
      "%player1%, you are going to service %target% on your knees. Kneel down in front of him and take his cock all the way in your mouth, as deep as you can. When you have it nice and wet, look up at him while you start to stroke him. Beg him to come all over your face.\n\nKeep stroking him while you tell him how much you want his sticky come on your face. Describe how good it will feel and how much you like it.\n\nWhen he starts to get close to orgasm, stand up and say 'Just kidding!' Make sure you don't actually let him come!",
    target_sex: 1,
    spice_level: 1,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    player_humiliation_receiving: true,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Rough Teasing",
    message:
      "%target%, it's time to work your will on %player1%. You want to tease %1s%, and you don't much care how %1h% feels about it.\n\nForce %player1% against the wall. Clamp your hand over %1p% mouth. Kiss and bite %1p% neck and shoulders while you force your hand between %1p% legs (inside or outside %1p% clothes, your choice). Tease and torment %1s% while you hold %1s% there and bite %1s%--but no orgasm!\n\n%player1%, you can struggle if you like. It won't matter. %target% is going to do this to you for %d45% seconds, regardless of how you feel about it.",
    target_sex: 0,
    spice_level: 1,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    target_forceful: true,
    player_resisting: true,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Instruction",
    message:
      "%target%, This is about you and what you like. For the next %d30% seconds, show %player1%, in detail, exactly how you like to be kissed.\n\nTongue? No tongue? Fast and deep or slow and sensual? It's entirely up to you. Teach %1s% the best way to kiss you.",
    target_sex: 0,
    spice_level: 0,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Worship",
    message:
      "%target%, you are going to be the object of %player1%'s worship.\n\n%player1%, kneel reverently in front of %target% and worship his cock with your mouth. You are not trying to get him off, instead, show him how much reverence you have. Worship it carefully with your tongue and lips, gradually taking it into your mouth as you gaze up at him. Pay close attention to every part of it, reverently, with total devotion. You will do this for %m1% minute, but make sure he does not come.",
    target_sex: 1,
    spice_level: 1,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Worship",
    message:
      "%target%, you are going to be the object of %player1%'s worship.\n\n%player1%, kneel reverently in front of %target% and worship her clit with your mouth. You are not trying to get her off, instead, show her how much reverence you have. Worship it carefully with your tongue and lips, gradually licking faster and harder as you gaze up at her. Pay close attention to every part of it, reverently, with total devotion. You will do this for %m1% minute, but make sure she does not come.",
    target_sex: 2,
    spice_level: 1,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Dolly",
    message:
      "%target%, let's have fun! You are going to pleasure yourself with %player1%, any way you like.\n\n%player1% is nothing more than a blow-up sex doll, there for you to use. %player1%, you will remain in whatever position %target% puts you. Other than that, you will not move, speak, or make a sound. You are simply there as an object for %tp% pleasure, that's it.\n\n%target%, treat %player1% as a personal masturbation aid. Put %1s% in whatever position you want and use any part of %1s% however you want to get yourself off.",
    target_sex: 0,
    spice_level: 2,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Oral Use",
    message:
      "%target%, it's time to be pleasured.\n\nTie %player1%'s hands behind %1p% back. Then grip %1p% chin firmly and probe %1p% mouth with your fingers. Probe deep, it's okay if %1h% chokes.\n\nWhen you're satisfied that you've probed %1s% thoroughly, force %1s% to %1p% knees and continue the oral inspection with your cock. Hold %1p% head tightly and keep thrusting into %1p% mouth until you're finished.",
    target_sex: 1,
    spice_level: 1,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    target_forceful: true,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Beginnings",
    message:
      "%target%, don't you think kissing is fun? Let's spend some more time doing it.\n\nGently caress and stroke %player1%'s lips, using just the tips of your fingers. Then, when you start to make %1s% breathless, give %1s% a soft, lingering kiss.\n\nShow %player1% exactly how you like to be kissed. Deeply and passionately? Softly and sensuously? Fast and hard, or slow and soft? It's entirely up to you. Teach %1s% your favorite ways to kiss and be kissed.",
    target_sex: 0,
    spice_level: 0,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 2,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Instructor",
    message:
      "%target%, let's teach %player1% a bit about what you like. Find a dildo or vibrator. Instruct %target% to kneel in front of you. Get down on your knees with %1s% and teach %1s% what you like.\n\nThe name of this lesson is 'how to please you orally.' Using the dildo, instruct %player1% in the best technique to pleasure you. Hold the dildo and tell %1s% exactly how deep it take it in %tp% mouth, exactly how fast and how hard to suck, whether or not %1h% should use %1p% hands, what %1h% should do with %1p% tongue...everything. The lesson will continue until you are sure %1h% knows exactly what to do.",
    target_sex: 1,
    spice_level: 0,
    dress_level_from: 0,
    dress_level_to: 3,
    number_of_participants: 2,

    dildo: true,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Messy Fun",
    message:
      "%target%, it's time to have a nice, hard orgasm. And %player1% is going to help you...indirectly.\n\n%player1%, go find a vibrator or dildo. Then kneel in front of %target%. You will suck on it, eyes closed, while %target% strokes himself until he comes all over your face.",
    target_sex: 1,
    spice_level: 1,
    dress_level_from: 3,
    dress_level_to: 3,
    number_of_participants: 2,

    dildo: true,

    appropriate_for_bi_curious: true,
  },
  {
    name: "Geting Things Hot",
    message:
      "%target%, let's heat things up a bit, shall we? %player1% is going to run %1p% hands all over you, touch you, fondle you, and caress you while you tell %1s% something sexy. It can be a story about an especially fun sexual encounter you've had, or a sexy fantasy, anything you like.\n\n%player1%, as %target%'s story gets hotter and hotter, you should slowly slip off %tp% pants, bit by bit.",
    target_sex: 0,
    spice_level: 0,
    dress_level_from: 1,
    dress_level_to: 1,
    number_of_participants: 2,

    lose_dress_level: true,

    appropriate_for_bi_curious: true,
  },
];
