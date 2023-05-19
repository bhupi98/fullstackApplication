const { executeQuery } = require("./db");

async function insertSeedData() {
  try {
    let dateFormat = [
      "YYYY-MM-DD",
      "YYYY-MM-DD HH:mm:ss",
      "YYYY-MM-DDTHH:mm:ssZ",
      "YYYY-MM-DDTHH:mm:ss.SSSZ",
      "MM/DD/YYYY",
      "MM/DD/YYYY HH:mm:ss",
      "MM/DD/YYYY HH:mm:ss.SSS",
      "DD/MM/YYYY",
      "DD/MM/YYYY HH:mm:ss",
      "DD/MM/YYYY HH:mm:ss.SSS",
      "YYYY/MM/DD",
      "YYYY/MM/DD HH:mm:ss",
      "YYYY/MM/DD HH:mm:ss.SSS",
      "MM-DD-YYYY",
      "MM-DD-YYYY HH:mm:ss",
      "MM-DD-YYYY HH:mm:ss.SSS",
      "DD-MM-YYYY",
      "DD-MM-YYYY HH:mm:ss",
      "DD-MM-YYYY HH:mm:ss.SSS",
      "YYYY.MMM.DD",
      "YYYY.MMM.DD HH:mm:ss",
      "YYYY.MMM.DD HH:mm:ss.SSS",
      "MMM DD, YYYY",
      "MMM DD, YYYY HH:mm:ss",
      "MMM DD, YYYY HH:mm:ss.SSS",
      "DD MMM, YYYY",
      "DD MMM, YYYY HH:mm:ss",
      "DD MMM, YYYY HH:mm:ss.SSS",
    ];
    let timezonelist = [
      {
        country: "Afghanistan",
        timezone: "Asia/Kabul",
        offset: "+04:30",
      },
      {
        country: "Albania",
        timezone: "Europe/Tirane",
        offset: "+02:00",
      },
      {
        country: "Algeria",
        timezone: "Africa/Algiers",
        offset: "+01:00",
      },
      {
        country: "American Samoa",
        timezone: "Pacific/Pago_Pago",
        offset: "-11:00",
      },
      {
        country: "Andorra",
        timezone: "Europe/Andorra",
        offset: "+02:00",
      },
      {
        country: "Angola",
        timezone: "Africa/Luanda",
        offset: "+01:00",
      },
      {
        country: "Anguilla",
        timezone: "America/Anguilla",
        offset: "-04:00",
      },
      {
        country: "Antarctica",
        timezone: "Antarctica/Palmer",
        offset: "-03:00",
      },
      {
        country: "Antigua and Barbuda",
        timezone: "America/Antigua",
        offset: "-04:00",
      },
      {
        country: "Argentina",
        timezone: "America/Argentina/Buenos_Aires",
        offset: "-03:00",
      },
      {
        country: "Armenia",
        timezone: "Asia/Yerevan",
        offset: "+04:00",
      },
      {
        country: "Aruba",
        timezone: "America/Aruba",
        offset: "-04:00",
      },
      {
        country: "Australia",
        timezone: "Australia/Sydney",
        offset: "+10:00",
      },
      {
        country: "Austria",
        timezone: "Europe/Vienna",
        offset: "+02:00",
      },
      {
        country: "Azerbaijan",
        timezone: "Asia/Baku",
        offset: "+04:00",
      },
      {
        country: "Bahamas",
        timezone: "America/Nassau",
        offset: "-04:00",
      },
      {
        country: "Bahrain",
        timezone: "Asia/Bahrain",
        offset: "+03:00",
      },
      {
        country: "Bangladesh",
        timezone: "Asia/Dhaka",
        offset: "+06:00",
      },
      {
        country: "Barbados",
        timezone: "America/Barbados",
        offset: "-04:00",
      },
      {
        country: "Belarus",
        timezone: "Europe/Minsk",
        offset: "+03:00",
      },
      {
        country: "Belgium",
        timezone: "Europe/Brussels",
        offset: "+02:00",
      },
      {
        country: "Belize",
        timezone: "America/Belize",
        offset: "-06:00",
      },
      {
        country: "Benin",
        timezone: "Africa/Porto-Novo",
        offset: "+01:00",
      },
      {
        country: "Bermuda",
        timezone: "Atlantic/Bermuda",
        offset: "-03:00",
      },
      {
        country: "Bhutan",
        timezone: "Asia/Thimphu",
        offset: "+06:00",
      },
      {
        country: "Bolivia",
        timezone: "America/La_Paz",
        offset: "-04:00",
      },
      {
        country: "Bosnia and Herzegovina",
        timezone: "Europe/Sarajevo",
        offset: "+02:00",
      },
      {
        country: "Botswana",
        timezone: "Africa/Gaborone",
        offset: "+02:00",
      },
      {
        country: "Bouvet Island",
        timezone: "Europe/Oslo",
        offset: "+01:00",
      },
      {
        country: "Brazil",
        timezone: "America/Sao_Paulo",
        offset: "-03:00",
      },
      {
        country: "British Indian Ocean Territory",
        timezone: "Indian/Chagos",
        offset: "+06:00",
      },
      {
        country: "British Virgin Islands",
        timezone: "America/Tortola",
        offset: "-04:00",
      },
      {
        country: "Brunei",
        timezone: "Asia/Brunei",
        offset: "+08:00",
      },
      {
        country: "Bulgaria",
        timezone: "Europe/Sofia",
        offset: "+03:00",
      },
      {
        country: "Burkina Faso",
        timezone: "Africa/Ouagadougou",
        offset: "+00:00",
      },
      {
        country: "Burundi",
        timezone: "Africa/Bujumbura",
        offset: "+02:00",
      },
      {
        country: "Cambodia",
        timezone: "Asia/Phnom_Penh",
        offset: "+07:00",
      },
      {
        country: "Cameroon",
        timezone: "Africa/Douala",
        offset: "+01:00",
      },
      {
        country: "Canada",
        timezone: "America/Toronto",
        offset: "-04:00",
      },
      {
        country: "Cape Verde",
        timezone: "Atlantic/Cape_Verde",
        offset: "-01:00",
      },
      {
        country: "Cayman Islands",
        timezone: "America/Cayman",
        offset: "-05:00",
      },
      {
        country: "Central African Republic",
        timezone: "Africa/Bangui",
        offset: "+01:00",
      },
      {
        country: "Chad",
        timezone: "Africa/Ndjamena",
        offset: "+01:00",
      },
      {
        country: "Chile",
        timezone: "America/Santiago",
        offset: "-04:00",
      },
      {
        country: "China",
        timezone: "Asia/Shanghai",
        offset: "+08:00",
      },
      {
        country: "Christmas Island",
        timezone: "Indian/Christmas",
        offset: "+07:00",
      },
      {
        country: "Cocos Islands",
        timezone: "Indian/Cocos",
        offset: "+06:30",
      },
      {
        country: "Colombia",
        timezone: "America/Bogota",
        offset: "-05:00",
      },
      {
        country: "Comoros",
        timezone: "Africa/Nairobi",
        offset: "+03:00",
      },
      {
        country: "Congo",
        timezone: "Africa/Brazzaville",
        offset: "+01:00",
      },
      {
        country: "Cook Islands",
        timezone: "Pacific/Rarotonga",
        offset: "-10:00",
      },
      {
        country: "Costa Rica",
        timezone: "America/Costa_Rica",
        offset: "-06:00",
      },
      {
        country: "Croatia",
        timezone: "Europe/Zagreb",
        offset: "+02:00",
      },
      {
        country: "Cuba",
        timezone: "America/Havana",
        offset: "-04:00",
      },
      {
        country: "Curacao",
        timezone: "America/Curacao",
        offset: "-04:00",
      },
      {
        country: "Cyprus",
        timezone: "Asia/Nicosia",
        offset: "+03:00",
      },
      {
        country: "Czech Republic",
        timezone: "Europe/Prague",
        offset: "+02:00",
      },
      {
        country: "Democratic Republic of the Congo",
        timezone: "Africa/Kinshasa",
        offset: "+01:00",
      },
      {
        country: "Denmark",
        timezone: "Europe/Copenhagen",
        offset: "+02:00",
      },
      {
        country: "Djibouti",
        timezone: "Africa/Djibouti",
        offset: "+03:00",
      },
      {
        country: "Dominica",
        timezone: "America/Dominica",
        offset: "-04:00",
      },
      {
        country: "Dominican Republic",
        timezone: "America/Santo_Domingo",
        offset: "-04:00",
      },
      {
        country: "East Timor",
        timezone: "Asia/Dili",
        offset: "+09:00",
      },
      {
        country: "Ecuador",
        timezone: "America/Guayaquil",
        offset: "-05:00",
      },
      {
        country: "Egypt",
        timezone: "Africa/Cairo",
        offset: "+02:00",
      },
      {
        country: "El Salvador",
        timezone: "America/El_Salvador",
        offset: "-06:00",
      },
      {
        country: "Equatorial Guinea",
        timezone: "Africa/Malabo",
        offset: "+01:00",
      },
      {
        country: "Eritrea",
        timezone: "Africa/Asmara",
        offset: "+03:00",
      },
      {
        country: "Estonia",
        timezone: "Europe/Tallinn",
        offset: "+03:00",
      },
      {
        country: "Ethiopia",
        timezone: "Africa/Addis_Ababa",
        offset: "+03:00",
      },
      {
        country: "Falkland Islands",
        timezone: "Atlantic/Stanley",
        offset: "-03:00",
      },
      {
        country: "Faroe Islands",
        timezone: "Atlantic/Faroe",
        offset: "+01:00",
      },
      {
        country: "Fiji",
        timezone: "Pacific/Fiji",
        offset: "+12:00",
      },
      {
        country: "Finland",
        timezone: "Europe/Helsinki",
        offset: "+03:00",
      },
      {
        country: "France",
        timezone: "Europe/Paris",
        offset: "+02:00",
      },
      {
        country: "French Guiana",
        timezone: "America/Cayenne",
        offset: "-03:00",
      },
      {
        country: "French Polynesia",
        timezone: "Pacific/Tahiti",
        offset: "-10:00",
      },
      {
        country: "French Southern Territories",
        timezone: "Indian/Kerguelen",
        offset: "+05:00",
      },
      {
        country: "Gabon",
        timezone: "Africa/Libreville",
        offset: "+01:00",
      },
      {
        country: "Gambia",
        timezone: "Africa/Banjul",
        offset: "+00:00",
      },
      {
        country: "Georgia",
        timezone: "Asia/Tbilisi",
        offset: "+04:00",
      },
      {
        country: "Germany",
        timezone: "Europe/Berlin",
        offset: "+02:00",
      },
      {
        country: "Ghana",
        timezone: "Africa/Accra",
        offset: "+00:00",
      },
      {
        country: "Gibraltar",
        timezone: "Europe/Gibraltar",
        offset: "+02:00",
      },
      {
        country: "Greece",
        timezone: "Europe/Athens",
        offset: "+03:00",
      },
      {
        country: "Greenland",
        timezone: "America/Godthab",
        offset: "-02:00",
      },
      {
        country: "Grenada",
        timezone: "America/Grenada",
        offset: "-04:00",
      },
      {
        country: "Guadeloupe",
        timezone: "America/Guadeloupe",
        offset: "-04:00",
      },
      {
        country: "Guam",
        timezone: "Pacific/Guam",
        offset: "+10:00",
      },
      {
        country: "Guatemala",
        timezone: "America/Guatemala",
        offset: "-06:00",
      },
      {
        country: "Guernsey",
        timezone: "Europe/Guernsey",
        offset: "+01:00",
      },
      {
        country: "Guinea",
        timezone: "Africa/Conakry",
        offset: "+00:00",
      },
      {
        country: "Guinea-Bissau",
        timezone: "Africa/Bissau",
        offset: "+00:00",
      },
      {
        country: "Guyana",
        timezone: "America/Guyana",
        offset: "-04:00",
      },
      {
        country: "Haiti",
        timezone: "America/Port-au-Prince",
        offset: "-04:00",
      },
      {
        country: "Honduras",
        timezone: "America/Tegucigalpa",
        offset: "-06:00",
      },
      {
        country: "Hong Kong",
        timezone: "Asia/Hong_Kong",
        offset: "+08:00",
      },
      {
        country: "Hungary",
        timezone: "Europe/Budapest",
        offset: "+02:00",
      },
      {
        country: "Iceland",
        timezone: "Atlantic/Reykjavik",
        offset: "+00:00",
      },
      {
        country: "India",
        timezone: "Asia/Kolkata",
        offset: "+05:30",
      },
      {
        country: "Indonesia",
        timezone: "Asia/Jakarta",
        offset: "+07:00",
      },
      {
        country: "Iran",
        timezone: "Asia/Tehran",
        offset: "+04:30",
      },
      {
        country: "Iraq",
        timezone: "Asia/Baghdad",
        offset: "+03:00",
      },
      {
        country: "Ireland",
        timezone: "Europe/Dublin",
        offset: "+01:00",
      },
      {
        country: "Isle of Man",
        timezone: "Europe/Isle_of_Man",
        offset: "+01:00",
      },
      {
        country: "Israel",
        timezone: "Asia/Jerusalem",
        offset: "+03:00",
      },
      {
        country: "Italy",
        timezone: "Europe/Rome",
        offset: "+02:00",
      },
      {
        country: "Jamaica",
        timezone: "America/Jamaica",
        offset: "-05:00",
      },
      {
        country: "Japan",
        timezone: "Asia/Tokyo",
        offset: "+09:00",
      },
      {
        country: "Jersey",
        timezone: "Europe/Jersey",
        offset: "+01:00",
      },
      {
        country: "Jordan",
        timezone: "Asia/Amman",
        offset: "+03:00",
      },
      {
        country: "Kazakhstan",
        timezone: "Asia/Almaty",
        offset: "+06:00",
      },
      {
        country: "Kenya",
        timezone: "Africa/Nairobi",
        offset: "+03:00",
      },
      {
        country: "Kiribati",
        timezone: "Pacific/Tarawa",
        offset: "+12:00",
      },
      {
        country: "Kosovo",
        timezone: "Europe/Belgrade",
        offset: "+02:00",
      },
      {
        country: "Kuwait",
        timezone: "Asia/Kuwait",
        offset: "+03:00",
      },
      {
        country: "Kyrgyzstan",
        timezone: "Asia/Bishkek",
        offset: "+06:00",
      },
      {
        country: "Laos",
        timezone: "Asia/Vientiane",
        offset: "+07:00",
      },
      {
        country: "Latvia",
        timezone: "Europe/Riga",
        offset: "+03:00",
      },
      {
        country: "Lebanon",
        timezone: "Asia/Beirut",
        offset: "+03:00",
      },
      {
        country: "Lesotho",
        timezone: "Africa/Maseru",
        offset: "+02:00",
      },
      {
        country: "Liberia",
        timezone: "Africa/Monrovia",
        offset: "+00:00",
      },
      {
        country: "Libya",
        timezone: "Africa/Tripoli",
        offset: "+02:00",
      },
      {
        country: "Liechtenstein",
        timezone: "Europe/Vaduz",
        offset: "+02:00",
      },
      {
        country: "Lithuania",
        timezone: "Europe/Vilnius",
        offset: "+03:00",
      },
      {
        country: "Luxembourg",
        timezone: "Europe/Luxembourg",
        offset: "+02:00",
      },
      {
        country: "Macau",
        timezone: "Asia/Macau",
        offset: "+08:00",
      },
      {
        country: "Macedonia",
        timezone: "Europe/Skopje",
        offset: "+02:00",
      },
      {
        country: "Madagascar",
        timezone: "Indian/Antananarivo",
        offset: "+03:00",
      },
      {
        country: "Malawi",
        timezone: "Africa/Blantyre",
        offset: "+02:00",
      },
      {
        country: "Malaysia",
        timezone: "Asia/Kuala_Lumpur",
        offset: "+08:00",
      },
      {
        country: "Maldives",
        timezone: "Indian/Maldives",
        offset: "+05:00",
      },
      {
        country: "Mali",
        timezone: "Africa/Bamako",
        offset: "+00:00",
      },
      {
        country: "Malta",
        timezone: "Europe/Malta",
        offset: "+02:00",
      },
      {
        country: "Marshall Islands",
        timezone: "Pacific/Majuro",
        offset: "+12:00",
      },
      {
        country: "Martinique",
        timezone: "America/Martinique",
        offset: "-04:00",
      },
      {
        country: "Mauritania",
        timezone: "Africa/Nouakchott",
        offset: "+00:00",
      },
      {
        country: "Mauritius",
        timezone: "Indian/Mauritius",
        offset: "+04:00",
      },
      {
        country: "Mayotte",
        timezone: "Indian/Mayotte",
        offset: "+03:00",
      },
      {
        country: "Mexico",
        timezone: "America/Mexico_City",
        offset: "-05:00",
      },
      {
        country: "Micronesia",
        timezone: "Pacific/Chuuk",
        offset: "+10:00",
      },
      {
        country: "Moldova",
        timezone: "Europe/Chisinau",
        offset: "+03:00",
      },
      {
        country: "Monaco",
        timezone: "Europe/Monaco",
        offset: "+02:00",
      },
      {
        country: "Mongolia",
        timezone: "Asia/Ulaanbaatar",
        offset: "+08:00",
      },
      {
        country: "Montenegro",
        timezone: "Europe/Podgorica",
        offset: "+02:00",
      },
      {
        country: "Montserrat",
        timezone: "America/Montserrat",
        offset: "-04:00",
      },
      {
        country: "Morocco",
        timezone: "Africa/Casablanca",
        offset: "+01:00",
      },
      {
        country: "Mozambique",
        timezone: "Africa/Maputo",
        offset: "+02:00",
      },
      {
        country: "Myanmar",
        timezone: "Asia/Yangon",
        offset: "+06:30",
      },
      {
        country: "Namibia",
        timezone: "Africa/Windhoek",
        offset: "+02:00",
      },
      {
        country: "Nauru",
        timezone: "Pacific/Nauru",
        offset: "+12:00",
      },
      {
        country: "Nepal",
        timezone: "Asia/Kathmandu",
        offset: "+05:45",
      },
      {
        country: "Netherlands",
        timezone: "Europe/Amsterdam",
        offset: "+02:00",
      },
      {
        country: "New Caledonia",
        timezone: "Pacific/Noumea",
        offset: "+11:00",
      },
      {
        country: "New Zealand",
        timezone: "Pacific/Auckland",
        offset: "+12:00",
      },
      {
        country: "Nicaragua",
        timezone: "America/Managua",
        offset: "-06:00",
      },
      {
        country: "Niger",
        timezone: "Africa/Niamey",
        offset: "+01:00",
      },
      {
        country: "Nigeria",
        timezone: "Africa/Lagos",
        offset: "+01:00",
      },
      {
        country: "Niue",
        timezone: "Pacific/Niue",
        offset: "-11:00",
      },
      {
        country: "Norfolk Island",
        timezone: "Pacific/Norfolk",
        offset: "+11:30",
      },
      {
        country: "North Korea",
        timezone: "Asia/Pyongyang",
        offset: "+09:00",
      },
      {
        country: "North Macedonia",
        timezone: "Europe/Skopje",
        offset: "+02:00",
      },
      {
        country: "Northern Mariana Islands",
        timezone: "Pacific/Saipan",
        offset: "+10:00",
      },
      {
        country: "Norway",
        timezone: "Europe/Oslo",
        offset: "+02:00",
      },
      {
        country: "Oman",
        timezone: "Asia/Muscat",
        offset: "+04:00",
      },
      {
        country: "Pakistan",
        timezone: "Asia/Karachi",
        offset: "+05:00",
      },
      {
        country: "Palau",
        timezone: "Pacific/Palau",
        offset: "+09:00",
      },
      {
        country: "Palestine",
        timezone: "Asia/Gaza",
        offset: "+03:00",
      },
      {
        country: "Panama",
        timezone: "America/Panama",
        offset: "-05:00",
      },
      {
        country: "Papua New Guinea",
        timezone: "Pacific/Port_Moresby",
        offset: "+10:00",
      },
      {
        country: "Paraguay",
        timezone: "America/Asuncion",
        offset: "-04:00",
      },
      {
        country: "Peru",
        timezone: "America/Lima",
        offset: "-05:00",
      },
      {
        country: "Philippines",
        timezone: "Asia/Manila",
        offset: "+08:00",
      },
      {
        country: "Pitcairn Islands",
        timezone: "Pacific/Pitcairn",
        offset: "-08:00",
      },
      {
        country: "Poland",
        timezone: "Europe/Warsaw",
        offset: "+02:00",
      },
      {
        country: "Portugal",
        timezone: "Europe/Lisbon",
        offset: "+01:00",
      },
      {
        country: "Puerto Rico",
        timezone: "America/Puerto_Rico",
        offset: "-04:00",
      },
      {
        country: "Qatar",
        timezone: "Asia/Qatar",
        offset: "+03:00",
      },
      {
        country: "Réunion",
        timezone: "Indian/Reunion",
        offset: "+04:00",
      },
      {
        country: "Romania",
        timezone: "Europe/Bucharest",
        offset: "+03:00",
      },
      {
        country: "Russia",
        timezone: "Europe/Moscow",
        offset: "+03:00",
      },
      {
        country: "Rwanda",
        timezone: "Africa/Kigali",
        offset: "+02:00",
      },
      {
        country: "Saint Barthélemy",
        timezone: "America/St_Barthelemy",
        offset: "-04:00",
      },
      {
        country: "Saint Helena",
        timezone: "Atlantic/St_Helena",
        offset: "+00:00",
      },
      {
        country: "Saint Kitts and Nevis",
        timezone: "America/St_Kitts",
        offset: "-04:00",
      },
      {
        country: "Saint Lucia",
        timezone: "America/St_Lucia",
        offset: "-04:00",
      },
      {
        country: "Saint Martin",
        timezone: "America/Marigot",
        offset: "-04:00",
      },
      {
        country: "Saint Pierre and Miquelon",
        timezone: "America/Miquelon",
        offset: "-02:00",
      },
      {
        country: "Saint Vincent and the Grenadines",
        timezone: "America/St_Vincent",
        offset: "-04:00",
      },
      {
        country: "Samoa",
        timezone: "Pacific/Apia",
        offset: "+13:00",
      },
      {
        country: "San Marino",
        timezone: "Europe/San_Marino",
        offset: "+02:00",
      },
      {
        country: "São Tomé and Príncipe",
        timezone: "Africa/Sao_Tome",
        offset: "+01:00",
      },
      {
        country: "Saudi Arabia",
        timezone: "Asia/Riyadh",
        offset: "+03:00",
      },
      {
        country: "Senegal",
        timezone: "Africa/Dakar",
        offset: "+00:00",
      },
      {
        country: "Serbia",
        timezone: "Europe/Belgrade",
        offset: "+02:00",
      },
      {
        country: "Seychelles",
        timezone: "Indian/Mahe",
        offset: "+04:00",
      },
      {
        country: "Sierra Leone",
        timezone: "Africa/Freetown",
        offset: "+00:00",
      },
      {
        country: "Singapore",
        timezone: "Asia/Singapore",
        offset: "+08:00",
      },
      {
        country: "Sint Maarten",
        timezone: "America/Lower_Princes",
        offset: "-04:00",
      },
      {
        country: "Slovakia",
        timezone: "Europe/Bratislava",
        offset: "+02:00",
      },
      {
        country: "Slovenia",
        timezone: "Europe/Ljubljana",
        offset: "+02:00",
      },
      {
        country: "Solomon Islands",
        timezone: "Pacific/Guadalcanal",
        offset: "+11:00",
      },
      {
        country: "Somalia",
        timezone: "Africa/Mogadishu",
        offset: "+03:00",
      },
      {
        country: "South Africa",
        timezone: "Africa/Johannesburg",
        offset: "+02:00",
      },
      {
        country: "South Georgia and the South Sandwich Islands",
        timezone: "Atlantic/South_Georgia",
        offset: "-02:00",
      },
      {
        country: "South Korea",
        timezone: "Asia/Seoul",
        offset: "+09:00",
      },
      {
        country: "South Sudan",
        timezone: "Africa/Juba",
        offset: "+02:00",
      },
      {
        country: "Spain",
        timezone: "Europe/Madrid",
        offset: "+02:00",
      },
      {
        country: "Sri Lanka",
        timezone: "Asia/Colombo",
        offset: "+05:30",
      },
      {
        country: "Sudan",
        timezone: "Africa/Khartoum",
        offset: "+02:00",
      },
      {
        country: "Suriname",
        timezone: "America/Paramaribo",
        offset: "-03:00",
      },
      {
        country: "Svalbard and Jan Mayen",
        timezone: "Europe/Oslo",
        offset: "+02:00",
      },
      {
        country: "Sweden",
        timezone: "Europe/Stockholm",
        offset: "+02:00",
      },
      {
        country: "Switzerland",
        timezone: "Europe/Zurich",
        offset: "+02:00",
      },
      {
        country: "Syria",
        timezone: "Asia/Damascus",
        offset: "+03:00",
      },
      {
        country: "Taiwan",
        timezone: "Asia/Taipei",
        offset: "+08:00",
      },
      {
        country: "Tajikistan",
        timezone: "Asia/Dushanbe",
        offset: "+05:00",
      },
      {
        country: "Tanzania",
        timezone: "Africa/Dar_es_Salaam",
        offset: "+03:00",
      },
      {
        country: "Thailand",
        timezone: "Asia/Bangkok",
        offset: "+07:00",
      },
      {
        country: "Timor-Leste",
        timezone: "Asia/Dili",
        offset: "+09:00",
      },
      {
        country: "Togo",
        timezone: "Africa/Lome",
        offset: "+00:00",
      },
      {
        country: "Tokelau",
        timezone: "Pacific/Fakaofo",
        offset: "+13:00",
      },
      {
        country: "Tonga",
        timezone: "Pacific/Tongatapu",
        offset: "+13:00",
      },
      {
        country: "Trinidad and Tobago",
        timezone: "America/Port_of_Spain",
        offset: "-04:00",
      },
      {
        country: "Tunisia",
        timezone: "Africa/Tunis",
        offset: "+01:00",
      },
      {
        country: "Turkey",
        timezone: "Europe/Istanbul",
        offset: "+03:00",
      },
      {
        country: "Turkmenistan",
        timezone: "Asia/Ashgabat",
        offset: "+05:00",
      },
      {
        country: "Turks and Caicos Islands",
        timezone: "America/Grand_Turk",
        offset: "-04:00",
      },
      {
        country: "Tuvalu",
        timezone: "Pacific/Funafuti",
        offset: "+12:00",
      },
      {
        country: "Uganda",
        timezone: "Africa/Kampala",
        offset: "+03:00",
      },
      {
        country: "Ukraine",
        timezone: "Europe/Kiev",
        offset: "+03:00",
      },
      {
        country: "United Arab Emirates",
        timezone: "Asia/Dubai",
        offset: "+04:00",
      },
      {
        country: "United Kingdom",
        timezone: "Europe/London",
        offset: "+01:00",
      },
      {
        country: "United States",
        timezone: "America/New_York",
        offset: "-04:00",
      },
      {
        country: "United States Minor Outlying Islands",
        timezone: "Pacific/Johnston",
        offset: "-10:00",
      },
      {
        country: "Uruguay",
        timezone: "America/Montevideo",
        offset: "-03:00",
      },
      {
        country: "Uzbekistan",
        timezone: "Asia/Tashkent",
        offset: "+05:00",
      },
      {
        country: "Vanuatu",
        timezone: "Pacific/Efate",
        offset: "+11:00",
      },
      {
        country: "Vatican City",
        timezone: "Europe/Vatican",
        offset: "+02:00",
      },
      {
        country: "Venezuela",
        timezone: "America/Caracas",
        offset: "-04:00",
      },
      {
        country: "Vietnam",
        timezone: "Asia/Ho_Chi_Minh",
        offset: "+07:00",
      },
      {
        country: "Virgin Islands (British)",
        timezone: "America/Tortola",
        offset: "-04:00",
      },
      {
        country: "Virgin Islands (U.S.)",
        timezone: "America/St_Thomas",
        offset: "-04:00",
      },
      {
        country: "Wallis and Futuna",
        timezone: "Pacific/Wallis",
        offset: "+12:00",
      },
      {
        country: "Western Sahara",
        timezone: "Africa/El_Aaiun",
        offset: "+01:00",
      },
      {
        country: "Yemen",
        timezone: "Asia/Aden",
        offset: "+03:00",
      },
      {
        country: "Zambia",
        timezone: "Africa/Lusaka",
        offset: "+02:00",
      },
      {
        country: "Zimbabwe",
        timezone: "Africa/Harare",
        offset: "+02:00",
      },
    ];
    let nationalitylist = [
      {
        country: "Afghanistan",
        mcc: "+93",
        nationality: "Afghan",
      },
      {
        country: "Albania",
        mcc: "+355",
        nationality: "Albanian",
      },
      {
        country: "Algeria",
        mcc: "+213",
        nationality: "Algerian",
      },
      {
        country: "American Samoa",
        mcc: "+1-684",
        nationality: "American Samoan",
      },
      {
        country: "Andorra",
        mcc: "+376",
        nationality: "Andorran",
      },
      {
        country: "Angola",
        mcc: "+244",
        nationality: "Angolan",
      },
      {
        country: "Anguilla",
        mcc: "+1-264",
        nationality: "Anguillian",
      },
      {
        country: "Antigua and Barbuda",
        mcc: "+1-268",
        nationality: "Antiguan or Barbudan",
      },
      {
        country: "Argentina",
        mcc: "+54",
        nationality: "Argentine",
      },
      {
        country: "Armenia",
        mcc: "+374",
        nationality: "Armenian",
      },
      {
        country: "Aruba",
        mcc: "+297",
        nationality: "Aruban",
      },
      {
        country: "Australia",
        mcc: "+61",
        nationality: "Australian",
      },
      {
        country: "Austria",
        mcc: "+43",
        nationality: "Austrian",
      },
      {
        country: "Azerbaijan",
        mcc: "+994",
        nationality: "Azerbaijani",
      },
      {
        country: "Bahamas",
        mcc: "+1-242",
        nationality: "Bahamian",
      },
      {
        country: "Bahrain",
        mcc: "+973",
        nationality: "Bahraini",
      },
      {
        country: "Bangladesh",
        mcc: "+880",
        nationality: "Bangladeshi",
      },
      {
        country: "Barbados",
        mcc: "+1-246",
        nationality: "Barbadian",
      },
      {
        country: "Belarus",
        mcc: "+375",
        nationality: "Belarusian",
      },
      {
        country: "Belgium",
        mcc: "+32",
        nationality: "Belgian",
      },
      {
        country: "Belize",
        mcc: "+501",
        nationality: "Belizean",
      },
      {
        country: "Benin",
        mcc: "+229",
        nationality: "Beninese",
      },
      {
        country: "Bermuda",
        mcc: "+1-441",
        nationality: "Bermudian",
      },
      {
        country: "Bhutan",
        mcc: "+975",
        nationality: "Bhutanese",
      },
      {
        country: "Bolivia",
        mcc: "+591",
        nationality: "Bolivian",
      },
      {
        country: "Bosnia and Herzegovina",
        mcc: "+387",
        nationality: "Bosnian or Herzegovinian",
      },
      {
        country: "Botswana",
        mcc: "+267",
        nationality: "Motswana (singular), Batswana (plural)",
      },
      {
        country: "Brazil",
        mcc: "+55",
        nationality: "Brazilian",
      },
      {
        country: "British Indian Ocean Territory",
        mcc: "+246",
        nationality: "British Indian Ocean Territory",
      },
      {
        country: "British Virgin Islands",
        mcc: "+1-284",
        nationality: "British Virgin Island",
      },
      {
        country: "Brunei",
        mcc: "+673",
        nationality: "Bruneian",
      },
      {
        country: "Bulgaria",
        mcc: "+359",
        nationality: "Bulgarian",
      },
      {
        country: "Burkina Faso",
        mcc: "+226",
        nationality: "Burkinabe",
      },
      {
        country: "Burundi",
        mcc: "+257",
        nationality: "Burundian",
      },
      {
        country: "Cambodia",
        mcc: "+855",
        nationality: "Cambodian",
      },
      {
        country: "Cameroon",
        mcc: "+237",
        nationality: "Cameroonian",
      },
      {
        country: "Canada",
        mcc: "+1",
        nationality: "Canadian",
      },
      {
        country: "Cape Verde",
        mcc: "+238",
        nationality: "Cape Verdean",
      },
      {
        country: "Cayman Islands",
        mcc: "+1-345",
        nationality: "Caymanian",
      },
      {
        country: "Central African Republic",
        mcc: "+236",
        nationality: "Central African",
      },
      {
        country: "Chad",
        mcc: "+235",
        nationality: "Chadian",
      },
      {
        country: "Chile",
        mcc: "+56",
        nationality: "Chilean",
      },
      {
        country: "China",
        mcc: "+86",
        nationality: "Chinese",
      },
      {
        country: "Christmas Island",
        mcc: "+61",
        nationality: "Christmas Island",
      },
      {
        country: "Cocos (Keeling) Islands",
        mcc: "+61",
        nationality: "Cocos (Keeling) Island",
      },
      {
        country: "Colombia",
        mcc: "+57",
        nationality: "Colombian",
      },
      {
        country: "Comoros",
        mcc: "+269",
        nationality: "Comorian",
      },
      {
        country: "Cook Islands",
        mcc: "+682",
        nationality: "Cook Island",
      },
      {
        country: "Costa Rica",
        mcc: "+506",
        nationality: "Costa Rican",
      },
      {
        country: "Croatia",
        mcc: "+385",
        nationality: "Croatian",
      },
      {
        country: "Cuba",
        mcc: "+53",
        nationality: "Cuban",
      },
      {
        country: "Curaçao",
        mcc: "+599",
        nationality: "Curaçaoan",
      },
      {
        country: "Cyprus",
        mcc: "+357",
        nationality: "Cypriot",
      },
      {
        country: "Czech Republic",
        mcc: "+420",
        nationality: "Czech",
      },
      {
        country: "Democratic Republic of the Congo",
        mcc: "+243",
        nationality: "Congolese",
      },
      {
        country: "Denmark",
        mcc: "+45",
        nationality: "Danish",
      },
      {
        country: "Djibouti",
        mcc: "+253",
        nationality: "Djiboutian",
      },
      {
        country: "Dominica",
        mcc: "+1-767",
        nationality: "Dominican",
      },
      {
        country: "Dominican Republic",
        mcc: "+1-809, +1-829, +1-849",
        nationality: "Dominican",
      },
      {
        country: "East Timor",
        mcc: "+670",
        nationality: "Timorese",
      },
      {
        country: "Ecuador",
        mcc: "+593",
        nationality: "Ecuadorian",
      },
      {
        country: "Egypt",
        mcc: "+20",
        nationality: "Egyptian",
      },
      {
        country: "El Salvador",
        mcc: "+503",
        nationality: "Salvadoran",
      },
      {
        country: "Equatorial Guinea",
        mcc: "+240",
        nationality: "Equatorial Guinean",
      },
      {
        country: "Eritrea",
        mcc: "+291",
        nationality: "Eritrean",
      },
      {
        country: "Estonia",
        mcc: "+372",
        nationality: "Estonian",
      },
      {
        country: "Ethiopia",
        mcc: "+251",
        nationality: "Ethiopian",
      },
      {
        country: "Falkland Islands",
        mcc: "+500",
        nationality: "Falkland Island",
      },
      {
        country: "Faroe Islands",
        mcc: "+298",
        nationality: "Faroese",
      },
      {
        country: "Fiji",
        mcc: "+679",
        nationality: "Fijian",
      },
      {
        country: "Finland",
        mcc: "+358",
        nationality: "Finnish",
      },
      {
        country: "France",
        mcc: "+33",
        nationality: "French",
      },
      {
        country: "French Guiana",
        mcc: "+594",
        nationality: "French Guianese",
      },
      {
        country: "French Polynesia",
        mcc: "+689",
        nationality: "French Polynesian",
      },
      {
        country: "Gabon",
        mcc: "+241",
        nationality: "Gabonese",
      },
      {
        country: "Gambia",
        mcc: "+220",
        nationality: "Gambian",
      },
      {
        country: "Georgia",
        mcc: "+995",
        nationality: "Georgian",
      },
      {
        country: "Germany",
        mcc: "+49",
        nationality: "German",
      },
      {
        country: "Ghana",
        mcc: "+233",
        nationality: "Ghanaian",
      },
      {
        country: "Gibraltar",
        mcc: "+350",
        nationality: "Gibraltar",
      },
      {
        country: "Greece",
        mcc: "+30",
        nationality: "Greek",
      },
      {
        country: "Greenland",
        mcc: "+299",
        nationality: "Greenlandic",
      },
      {
        country: "Grenada",
        mcc: "+1-473",
        nationality: "Grenadian",
      },
      {
        country: "Guadeloupe",
        mcc: "+590",
        nationality: "Guadeloupe",
      },
      {
        country: "Guam",
        mcc: "+1-671",
        nationality: "Guamanian",
      },
      {
        country: "Guatemala",
        mcc: "+502",
        nationality: "Guatemalan",
      },
      {
        country: "Guernsey",
        mcc: "+44-1481",
        nationality: "Channel Island",
      },
      {
        country: "Guinea",
        mcc: "+224",
        nationality: "Guinean",
      },
      {
        country: "Guinea-Bissau",
        mcc: "+245",
        nationality: "Bissau-Guinean",
      },
      {
        country: "Guyana",
        mcc: "+592",
        nationality: "Guyanese",
      },
      {
        country: "Haiti",
        mcc: "+509",
        nationality: "Haitian",
      },
      {
        country: "Honduras",
        mcc: "+504",
        nationality: "Honduran",
      },
      {
        country: "Hong Kong",
        mcc: "+852",
        nationality: "Hong Kong",
      },
      {
        country: "Hungary",
        mcc: "+36",
        nationality: "Hungarian",
      },
      {
        country: "Iceland",
        mcc: "+354",
        nationality: "Icelander",
      },
      {
        country: "India",
        mcc: "+91",
        nationality: "Indian",
      },
      {
        country: "Indonesia",
        mcc: "+62",
        nationality: "Indonesian",
      },
      {
        country: "Iran",
        mcc: "+98",
        nationality: "Iranian",
      },
      {
        country: "Iraq",
        mcc: "+964",
        nationality: "Iraqi",
      },
      {
        country: "Ireland",
        mcc: "+353",
        nationality: "Irish",
      },
      {
        country: "Isle of Man",
        mcc: "+44-1624",
        nationality: "Manx",
      },
      {
        country: "Israel",
        mcc: "+972",
        nationality: "Israeli",
      },
      {
        country: "Italy",
        mcc: "+39",
        nationality: "Italian",
      },
      {
        country: "Jamaica",
        mcc: "+1-876",
        nationality: "Jamaican",
      },
      {
        country: "Japan",
        mcc: "+81",
        nationality: "Japanese",
      },
      {
        country: "Jersey",
        mcc: "+44-1534",
        nationality: "Channel Island",
      },
      {
        country: "Jordan",
        mcc: "+962",
        nationality: "Jordanian",
      },
      {
        country: "Kazakhstan",
        mcc: "+7",
        nationality: "Kazakhstani",
      },
      {
        country: "Kenya",
        mcc: "+254",
        nationality: "Kenyan",
      },
      {
        country: "Kiribati",
        mcc: "+686",
        nationality: "I-Kiribati",
      },
      {
        country: "Kosovo",
        mcc: "+383",
        nationality: "Kosovar",
      },
      {
        country: "Kuwait",
        mcc: "+965",
        nationality: "Kuwaiti",
      },
      {
        country: "Kyrgyzstan",
        mcc: "+996",
        nationality: "Kyrgyzstani",
      },
      {
        country: "Laos",
        mcc: "+856",
        nationality: "Laotian",
      },
      {
        country: "Latvia",
        mcc: "+371",
        nationality: "Latvian",
      },
      {
        country: "Lebanon",
        mcc: "+961",
        nationality: "Lebanese",
      },
      {
        country: "Lesotho",
        mcc: "+266",
        nationality: "Basotho",
      },
      {
        country: "Liberia",
        mcc: "+231",
        nationality: "Liberian",
      },
      {
        country: "Libya",
        mcc: "+218",
        nationality: "Libyan",
      },
      {
        country: "Liechtenstein",
        mcc: "+423",
        nationality: "Liechtensteiner",
      },
      {
        country: "Lithuania",
        mcc: "+370",
        nationality: "Lithuanian",
      },
      {
        country: "Luxembourg",
        mcc: "+352",
        nationality: "Luxembourgish",
      },
      {
        country: "Macau",
        mcc: "+853",
        nationality: "Macanese",
      },
      {
        country: "Madagascar",
        mcc: "+261",
        nationality: "Malagasy",
      },
      {
        country: "Malawi",
        mcc: "+265",
        nationality: "Malawian",
      },
      {
        country: "Malaysia",
        mcc: "+60",
        nationality: "Malaysian",
      },
      {
        country: "Maldives",
        mcc: "+960",
        nationality: "Maldivian",
      },
      {
        country: "Mali",
        mcc: "+223",
        nationality: "Malian",
      },
      {
        country: "Malta",
        mcc: "+356",
        nationality: "Maltese",
      },
      {
        country: "Marshall Islands",
        mcc: "+692",
        nationality: "Marshallese",
      },
      {
        country: "Martinique",
        mcc: "+596",
        nationality: "Martinican",
      },
      {
        country: "Mauritania",
        mcc: "+222",
        nationality: "Mauritanian",
      },
      {
        country: "Mauritius",
        mcc: "+230",
        nationality: "Mauritian",
      },
      {
        country: "Mayotte",
        mcc: "+262",
        nationality: "Mahoran",
      },
      {
        country: "Mexico",
        mcc: "+52",
        nationality: "Mexican",
      },
      {
        country: "Micronesia",
        mcc: "+691",
        nationality: "Micronesian",
      },
      {
        country: "Moldova",
        mcc: "+373",
        nationality: "Moldovan",
      },
      {
        country: "Monaco",
        mcc: "+377",
        nationality: "Monegasque",
      },
      {
        country: "Mongolia",
        mcc: "+976",
        nationality: "Mongolian",
      },
      {
        country: "Montenegro",
        mcc: "+382",
        nationality: "Montenegrin",
      },
      {
        country: "Montserrat",
        mcc: "+1-664",
        nationality: "Montserratian",
      },
      {
        country: "Morocco",
        mcc: "+212",
        nationality: "Moroccan",
      },
      {
        country: "Mozambique",
        mcc: "+258",
        nationality: "Mozambican",
      },
      {
        country: "Myanmar",
        mcc: "+95",
        nationality: "Myanmar",
      },
      {
        country: "Namibia",
        mcc: "+264",
        nationality: "Namibian",
      },
      {
        country: "Nauru",
        mcc: "+674",
        nationality: "Nauruan",
      },
      {
        country: "Nepal",
        mcc: "+977",
        nationality: "Nepali",
      },
      {
        country: "Netherlands",
        mcc: "+31",
        nationality: "Dutch",
      },
      {
        country: "Netherlands Antilles",
        mcc: "+599",
        nationality: "Dutch",
      },
      {
        country: "New Caledonia",
        mcc: "+687",
        nationality: "New Caledonian",
      },
      {
        country: "New Zealand",
        mcc: "+64",
        nationality: "New Zealand",
      },
      {
        country: "Nicaragua",
        mcc: "+505",
        nationality: "Nicaraguan",
      },
      {
        country: "Niger",
        mcc: "+227",
        nationality: "Nigerien",
      },
      {
        country: "Nigeria",
        mcc: "+234",
        nationality: "Nigerian",
      },
      {
        country: "Niue",
        mcc: "+683",
        nationality: "Niuean",
      },
      {
        country: "North Korea",
        mcc: "+850",
        nationality: "North Korean",
      },
      {
        country: "North Macedonia",
        mcc: "+389",
        nationality: "Macedonian",
      },
      {
        country: "Northern Mariana Islands",
        mcc: "+1-670",
        nationality: "Northern Marianan",
      },
      {
        country: "Norway",
        mcc: "+47",
        nationality: "Norwegian",
      },
      {
        country: "Oman",
        mcc: "+968",
        nationality: "Omani",
      },
      {
        country: "Pakistan",
        mcc: "+92",
        nationality: "Pakistani",
      },
      {
        country: "Palau",
        mcc: "+680",
        nationality: "Palauan",
      },
      {
        country: "Palestine",
        mcc: "+970",
        nationality: "Palestinian",
      },
      {
        country: "Panama",
        mcc: "+507",
        nationality: "Panamanian",
      },
      {
        country: "Papua New Guinea",
        mcc: "+675",
        nationality: "Papua New Guinean",
      },
      {
        country: "Paraguay",
        mcc: "+595",
        nationality: "Paraguayan",
      },
      {
        country: "Peru",
        mcc: "+51",
        nationality: "Peruvian",
      },
      {
        country: "Philippines",
        mcc: "+63",
        nationality: "Filipino",
      },
      {
        country: "Pitcairn Islands",
        mcc: "+64",
        nationality: "Pitcairn Island",
      },
      {
        country: "Poland",
        mcc: "+48",
        nationality: "Polish",
      },
      {
        country: "Portugal",
        mcc: "+351",
        nationality: "Portuguese",
      },
      {
        country: "Puerto Rico",
        mcc: "+1-787, +1-939",
        nationality: "Puerto Rican",
      },
      {
        country: "Qatar",
        mcc: "+974",
        nationality: "Qatari",
      },
      {
        country: "Réunion",
        mcc: "+262",
        nationality: "Réunionese",
      },
      {
        country: "Romania",
        mcc: "+40",
        nationality: "Romanian",
      },
      {
        country: "Russia",
        mcc: "+7",
        nationality: "Russian",
      },
      {
        country: "Rwanda",
        mcc: "+250",
        nationality: "Rwandan",
      },
      {
        country: "Saint Barthélemy",
        mcc: "+590",
        nationality: "Saint Barthélemy Island",
      },
      {
        country: "Saint Helena, Ascension and Tristan da Cunha",
        mcc: "+290",
        nationality: "Saint Helenian",
      },
      {
        country: "Saint Kitts and Nevis",
        mcc: "+1-869",
        nationality: "Kittitian/Nevisian",
      },
      {
        country: "Saint Lucia",
        mcc: "+1-758",
        nationality: "Saint Lucian",
      },
      {
        country: "Saint Martin",
        mcc: "+590",
        nationality: "Saint Martin Island",
      },
      {
        country: "Saint Pierre and Miquelon",
        mcc: "+508",
        nationality: "Saint-Pierrais/Miquelonnais",
      },
      {
        country: "Saint Vincent and the Grenadines",
        mcc: "+1-784",
        nationality: "Saint Vincentian",
      },
      {
        country: "Samoa",
        mcc: "+685",
        nationality: "Samoan",
      },
      {
        country: "San Marino",
        mcc: "+378",
        nationality: "Sammarinese",
      },
      {
        country: "São Tomé and Príncipe",
        mcc: "+239",
        nationality: "São Toméan",
      },
      {
        country: "Saudi Arabia",
        mcc: "+966",
        nationality: "Saudi Arabian",
      },
      {
        country: "Senegal",
        mcc: "+221",
        nationality: "Senegalese",
      },
      {
        country: "Serbia",
        mcc: "+381",
        nationality: "Serbian",
      },
      {
        country: "Seychelles",
        mcc: "+248",
        nationality: "Seychellois",
      },
      {
        country: "Sierra Leone",
        mcc: "+232",
        nationality: "Sierra Leonean",
      },
      {
        country: "Singapore",
        mcc: "+65",
        nationality: "Singaporean",
      },
      {
        country: "Sint Maarten",
        mcc: "+1-721",
        nationality: "Sint Maarten Island",
      },
      {
        country: "Slovakia",
        mcc: "+421",
        nationality: "Slovak",
      },
      {
        country: "Slovenia",
        mcc: "+386",
        nationality: "Slovenian",
      },
      {
        country: "Solomon Islands",
        mcc: "+677",
        nationality: "Solomon Islander",
      },
      {
        country: "Somalia",
        mcc: "+252",
        nationality: "Somali",
      },
      {
        country: "South Africa",
        mcc: "+27",
        nationality: "South African",
      },
      {
        country: "South Georgia and the South Sandwich Islands",
        mcc: "+500",
        nationality: "SGSSI",
      },
      {
        country: "South Korea",
        mcc: "+82",
        nationality: "South Korean",
      },
      {
        country: "South Sudan",
        mcc: "+211",
        nationality: "South Sudanese",
      },
      {
        country: "Spain",
        mcc: "+34",
        nationality: "Spanish",
      },
      {
        country: "Sri Lanka",
        mcc: "+94",
        nationality: "Sri Lankan",
      },
      {
        country: "Sudan",
        mcc: "+249",
        nationality: "Sudanese",
      },
      {
        country: "Suriname",
        mcc: "+597",
        nationality: "Surinamese",
      },
      {
        country: "Svalbard and Jan Mayen",
        mcc: "+47",
        nationality: "Svalbard",
      },
      {
        country: "Swaziland",
        mcc: "+268",
        nationality: "Swazi",
      },
      {
        country: "Sweden",
        mcc: "+46",
        nationality: "Swedish",
      },
      {
        country: "Switzerland",
        mcc: "+41",
        nationality: "Swiss",
      },
      {
        country: "Syria",
        mcc: "+963",
        nationality: "Syrian",
      },
      {
        country: "Taiwan",
        mcc: "+886",
        nationality: "Taiwanese",
      },
      {
        country: "Tajikistan",
        mcc: "+992",
        nationality: "Tajik",
      },
      {
        country: "Tanzania",
        mcc: "+255",
        nationality: "Tanzanian",
      },
      {
        country: "Thailand",
        mcc: "+66",
        nationality: "Thai",
      },
      {
        country: "Timor-Leste",
        mcc: "+670",
        nationality: "East Timorese",
      },
      {
        country: "Togo",
        mcc: "+228",
        nationality: "Togolese",
      },
      {
        country: "Tokelau",
        mcc: "+690",
        nationality: "Tokelauan",
      },
      {
        country: "Tonga",
        mcc: "+676",
        nationality: "Tongan",
      },
      {
        country: "Trinidad and Tobago",
        mcc: "+1-868",
        nationality: "Trinidadian/Tobagonian",
      },
      {
        country: "Tunisia",
        mcc: "+216",
        nationality: "Tunisian",
      },
      {
        country: "Turkey",
        mcc: "+90",
        nationality: "Turkish",
      },
      {
        country: "Turkmenistan",
        mcc: "+993",
        nationality: "Turkmen",
      },
      {
        country: "Turks and Caicos Islands",
        mcc: "+1-649",
        nationality: "Turks and Caicos Islander",
      },
      {
        country: "Tuvalu",
        mcc: "+688",
        nationality: "Tuvaluan",
      },
      {
        country: "Uganda",
        mcc: "+256",
        nationality: "Ugandan",
      },
      {
        country: "Ukraine",
        mcc: "+380",
        nationality: "Ukrainian",
      },
      {
        country: "United Arab Emirates",
        mcc: "+971",
        nationality: "Emirati",
      },
      {
        country: "United Kingdom",
        mcc: "+44",
        nationality: "British",
      },
      {
        country: "United States",
        mcc: "+1",
        nationality: "American",
      },
      {
        country: "Uruguay",
        mcc: "+598",
        nationality: "Uruguayan",
      },
      {
        country: "Uzbekistan",
        mcc: "+998",
        nationality: "Uzbekistani",
      },
      {
        country: "Vanuatu",
        mcc: "+678",
        nationality: "Vanuatuan",
      },
      {
        country: "Vatican City",
        mcc: "+379",
        nationality: "Vatican",
      },
      {
        country: "Venezuela",
        mcc: "+58",
        nationality: "Venezuelan",
      },
      {
        country: "Vietnam",
        mcc: "+84",
        nationality: "Vietnamese",
      },
      {
        country: "Wallis and Futuna",
        mcc: "+681",
        nationality: "Wallisian/Futunan",
      },
      {
        country: "Western Sahara",
        mcc: "+212",
        nationality: "Sahrawi",
      },
      {
        country: "Yemen",
        mcc: "+967",
        nationality: "Yemeni",
      },
      {
        country: "Zambia",
        mcc: "+260",
        nationality: "Zambian",
      },
      {
        country: "Zimbabwe",
        mcc: "+263",
        nationality: "Zimbabwean",
      },
    ];

    let sqlQueryForDate = "INSERT INTO date_format_list(date_format)VALUES(?);";
    let sqlQueryForTimezone =
      "INSERT INTO time_zone_list(timezone,offset_value)VALUES(?,?);";
    let sqlQueryForCountry_MobileCode =
      "INSERT INTO country_nationality_mobile_code(country,nationality,mobile_country_code)VALUES(?,?,?);";
    for (let i = 0; i < dateFormat.length; i++) {
      let data = await executeQuery(sqlQueryForDate, dateFormat);
      console.log("datae", data);
    }
    for (let i = 0; i < timezonelist.length; i++) {
      console.log("dhdhdhd", timezonelist[i].timezone);
      let data = await executeQuery(sqlQueryForTimezone, [
        timezonelist[i].timezone,
        timezonelist[i].offset,
      ]);
      console.log("datae", data);
    }
    for (let i = 0; i < nationalitylist.length; i++) {
      let data = await executeQuery(sqlQueryForCountry_MobileCode, [
        nationalitylist[i].country,
        nationalitylist[i].nationality,
        nationalitylist[i].mcc,
      ]);
      console.log("datae", data);
    }
  } catch (error) {}
}

module.exports = {
  insertSeedData,
};
