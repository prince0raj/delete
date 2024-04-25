const zipCodeArray = [
    "119350",
    "118400",
    "118800",
    "118977",
    "118030",
    "100900",
    "100901",
    "118757",
    "100902",
    "118000",
    "118518",
    "118701",
    "118820",
    "118728",
    "118027",
    "119197",
    "118100",
    "118327",
    "118457",
    "118600",
    "143315",
    "143320",
    "143510",
    "143310",
    "143330",
    "122801",
    "122301",
    "123070",
    "123085",
    "123068",
    "123075",
    "123080",
    "122045",
    "122100",
    "123105",
    "122000",
    "122080",
    "122300",
    "122480",
    "122320",
    "116000",
    "116301",
    "116177",
    "115600",
    "115070",
    "116765",
    "117130",
    "117140",
    "116965",
    "115545",
    "116830",
    "115723",
    "115000",
    "115356",
    "116700",
    "115490",
    "117000",
    "151000",
    "152150",
    "151831",
    "152261",
    "152260",
    "152440",
    "151090",
    "150000",
    "150900",
    "152080",
    "152090",
    "151530",
    "151100",
    "152290",
    "152590",
    "152611",
    "152351",
    "152480",
    "151081",
    "152381",
    "152382",
    "152455",
    "152570",
    "110050",
    "111670",
    "100991",
    "111400",
    "110307",
    "110911",
    "111110",
    "110401",
    "110430",
    "100992",
    "100994",
    "100990",
    "111300",
    "111100",
    "110070",
    "110170",
    "111515",
    "110201",
    "100995",
    "110513",
    "111000",
    "110402",
    "100100",
    "110220",
    "110000",
    "100000",
    "110123",
    "110140",
    "110130",
    "110180",
    "111770",
    "128300",
    "128180",
    "127800",
    "127050",
    "128200",
    "128260",
    "127055",
    "127010",
    "127000",
    "128251",
    "127580",
    "128501",
    "128600",
    "128400",
    "128001",
    "127900",
    "127801",
    "125600",
    "125400",
    "125490",
    "126410",
    "125355",
    "125360",
    "125000",
    "126460",
    "126300",
    "126000",
    "126100",
    "125700",
    "125900",
    "126200",
    "129834",
    "129000",
    "129140",
    "100930",
    "100920",
    "100955",
    "100925",
    "100959",
    "100958",
    "101006",
    "130680",
    "130656",
    "130657",
    "130690",
    "129090",
    "130665",
    "100916",
    "101000",
    "110959",
    "129100",
    "100910",
    "130660",
    "100940",
    "130315",
    "130670",
    "100956",
    "130655",
    "100931",
    "130760",
    "100960",
    "100961",
    "130020",
    "130400",
    "129900",
    "129301",
    "129731",
    "129150",
    "129629",
    "130301",
    "129700",
    "129810",
    "130000",
    "130501",
    "130500",
    "130200",
    "124260",
    "124700",
    "124066",
    "124600",
    "124065",
    "124201",
    "120500",
    "121031",
    "120741",
    "120701",
    "120700",
    "121100",
    "120120",
    "120000",
    "120080",
    "154280",
    "154460",
    "154000",
    "154210",
    "154380",
    "154500",
    "154480",
    "154130",
    "154530",
    "154531",
    "154420",
    "154440",
    "154400",
    "154700",
    "154770",
    "154990",
    "155090",
    "155050",
    "155070",
    "154970",
    "154840",
    "154850",
    "154730",
    "154920",
    "154750",
    "154890",
    "154950",
    "154956",
    "154971",
    "154740",
    "155071",
    "154810",
    "155040",
    "154820",
    "155132",
    "154960",
    "154858",
    "155010",
    "155110",
    "154910",
    "154880",
    "154900",
    "154830",
    "154790",
    "154800",
    "155011",
    "154940",
    "155140",
    "154870",
    "156200",
    "156450",
    "156191",
    "156410",
    "156370",
    "156277",
    "156431",
    "156255",
    "156100",
    "156430",
    "156160",
    "156220",
    "156510",
    "156530",
    "156121",
    "156245",
    "156130",
    "156490",
    "156391",
    "156480",
    "156330",
    "156300",
    "156520",
    "156550",
    "156280",
    "156470",
    "156140",
    "156366",
    "156360",
    "156560",
    "156350",
    "156260",
    "156390",
    "156460",
    "156250",
    "156310",
    "153300",
    "153310",
    "153480",
    "153460",
    "153410",
    "153520",
    "153380",
    "153360",
    "153500",
    "153430",
    "153450",
    "153400",
    "153330",
    "153350",
    "153424",
    "153440",
    "138301",
    "138000",
    "138100",
    "138200",
    "137000",
    "136700",
    "138401",
    "137501",
    "137600",
    "138001",
    "136500",
    "136200",
    "137900",
    "137800",
    "136901",
    "137801",
    "137400",
    "137100",
    "136300",
    "137700",
    "137301",
    "136600",
    "136020",
    "136000",
    "136800",
    "131212",
    "131118",
    "131220",
    "132315",
    "131911",
    "131070",
    "132200",
    "131000",
    "132500",
    "132615",
    "131400",
    "132800",
    "131500",
    "131514",
    "131001",
    "131800",
    "133000",
    "131600",
    "131300",
    "133100",
    "132000",
    "132700",
    "131710",
    "132400",
    "132100",
    "132900",
    "132114",
    "133107",
    "152900",
    "152990",
    "153020",
    "152920",
    "153180",
    "153080",
    "152954",
    "152940",
    "153130",
    "153140",
    "153110",
    "153100",
    "153111",
    "153090",
    "153010",
    "153070",
    "153060",
    "153000",
    "153161",
    "152960",
    "153041",
    "142219",
    "142229",
    "142080",
    "142001",
    "142020",
    "142060",
    "142000",
    "142110",
    "142200",
    "142140",
    "142090",
    "142010",
    "142180",
    "142070",
    "142040",
    "142150",
    "142101",
    "142160",
    "142030",
    "157860",
    "157640",
    "157690",
    "157620",
    "157674",
    "157880",
    "157810",
    "157830",
    "157650",
    "157790",
    "157730",
    "157670",
    "157870",
    "157769",
    "157680",
    "157740",
    "157600",
    "157850",
    "157630",
    "157720",
    "157840",
    "157610",
    "157780",
    "157760",
    "157710",
    "158000",
    "158040",
    "158330",
    "158390",
    "158391",
    "158240",
    "158230",
    "158360",
    "158300",
    "158030",
    "158049",
    "158088",
    "158130",
    "158120",
    "158260",
    "158370",
    "158280",
    "158310",
    "158016",
    "158100",
    "158170",
    "158220",
    "158357",
    "158163",
    "158140",
    "158020",
    "158290",
    "158210",
    "158150",
    "158060",
    "153600",
    "153770",
    "153710",
    "153790",
    "153630",
    "153606",
    "153650",
    "153660",
    "153631",
    "153700",
    "153620",
    "153730",
    "153830",
    "153840",
    "153610",
    "153810",
    "153860",
    "153690",
    "153800",
    "153750",
    "153850",
    "153760",
    "153820",
    "153678",
    "153784",
    "153626",
    "153827",
    "155700",
    "155790",
    "155900",
    "155911",
    "155870",
    "155770",
    "155830",
    "155750",
    "155920",
    "155810",
    "155771",
    "155760",
    "155910",
    "155890",
    "155930",
    "155740",
    "155850",
    "155904",
    "155820",
    "156002",
    "156012",
    "155730",
    "155970",
    "140901",
    "140601",
    "140600",
    "140700",
    "139040",
    "100954",
    "139300",
    "140815",
    "139310",
    "140900",
    "140100",
    "140400",
    "140720",
    "141500",
    "139205",
    "100915",
    "140708",
    "140709",
    "140710",
    "140711",
    "140712",
    "140713",
    "140714",
    "140715",
    "139400",
    "141000",
    "139600",
    "139100",
    "139800",
    "140200",
    "140000",
    "141301",
    "141401",
    "140701",
    "141400",
    "139500",
    "141010",
    "141300",
    "140800",
    "141100",
    "139700",
    "140500",
    "141200",
    "140300",
    "139013",
    "139000",
    "139014",
    "139020",
    "139900",
    "155300",
    "155520",
    "155490",
    "155360",
    "155410",
    "155550",
    "155500",
    "155340",
    "155380",
    "155301",
    "155570",
    "155530",
    "155430",
    "155400",
    "155470",
    "155450",
    "155471",
    "155420",
    "155590",
    "155460",
    "155370",
    "155320",
    "155671",
    "155640",
    "155670",
    "155690",
    "156700",
    "156810",
    "156780",
    "156750",
    "156970",
    "156740",
    "156801",
    "156800",
    "156920",
    "156770",
    "156790",
    "156930",
    "156730",
    "156910",
    "156720",
    "156990",
    "156710",
    "156890",
    "156960",
    "156776",
    "156955",
    "156873",
    "156886",
    "134070",
    "134411",
    "135400",
    "135401",
    "135300",
    "135200",
    "134100",
    "134900",
    "135500",
    "134710",
    "135000",
    "134500",
    "134000",
    "134600",
    "134200",
    "134800",
    "158880",
    "158500",
    "158770",
    "158630",
    "158640",
    "158550",
    "158820",
    "158680",
    "158530",
    "158850",
    "158660",
    "158760",
    "158720",
    "158780",
    "158700",
    "158690",
    "158590",
    "158670",
    "158860",
    "158748",
    "158810",
    "158840",
    "158830",
    "158570",
    "158560",
    "158620",
    "158671",
    "158710",
    "158600",
    "158775",
    "158705",
    "158804",
    "158519",
    "158627",
    "157100",
    "157310",
    "157150",
    "157280",
    "157140",
    "157420",
    "157120",
    "157450",
    "157260",
    "157410",
    "157330",
    "157300",
    "157160",
    "157430",
    "157250",
    "157380",
    "157200",
    "157130",
    "157180",
    "157440",
    "157230",
    "157210",
    "157170",
    "157390",
    "157400",
    "157270",
    "157101",
    "157360",
    "157356"
]

module.exports = zipCodeArray;