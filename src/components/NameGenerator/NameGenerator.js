const standardBeginning = ['', '', '', '', 'a', 'be', 'de', 'el', 'fa', 'jo', 'ki', 'la', 'ma', 'na', 'o', 'pa', 're', 'si', 'ta', 'va'];
const standardMiddle = ['bar', 'ched', 'dell', 'far', 'gran', 'hal', 'jen', 'kel', 'lim', 'mor', 'net', 'penn', 'quil', 'rond', 'sark', 'shen', 'tur', 'vash', 'yor', 'zen'];
const standardEnd = ['', 'a', 'ac', 'ai', 'al', 'am', 'an', 'ar', 'ea', 'el', 'er', 'ess', 'ett', 'ic', 'id', 'il', 'in', 'is', 'or', 'us'];

const expandedBeginning = ['A', 'Ada', 'Aki', 'Al', 'Ali', 'Alo', 'Ana', 'Ani', 'Ba', 'Be', 'Bo', 'Bra', 'Bro', 'Cha', 'Chi', 'Da', 'De', 'Do', 'Dra', 'Dro', 'Eki', 'Eko', 'Ele', 'Eli', 'Elo', 'Er', 'Ere', 'Eri', 'Ero', 'Fa', 'Fe', 'Fi', 'Fo', 'Fra', 'Gla', 'Gro', 'Ha', 'He', 'Hi', 'Illia', 'Ira', 'Ja', 'Jo', 'Ka', 'Ki', 'Kra', 'La', 'Le', 'Lo', 'Ma', 'Me', 'Mi', 'Mo', 'Na', 'Ne', 'No', 'O', 'Ol', 'Or', 'Pa', 'Pe', 'Pi', 'Po', 'Pra', 'Qua', 'Qui', 'Quo', 'Ra', 'Re', 'Ro', 'Sa', 'Sca', 'Sco', 'Se', 'Sha', 'She', 'Sho', 'So', 'Sta', 'Ste', 'Sti', 'Stu', 'Ta', 'Tha', 'The', 'Tho', 'Ti', 'To', 'Tra', 'Tri', 'Tru', 'Ul', 'Ur', 'Va', 'Vo', 'Wra', 'Xa', 'Xi', 'Zha', 'Zho'];
const expandedMiddle = ['bb', 'bl', 'bold', 'br', 'bran', 'can', 'carr', 'ch', 'cinn', 'ck', 'ckl', 'ckr', 'cks', 'dd', 'dell', 'dr', 'ds', 'fadd', 'fall', 'farr', 'ff', 'fill', 'fl', 'fr', 'genn', 'gg', 'gl', 'gord', 'gr', 'gs', 'h', 'hall', 'hark', 'hill', 'hork', 'jenn', 'kell', 'kill', 'kk', 'kl', 'klip', 'kr', 'krack', 'ladd', 'land', 'lark', 'ld', 'ldr', 'lind', 'll', 'ln', 'lord', 'ls', 'matt', 'mend', 'mm', 'ms', 'nd', 'nett', 'ng', 'nk', 'nn', 'nodd', 'ns', 'nt', 'part', 'pelt', 'pl', 'pp', 'ppr', 'pps', 'rand', 'rd', 'resh', 'rn', 'rp', 'rr', 'rush', 'salk', 'sass', 'sc', 'sh', 'sp', 'ss', 'st', 'tall', 'tend', 'told', 'v', 'vall', 'w', 'wall', 'wild', 'will', 'x', 'y', 'yang', 'yell', 'z', 'zenn'];
const expandedEnd = ['a', 'ab', 'ac', 'ace', 'ach', 'ad', 'adle', 'af', 'ag', 'ah', 'ai', 'ak', 'aker', 'al', 'ale', 'am', 'an', 'and', 'ane', 'ar', 'ard', 'ark', 'art', 'ash', 'at', 'ath', 'ave', 'ea', 'eb', 'ec', 'ech', 'ed', 'ef', 'eh', 'ek', 'el', 'elle', 'elton', 'em', 'en', 'end', 'ent', 'enton', 'ep', 'er', 'esh', 'ess', 'ett', 'ic', 'ich', 'id', 'if', 'ik', 'il', 'im', 'in', 'ion', 'ir', 'is', 'ish', 'it', 'ith', 'ive', 'ob', 'och', 'od', 'odin', 'oe', 'of', 'oh', 'ol', 'olen', 'omir', 'or', 'orb', 'org', 'ort', 'os', 'osh', 'ot', 'oth', 'ottle', 'ove', 'ow', 'ox', 'ud', 'ule', 'umber', 'un', 'under', 'undle', 'unt', 'ur', 'us', 'ust', 'ut', '', '', '', ''];

