
const songsData = [
        {
            "Title":"4th of July",
            "Writer":"U2",
            "Original release":"The Unforgettable Fire",
            "Year":1984,
            "Artist":"U2"
        },
        {
            "Title":"11 O'Clock Tick Tock",
            "Writer":"U2",
            "Original release":"11 O'Clock Tick Tock single",
            "Year":1980,
            "Artist":"U2"
        },
        {
            "Title":"13 (There Is a Light)",
            "Writer":"U2",
            "Original release":"Songs of Experience",
            "Year":2017,
            "Artist":"U2"
        },
        {
            "Title":"40",
            "Writer":"U2",
            "Original release":"War",
            "Year":1983,
            "Artist":"U2"
        },
        {
            "Title":"Acrobat",
            "Writer":"U2",
            "Original release":"Achtung Baby",
            "Year":1991,
            "Artist":"U2"
        },
        {
            "Title":"Ahimsa",
            "Writer":"U2 feat. A. R. Rahman",
            "Original release":"Ahimsa single",
            "Year":2019,
            "Artist":"U2"
        },
        {
            "Title":"Alex Descends Into Hell for a Bottle of Milk",
            "Writer":"Bono, The Edge",
            "Original release":"The Fly single",
            "Year":1991,
            "Artist":"U2"
        },
        {
            "Title":"All Along the Watchtower",
            "Writer":"Bob Dylan",
            "Original release":"Rattle and Hum",
            "Year":1988,
            "Artist":"U2"
        },
        {
            "Title":"All Because of You",
            "Writer":"U2",
            "Original release":"How to Dismantle an Atomic Bomb",
            "Year":2004,
            "Artist":"U2"
        },
        {
            "Title":"All I Want Is You",
            "Writer":"U2",
            "Original release":"Rattle and Hum",
            "Year":1988,
            "Artist":"U2"
        },
        {
            "Title":"21st Century",
            "Writer":"Anthony Kiedis, Flea, Chad Smith, John Frusciante",
            "Original release":"Stadium Arcadium",
            "Year":2006,
            "Artist":"Red Hot Chili Peppers"
        },
        {
            "Title":"Aquatic Mouth Dance",
            "Writer":"Anthony Kiedis, Flea, Chad Smith, John Frusciante",
            "Original release":"Unlimited Love",
            "Year":2022,
            "Artist":"Red Hot Chili Peppers"
        },
        {
            "Title":"Aeroplane",
            "Writer":"Anthony Kiedis, Flea, Chad Smith, Dave Navarro",
            "Original release":"One Hot Minute",
            "Year":1995,
            "Artist":"Red Hot Chili Peppers"
        },
        {
            "Title":"The Adventures of Rain Dance Maggie",
            "Writer":"Anthony Kiedis, Flea, Chad Smith, Josh Klinghoffer",
            "Original release":"I'm with You",
            "Year":2011,
            "Artist":"Red Hot Chili Peppers"
        },
        {
            "Title":"Afterlife",
            "Writer":"Anthony Kiedis, Flea, Chad Smith, John Frusciante",
            "Original release":"Return of the Dream Canteen",
            "Year":2022,
            "Artist":"Red Hot Chili Peppers"
        },
        {
            "Title":"American Ghost Dance",
            "Writer":"Anthony Kiedis, Flea, Cliff Martinez, Jack Sherman",
            "Original release":"Freaky Styley",
            "Year":1985,
            "Artist":"Red Hot Chili Peppers"
        },
        {
            "Title":"An Opening",
            "Writer":"Anthony Kiedis, Flea, Chad Smith, John Frusciante",
            "Original release":"B-side of Hump de Bump",
            "Year":2007,
            "Artist":"Red Hot Chili Peppers"
        },
        {
            "Title":"Animal Bar",
            "Writer":"Anthony Kiedis, Flea, Chad Smith, John Frusciante",
            "Original release":"Stadium Arcadium",
            "Year":2006,
            "Artist":"Red Hot Chili Peppers"
        },
        {
            "Title":"Annie Wants a Baby",
            "Writer":"Anthony Kiedis, Flea, Chad Smith, Josh Klinghoffer",
            "Original release":"I'm with You",
            "Year":2011,
            "Artist":"Red Hot Chili Peppers"
        },
        {
            "Title":"Roxanne",
            "Writer":"Sting",
            "Original release":"Outlandos d'Amour",
            "Year":1978,
            "Artist":"The Police"
        },
        {
            "Title":"Can't Stand Losing You",
            "Writer":"Sting",
            "Original release":"Outlandos d'Amour",
            "Year":1978,
            "Artist":"The Police"
        },
        {
            "Title":"So Lonely",
            "Writer":"Sting",
            "Original release":"Outlandos d'Amour",
            "Year":1978,
            "Artist":"The Police"
        },
        {
            "Title":"Message in a Bottle",
            "Writer":"Sting",
            "Original release":"Reggatta de Blanc",
            "Year":1979,
            "Artist":"The Police"
        },
        {
            "Title":"Walking on the Moon",
            "Writer":"Sting",
            "Original release":"Reggatta de Blanc",
            "Year":1979,
            "Artist":"The Police"
        },
        {
            "Title":"The Bed's Too Big Without You",
            "Writer":"Sting",
            "Original release":"Reggatta de Blanc",
            "Year":1979,
            "Artist":"The Police"
        },
        {
            "Title":"Don't Stand So Close to Me",
            "Writer":"Sting",
            "Original release":"Zenyatta Mondatta",
            "Year":1980,
            "Artist":"The Police"
        },
        {
            "Title":"De Do Do Do, De Da Da Da",
            "Writer":"Sting",
            "Original release":"Zenyatta Mondatta",
            "Year":1980,
            "Artist":"The Police"
        },
        {
            "Title":"Every Little Thing She Does Is Magic",
            "Writer":"Sting",
            "Original release":"Ghost in the Machine",
            "Year":1981,
            "Artist":"The Police"
        },
        {
            "Title":"Invisible Sun",
            "Writer":"Sting",
            "Original release":"Ghost in the Machine",
            "Year":1981,
            "Artist":"The Police"
        },
        {
            "Title":"Accept Yourself",
            "Writer":"Johnny Marr, Morrissey",
            "Original release":"Hatful of Hollow (B-side to \"This Charming Man\")",
            "Year":1984,
            "Artist":"The Smiths"
        },
        {
            "Title":"Ask",
            "Writer":"Johnny Marr, Morrissey",
            "Original release":"The World Won't Listen (Non-album single)",
            "Year":1986,
            "Artist":"The Smiths"
        },
        {
            "Title":"Asleep",
            "Writer":"Johnny Marr, Morrissey",
            "Original release":"The World Won't Listen (B-side to \"The Boy with the Thorn in His Side\")",
            "Year":1985,
            "Artist":"The Smiths"
        },
        {
            "Title":"Back to the Old House",
            "Writer":"Johnny Marr, Morrissey",
            "Original release":"Hatful of Hollow (B-side to \"What Difference Does It Make?\")",
            "Year":1984,
            "Artist":"The Smiths"
        },
        {
            "Title":"Barbarism Begins at Home",
            "Writer":"Johnny Marr, Morrissey",
            "Original release":"Meat Is Murder",
            "Year":1985,
            "Artist":"The Smiths"
        },
        {
            "Title":"Bigmouth Strikes Again",
            "Writer":"Johnny Marr, Morrissey",
            "Original release":"The Queen Is Dead",
            "Year":1986,
            "Artist":"The Smiths"
        },
        {
            "Title":"The Boy with the Thorn in His Side",
            "Writer":"Johnny Marr, Morrissey",
            "Original release":"The Queen Is Dead",
            "Year":1986,
            "Artist":"The Smiths"
        },
        {
            "Title":"Cemetry Gates",
            "Writer":"Johnny Marr, Morrissey",
            "Original release":"The Queen Is Dead",
            "Year":1986,
            "Artist":"The Smiths"
        },
        {
            "Title":"Death at One's Elbow",
            "Writer":"Johnny Marr, Morrissey",
            "Original release":"Strangeways, Here We Come",
            "Year":1987,
            "Artist":"The Smiths"
        },
        {
            "Title":"Death of a Disco Dancer",
            "Writer":"Johnny Marr, Morrissey",
            "Original release":"Strangeways, Here We Come",
            "Year":1987,
            "Artist":"The Smiths"
        },
        {
            "Title":"Ain't No Fun (Waiting 'Round to Be a Millionaire)",
            "Writer":"Bon Scott, Angus Young, Malcolm Young",
            "Original release":"Dirty Deeds Done Dirt Cheap",
            "Year":1976,
            "Artist":"AC/DC"
        },
        {
            "Title":"All Screwed Up",
            "Writer":"Angus Young, Malcolm Young",
            "Original release":"Stiff Upper Lip",
            "Year":2000,
            "Artist":"AC/DC"
        },
        {
            "Title":"Anything Goes",
            "Writer":"Angus Young, Malcolm Young",
            "Original release":"Black Ice",
            "Year":2008,
            "Artist":"AC/DC"
        },
        {
            "Title":"Are You Ready",
            "Writer":"Angus Young, Malcolm Young",
            "Original release":"The Razors Edge",
            "Year":1990,
            "Artist":"AC/DC"
        },
        {
            "Title":"Baby, Please Don't Go",
            "Writer":"Big Joe Williams",
            "Original release":"High Voltage (1975)",
            "Year":1975,
            "Artist":"AC/DC"
        },
        {
            "Title":"Back in Black",
            "Writer":"Brian Johnson, Angus Young, Malcolm Young",
            "Original release":"Back in Black",
            "Year":1980,
            "Artist":"AC/DC"
        },
        {
            "Title":"Back in Business",
            "Writer":"Brian Johnson, Angus Young, Malcolm Young",
            "Original release":"Fly on the Wall",
            "Year":1985,
            "Artist":"AC/DC"
        },
        {
            "Title":"Back Seat Confidential",
            "Writer":"Bon Scott, Angus Young, Malcolm Young",
            "Original release":"Volts",
            "Year":1977,
            "Artist":"AC/DC"
        },
        {
            "Title":"Bad Boy Boogie",
            "Writer":"Bon Scott, Angus Young, Malcolm Young",
            "Original release":"Let There Be Rock",
            "Year":1977,
            "Artist":"AC/DC"
        },
        {
            "Title":"Badlands",
            "Writer":"Brian Johnson, Angus Young, Malcolm Young",
            "Original release":"Flick of the Switch",
            "Year":1983,
            "Artist":"AC/DC"
        },
        {
            "Title":"14 Years",
            "Writer":"W. Axl Rose, Izzy Stradlin",
            "Original release":"Use Your Illusion II",
            "Year":1991,
            "Artist":"Guns N' Roses"
        },
        {
            "Title":"Absurd",
            "Writer":"W. Axl Rose, Darren Reed, Saul Hudson, Duff McKagan",
            "Original release":"Hard Skool",
            "Year":2021,
            "Artist":"Guns N' Roses"
        },
        {
            "Title":"Ain't It Fun",
            "Writer":"Eugene O'Connor, Peter Laughner",
            "Original release":"\"The Spaghetti Incident?\"",
            "Year":1993,
            "Artist":"Guns N' Roses"
        },
        {
            "Title":"Ain't Going Down",
            "Writer":"Guns N' Roses, Chris Weber",
            "Original release":"Guns N' Roses Pinball",
            "Year":1994,
            "Artist":"Guns N' Roses"
        },
        {
            "Title":"Anything Goes",
            "Writer":"Guns N' Roses, Chris Weber",
            "Original release":"Appetite for Destruction",
            "Year":1987,
            "Artist":"Guns N' Roses"
        },
        {
            "Title":"Attitude",
            "Writer":"Glenn Danzig",
            "Original release":"\"The Spaghetti Incident?\"",
            "Year":1993,
            "Artist":"Guns N' Roses"
        },
        {
            "Title":"Back Off Bitch",
            "Writer":"W. Axl Rose, Paul Tobias",
            "Original release":"Use Your Illusion I",
            "Year":1991,
            "Artist":"Guns N' Roses"
        },
        {
            "Title":"Bad Apples",
            "Writer":"W. Axl Rose, Izzy Stradlin, Saul Hudson, Duff McKagan",
            "Original release":"Use Your Illusion I",
            "Year":1991,
            "Artist":"Guns N' Roses"
        },
        {
            "Title":"Bad Obsession",
            "Writer":"W. Axl Rose, Saul Hudson, Duff McKagan, Izzy Stradlin, Aaron Arkeen",
            "Original release":"Use Your Illusion I",
            "Year":1991,
            "Artist":"Guns N' Roses"
        },
        {
            "Title":"Better",
            "Writer":"W. Axl Rose, Robert Finck",
            "Original release":"Chinese Democracy",
            "Year":2008,
            "Artist":"Guns N' Roses"
        },
        {
            "Title":"Black Leather",
            "Writer":"Steve Jones, Paul Cook",
            "Original release":"\"The Spaghetti Incident?\"",
            "Year":1993,
            "Artist":"Guns N' Roses"
        },
        {
            "Title":"Don't Stop Believin'",
            "Writer":"Steve Perry, Neal Schon, Jonathan Cain",
            "Original release":"Escape",
            "Year":1981,
            "Artist":"Journey"
        },
        {
            "Title":"Any Way You Want It",
            "Writer":"Steve Perry, Neal Schon",
            "Original release":"Departure",
            "Year":1980,
            "Artist":"Journey"
        },
        {
            "Title":"Open Arms",
            "Writer":"Steve Perry, Jonathan Cain",
            "Original release":"Escape",
            "Year":1981,
            "Artist":"Journey"
        },
        {
            "Title":"Faithfully",
            "Writer":"Jonathan Cain",
            "Original release":"Frontiers",
            "Year":1983,
            "Artist":"Journey"
        },
        {
            "Title":"Separate Ways (Worlds Apart)",
            "Writer":"Steve Perry, Jonathan Cain",
            "Original release":"Frontiers",
            "Year":1983,
            "Artist":"Journey"
        },
        {
            "Title":"Lights",
            "Writer":"Steve Perry, Neal Schon",
            "Original release":"Infinity",
            "Year":1978,
            "Artist":"Journey"
        },
        {
            "Title":"Wheel in the Sky",
            "Writer":"Robert Fleischman, Neal Schon, Diane Valory",
            "Original release":"Infinity",
            "Year":1978,
            "Artist":"Journey"
        },
        {
            "Title":"Lovin', Touchin', Squeezin'",
            "Writer":"Steve Perry",
            "Original release":"Evolution",
            "Year":1979,
            "Artist":"Journey"
        },
        {
            "Title":"Who's Crying Now",
            "Writer":"Steve Perry, Jonathan Cain",
            "Original release":"Escape",
            "Year":1981,
            "Artist":"Journey"
        },
        {
            "Title":"Send Her My Love",
            "Writer":"Steve Perry, Jonathan Cain",
            "Original release":"Frontiers",
            "Year":1983,
            "Artist":"Journey"
        },
        {
            "Title":"Enjoy the Silence",
            "Writer":"Martin Gore",
            "Original release":"Violator",
            "Year":1990,
            "Artist":"Depeche Mode"
        },
        {
            "Title":"Personal Jesus",
            "Writer":"Martin Gore",
            "Original release":"Violator",
            "Year":1989,
            "Artist":"Depeche Mode"
        },
        {
            "Title":"Just Can't Get Enough",
            "Writer":"Vince Clarke",
            "Original release":"Speak & Spell",
            "Year":1981,
            "Artist":"Depeche Mode"
        },
        {
            "Title":"Strangelove",
            "Writer":"Martin Gore",
            "Original release":"Music for the Masses",
            "Year":1987,
            "Artist":"Depeche Mode"
        },
        {
            "Title":"Policy of Truth",
            "Writer":"Martin Gore",
            "Original release":"Violator",
            "Year":1990,
            "Artist":"Depeche Mode"
        },
        {
            "Title":"Never Let Me Down Again",
            "Writer":"Martin Gore",
            "Original release":"Music for the Masses",
            "Year":1987,
            "Artist":"Depeche Mode"
        },
        {
            "Title":"Everything Counts",
            "Writer":"Martin Gore",
            "Original release":"Construction Time Again",
            "Year":1983,
            "Artist":"Depeche Mode"
        },
        {
            "Title":"People Are People",
            "Writer":"Martin Gore",
            "Original release":"Some Great Reward",
            "Year":1984,
            "Artist":"Depeche Mode"
        },
        {
            "Title":"World in My Eyes",
            "Writer":"Martin Gore",
            "Original release":"Violator",
            "Year":1990,
            "Artist":"Depeche Mode"
        },
        {
            "Title":"Walking in My Shoes",
            "Writer":"Martin Gore",
            "Original release":"Songs of Faith and Devotion",
            "Year":1993,
            "Artist":"Depeche Mode"
        },
        {
            "Title":"Hungry Like the Wolf",
            "Writer":"Simon Le Bon, Nick Rhodes, John Taylor, Roger Taylor, Andy Taylor",
            "Original release":"Rio",
            "Year":1982,
            "Artist":"Duran Duran"
        },
        {
            "Title":"Ordinary World",
            "Writer":"Simon Le Bon, Nick Rhodes, John Taylor, Warren Cuccurullo",
            "Original release":"Duran Duran (The Wedding Album)",
            "Year":1993,
            "Artist":"Duran Duran"
        },
        {
            "Title":"Rio",
            "Writer":"Simon Le Bon, Nick Rhodes, John Taylor, Roger Taylor, Andy Taylor",
            "Original release":"Rio",
            "Year":1982,
            "Artist":"Duran Duran"
        },
        {
            "Title":"Save a Prayer",
            "Writer":"Simon Le Bon, Nick Rhodes, John Taylor, Roger Taylor, Andy Taylor",
            "Original release":"Rio",
            "Year":1982,
            "Artist":"Duran Duran"
        },
        {
            "Title":"The Reflex",
            "Writer":"Simon Le Bon, Nick Rhodes, John Taylor, Roger Taylor, Andy Taylor",
            "Original release":"Seven and the Ragged Tiger",
            "Year":1983,
            "Artist":"Duran Duran"
        },
        {
            "Title":"Girls on Film",
            "Writer":"Simon Le Bon, Nick Rhodes, John Taylor, Roger Taylor, Andy Taylor",
            "Original release":"Duran Duran",
            "Year":1981,
            "Artist":"Duran Duran"
        },
        {
            "Title":"Is There Something I Should Know?",
            "Writer":"Simon Le Bon, Nick Rhodes, John Taylor, Roger Taylor, Andy Taylor",
            "Original release":"Non-album single",
            "Year":1983,
            "Artist":"Duran Duran"
        },
        {
            "Title":"A View to a Kill",
            "Writer":"Simon Le Bon, Nick Rhodes, John Taylor, Roger Taylor, Andy Taylor",
            "Original release":"A View to a Kill (OST)",
            "Year":1985,
            "Artist":"Duran Duran"
        },
        {
            "Title":"Notorious",
            "Writer":"Simon Le Bon, Nick Rhodes, John Taylor",
            "Original release":"Notorious",
            "Year":1986,
            "Artist":"Duran Duran"
        },
        {
            "Title":"Come Undone",
            "Writer":"Simon Le Bon, Nick Rhodes, John Taylor, Warren Cuccurullo",
            "Original release":"Duran Duran (The Wedding Album)",
            "Year":1993,
            "Artist":"Duran Duran"
        },
        {
            "Title":"Boys Don't Cry",
            "Writer":"Robert Smith, Michael Dempsey, Lol Tolhurst",
            "Original release":"Boys Don't Cry",
            "Year":1979,
            "Artist":"The Cure"
        },
        {
            "Title":"Just Like Heaven",
            "Writer":"Robert Smith, Simon Gallup, Porl Thompson, Boris Williams, Lol Tolhurst",
            "Original release":"Kiss Me, Kiss Me, Kiss Me",
            "Year":1987,
            "Artist":"The Cure"
        },
        {
            "Title":"Friday I'm in Love",
            "Writer":"Robert Smith, Simon Gallup, Porl Thompson, Boris Williams, Perry Bamonte",
            "Original release":"Wish",
            "Year":1992,
            "Artist":"The Cure"
        },
        {
            "Title":"Lovesong",
            "Writer":"Robert Smith, Simon Gallup, Porl Thompson, Boris Williams, Lol Tolhurst",
            "Original release":"Disintegration",
            "Year":1989,
            "Artist":"The Cure"
        },
        {
            "Title":"A Forest",
            "Writer":"Robert Smith, Simon Gallup, Matthieu Hartley, Lol Tolhurst",
            "Original release":"Seventeen Seconds",
            "Year":1980,
            "Artist":"The Cure"
        },
        {
            "Title":"Lullaby",
            "Writer":"Robert Smith, Simon Gallup, Porl Thompson, Boris Williams, Lol Tolhurst",
            "Original release":"Disintegration",
            "Year":1989,
            "Artist":"The Cure"
        },
        {
            "Title":"Pictures of You",
            "Writer":"Robert Smith, Simon Gallup, Porl Thompson, Boris Williams, Roger O'Donnell",
            "Original release":"Disintegration",
            "Year":1989,
            "Artist":"The Cure"
        },
        {
            "Title":"In Between Days",
            "Writer":"Robert Smith",
            "Original release":"The Head on the Door",
            "Year":1985,
            "Artist":"The Cure"
        },
        {
            "Title":"Close to Me",
            "Writer":"Robert Smith",
            "Original release":"The Head on the Door",
            "Year":1985,
            "Artist":"The Cure"
        },
        {
            "Title":"The Lovecats",
            "Writer":"Robert Smith",
            "Original release":"Non-album single",
            "Year":1983,
            "Artist":"The Cure"
        }
    ];

