export type Localized={en:string;si:string};
export type Lesson={id:string;section:"quality"|"practice";number:number;dimension:"understand"|"reflect"|"kindness";verse:string;pali:string;paliSinhala:string;title:Localized;subtitle:Localized;meaning:Localized;scenario:Localized;practice:Localized;question:Localized;minutes:number;};
export const lessons:Lesson[]=[
  {
    "id": "clear-seeing",
    "number": 1,
    "section": "quality",
    "dimension": "understand",
    "verse": "1",
    "pali": "Sakko",
    "paliSinhala": "සක්කෝ",
    "title": {
      "en": "Be capable",
      "si": "දක්ෂ වන්න"
    },
    "subtitle": {
      "en": "Build the skills needed for wholesome action.",
      "si": "යහපත් ක්‍රියාවකට අවශ්‍ය හැකියාව වඩන්න."
    },
    "meaning": {
      "en": "Capability means preparing to act well, rather than relying on good intentions alone.",
      "si": "හොඳ චේතනාව පමණක් නොව එය ක්‍රියාවට නැංවීමට අවශ්‍ය හැකියාව සකස් කිරීම මෙහි අදහසයි."
    },
    "scenario": {
      "en": "You want to help a friend, but have not understood what they need.",
      "si": "මිතුරෙකුට උපකාර කරන්න කැමති වුවත් ඔහුට අවශ්‍ය දේ ඔබ තවම දන්නේ නැත."
    },
    "practice": {
      "en": "Ask what help is needed. Choose one skill to improve and practise it for five minutes.",
      "si": "අවශ්‍ය උපකාරය කුමක්දැයි අසන්න. වැඩිදියුණු කළ යුතු එක් හැකියාවක් තෝරා විනාඩි පහක් පුහුණු වන්න."
    },
    "question": {
      "en": "What ability would make my good intention useful?",
      "si": "මගේ යහපත් අදහස ප්‍රයෝජනවත් කරන්නේ කුමන හැකියාවද?"
    },
    "minutes": 5
  },
  {
    "id": "uju",
    "number": 2,
    "section": "quality",
    "dimension": "understand",
    "verse": "1",
    "pali": "Ujū",
    "paliSinhala": "උජූ",
    "title": {
      "en": "Be upright",
      "si": "අවංක වන්න"
    },
    "subtitle": {
      "en": "Let your words agree with the facts.",
      "si": "කරුණු සමඟ ගැළපෙන ලෙස කතා කරන්න."
    },
    "meaning": {
      "en": "Uprightness asks for honesty in what we say and do.",
      "si": "සෘජු බව යනු කීමේදීත් කිරීමේදීත් අවංකව සිටීමයි."
    },
    "scenario": {
      "en": "You missed a deadline and are tempted to invent an excuse.",
      "si": "කාලසීමාව මඟහැරී ඇත. බොරු හේතුවක් කියන්නට සිතේ."
    },
    "practice": {
      "en": "State what happened without exaggeration. Accept your part and offer a realistic repair.",
      "si": "අතිශයෝක්තියෙන් තොරව සිදු වූ දේ කියන්න. ඔබේ වගකීම පිළිගෙන කළ හැකි විසඳුමක් යෝජනා කරන්න."
    },
    "question": {
      "en": "Where can I replace an excuse with honesty?",
      "si": "හේතුවක් ගොතා කීම වෙනුවට මට අවංක විය හැක්කේ කොතැනදීද?"
    },
    "minutes": 5
  },
  {
    "id": "suju",
    "number": 3,
    "section": "quality",
    "dimension": "understand",
    "verse": "1",
    "pali": "Sūjū",
    "paliSinhala": "සූජූ",
    "title": {
      "en": "Be thoroughly upright",
      "si": "ඉතා අවංක වන්න"
    },
    "subtitle": {
      "en": "Keep integrity even when nobody is watching.",
      "si": "කිසිවෙකු නොබලන විටත් අවංකකම රකින්න."
    },
    "meaning": {
      "en": "The added emphasis invites consistency: public and private conduct should agree.",
      "si": "තවත් අවංක වීම යනු අන් අය ඉදිරියේත් තනිව සිටින විටත් එක සේ යහපත්ව ක්‍රියා කිරීමයි."
    },
    "scenario": {
      "en": "A small error benefits you, and nobody has noticed it.",
      "si": "කුඩා වරදකින් ඔබට වාසියක් ලැබී ඇත. කිසිවෙකු එය දැක නැත."
    },
    "practice": {
      "en": "Correct the error and tell the person affected. Notice any wish to hide it.",
      "si": "වරද නිවැරදි කර අදාළ අයට කියන්න. එය සඟවන්නට ඇති කැමැත්ත නිරීක්ෂණය කරන්න."
    },
    "question": {
      "en": "Do my private choices match my stated values?",
      "si": "මගේ පෞද්ගලික තීරණ මම කියන වටිනාකම් සමඟ ගැළපේද?"
    },
    "minutes": 5
  },
  {
    "id": "receive-feedback",
    "number": 4,
    "section": "quality",
    "dimension": "reflect",
    "verse": "1",
    "pali": "Suvaco",
    "paliSinhala": "සුවචෝ",
    "title": {
      "en": "Be receptive to guidance",
      "si": "කීකරු වන්න"
    },
    "subtitle": {
      "en": "Listen carefully before defending yourself.",
      "si": "ඔබව සාධාරණීකරණය කිරීමට පෙර හොඳින් සවන් දෙන්න."
    },
    "meaning": {
      "en": "Being easy to advise supports learning and correction. Examine advice thoughtfully.",
      "si": "අවවාද පිළිගත හැකි බව ඉගෙනීමට සහ නිවැරදි වීමට උපකාරී වේ. අවවාද නුවණින් විමසන්න."
    },
    "scenario": {
      "en": "Someone points out a mistake; your first impulse is to interrupt.",
      "si": "කෙනෙක් වරදක් පෙන්වයි. ඔබට ඔහුගේ කතාව නවත්වන්නට සිතේ."
    },
    "practice": {
      "en": "Listen fully, restate the concern, and ask for one concrete example. Use what is sound.",
      "si": "සම්පූර්ණයෙන් සවන් දී අදහස නැවත කියන්න. එක් නිශ්චිත උදාහරණයක් අසා නිවැරදි දේ යොදාගන්න."
    },
    "question": {
      "en": "What useful correction did I nearly miss?",
      "si": "මට මඟහැරෙන්නට ගිය ප්‍රයෝජනවත් නිවැරදි කිරීම කුමක්ද?"
    },
    "minutes": 5
  },
  {
    "id": "mudu",
    "number": 5,
    "section": "quality",
    "dimension": "reflect",
    "verse": "1",
    "pali": "Mudu",
    "paliSinhala": "මුදු",
    "title": {
      "en": "Be gentle",
      "si": "මෘදු වන්න"
    },
    "subtitle": {
      "en": "Respond with a soft manner and a steady intention.",
      "si": "මෘදු ලෙසත් ස්ථිර අදහසකින් යුතුවත් ප්‍රතිචාර දක්වන්න."
    },
    "meaning": {
      "en": "Gentleness concerns the manner of responding: avoid harshness while expressing what matters.",
      "si": "මෘදු බව යනු වැදගත් දේ කියන අතර රළුකම අඩු කිරීමයි."
    },
    "scenario": {
      "en": "A family member repeats a mistake and you feel your voice rising.",
      "si": "පවුලේ කෙනෙක් නැවත වරදක් කරයි. ඔබේ හඬ උස්වන්නට යයි."
    },
    "practice": {
      "en": "Pause, lower your voice, and describe the issue without a personal insult.",
      "si": "නවතින්න. හඬ පහත් කර පුද්ගලයාට අපහාස නොකර ගැටලුව විස්තර කරන්න."
    },
    "question": {
      "en": "Was my manner as gentle as my intention?",
      "si": "මගේ කතා විලාසය මගේ යහපත් අදහස තරම් මෘදු වූවාද?"
    },
    "minutes": 5
  },
  {
    "id": "anatimani",
    "number": 6,
    "section": "quality",
    "dimension": "reflect",
    "verse": "1",
    "pali": "Anatimānī",
    "paliSinhala": "අනතිමානී",
    "title": {
      "en": "Be humble",
      "si": "අධික මානයෙන් තොර වන්න"
    },
    "subtitle": {
      "en": "Leave room for another person's knowledge.",
      "si": "අනෙකාගේ දැනුමට ඉඩ දෙන්න."
    },
    "meaning": {
      "en": "Freedom from excessive pride makes it easier to acknowledge limits and learn from others.",
      "si": "අධික මානය අඩු කිරීම තම සීමා පිළිගැනීමටත් අනුන්ගෙන් ඉගෙනීමටත් උපකාරී වේ."
    },
    "scenario": {
      "en": "A younger colleague knows something you do not.",
      "si": "තරුණ සගයෙකු ඔබ නොදන්නා දෙයක් දනී."
    },
    "practice": {
      "en": "Say 'I do not know yet.' Ask them to explain and thank them for their help.",
      "si": "'මම තවම දන්නේ නැහැ' කියා පැහැදිලි කරන ලෙස අසන්න. උපකාරයට ස්තුති කරන්න."
    },
    "question": {
      "en": "What did I learn after letting go of being right?",
      "si": "හැමවිටම නිවැරදි වීමේ අවශ්‍යතාව අත්හැර මම ඉගෙනගත්තේ කුමක්ද?"
    },
    "minutes": 5
  },
  {
    "id": "enough",
    "number": 7,
    "section": "quality",
    "dimension": "reflect",
    "verse": "2",
    "pali": "Santussako",
    "paliSinhala": "සන්තුස්සකෝ",
    "title": {
      "en": "Be content",
      "si": "ලද දෙයින් සතුටු වන්න"
    },
    "subtitle": {
      "en": "Notice sufficiency before seeking more.",
      "si": "තවත් සොයන්නට පෙර ඇති දේ ප්‍රමාණවත්දැයි බලන්න."
    },
    "meaning": {
      "en": "Contentment invites gratitude and examination of unnecessary wanting.",
      "si": "ලද දෙයින් සතුටු වීම කෘතඥතාව සහ අනවශ්‍ය ආශා විමසීම සඳහා ආරාධනා කරයි."
    },
    "scenario": {
      "en": "Someone's new device makes your working device feel inadequate.",
      "si": "අනෙකාගේ අලුත් උපකරණය නිසා හොඳින් වැඩ කරන ඔබේ එක මදි යැයි හැඟේ."
    },
    "practice": {
      "en": "List three needs already met. Wait a day before a nonessential purchase.",
      "si": "දැනටමත් සපුරා ඇති අවශ්‍යතා තුනක් ලියන්න. අත්‍යවශ්‍ය නොවන මිලදී ගැනීමකට පෙර දවසක් නවතින්න."
    },
    "question": {
      "en": "What is enough for this particular need?",
      "si": "මේ අවශ්‍යතාව සඳහා ප්‍රමාණවත් දේ කුමක්ද?"
    },
    "minutes": 5
  },
  {
    "id": "subharo",
    "number": 8,
    "section": "quality",
    "dimension": "reflect",
    "verse": "2",
    "pali": "Subharo",
    "paliSinhala": "සුභරෝ",
    "title": {
      "en": "Be easy to support",
      "si": "පහසුවෙන් පෝෂණය කළ හැකි වන්න"
    },
    "subtitle": {
      "en": "Reduce unnecessary demands on those who help you.",
      "si": "ඔබට උදව් කරන අය මත අනවශ්‍ය ඉල්ලීම් අඩු කරන්න."
    },
    "meaning": {
      "en": "Being easy to support asks us to consider the burdens our preferences place on others.",
      "si": "පහසුවෙන් පෝෂණය කළ හැකි බව යනු තම කැමැත්ත නිසා අනුන්ට ඇතිවන බර සලකා බැලීමයි."
    },
    "scenario": {
      "en": "A host offers a simple meal, but you want several special changes.",
      "si": "සත්කාරකයා සරල ආහාරයක් දෙයි. ඔබට විශේෂ වෙනස්කම් කිහිපයක් අවශ්‍ය වේ."
    },
    "practice": {
      "en": "Communicate genuine needs clearly, accept reasonable simplicity, and help with one task.",
      "si": "සැබෑ අවශ්‍යතා පැහැදිලිව කියන්න. සුදුසු සරල බව පිළිගෙන එක් වැඩකට උදව් කරන්න."
    },
    "question": {
      "en": "Which preference could I relax to ease another person's burden?",
      "si": "අනෙකාගේ බර අඩු කිරීමට මගේ කුමන කැමැත්ත ලිහිල් කළ හැකිද?"
    },
    "minutes": 5
  },
  {
    "id": "simplify",
    "number": 9,
    "section": "quality",
    "dimension": "kindness",
    "verse": "2",
    "pali": "Appakicco",
    "paliSinhala": "අප්පකිච්චෝ",
    "title": {
      "en": "Have few duties",
      "si": "අඩු වැඩ කටයුතු ඇති වන්න"
    },
    "subtitle": {
      "en": "Make space by reducing avoidable busyness.",
      "si": "වැළැක්විය හැකි කාර්යබහුල බව අඩු කර ඉඩ සලසන්න."
    },
    "meaning": {
      "en": "Few duties points toward reducing unnecessary activity so there is room for cultivation.",
      "si": "අඩු කටයුතු ඇති බව යනු අනවශ්‍ය වැඩ අඩු කර පුහුණුව සඳහා ඉඩ සලසා ගැනීමයි."
    },
    "scenario": {
      "en": "You accept every optional request and leave no quiet time.",
      "si": "අමතර ඉල්ලීම් සියල්ල පිළිගැනීම නිසා නිහඬ මොහොතක් නැත."
    },
    "practice": {
      "en": "Keep your responsibilities. Decline or defer one optional demand and reserve five quiet minutes.",
      "si": "වගකීම් ඉටු කරන්න. එක් අමතර ඉල්ලීමක් කල්දමා නිහඬ විනාඩි පහක් වෙන් කරන්න."
    },
    "question": {
      "en": "Which activity adds busyness without serving a worthwhile purpose?",
      "si": "වටිනා අරමුණකින් තොරව කාර්යබහුල බව වැඩි කරන වැඩය කුමක්ද?"
    },
    "minutes": 5
  },
  {
    "id": "sallahuka",
    "number": 10,
    "section": "quality",
    "dimension": "kindness",
    "verse": "2",
    "pali": "Sallahukavutti",
    "paliSinhala": "සල්ලහුකවුත්තී",
    "title": {
      "en": "Live lightly",
      "si": "සැහැල්ලු පැවැත්මක් ඇති වන්න"
    },
    "subtitle": {
      "en": "Carry fewer unnecessary possessions and complications.",
      "si": "අනවශ්‍ය දේ සහ සංකීර්ණතා අඩු කරන්න."
    },
    "meaning": {
      "en": "A light way of living supports simplicity in daily arrangements and material needs.",
      "si": "සැහැල්ලු පැවැත්ම දෛනික සැලසුම් සහ ද්‍රව්‍යමය අවශ්‍යතා සරල කරගැනීමට උපකාරී වේ."
    },
    "scenario": {
      "en": "Your desk is full of unused things that make every task harder.",
      "si": "භාවිත නොකරන දේවල් පිරුණු මේසය නිසා වැඩ අපහසු වී ඇත."
    },
    "practice": {
      "en": "Clear one small area. Keep what serves a purpose and give away one usable item you do not need.",
      "si": "එක් කුඩා තැනක් පිළිවෙළ කරන්න. ප්‍රයෝජනවත් දේ තබා අනවශ්‍ය භාවිත කළ හැකි දෙයක් බෙදා දෙන්න."
    },
    "question": {
      "en": "What am I carrying that no longer helps?",
      "si": "තවදුරටත් උපකාරී නොවන කුමන බරක් මම දරමින් සිටිමිද?"
    },
    "minutes": 5
  },
  {
    "id": "santindriya",
    "number": 11,
    "section": "quality",
    "dimension": "kindness",
    "verse": "2",
    "pali": "Santindriyo",
    "paliSinhala": "සන්තින්ද්‍රියෝ",
    "title": {
      "en": "Keep the senses calm",
      "si": "සන්සුන් ඉඳුරන් ඇති වන්න"
    },
    "subtitle": {
      "en": "Notice stimulation before following it.",
      "si": "උත්තේජනයකට පසුපස යන්නට පෙර එය දකින්න."
    },
    "meaning": {
      "en": "Calm senses invites restraint in how sights, sounds, and other impressions shape our response.",
      "si": "සන්සුන් ඉඳුරන් යනු දැකීම්, ඇසීම් සහ වෙනත් අරමුණු හමුවේ සංවරව ප්‍රතිචාර දැක්වීමයි."
    },
    "scenario": {
      "en": "A notification pulls you into scrolling during a conversation.",
      "si": "කතාවක් අතර දැනුම්දීමක් ඔබව දුරකථනය බලන්නට යොමු කරයි."
    },
    "practice": {
      "en": "Silence nonessential alerts for one conversation. Notice the urge and return to listening.",
      "si": "එක් කතාවක් අතර අමතර දැනුම්දීම් නිහඬ කරන්න. ඇතිවන පෙළඹීම දැක නැවත සවන් දෙන්න."
    },
    "question": {
      "en": "Which sensory pull repeatedly takes my attention away?",
      "si": "නැවත නැවත මගේ අවධානය වෙනස් කරන අරමුණ කුමක්ද?"
    },
    "minutes": 5
  },
  {
    "id": "nipaka",
    "number": 12,
    "section": "quality",
    "dimension": "kindness",
    "verse": "2",
    "pali": "Nipako",
    "paliSinhala": "නිපකෝ",
    "title": {
      "en": "Use discernment",
      "si": "තැනට සුදුසු නුවණ ඇති වන්න"
    },
    "subtitle": {
      "en": "Choose a response suited to the situation.",
      "si": "අවස්ථාවට සුදුසු ප්‍රතිචාරය තෝරන්න."
    },
    "meaning": {
      "en": "Discernment considers context, likely consequences, and what would be beneficial.",
      "si": "නුවණින් කටයුතු කිරීම සන්දර්භය, ප්‍රතිඵල සහ යහපත සලකා බැලීමයි."
    },
    "scenario": {
      "en": "A true comment could embarrass someone if said in public.",
      "si": "සැබෑ කරුණක් වුවත් ප්‍රසිද්ධියේ කීමෙන් කෙනෙකු අපහසු විය හැකිය."
    },
    "practice": {
      "en": "Ask whether the words are true, useful, and timely. Choose a private conversation if appropriate.",
      "si": "කියන දේ සැබෑද, ප්‍රයෝජනවත්ද, වේලාව සුදුසුදැයි බලන්න. අවශ්‍ය නම් පෞද්ගලිකව කතා කරන්න."
    },
    "question": {
      "en": "What response fits this situation rather than my first impulse?",
      "si": "මගේ මුල් පෙළඹීම වෙනුවට මේ අවස්ථාවට ගැළපෙන ප්‍රතිචාරය කුමක්ද?"
    },
    "minutes": 5
  },
  {
    "id": "appagabbha",
    "number": 13,
    "section": "quality",
    "dimension": "kindness",
    "verse": "2",
    "pali": "Appagabbho",
    "paliSinhala": "අප්පගබ්භෝ",
    "title": {
      "en": "Be courteous",
      "si": "අසංවර ගතිවලින් තොර වන්න"
    },
    "subtitle": {
      "en": "Make room for others with respectful conduct.",
      "si": "ගෞරවනීය හැසිරීමෙන් අන් අයට ඉඩ දෙන්න."
    },
    "meaning": {
      "en": "Courtesy and restraint reduce intrusive, rough, or inconsiderate behaviour.",
      "si": "සංවර බව රළු, අතපෙවීම් සහ නොසැලකිලිමත් හැසිරීම් අඩු කරයි."
    },
    "scenario": {
      "en": "You interrupt repeatedly because you want your idea heard.",
      "si": "ඔබේ අදහස කියන්නට අවශ්‍ය නිසා නැවත නැවත බාධා කරයි."
    },
    "practice": {
      "en": "Let the other person finish. Ask before offering advice and use a considerate tone.",
      "si": "අනෙකාගේ කතාව අවසන් වනතුරු ඉන්න. උපදෙස් දීමට පෙර අසා සැලකිලිමත් හඬකින් කතා කරන්න."
    },
    "question": {
      "en": "Did I give others the space I would want for myself?",
      "si": "මට අවශ්‍ය ඉඩම මම අන් අයට ලබා දුන්නාද?"
    },
    "minutes": 5
  },
  {
    "id": "nonattachment",
    "number": 14,
    "section": "quality",
    "dimension": "kindness",
    "verse": "2",
    "pali": "Kulesu ananugiddho",
    "paliSinhala": "කුලේසු අනනුගිද්ධෝ",
    "title": {
      "en": "Be unattached to families",
      "si": "කුලයන් කෙරෙහි ලොල් නොවන්න"
    },
    "subtitle": {
      "en": "Care without seeking favour or clinging.",
      "si": "වාසි නොසොයා, ඇලීමෙන් තොරව සැලකිලිමත් වන්න."
    },
    "meaning": {
      "en": "In its monastic setting, this concerns attachment to supporting families. Our daily application examines favour-seeking and dependence on approval.",
      "si": "පැවිදි සන්දර්භයේ මෙය උපස්ථාන කරන කුලයන්ට ඇලීම ගැනයි. දෛනික යෙදීමේදී වාසි සෙවීම සහ අනුමැතියට ඇලීම විමසමු."
    },
    "scenario": {
      "en": "You are unusually agreeable around someone who can offer you benefits.",
      "si": "ඔබට වාසි ලබාදිය හැකි අයෙකු ඉදිරියේ ඔබ අසාමාන්‍ය ලෙස එකඟ වෙයි."
    },
    "practice": {
      "en": "Offer the same basic respect to someone who can give you nothing. Notice expectations of reward.",
      "si": "ඔබට කිසිවක් ලබාදිය නොහැකි අයෙකුටත් එකම මූලික ගෞරවය දෙන්න. ප්‍රතිලාභ බලාපොරොත්තු නිරීක්ෂණය කරන්න."
    },
    "question": {
      "en": "Is my care shaped by the benefit I hope to receive?",
      "si": "මට ලැබෙන්නට ඇති වාසිය අනුව මගේ සැලකිල්ල වෙනස් වේද?"
    },
    "minutes": 5
  },
  {
    "id": "small-wrongs",
    "number": 15,
    "section": "quality",
    "dimension": "kindness",
    "verse": "3a",
    "pali": "Na ca khuddaṃ samācare kiñci",
    "paliSinhala": "න ච ඛුද්දං සමාචරේ කිඤ්චි",
    "title": {
      "en": "Avoid even small wrongs",
      "si": "ඉතා සුළු වරදක්වත් නොකරන්න"
    },
    "subtitle": {
      "en": "Take small ethical choices seriously.",
      "si": "කුඩා සදාචාරමය තීරණත් සැලකිල්ලෙන් ගන්න."
    },
    "meaning": {
      "en": "The fifteenth point rejects even slight wrongdoing that the wise would censure.",
      "si": "පහළොස්වන කරුණ නුවණැත්තන් දොස් කියන ඉතා සුළු වරදක්වත් නොකිරීමයි."
    },
    "scenario": {
      "en": "A small exaggeration seems harmless because everyone does it.",
      "si": "හැමෝම කරන නිසා කුඩා අතිශයෝක්තියක් හානියක් නැතැයි සිතේ."
    },
    "practice": {
      "en": "Before acting, ask who might be harmed and whether a wise, fair person would approve. Correct one small wrong today.",
      "si": "ක්‍රියාවට පෙර හානිය කාටදැයි සහ සාධාරණ නුවණැත්තෙකු එය අනුමත කරයිදැයි බලන්න. අද එක් කුඩා වරදක් නිවැරදි කරන්න."
    },
    "question": {
      "en": "Which small wrong have I been excusing?",
      "si": "මම සාධාරණීකරණය කරමින් සිටි කුඩා වරද කුමක්ද?"
    },
    "minutes": 5
  },
  {
    "id": "wish-well",
    "section": "practice",
    "number": 1,
    "dimension": "kindness",
    "verse": "3b",
    "pali": "Sukhino vā khemino hontu",
    "paliSinhala": "සුඛිනෝ වා ඛේමිනෝ හොන්තු",
    "title": {
      "en": "Wish happiness and safety",
      "si": "සතුට සහ නිර්භය බව පතන්න"
    },
    "subtitle": {
      "en": "The practice begins in verse 3's second half.",
      "si": "පුහුණුව තුන්වන ගාථාවේ දෙවන කොටසින් ඇරඹේ."
    },
    "meaning": {
      "en": "The sutta turns from preparatory qualities to wishing every being happiness, security, and a happy mind.",
      "si": "සූත්‍රය සූදානම් වීමේ ගුණවලින් සියලු සතුන්ට සැපය, නිර්භය බව සහ සුවපත් සිත් පැතීම වෙත යොමු වෙයි."
    },
    "scenario": {
      "en": "You have a quiet moment before starting your day.",
      "si": "දවස ඇරඹීමට පෙර නිහඬ මොහොතක් ඇත."
    },
    "practice": {
      "en": "Gently wish: may all beings be happy, safe, and happy in mind. Repeat slowly without forcing a feeling.",
      "si": "සියලු සත්වයෝ සුවපත් වෙත්වා, භය නැත්තෝ වෙත්වා, සැප ඇති සිත් ඇත්තෝ වෙත්වා යැයි සෙමින් සිතන්න. හැඟීමක් බලෙන් ඇති නොකරන්න."
    },
    "question": {
      "en": "Was my wish open to all beings?",
      "si": "මගේ පැතුම සියලු සතුන් සඳහා වූවාද?"
    },
    "minutes": 5
  },
  {
    "id": "all-beings",
    "section": "practice",
    "number": 2,
    "dimension": "kindness",
    "verse": "4",
    "pali": "Ye keci pāṇabhūtatthi",
    "paliSinhala": "යේ කේචි පාණභූතත්ථි",
    "title": {
      "en": "Include every being",
      "si": "සියලු සතුන් ඇතුළත් කරන්න"
    },
    "subtitle": {
      "en": "Verses 4–5 widen the field of goodwill.",
      "si": "හතර සහ පහ ගාථා මෛත්‍රියේ පරාසය පුළුල් කරයි."
    },
    "meaning": {
      "en": "The wish includes beings of every size and condition, seen and unseen, near and far, born and coming to birth.",
      "si": "ප්‍රමාණයෙන් හා තත්ත්වයෙන් වෙනස්, පෙනෙන නොපෙනෙන, දුර ළඟ වසන, ඉපදුණු හා ඉපදෙමින් සිටින සියලු සතුන්ට මෛත්‍රිය පතුරවයි."
    },
    "scenario": {
      "en": "Your attention stays with people you already know.",
      "si": "ඔබේ අවධානය දන්නා අය වෙත පමණක් රැඳෙයි."
    },
    "practice": {
      "en": "Extend the same wish to a neighbour, a distant community, and living beings you cannot see.",
      "si": "එකම පැතුම අසල්වැසියෙකුට, දුර සිටින පිරිසකට සහ ඔබට නොපෙනෙන සතුන්ටත් පතුරවන්න."
    },
    "question": {
      "en": "Who was missing from my circle of care?",
      "si": "මගේ සැලකිල්ලේ පරාසයෙන් මඟහැරුණේ කවුද?"
    },
    "minutes": 5
  },
  {
    "id": "kind-speech",
    "section": "practice",
    "number": 3,
    "dimension": "kindness",
    "verse": "6",
    "pali": "Na paro paraṃ nikubbetha",
    "paliSinhala": "න පරෝ පරං නිකුබ්බේථ",
    "title": {
      "en": "Give up deception and ill will",
      "si": "වංචාව සහ නපුරු සිතුවිලි දුරු කරන්න"
    },
    "subtitle": {
      "en": "Goodwill must shape how we treat others.",
      "si": "මෛත්‍රිය අන් අයට සලකන අයුරු වෙනස් කළ යුතුයි."
    },
    "meaning": {
      "en": "Verse 6 rejects deception, contempt, and wishing suffering through anger or resentment.",
      "si": "හයවන ගාථාව රැවටීම, අවමන් කිරීම සහ කෝපයෙන් අනුන්ට දුක පැතීම වළක්වයි."
    },
    "scenario": {
      "en": "An upsetting message makes you want to humiliate its sender.",
      "si": "අපහසු පණිවිඩයක් නිසා එය එවූ කෙනාට අවමන් කරන්නට සිතේ."
    },
    "practice": {
      "en": "Pause before replying. State the problem and a clear boundary without lying, insulting, or wishing harm.",
      "si": "පිළිතුරට පෙර නවතින්න. බොරුව, අපහාසය සහ හානිය පැතීමෙන් තොරව ගැටලුව සහ සීමාව පැහැදිලි කරන්න."
    },
    "question": {
      "en": "Did I wish for a solution or for the other person to suffer?",
      "si": "මම පැතුවේ විසඳුමක්ද, අනෙකාගේ දුකද?"
    },
    "minutes": 5
  },
  {
    "id": "boundless-care",
    "section": "practice",
    "number": 4,
    "dimension": "kindness",
    "verse": "7",
    "pali": "Mātā yathā niyaṃ puttaṃ",
    "paliSinhala": "මාතා යථා නියං පුත්තං",
    "title": {
      "en": "Cultivate boundless care",
      "si": "අපමණ මෙත් සිත වඩන්න"
    },
    "subtitle": {
      "en": "Learn from the image of a mother's protection.",
      "si": "මවකගේ රැකවරණය යන උපමාවෙන් ඉගෙනගන්න."
    },
    "meaning": {
      "en": "A mother protecting her only child illustrates the depth of care to cultivate toward all beings.",
      "si": "මවක තම එකම දරුවා රකින අයුරු සියලු සතුන් වෙත වැඩිය යුතු සැලකිල්ලේ ගැඹුර පෙන්වයි."
    },
    "scenario": {
      "en": "You care deeply for someone close but overlook a stranger's distress.",
      "si": "සමීප කෙනෙකු ගැන සැලකිලිමත් වුවත් අමුත්තෙකුගේ දුක නොසලකා හරියි."
    },
    "practice": {
      "en": "Recall protective care. Offer one practical, appropriate kindness to someone outside your usual circle.",
      "si": "රැකවරණය දෙන සැලකිල්ල සිහි කරන්න. සමීප පිරිසෙන් පිටත අයෙකුට සුදුසු එක් උපකාරයක් කරන්න."
    },
    "question": {
      "en": "How can care become an action today?",
      "si": "අද සැලකිල්ල ක්‍රියාවක් බවට පත් කරන්නේ කෙසේද?"
    },
    "minutes": 5
  },
  {
    "id": "goodwill",
    "section": "practice",
    "number": 5,
    "dimension": "kindness",
    "verse": "8",
    "pali": "Mettañca sabbalokasmiṃ",
    "paliSinhala": "මෙත්තං ච සබ්බලෝකස්මිං",
    "title": {
      "en": "Extend goodwill in every direction",
      "si": "සෑම දිශාවකටම මෛත්‍රිය පතුරවන්න"
    },
    "subtitle": {
      "en": "Above, below, and across; without hostility.",
      "si": "උඩ, යට සහ හරහට; වෛරයෙන් තොරව."
    },
    "meaning": {
      "en": "Verse 8 describes a boundless heart extending throughout the world, free from enmity and obstruction.",
      "si": "අටවන ගාථාව සියලු ලෝකයා කෙරෙහි වෛරය සහ බාධාවලින් තොර අපමණ මෙත් සිත විස්තර කරයි."
    },
    "scenario": {
      "en": "You notice your goodwill stops at people unlike you.",
      "si": "ඔබට වෙනස් අය වෙත මෛත්‍රිය නොයන බව දකී."
    },
    "practice": {
      "en": "While seated, extend your wish above, below, and all around. Notice exclusions and gently widen the wish.",
      "si": "ඉඳගෙන සිටිමින් උඩට, යටට සහ වටපිටාවට මෙත් පැතුම පතුරවන්න. බැහැර කළ අය දැක පැතුම මෘදුව පුළුල් කරන්න."
    },
    "question": {
      "en": "Where did I place a limit on goodwill?",
      "si": "මම මෛත්‍රියට සීමාවක් තැබුවේ කොතැනදීද?"
    },
    "minutes": 5
  },
  {
    "id": "everyday-metta",
    "section": "practice",
    "number": 6,
    "dimension": "kindness",
    "verse": "9",
    "pali": "Tiṭṭhaṃ caraṃ nisinno vā",
    "paliSinhala": "තිට්ඨං චරං නිසින්නෝ වා",
    "title": {
      "en": "Sustain mettā in everyday postures",
      "si": "දෛනික ඉරියව්වල මෛත්‍රිය පවත්වා ගන්න"
    },
    "subtitle": {
      "en": "Standing, walking, sitting, or lying awake.",
      "si": "සිටගෙන, ඇවිදින, ඉඳගෙන හෝ අවදියෙන් සැතපී සිටින විට."
    },
    "meaning": {
      "en": "The sutta asks us to sustain this recollection whenever awake and calls it a sublime dwelling.",
      "si": "අවදිව සිටින තාක් මේ මෙත් සිහිය පවත්වා ගන්නා ලෙස සූත්‍රය දක්වා එය බ්‍රහ්ම විහරණය ලෙස හඳුන්වයි."
    },
    "scenario": {
      "en": "You leave meditation behind when you begin household tasks.",
      "si": "ගෙදර වැඩ ඇරඹූ විට භාවනාව අමතක වෙයි."
    },
    "practice": {
      "en": "Choose one ordinary cue, such as standing in a queue. Renew the wish of wellbeing while remaining attentive to the task.",
      "si": "පෝලිමක සිටීම වැනි සාමාන්‍ය අවස්ථාවක් තෝරන්න. වැඩට අවධානය දෙන අතර යහපත පැතීම නැවත සිහි කරන්න."
    },
    "question": {
      "en": "Which everyday moment can remind me to renew mettā?",
      "si": "මෛත්‍රිය නැවත සිහි කිරීමට උපකාරී වන දෛනික මොහොත කුමක්ද?"
    },
    "minutes": 5
  },
  {
    "id": "insight",
    "section": "practice",
    "number": 7,
    "dimension": "kindness",
    "verse": "10",
    "pali": "Diṭṭhiñca anupagamma",
    "paliSinhala": "දිට්ඨිං ච අනුපගම්ම",
    "title": {
      "en": "Connect virtue, view, and release",
      "si": "සීලය, දැක්ම සහ මිදීම සම්බන්ධ කරන්න"
    },
    "subtitle": {
      "en": "The closing points beyond a pleasant feeling.",
      "si": "අවසානය සතුටු හැඟීමකින් ඔබ්බට යොමු කරයි."
    },
    "meaning": {
      "en": "The closing joins virtue, right view, and abandoning sensual attachment with freedom from future womb birth in the Buddhist path.",
      "si": "අවසානය බෞද්ධ මාර්ගයේ සීලය, නිවැරදි දැක්ම සහ කාම ඇල්ම දුරු කිරීම නැවත මව් කුස උපතෙන් මිදීම සමඟ සම්බන්ධ කරයි."
    },
    "scenario": {
      "en": "You enjoy a calm session but keep repeating an unkind habit.",
      "si": "සන්සුන් පුහුණුවක් කළත් අයහපත් පුරුද්දක් නැවත කරයි."
    },
    "practice": {
      "en": "Review one ethical choice and one attachment. Read the closing verse and discuss its meaning with a qualified teacher.",
      "si": "එක් සදාචාරමය තීරණයක් සහ එක් ඇලීමක් විමසන්න. අවසන් ගාථාව කියවා සුදුසු ගුරුවරයෙකු සමඟ අර්ථය සාකච්ඡා කරන්න."
    },
    "question": {
      "en": "How does my conduct support the understanding I seek?",
      "si": "මම සොයන අවබෝධයට මගේ හැසිරීම උපකාරී වන්නේ කෙසේද?"
    },
    "minutes": 5
  }
];
export const qualities=lessons.filter(x=>x.section==="quality");
export const practiceLessons=lessons.filter(x=>x.section==="practice");
export const dimensions=[
  {
    "id": "understand",
    "en": "Cognitive · points 1–3",
    "si": "අවබෝධය · කරුණු 1–3",
    "description": {
      "en": "Capability and two degrees of uprightness.",
      "si": "හැකියාව, අවංක බව සහ ඉතා අවංක බව."
    }
  },
  {
    "id": "reflect",
    "en": "Reflective · points 4–8",
    "si": "ආවර්ජනය · කරුණු 4–8",
    "description": {
      "en": "Receptiveness, gentleness, humility, contentment, and ease of support.",
      "si": "කීකරු බව, මෘදු බව, නිහතමානී බව, සතුටු බව සහ පහසුවෙන් පෝෂණය කළ හැකි බව."
    }
  },
  {
    "id": "kindness",
    "en": "Compassionate · points 9–15",
    "si": "කරුණාව · කරුණු 9–15",
    "description": {
      "en": "A lighter life, calm senses, discernment, restraint, nonattachment, and ethical care.",
      "si": "සැහැල්ලු ජීවිතය, සන්සුන් ඉඳුරන්, නුවණ, සංවරය, නොඇලීම සහ සදාචාරමය සැලකිල්ල."
    }
  }
] as const;