const koboldRoot = ['An', 'Ak', 'Ar', 'Bak', 'Bok', 'Bir', 'Cor', 'Dat', 'Dot', 'Dir', 'Ek', 'Ej', 'Fik', 'Fat', 'Fad', 'Gat', 'Gak', 'Gok', 'Goj', 'Hir', 'Hid', 'Hod', 'Hur', 'Ik', 'Ir', 'Id', 'Jiro', 'Jat', 'Dok', 'Jok', 'Kor', 'Kak', 'Kat', 'Kid', 'Kur', 'Lak', 'Lor', 'Mip', 'Mak', 'Mik', 'Maj', 'Nak', 'Nod', 'Noz', 'Nop', 'Ob', 'On', 'Od', 'Or', 'Pok', 'Por', 'Pat', 'Pad', 'Paj', 'Qak', 'Qit', 'Qaj', 'Quat', 'Rak', 'Rok', 'Rij', 'San', 'Rop', 'Ror', 'Sok', 'Sod', 'Soj', 'Sat', 'Toj', 'Tak', 'Tod', 'Tap', 'Uk', 'Ur', 'Vap', 'Vip', 'Vad', 'Wid', 'Wad', 'Wij', 'Wik', 'Wak', 'Wod', 'Wat', 'Xik', 'Xak', 'Xoj', 'Xor', 'Xir', 'Xob', 'Xab', 'Zij', 'Zik', 'Zak', 'Zuk', 'Zib', 'Zab', 'Zor', 'Zan', 'Zij'];
const koboldMaleSuffix = ['o', 'etek', 'to', 'erek', 'o', 'etek', 'to', 'erek', 'o', 'etek', 'to', 'erek', 'o', 'etek', 'to', 'erek', 'o', 'etek', 'to', 'erek', 'o', 'etek', 'to', 'erek', 'o', 'etek', 'to', 'erek', 'o', 'etek', 'to', 'erek', 'o', 'etek', 'to', 'erek', 'o', 'etek', 'to', 'erek', 'to', 'o', 'etek', 'to', 'erek', 'o', 'etek', 'to', 'erek', 'ev', 'em', 'evek', 'emek', 'os', 'ev', 'em', 'evek', 'emek', 'os', 'ev', 'em', 'evek', 'emek', 'os', 'ev', 'em', 'evek', 'emek', 'os', 'ev', 'em', 'evek', 'emek', 'os', 'ev', 'em', 'evek', 'emek', 'os', 'ev', 'em', 'evek', 'emek', 'os', 'ev', 'em', 'evek', 'emek', 'os', 'ev', 'em', 'evek', 'emek', 'os', 'ev', 'em', 'evek', 'emek', 'os'];
const koboldFemaleSuffix = ['ana', 'a', 'ila', 'ta', 'ana', 'a', 'ila', 'ta', 'ana', 'a', 'ila', 'ta', 'ana', 'a', 'ila', 'ta', 'ana', 'a', 'ila', 'ta', 'ana', 'a', 'ila', 'ta', 'ana', 'a', 'ila', 'ta', 'ana', 'a', 'ila', 'ta', 'ana', 'a', 'ila', 'ta', 'ana', 'a', 'ila', 'ta', 'a', 'ana', 'a', 'ila', 'a', 'ta', 'ana', 'ana', 'a', 'ila', 'ta', 'va', 'am', 'iva', 'ama', 'i', 'va', 'am', 'iva', 'ama', 'i', 'va', 'am', 'iva', 'ama', 'i', 'va', 'am', 'iva', 'ama', 'i', 'va', 'am', 'iva', 'ama', 'i', 'va', 'am', 'iva', 'ama', 'i', 'va', 'am', 'iva', 'ama', 'i', 'va', 'am', 'iva', 'ama', 'i', 'va', 'am', 'iva', 'ama', 'i', 'va', 'am', 'iva', 'ama', 'i'];
const koboldSobFirst = ['Scrap', 'Trick', 'Black', 'Bruise', 'Rust', 'Pale', 'Damn', 'Foul', 'Lurk', 'Blood', 'Gear', 'Blind', 'Shade', 'Ghost', 'Egg', 'Slay', 'Gouge', 'Trap', 'Snare', 'Copper', 'Silver', 'Lead', 'Gold', 'Bronze', 'Spit', 'Clock', 'Drake', 'Dog', 'Rat', 'Clutch', 'Spike', 'Glass', 'Cobble', 'Brick', 'Hate', 'Bite', 'Rend', 'Wrong', 'Catch', 'Twist', 'Gnarl', 'Weasel', 'Man', 'Dwarf', 'Horse', 'Trash', 'Waste', 'Scrap', 'Hatchet', 'Knife', 'Cold', 'Sleet', 'Bottle', 'Bent', 'Crook', 'Catch', 'Crush', 'Lizard', 'Gnome', 'Junk', 'Gem', 'Choke', 'Lump', 'Flay', 'Vermin', 'Skull', 'Nail', 'Slate', 'Tin', 'Worm', 'Grub', 'Night', 'Muck', 'Dirt', 'Gristle', 'Pig', 'Gutter', 'Sneak', 'Grit', 'Ooze', 'Troll', 'Crumble', 'Notch', 'Crack', 'Nick', 'Flay', 'Spring', 'Double', 'Half', 'Crook', 'Split', 'No', 'Blood', 'Moss', 'Gray', 'Stretch', 'Gouge', 'Hunt', 'Lead', 'Bone'];
const koboldSobSecond = ['lure', 'stealer', 'tongue', 'ear', 'Gear', 'scuttle', 'heart', 'tooth', 'fang', 'knuckle', 'cobble', 'squeal', 'dodger', 'snarer', 'runner', 'meat', 'eye', 'mangler', 'toe', 'belly', 'claw', 'spike', 'scale', 'egg', 'father', 'slayer', 'scale', 'tricker', 'killer', 'shards', 'snares', 'scale', 'gouger', 'scrapper', 'blade', 'warrior', 'picker', 'sneeze', 'claws', 'hustle', 'legs', 'eater', 'gutter', 'hunter', 'gouger', 'snares', 'warren', 'jaw', 'runner', 'liver', 'brick', 'scramble', 'sprocket', 'finger', 'tail', 'wizard', 'hatchling', 'face', 'snare', 'runner', 'spit', 'mother', 'neck', 'head', 'breath', 'thief', 'priest', 'scraper', 'finger', 'snout', 'grinder', 'lurker', 'scour', 'skulker', 'back', 'kicker', 'ghost', 'glass', 'bone', 'scale', 'clutcher', 'drake', 'Tooth', 'egg', 'Tongue', 'Gnome', 'Twister', 'Scratch', 'Thumb', 'Tail', 'clock', 'thumb', 'Spoil', 'scrapper', 'shade', 'Lair', 'Spleen', 'Worm', 'Trapper', 'tracker'];