const albumsData = [{
    "U2": [
      {
        "Album": "The Joshua Tree",
        "Released": "March 9, 1987",
        "Recorded": "1986",
        "Studio": "Windmill Lane Studios, Dublin",
        "Length": "50:11",
        "Label": "Island Records",
        "Producer": "Brian Eno, Daniel Lanois"
      },
      {
        "Album": "Achtung Baby",
        "Released": "November 18, 1991",
        "Recorded": "October 1990 - September 1991",
        "Studio": "Hansa Studios, Berlin; Windmill Lane Studios and The Factory, Dublin",
        "Length": "55:23",
        "Label": "Island Records",
        "Producer": "Daniel Lanois, Brian Eno, Steve Lillywhite"
      },
      {
        "Album": "All That You Can't Leave Behind",
        "Released": "October 30, 2000",
        "Recorded": "1998-2000",
        "Studio": "HQ, Dublin; Windmill Lane Studios, Dublin; South of France",
        "Length": "49:23",
        "Label": "Island Records",
        "Producer": "Brian Eno, Daniel Lanois"
      }
    ],
    "Red Hot Chili Peppers": [
      {
        "Album": "Californication",
        "Released": "June 8, 1999",
        "Recorded": "December 1998 - March 1999",
        "Studio": "Cello Studios, Los Angeles",
        "Length": "56:24",
        "Label": "Warner Bros.",
        "Producer": "Rick Rubin"
      },
      {
        "Album": "By the Way",
        "Released": "July 9, 2002",
        "Recorded": "November 2001 - May 2002",
        "Studio": "Cello Studios and Chateau Marmont, Los Angeles",
        "Length": "68:27",
        "Label": "Warner Bros.",
        "Producer": "Rick Rubin"
      },
      {
        "Album": "Stadium Arcadium",
        "Released": "May 9, 2006",
        "Recorded": "March 2005 - December 2005",
        "Studio": "The Mansion, Los Angeles",
        "Length": "122:20",
        "Label": "Warner Bros.",
        "Producer": "Rick Rubin"
      }
    ],
    "The Police": [
      {
        "Album": "Outlandos d'Amour",
        "Released": "November 2, 1978",
        "Recorded": "January - June 1978",
        "Studio": "Surrey Sound Studios, Leatherhead, England",
        "Length": "38:14",
        "Label": "A&M Records",
        "Producer": "The Police, Nigel Gray"
      },
      {
        "Album": "Reggatta de Blanc",
        "Released": "October 5, 1979",
        "Recorded": "February - August 1979",
        "Studio": "Surrey Sound Studios, Leatherhead, England",
        "Length": "41:45",
        "Label": "A&M Records",
        "Producer": "The Police, Nigel Gray"
      },
      {
        "Album": "Zenyatta Mondatta",
        "Released": "October 3, 1980",
        "Recorded": "July - August 1980",
        "Studio": "Wisseloord Studios, Hilversum, Netherlands",
        "Length": "38:16",
        "Label": "A&M Records",
        "Producer": "The Police, Nigel Gray"
      }
    ],
    "The Smiths": [
      {
        "Album": "The Smiths",
        "Released": "February 20, 1984",
        "Recorded": "1983",
        "Studio": "Rough Trade Studios, London, England",
        "Length": "36:32",
        "Label": "Rough Trade",
        "Producer": "John Porter"
      },
      {
        "Album": "Meat Is Murder",
        "Released": "February 11, 1985",
        "Recorded": "1984",
        "Studio": "Rough Trade Studios, London, England",
        "Length": "41:25",
        "Label": "Rough Trade",
        "Producer": "John Porter"
      },
      {
        "Album": "The Queen Is Dead",
        "Released": "June 16, 1986",
        "Recorded": "1985–1986",
        "Studio": "Ridge Farm Studio, Surrey, England",
        "Length": "39:59",
        "Label": "Rough Trade",
        "Producer": "John Porter, Morrissey, Johnny Marr"
      }
    ],
    "AC/DC": [
      {
        "Album": "Back in Black",
        "Released": "July 25, 1980",
        "Recorded": "April - May 1980",
        "Studio": "Compass Point Studios, Nassau, Bahamas",
        "Length": "42:11",
        "Label": "Atlantic",
        "Producer": "Mutt Lange"
      },
      {
        "Album": "Highway to Hell",
        "Released": "July 27, 1979",
        "Recorded": "April - May 1979",
        "Studio": "Albert Studios, Sydney, Australia",
        "Length": "42:12",
        "Label": "Atlantic",
        "Producer": "Mutt Lange"
      },
      {
        "Album": "For Those About to Rock (We Salute You)",
        "Released": "November 23, 1981",
        "Recorded": "April - August 1981",
        "Studio": "Montreux, Switzerland",
        "Length": "42:46",
        "Label": "Atlantic",
        "Producer": "Mutt Lange"
      }
    ],
    "Guns N' Roses": [
      {
        "Album": "Appetite for Destruction",
        "Released": "July 21, 1987",
        "Recorded": "1986–1987",
        "Studio": "Rumbo Recorders, Los Angeles, California",
        "Length": "53:47",
        "Label": "Geffen",
        "Producer": "Mike Clink"
      },
      {
        "Album": "G N' R Lies",
        "Released": "November 29, 1988",
        "Recorded": "1987–1988",
        "Studio": "A&M Recording Studios, Hollywood, California",
        "Length": "38:43",
        "Label": "Geffen",
        "Producer": "Mike Clink"
      },
      {
        "Album": "Use Your Illusion I",
        "Released": "September 17, 1991",
        "Recorded": "1990–1991",
        "Studio": "The Village Recorder, Los Angeles, California",
        "Length": "73:03",
        "Label": "Geffen",
        "Producer": "Mike Clink, Guns N' Roses"
      }
    ],
    "Journey": [
      {
        "Album": "Escape",
        "Released": "July 31, 1981",
        "Recorded": "1981",
        "Studio": "Fantasy Studios, Berkeley, California",
        "Length": "46:17",
        "Label": "Columbia",
        "Producer": "Kevin Elson"
      },
      {
        "Album": "Frontiers",
        "Released": "February 22, 1983",
        "Recorded": "1982–1983",
        "Studio": "Fantasy Studios, Berkeley, California",
        "Length": "43:33",
        "Label": "Columbia",
        "Producer": "Kevin Elson"
      },
      {
        "Album": "Raised on Radio",
        "Released": "May 27, 1986",
        "Recorded": "1985–1986",
        "Studio": "Sound Labs, Hollywood, California",
        "Length": "43:11",
        "Label": "Columbia",
        "Producer": "Jonathan Cain"
      }
    ],
    "Depeche Mode": [
      {
        "Album": "Speak & Spell",
        "Released": "October 5, 1981",
        "Recorded": "1981",
        "Studio": "Blackwing Studios, London, England",
        "Length": "41:11",
        "Label": "Mute",
        "Producer": "Daniel Miller, Depeche Mode"
      },
      {
        "Album": "A Broken Frame",
        "Released": "September 27, 1982",
        "Recorded": "1982",
        "Studio": "Blackwing Studios, London, England",
        "Length": "43:33",
        "Label": "Mute",
        "Producer": "Depeche Mode"
      },
      {
        "Album": "Construction Time Again",
        "Released": "August 22, 1983",
        "Recorded": "1983",
        "Studio": "Blackwing Studios, London, England",
        "Length": "44:28",
        "Label": "Mute",
        "Producer": "Depeche Mode"
      }
    ],
    "Duran Duran": [
      {
        "Album": "Duran Duran",
        "Released": "June 15, 1981",
        "Recorded": "1980–1981",
        "Studio": "The Power Station, New York City, New York",
        "Length": "40:42",
        "Label": "EMI",
        "Producer": "Colin Thurston"
      },
      {
        "Album": "Rio",
        "Released": "May 10, 1982",
        "Recorded": "1982",
        "Studio": "The Power Station, New York City, New York",
        "Length": "43:04",
        "Label": "EMI",
        "Producer": "Colin Thurston"
      },
      {
        "Album": "Seven and the Ragged Tiger",
        "Released": "November 21, 1983",
        "Recorded": "1983",
        "Studio": "The Power Station, New York City, New York",
        "Length": "41:58",
        "Label": "EMI",
        "Producer": "Alex Sadkin"
      }
    ],
    "The Cure": [
      {
        "Album": "Three Imaginary Boys",
        "Released": "May 8, 1979",
        "Recorded": "1978–1979",
        "Studio": "The Taylour Sound Studios, London, England",
        "Length": "34:04",
        "Label": "Fiction",
        "Producer": "Chris Parry"
      },
      {
        "Album": "Seventeen Seconds",
        "Released": "April 22, 1980",
        "Recorded": "1979–1980",
        "Studio": "The Taylour Sound Studios, London, England",
        "Length": "38:29",
        "Label": "Fiction",
        "Producer": "Mike Hedges"
      },
      {
        "Album": "Faith",
        "Released": "April 22, 1981",
        "Recorded": "1981",
        "Studio": "The Taylour Sound Studios, London, England",
        "Length": "43:25",
        "Label": "Fiction",
        "Producer": "Mike Hedges"
      }
    ]
}]

