/* FLAIR MASTER CONFIG */ 
flair.load__by_id = function() {
    for (var key in flair.names) {
        if (flair.names.hasOwnProperty(key)) {
            var data = key.split(' ');
            
            var orig_id = data[2];
            
            if (orig_id.substring(0, 'a'.length) === 'a') {
                orig_id = orig_id.substring(1);
            }
            if (orig_id.substring(orig_id.length - 'm'.length) === 'm') {
                orig_id = orig_id.substring(0, orig_id.length - 1);
            }
            if (orig_id.substring(orig_id.length - 'o'.length) === 'o') {
                orig_id = orig_id.substring(0, orig_id.length - 1);
            }
            if (orig_id.substring(orig_id.length - 'x'.length) === 'x') {
                orig_id = orig_id.substring(0, orig_id.length - 1);
            }
            if (orig_id.substring(orig_id.length - 'y'.length) === 'y') {
                orig_id = orig_id.substring(0, orig_id.length - 1);
            }
            if (orig_id.substring(orig_id.length - 1).match(/[a-z]/i) &&
                orig_id.substring(0, orig_id.length - 1).match(/^\d+$/)) {
                orig_id = orig_id.substring(0, orig_id.length - 1);
            }
            
            flair.by_id[data[2]] = {
                key: key,
                spritepos: data[0],
                sheet: data[1],
                unit_id: data[2],
                orig_id: orig_id,
                unit_name: flair.names[key],
                flair_class: ' flair-'+data[0] + ' flair-'+data[1] + ' flair-'+data[2]
            }
        }
    }
}
flair.by_id = {}
flair.names = {
/* [Everything] */
	"icon001 all 1": "Rain",
	"icon002 all 3": "Lasswell",
	"icon003 all 4": "Fina",
	"icon004 all 5": "Dark Fina",
	"icon005 all 6": "Nichol",
	"icon006 all 7": "Lid",
	"icon007 all 8": "Jake",
	"icon008 all 9": "Rizer",
	"icon009 all 10": "Leah",
	"icon010 all 11": "Tronn",
	"icon011 all 12": "Eldin",
	"icon012 all 13": "Baurg",
	"icon013 all 14": "Gimlee",
	"icon014 all 15": "Maxell",
	"icon015 all 16": "Liza",
	"icon016 all 17": "Shiki",
	"icon017 all 18": "Mizell",
	"icon018 all 19": "Ronaldo",
	"icon019 all 20": "Mel",
	"icon020 all 21": "Clyne",
	"icon021 all 22": "Anselm",
	"icon022 all 23": "Luna",
	"icon023 all 24": "Bedile",
	"icon024 all 25": "Duane",
	"icon025 all 26": "Cerius",
	"icon026 all 27": "Roselia",
	"icon027 all 28": "Medius",
	"icon028 all 29": "Carrie", /*Duplicate*/
	"icon029 all 30": "Paula",
	"icon030 all 31": "Kenyu",
	"icon031 all 32": "Ollie",
	"icon032 all 33": "Carrie", /*Duplicate*/
	"icon033 all 34": "Skaha",
	"icon034 all 35": "Montana",
	"icon035 all 36": "Russell",
	"icon036 all 37": "Miyuki",
	"icon037 all 38": "Gilbert",
	"icon038 all 39": "Xiao",
	"icon039 all 40": "Rakasha",
	"icon040 all 41": "Ludmille",
	"icon041 all 42": "Charlotte",
	"icon042 all 43": "Artemios",
	"icon043 all 44": "Chizuru",
	"icon044 all 45": "Hayate",
	"icon045 all 46": "Elle",
	"icon046 all 47": "Luka",
	"icon047 all 48": "Mercedes",
	"icon048 all 49": "Lawrence",
	"icon049 all 50": "Soleil",
	"icon050 all 51": "Shine",
	"icon051 all 52": "Shiera",
	"icon052 all 53": "Marie",
	"icon053 all 54": "Warrior of Light",
	"icon054 all 55": "Garland",
	"icon055 all 56": "Sarah",
	"icon056 all 57": "Firion",
	"icon057 all 58": "Maria",
	"icon058 all 59": "Guy",
	"icon059 all 60": "Leon",
	"icon060 all 61": "Emperor",
	"icon061 all 62": "Leila",
	"icon062 all 63": "Paul",
	"icon063 all 64": "Luneth",
	"icon064 all 65": "Arc",
	"icon065 all 66": "Refia",
	"icon066 all 67": "Ingus",
	"icon067 all 68": "Doga",
	"icon068 all 69": "Desch",
	"icon069 all 70": "Cloud of Darkness",
	"icon070 all 71": "Cecil",
	"icon071 all 72": "Dark Knight Cecil",
	"icon072 all 73": "Kain",
	"icon073 all 74": "Rosa",
	"icon074 all 75": "Rydia",
	"icon075 all 76": "Tellah",
	"icon077 all 77": "Edge",
	"icon078 all 78": "Giotto King",
	"icon079 all 79": "Golbez",
	"icon080 all 80": "Bartz",
	"icon081 all 81": "Lenna",
	"icon082 all 82": "Galuf",
	"icon083 all 83": "Faris",
	"icon084 all 84": "Krile",
	"icon085 all 85": "Mid Previa",
	"icon086 all 86": "Exdeath",
	"icon087 all 87": "Gilgamesh",
	"icon088 all 88": "Terra",
	"icon089 all 89": "Magitek Terra",
	"icon090 all 90": "Locke",
	"icon091 all 91": "Edgar",
	"icon092 all 92": "Sabin",
	"icon093 all 93": "Shadow",
	"icon094 all 94": "Cyan",
	"icon095 all 95": "Celes",
	"icon096 all 96": "Wedge",
	"icon097 all 97": "Biggs",
	"icon098 all 98": "Kefka",
	"icon099 all 99": "Leo",
	"icon100 all 100": "Zidane",
	"icon101 all 101": "Vivi",
	"icon102 all 102": "Garnet",
	"icon103 all 103": "Freya",
	"icon104 all 104": "Quina",
	"icon105 all 105": "Amarant",
	"icon106 all 106": "Lani",
	"icon107 all 107": "Kuja",
	"icon108 all 108": "Shantotto",
	"icon109 all 109": "Werei",
	"icon110 all 110": "Vaan",
	"icon111 all 111": "Penelo",
	"icon112 all 112": "Fran",
	"icon113 all 113": "Anastasis",
	"icon114 all 114": "Reddas",
	"icon115 all 115": "Lightning",
	"icon116 all 116": "Snow",
	"icon117 all 117": "Vanille",
	"icon118 all 118": "Sazh",
	"icon119 all 119": "Hope",
	"icon120 all 120": "Fang",
	"icon121 all 121": "Ramza",
	"icon122 all 122": "Delita",
	"icon123 all 123": "Agrias",
	"icon124 all 124": "Alma",
	"icon125 all 125": "Gaffgarion",
	"icon126 all 126": "Mustadio",
	"icon127 all 127": "Orlandu",
	"icon128 all 128": "Ovelia",
	"icon129 all 129": "Ace",
	"icon130 all 130": "Queen",
	"icon131 all 131": "Nine",
	"icon132 all 132": "Trey",
	"icon133 all 133": "Cinque",
	"icon134 all 134": "Jack",
	"icon135 all 135": "Seven",
	"icon136 all 136": "Eight",
	"icon137 all 137": "Juggler",
	"icon138 all 138": "Thief",
	"icon139 all 139": "Fencer",
	"icon140 all 140": "Samatha",
	"icon141 all 141": "Tilith",
	"icon142 all 142": "Karl",
	"icon143 all 143": "Seria",
	"icon144 all 144": "Adel",
	"icon145 all 145": "Randi",
	"icon146 all 146": "Primm",
	"icon147 all 147": "Popoi",
	"icon148 all 148": "Goblin",
	"icon149 all 149": "Goblin",
	"icon150 all 150": "Goblin",
	"icon151 all 151": "Goblin",
	"icon152 all 152": "Goblin",
	"icon153 all 153": "Goblin",
	"icon154 all 154": "King Gil Snapper",
	"icon155 all 155": "Mini Cactuar",
	"icon156 all 156": "Cactuar",
	"icon157 all 157": "Metal Gigantuar",
	"icon158 all 158": "Moogle",
	"icon159 all 159": "Mag Goblin",
	"icon160 all 160": "Onion Knight",
	"icon161 all 161": "Reddas",
	"icon162 all 162": "Relm",
	"icon163 all 163": "Setzer",
	"icon164 all 164": "Gau",
	"icon165 all 165": "Umaro",
	"icon166 all 166": "Eiko",
	"icon167 all 167": "Balthier",
	"icon168 all 168": "Ashe",
	"icon170 all 169": "Dragonlord",
	"icon171 all 170": "Killing Machine",
	"icon172 all 171": "Golem",
	"icon173 all 172": "Slime",
	"icon174 all 173": "Orochi",
	"icon175 all 174": "Liquid Metal Slime",
	"icon176 all 175": "Robbin' 'ood",
	"icon177 all 176": "Eileen",
	"icon178 all 177": "Ulrika",
	"icon179 all 178": "Emperor Soze",
	"icon180 all 179": "Heretic",
	"icon181 all 180": "Rem",
	"icon182 all 181": "King",
	"icon183 all 182": "Sice",
	"icon184 all 183": "Sakura",
	"icon185 all 184": "Tidus",
	"icon186 all 185": "Wilhelm",
	"icon187 all 186": "Grace",
	"icon188 all 187": "Abel",
	"icon189 all 188": "Jean",
	"icon190 all 189": "Vargas",
	"icon191 all 190": "Maxwell",
	"icon192 all 191": "Y'shtola",
	"icon193 all 192": "Thancred",
	"icon194 all 193": "Minfilia",
	"icon195 all 194": "Trance Terra",
	"icon196 all 195": "Forren",
	"icon197 all 196": "Amelia",
	"icon198 all 197": "Illus",
	"icon199 all 198": "Camille",
	"icon200 all 199": "Rikku",
	"icon201 all 200": "Wakka",
	"icon202 all 201": "Rasler",
	"icon203 all 202": "Runera",
	"icon204 all 203": "Blanc",
	"icon205 all 204": "Helena",
	"icon206 all 205": "Ruggles",
	"icon207 all 206": "Kupipi",
	"icon208 all 207": "Prishe",
	"icon209 all 208": "Merc Ramza",
	"icon210 all 209": "Knight Delita",
	"icon211 all 210": "Meliadoul",
	"icon212 all 211": "Orran",
	"icon213 all 212": "Dark Veritas",
	"icon214 all 213": "Fire Veritas",
	"icon215 all 214": "Earth Veritas",
	"icon216 all 215": "Victoria",
	"icon217 all 216": "Tim",
	"icon218 all 217": "Elza",
	"icon219 all 218": "Moogle",
	"icon220 all 219": "Onion Knight",
	"icon221 all 220": "Aria",
	"icon222 all 221": "Desch",
	"icon223 all 222": "Sara",
	"icon224 all 223": "Light Veritas",
	"icon225 all 224": "Wind Veritas",
	"icon226 all 225": "Water Veritas",
	"icon227 all 226": "Noctis",
	"icon228 all 227": "Aura",
	"icon229 all 228": "Grom",
	"icon230 all 229": "Hunter Rain",
	"icon231 all 230": "Hunter Lasswell",
	"icon232 all 231": "Hunter Fina",
	"icon233 all 232": "Hunter Nichol",
	"icon234 all 233": "Hunter Lid",
	"icon235 all 234": "Hunter Sakura",
	"icon236 all 235": "Hunter Jake",
	"icon237 all 236": "White Knight Noel",
	"icon238 all 237": "Santa Roselia",
	"icon239 all 238": "Nyx",
	"icon240 all 239": "Glauca",
	"icon241 all 240": "Crowe",
	"icon242 all 241": "Libertus",
	"icon243 all 242": "Lorraine",
	"icon244 all 243": "Ayaka",
	"icon245 all 244": "Gouken",
	"icon246 all 245": "Sylvia",
	"icon247 all 246": "Kamui",
	"icon248 all 247": "Yuri",
	"icon249 all 248": "Julian",
	"icon250 all 249": "Katrina",
	"icon251 all 250": "Harid",
	"icon252 all 251": "Robin",
	"icon253 all 252": "Dangerous Ariana",
	"icon254 all 253": "Yun",
	"icon255 all 254": "Ling",
	"icon257 all 256": "Elfried",
	"icon258 all 257": "Conrad",
	"icon259 all 258": "William",
	"icon260 all 259": "Roy",
	"icon261 all 260": "Chloe",
	"icon262 all 261": "Amy",
	"icon263 all 262": "Kupolukan",
	"icon264 all 263": "Ashterose",
	"icon265 all 264": "Kelsus",
	"icon266 all 265": "Nyarl",
	"icon267 all 266": "Sandy",
	"icon268 all 267": "Grinfield",
	"icon269 all 268": "Olive",
	"icon270 all 269": "Gladio",
	"icon271 all 270": "Cor",
	"icon272 all 271": "Iris",
	"icon273 all 272": "Duke",
	"icon274 all 273": "Orif",
	"icon275 all 274": "Mistair",
	"icon276 all 275": "Shaly",
	"icon277 all 276": "Ryunan",
	"icon278 all 277": "Yda",
	"icon279 all 278": "Papalymo",
	"icon280 all 279": "Steiner",
	"icon281 all 280": "Eiko",
	"icon282 all 281": "Beatrix",
	"icon283 all 282": "Black Waltz 3",
	"icon284 all 283": "Jiraiya",
	"icon285 all 284": "Kaede",
	"icon286 all 285": "Ouga",
	"icon287 all 286": "Otogiri",
	"icon288 all 287": "Ice Knight Lasswell (CG Lasswell)",
	"icon289 all 288": "Fryevia",
	"icon290 all 289": "Xon",
	"icon291 all 290": "Aiden",
	"icon292 all 291": "2B",
	"icon293 all 292": "9S",
	"icon294 all 293": "21O",
	"icon295 all 294": "Adam",
	"icon296 all 295": "Yuna",
	"icon297 all 296": "Lulu",
	"icon298 all 297": "Seymour",
	"icon299 all 298": "CG Sakura", /*Needs Name Update*/
	"icon300 all 299": "Vern",
	"icon301 all 300": "Sedona",
	"icon302 all 301": "C. Artemios",
	"icon303 all 302": "Reberta",
	"icon304 all 303": "Zyrus",
	"icon305 all 304": "Kevin",
	"icon306 all 305": "Carlie",
	"icon307 all 306": "Hawkeye",
	"icon308 all 307": "Riesz",
	"icon309 all 308": "Hero",
	"icon310 all 309": "CG Fina", /*Needs Name Update*/
	"icon311 all 310": "Kunshira",
	"icon312 all 311": "Wado",
	"icon313 all 312": "Hauyn",
	"icon314 all 313": "Aranea",
	"icon315 all 314": "Prompto",
	"icon316 all 315": "Basch",
	"icon317 all 316": "Gabranth",
	"icon318 all 317": "Vayne",
	"icon319 all 318": "Larsa",
	"icon320 all 319": "Drace",
	"icon321 all 320": "Artisan Lid",
	"icon322 all 321": "Zargabaath",
	"icon323 all 322": "CG Jake",
	"icon327 all 323": "Emperor Shiera",
	"icon324 all 324": "Ozetta",
	"icon325 all 325": "Riley",
	"icon326 all 326": "Emilia",
	"icon328 all 327": "Tiz",
	"icon329 all 328": "Agnes",
	"icon330 all 329": "Bunny Agnes",
	"icon331 all 330": "Edea",
	"icon332 all 331": "Yu",
	"icon333 all 332": "Magnolia",
	"icon334 all 333": "Rinne",
	"icon335 all 334": "Kid Rydia",
	"icon336 all 335": "Helmless Kain",
	"icon337 all 336": "Yang",
	"icon338 all 337": "Edward",
	"icon339 all 338": "A2",
	"icon340 all 339": "Eve",
	"icon341 all 340": "CG Lid",
	"icon342 all 341": "Killian",
	"icon343 all 342": "Medina",
	"icon345 all 344": "Lila",
	"icon346 all 345": "Silt",
	"icon347 all 346": "Mim",
	"icon348 all 347": "CG Nichol", /*Needs Name Update*/
	"icon349 all 348": "Lekisa",
	"icon350 all 349": "Elvis",
	"icon351 all 350": "Merald",
	"icon352 all 351": "Fayt",
	"icon353 all 352": "Rena",
	"icon354 all 353": "Fidel",
	"icon355 all 354": "Reimi",
	"icon356 all 355": "Roddick",
	"icon357 all 356": "CG Reagan", /*Needs Name Update*/
	"icon358 all 357": "Luminui",
	"icon359 all 358": "Xyle",
	"icon360 all 359": "Lucille",
	"icon361 all 360": "Squall",
	"icon362 all 361": "Rinoa",
	"icon363 all 362": "Zell",
	"icon364 all 363": "Lamira",
	"icon365 all 364": "Barbariccia",
	"icon366 all 365": "Rubicante",
	"icon367 all 366": "Cagnazzo",
	"icon368 all 367": "Scarmiglione",
	"icon369 all 368": "Naru/Nal",
	"icon370 all 369": "Pezzotta",
	"icon371 all 370": "Shinju",
	"icon372 all 371": "Ryuka",
	"icon373 all 372": "Grim Lord Sakura",
	"icon374 all 373": "Illusionist Nichol",
	"icon375 all 374": "Pirate Jake",
/* [Final Fantasy 7] */
	"icon256 ff7 255": "Cloud",
	"icon344 ff7 343": "Sephiroth",
};