export default {
  name: 'nameGenerator',

  data () {
    return {
      nameStyle: 'Standard',
      numChecks: 1,
      standardBeginning: standardBeginning,
      standardMiddle: standardMiddle,
      standardEnd: standardEnd,
      output: undefined,
      gender: 'Male'
    }
  },

  methods: {
    generate () {
      switch(this.nameStyle){
        case 'Standard':
          this.generateStandard(); break;
        case 'Expanded':
          this.generateExpanded(); break;
        case 'Kobold':
          this.generateKobold(); break;
      }
    },

    generateStandard(){
      this.output = []
      var standardName = ''
      for (var si = 0; si < this.numChecks; si++) {
        standardName = standardBeginning[Math.floor(Math.random() * standardBeginning.length)] +
          standardMiddle[Math.floor(Math.random() * standardMiddle.length)] +
          standardEnd[Math.floor(Math.random() * standardEnd.length)];
        standardName = standardName.substr(0, 1).toUpperCase() + standardName.substr(1);
        this.output.push(standardName)
      }
    },

    generateExpanded(){
      this.output = []
      var expandedName = ''
      for (var ei = 0; ei < this.numChecks; ei++) {
        expandedName = expandedBeginning[Math.floor(Math.random() * expandedBeginning.length)] +
          expandedMiddle[Math.floor(Math.random() * expandedMiddle.length)] +
          expandedEnd[Math.floor(Math.random() * expandedEnd.length)];
        expandedName = expandedName.substr(0, 1).toUpperCase() + expandedName.substr(1);
        this.output.push(expandedName)
      }
    },

    generateKobold(){
      this.output = [];
      var koboldName = '';
      var koboldFirstName = '';
      var koboldLastName = '';
      var kobTempRoot = '';
      var kobTempMSuf = '';
      var kobTempFSuf = '';
      var kobTempSobF = '';
      var kobTempSobS = '';

      for (var ki = 0; ki < this.numChecks; ki++) {
        kobTempRoot = koboldRoot[Math.floor(Math.random() * koboldRoot.length)];
        kobTempMSuf = koboldMaleSuffix[Math.floor(Math.random() * koboldMaleSuffix.length)];
        kobTempFSuf = koboldFemaleSuffix[Math.floor(Math.random() * koboldFemaleSuffix.length)];
        kobTempSobF = koboldSobFirst[Math.floor(Math.random() * koboldSobFirst.length)];
        kobTempSobS = koboldSobSecond[Math.floor(Math.random() * koboldSobSecond.length)];
        koboldFirstName = (kobTempRoot + (this.gender === 'Male' ? kobTempMSuf : kobTempFSuf)).toLowerCase();
        koboldLastName = (kobTempSobF + kobTempSobS).toLowerCase();
        koboldFirstName = koboldFirstName.substr(0, 1).toUpperCase() + koboldFirstName.substr(1);
        koboldLastName = koboldLastName.substr(0, 1).toUpperCase() + koboldLastName.substr(1);
        koboldName = koboldFirstName + ' ' + koboldLastName;

        this.output.push(koboldName)
      }
    }

  }
}