const bandsData = [{
    "U2": "Formed in Dublin, Ireland, in 1976, U2 is a rock band comprising Bono (lead vocals and rhythm guitar), The Edge (lead guitar, keyboards, and backing vocals), Adam Clayton (bass guitar), and Larry Mullen Jr. (drums and percussion). Initially rooted in post-punk, U2's musical style has evolved throughout their career, yet has maintained an anthemic quality built on Bono's expressive vocals and The Edge's chiming, effects-based guitar sounds.",
    
    "Red Hot Chili Peppers": "Formed in Los Angeles, California, in 1983, the Red Hot Chili Peppers are an American rock band known for blending funk, punk, and psychedelic rock. The current lineup includes Anthony Kiedis (vocals), Flea (bass), Chad Smith (drums), and John Frusciante (guitar). With over 120 million albums sold, they are among the best-selling bands ever. They were inducted into the Rock and Roll Hall of Fame in 2012.",
    
    "The Police": "Formed in London, England, in 1977, The Police is a rock band consisting of Sting (vocals, bass), Andy Summers (guitar), and Stewart Copeland (drums). Known for their fusion of rock, reggae, and punk, the band achieved worldwide success with hits like 'Every Breath You Take' and 'Roxanne.' The Police disbanded in 1986 but reunited for a farewell tour in 2007-2008.",
    
    "The Smiths": "Formed in Manchester, England, in 1982, The Smiths are an alternative rock band consisting of Morrissey (vocals), Johnny Marr (guitar), Andy Rourke (bass), and Mike Joyce (drums). Known for their poetic and melancholic lyrics, the band is considered one of the most influential in British indie rock. Despite their brief career from 1982 to 1987, The Smiths left a lasting legacy in music.",
    
    "AC/DC": "Formed in Sydney, Australia, in 1973, AC/DC is a hard rock band founded by brothers Malcolm and Angus Young. Known for their energetic sound and iconic guitar riffs, the band achieved international success with albums like 'Back in Black' and 'Highway to Hell.' AC/DC is one of the best-selling bands of all time, with over 200 million albums sold worldwide.",
    
    "Guns N' Roses": "Formed in Los Angeles, California, in 1985, Guns N' Roses is an American hard rock band. The classic lineup included Axl Rose (vocals), Slash (lead guitar), Izzy Stradlin (rhythm guitar), Duff McKagan (bass), and Steven Adler (drums). They achieved worldwide success with their debut album 'Appetite for Destruction' in 1987.",
    
    "Journey": "Formed in San Francisco, California, in 1973, Journey is a rock band known for their melodic sound and powerful ballads. The classic lineup included Neal Schon (guitar), Jonathan Cain (keyboards), Ross Valory (bass), Steve Smith (drums), and Steve Perry (vocals). Journey achieved international success with hits like 'Don't Stop Believin'' and 'Open Arms.'",
    
    "Depeche Mode": "Formed in Basildon, England, in 1980, Depeche Mode is an electronic band consisting of Dave Gahan (vocals), Martin Gore (keyboards, guitar), and Andy Fletcher (keyboards). Known for their dark, synth-driven sound, the band achieved success with albums like 'Violator' and 'Songs of Faith and Devotion.' Depeche Mode is considered one of the most influential electronic bands in music history.",
    
    "Duran Duran": "Formed in Birmingham, England, in 1978, Duran Duran is a new wave band consisting of Simon Le Bon (vocals), Nick Rhodes (keyboards), John Taylor (bass), Roger Taylor (drums), and Andy Taylor (guitar). Known for their stylish image and catchy pop songs, the band achieved success with hits like 'Hungry Like the Wolf' and 'Rio.'",
    
    "The Cure": "Formed in Crawley, England, in 1976, The Cure is a rock band consisting of Robert Smith (vocals, guitar), Simon Gallup (bass), and Jason Cooper (drums). Known for their gothic and post-punk sound, the band achieved success with albums like 'Disintegration' and 'Wish.' The Cure is considered one of the most influential bands in alternative rock."
  }]

const bandsEventsData = [
        {
          "AC/DC": {
            "fact1": "The band's iconic logo, designed in 1977, features the bold letters 'AC/DC' separated by a high-voltage symbol, symbolizing their electrifying music style.",
            "fact2": "Their song 'Highway to Hell' (1979) became one of their most popular tracks, despite initial controversy over its title.",
            "fact3": "AC/DC was inducted into the Rock and Roll Hall of Fame in 2003, recognizing their significant impact on rock music.",
            "image_url1": "./assets/images/acdc.jpg",
            "image_url2": "./assets/images/acdc.jpg",
            "image_url3": "./assets/images/acdc.jpg"
          },
          "Depeche Mode": {
            "fact1": "Their 1990 album 'Violator' includes the hit 'Enjoy the Silence,' which won Best British Single at the 1991 Brit Awards.",
            "fact2": "Depeche Mode's name was inspired by a French fashion magazine, translating to 'Fashion Dispatch.'",
            "fact3": "In 2020, the band was inducted into the Rock and Roll Hall of Fame, acknowledging their influence on electronic music.",
            "image_url1": "./assets/images/rhcp.jpg",
            "image_url2": "./assets/images/rhcp.jpg",
            "image_url3": "./assets/images/rhcp.jpg"
          },
          "Duran Duran": {
            "fact1": "The band's innovative music videos, such as 'Hungry Like the Wolf,' played a significant role in the early popularity of MTV.",
            "fact2": "Duran Duran derived their name from a character in the 1968 science fiction film 'Barbarella.'",
            "fact3": "They were one of the first bands to utilize video technology in their live performances, enhancing the concert experience.",
            "image_url1": "./assets/images/rhcp.jpg",
            "image_url2": "./assets/images/rhcp.jpg",
            "image_url3": "./assets/images/rhcp.jpg"
          },
          "Guns N' Roses": {
            "fact1": "Their debut album, 'Appetite for Destruction' (1987), has sold over 30 million copies worldwide, making it one of the best-selling albums of all time.",
            "fact2": "The music video for 'November Rain' was one of the first on YouTube to surpass one billion views.",
            "fact3": "Guns N' Roses was inducted into the Rock and Roll Hall of Fame in 2012, solidifying their legacy in rock history.",
            "image_url1": "https://upload.wikimedia.org/wikipedia/commons/6/63/Guns_N%27_Roses_logo.png",
            "image_url2": "https://upload.wikimedia.org/wikipedia/commons/f/f6/Guns_N%27_Roses_band.jpg",
            "image_url3": "https://upload.wikimedia.org/wikipedia/commons/0/08/Guns_N%27_Roses_live.jpg"
          },
          "Journey": {
            "fact1": "Their song 'Don't Stop Believin'' (1981) became the top-selling catalog track in iTunes history in 2009.",
            "fact2": "The band's 1981 album 'Escape' reached number one on the Billboard 200 chart.",
            "fact3": "Journey received a star on the Hollywood Walk of Fame in 2005, honoring their contributions to music.",
            "image_url1": "https://upload.wikimedia.org/wikipedia/commons/a/a8/Journey_band_logo.png",
            "image_url2": "https://upload.wikimedia.org/wikipedia/commons/9/94/Journey_band.jpg",
            "image_url3": "https://upload.wikimedia.org/wikipedia/commons/d/d2/Journey_live.jpg"
          },
          "Red Hot Chili Peppers": {
            "fact1": "The band's 1999 album 'Californication' marked a significant comeback, producing hits like 'Scar Tissue' and 'Otherside'.",
            "fact2": "Their song 'Under the Bridge' (1991) became one of their most successful singles, reaching number two on the Billboard Hot 100.",
            "fact3": "Red Hot Chili Peppers were inducted into the Rock and Roll Hall of Fame in 2012, recognizing their impact on alternative rock.",
            "image_url1": "./assets/images/rhcp.jpg",
            "image_url2": "./assets/images/rhcp.jpg",
            "image_url3": "./assets/images/rhcp.jpg"
          },
          "The Cure": {
            "fact1": "Their 1989 album 'Disintegration' is considered one of their finest works, featuring songs like 'Lovesong' and 'Pictures of You'.",
            "fact2": "The Cure's frontman, Robert Smith, is known for his distinctive voice and signature red lipstick and messy hair look.",
            "fact3": "In 2019, The Cure was inducted into the Rock and Roll Hall of Fame, honoring their influence on gothic rock.",
            "image_url1": "https://upload.wikimedia.org/wikipedia/commons/4/4e/The_Cure_logo.svg",
            "image_url2": "https://upload.wikimedia.org/wikipedia/commons/1/1e/The_Cure_band.jpg",
            "image_url3": "https://upload.wikimedia.org/wikipedia/commons/5/55/The_Cure_live.jpg"
          },
          "The Police": {
            "fact1": "Their final studio album, 'Synchronicity' (1983), includes the Grammy-winning song 'Every Breath You Take'.",
            "fact2": "The Police's 2007-2008 reunion tour became one of the highest-grossing tours of all time.",
            "fact3": "The band was inducted into the Rock and Roll Hall of Fame in 2003, celebrating their contributions to new wave music.",
            "image_url1": "https://upload.wikimedia.org/wikipedia/commons/4/49/The_Police_logo.png",
            "image_url2": "https://upload.wikimedia.org/wikipedia/commons/3/32/The_Police_band.jpg",
            "image_url3": "https://upload.wikimedia.org/wikipedia/commons/7/7c/The_Police_live.jpg"
          },
          "The Smiths": {
            "fact1": "Despite disbanding in 1987, their influence endures, with Rolling Stone ranking them among the '100 Greatest Artists of All Time'.",
            "fact2": "The Smiths' song 'There Is a Light That Never Goes Out' is considered one of the greatest indie songs of all time.",
            "fact3": "The band's self-titled debut album (1984) is regarded as a seminal work in alternative rock.",
            "image_url1": "https://upload.wikimedia.org/wikipedia/commons/8/81/The_Smiths_logo.png",
            "image_url2": "https://upload.wikimedia.org/wikipedia/commons/f/fb/The_Smiths_band.jpg",
            "image_url3": "https://upload.wikimedia.org/wikipedia/commons/d/d5/The_Smiths_live.jpg"
          },
          "U2": {
            "fact1": "Their 2009–2011 'U2 360° Tour' set records as the highest-grossing concert tour in history at that time.",
            "fact2": "U2's 1987 album 'The Joshua Tree' won the Grammy Award for Album of the Year.",
            "fact3": "The band is known for their political activism, particularly in human rights and social justice causes.",
            "image_url1": "https://upload.wikimedia.org/wikipedia/commons/d/d2/U2_logo.png",
            "image_url2": "https://upload.wikimedia.org/wikipedia/commons/5/50/U2_band.jpg",
            "image_url3": "https://upload.wikimedia.org/wikipedia/commons/8/89/U2_live.jpg"
          }
        }
]

function updateTitle(bandName) {
    document.getElementById('band-title').textContent = bandName;
}

function fillTable() {
    const table = document.querySelector('#songs-list');

    songsData.forEach(song => {
        const newRow = table.insertRow();

        Object.values(song).forEach(value => {
            const cell = newRow.insertCell();
            cell.textContent = value;
        });
    });
}

function fillHistory(bandName) {
    const history_field = document.getElementById('band-history');
    history_field.textContent = bandsData[0][bandName];
}


function fillAlbums(bandName) {
    const albumBoxes = document.querySelectorAll('.album-box');
    albumsData[0][bandName].forEach((album, index) => {
        if (index < albumBoxes.length) {
            const albumBox = albumBoxes[index];
    
            const albumTitle = albumBox.querySelector('.album-title');
            albumTitle.textContent = album.Album;
    
            const releaseDate = albumBox.querySelector('.release-date');
            releaseDate.textContent = `Release: ${album.Released}`;
    
            const recorded = albumBox.querySelector('.recorded');
            recorded.textContent = `Recorded: ${album.Recorded}`;
    
            const studio = albumBox.querySelector('.studio');
            studio.textContent = `Studio: ${album.Studio}`;
    
            const length = albumBox.querySelector('.length');
            length.textContent = `Length: ${album.Length}`;
    
            const label = albumBox.querySelector('.label');
            label.textContent = `Label: ${album.Label}`;
    
            const producer = albumBox.querySelector('.producer');
            producer.textContent = `Producer: ${album.Producer}`;

            if (bandName == "Red Hot Chili Peppers") {
                const picture = ("rhcp_" + albumTitle.textContent.replace(/[\s']+/g, '')).toLowerCase()
                const image = albumBox.children[0]
                image.src = "./assets/images/" + picture + ".jpg"
            } else {
                const picture = (bandName.replace(/[\s')(/]+/g, '') + "_" + albumTitle.textContent.replace(/[\s']+/g, '')).toLowerCase()
                const image = albumBox.children[0]
                image.src = "./assets/images/" + picture + ".jpg"
            }

            
        }
    });
}

function filterByBand(bandName) {
    const rows = document.querySelectorAll("#songs-list tr");

    rows.forEach((row, index) => {
        if (index === 0) return; 
        const bandCell = row.cells[4];
        const isMatch = bandCell && (bandCell.textContent.trim() === bandName || bandName === 'All');
        row.style.display = isMatch ? '' : 'none';
    });

    fillHistory(bandName);
    fillAlbums(bandName);
    updateTitle(bandName.toUpperCase());
    
}


document.addEventListener("DOMContentLoaded", () => {
    fillTable();
    filterByBand('U2');
    fillAlbums('U2');
});