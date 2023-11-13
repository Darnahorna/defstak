import type { User } from '../types/user.ts'

const users: User[] = [
  {
    id: 1,
    name: 'John',
    surname: 'Doe',
    email: 'john.doe@example.com',
    role: 5,
    picture_url: 'https://picsum.photos/200/300/?random=1'
  },
  {
    id: 2,
    name: 'Alice',
    surname: 'Smith',
    email: 'alice.smith@example.com',
    role: 3,
    picture_url: 'https://picsum.photos/200/300/?random=2'
  },
  {
    id: 3,
    name: 'Robert',
    surname: 'Johnson',
    email: 'robert.johnson@example.com',
    role: 8,
    picture_url: 'https://picsum.photos/200/300/?random=3'
  },
  {
    id: 4,
    name: 'Emily',
    surname: 'Brown',
    email: 'emily.brown@example.com',
    role: 2,
    picture_url: 'https://picsum.photos/200/300/?random=4'
  },
  {
    id: 5,
    name: 'Michael',
    surname: 'Wilson',
    email: 'michael.wilson@example.com',
    role: 6,
    picture_url: 'https://picsum.photos/200/300/?random=5'
  },
  {
    id: 6,
    name: 'Olivia',
    surname: 'Davis',
    email: 'olivia.davis@example.com',
    role: 4,
    picture_url: 'https://picsum.photos/200/300/?random=6'
  },
  {
    id: 7,
    name: 'William',
    surname: 'Martinez',
    email: 'william.martinez@example.com',
    role: 7,
    picture_url: 'https://picsum.photos/200/300/?random=7'
  },
  {
    id: 8,
    name: 'Ava',
    surname: 'Anderson',
    email: 'ava.anderson@example.com',
    role: 1,
    picture_url: 'https://picsum.photos/200/300/?random=8'
  },
  {
    id: 9,
    name: 'James',
    surname: 'Hernandez',
    email: 'james.hernandez@example.com',
    role: 10,
    picture_url: 'https://picsum.photos/200/300/?random=9'
  },
  {
    id: 10,
    name: 'Sophia',
    surname: 'Garcia',
    email: 'sophia.garcia@example.com',
    role: 5,
    picture_url: 'https://picsum.photos/200/300/?random=10'
  },
  {
    id: 11,
    name: 'Daniel',
    surname: 'Lopez',
    email: 'daniel.lopez@example.com',
    role: 3,
    picture_url: 'https://picsum.photos/200/300/?random=11'
  },
  {
    id: 12,
    name: 'Mia',
    surname: 'Perez',
    email: 'mia.perez@example.com',
    role: 8,
    picture_url: 'https://picsum.photos/200/300/?random=12'
  },
  {
    id: 13,
    name: 'David',
    surname: 'Turner',
    email: 'david.turner@example.com',
    role: 2,
    picture_url: 'https://picsum.photos/200/300/?random=13'
  },
  {
    id: 14,
    name: 'Emma',
    surname: 'Harris',
    email: 'emma.harris@example.com',
    role: 6,
    picture_url: 'https://picsum.photos/200/300/?random=14'
  },
  {
    id: 15,
    name: 'Benjamin',
    surname: 'Clark',
    email: 'benjamin.clark@example.com',
    role: 4,
    picture_url: 'https://picsum.photos/200/300/?random=15'
  },
  {
    id: 16,
    name: 'Chloe',
    surname: 'Lewis',
    email: 'chloe.lewis@example.com',
    role: 7,
    picture_url: 'https://picsum.photos/200/300/?random=16'
  },
  {
    id: 17,
    name: 'Elijah',
    surname: 'Young',
    email: 'elijah.young@example.com',
    role: 1,
    picture_url: 'https://picsum.photos/200/300/?random=17'
  },
  {
    id: 18,
    name: 'Avery',
    surname: 'Walker',
    email: 'avery.walker@example.com',
    role: 10,
    picture_url: 'https://picsum.photos/200/300/?random=18'
  },
  {
    id: 19,
    name: 'Evelyn',
    surname: 'Hall',
    email: 'evelyn.hall@example.com',
    role: 5,
    picture_url: 'https://picsum.photos/200/300/?random=19'
  },
  {
    id: 20,
    name: 'Jackson',
    surname: 'Allen',
    email: 'jackson.allen@example.com',
    role: 3,
    picture_url: 'https://picsum.photos/200/300/?random=20'
  },
  {
    id: 21,
    name: 'Grace',
    surname: 'Scott',
    email: 'grace.scott@example.com',
    role: 8,
    picture_url: 'https://picsum.photos/200/300/?random=21'
  },
  {
    id: 22,
    name: 'Matthew',
    surname: 'Green',
    email: 'matthew.green@example.com',
    role: 2,
    picture_url: 'https://picsum.photos/200/300/?random=22'
  },
  {
    id: 23,
    name: 'Aria',
    surname: 'Baker',
    email: 'aria.baker@example.com',
    role: 6,
    picture_url: 'https://picsum.photos/200/300/?random=23'
  },
  {
    id: 24,
    name: 'Joseph',
    surname: 'Adams',
    email: 'joseph.adams@example.com',
    role: 4,
    picture_url: 'https://picsum.photos/200/300/?random=24'
  },
  {
    id: 25,
    name: 'Nora',
    surname: 'Rivera',
    email: 'nora.rivera@example.com',
    role: 7,
    picture_url: 'https://picsum.photos/200/300/?random=25'
  },
  {
    id: 26,
    name: 'Carter',
    surname: 'Hill',
    email: 'carter.hill@example.com',
    role: 1,
    picture_url: 'https://picsum.photos/200/300/?random=26'
  },
  {
    id: 27,
    name: 'Sofia',
    surname: 'Ward',
    email: 'sofia.ward@example.com',
    role: 10,
    picture_url: 'https://picsum.photos/200/300/?random=27'
  },
  {
    id: 28,
    name: 'Liam',
    surname: 'Turner',
    email: 'liam.turner@example.com',
    role: 5,
    picture_url: 'https://picsum.photos/200/300/?random=28'
  },
  {
    id: 29,
    name: 'Lily',
    surname: 'Gonzalez',
    email: 'lily.gonzalez@example.com',
    role: 3,
    picture_url: 'https://picsum.photos/200/300/?random=29'
  },
  {
    id: 30,
    name: 'Mason',
    surname: 'Scott',
    email: 'mason.scott@example.com',
    role: 8,
    picture_url: 'https://picsum.photos/200/300/?random=30'
  },
  {
    id: 31,
    name: 'Harper',
    surname: 'Hall',
    email: 'harper.hall@example.com',
    role: 2,
    picture_url: 'https://picsum.photos/200/300/?random=31'
  },
  {
    id: 32,
    name: 'Alexander',
    surname: 'Lewis',
    email: 'alexander.lewis@example.com',
    role: 6,
    picture_url: 'https://picsum.photos/200/300/?random=32'
  },
  {
    id: 33,
    name: 'Luna',
    surname: 'Baker',
    email: 'luna.baker@example.com',
    role: 4,
    picture_url: 'https://picsum.photos/200/300/?random=33'
  },
  {
    id: 34,
    name: 'William',
    surname: 'Adams',
    email: 'william.adams@example.com',
    role: 7,
    picture_url: 'https://picsum.photos/200/300/?random=34'
  },
  {
    id: 35,
    name: 'Lucas',
    surname: 'Rivera',
    email: 'lucas.rivera@example.com',
    role: 1,
    picture_url: 'https://picsum.photos/200/300/?random=35'
  },
  {
    id: 36,
    name: 'Ella',
    surname: 'Hill',
    email: 'ella.hill@example.com',
    role: 10,
    picture_url: 'https://picsum.photos/200/300/?random=36'
  },
  {
    id: 37,
    name: 'Noah',
    surname: 'Ward',
    email: 'noah.ward@example.com',
    role: 5,
    picture_url: 'https://picsum.photos/200/300/?random=37'
  },
  {
    id: 38,
    name: 'Charlotte',
    surname: 'Turner',
    email: 'charlotte.turner@example.com',
    role: 3,
    picture_url: 'https://picsum.photos/200/300/?random=38'
  },
  {
    id: 39,
    name: 'Aiden',
    surname: 'Gonzalez',
    email: 'aiden.gonzalez@example.com',
    role: 8,
    picture_url: 'https://picsum.photos/200/300/?random=39'
  },
  {
    id: 40,
    name: 'Harper',
    surname: 'Johnson',
    email: 'harper.johnson@example.com',
    role: 2,
    picture_url: 'https://picsum.photos/200/300/?random=40'
  },
  {
    id: 41,
    name: 'Lucas',
    surname: 'Hernandez',
    email: 'lucas.hernandez@example.com',
    role: 6,
    picture_url: 'https://picsum.photos/200/300/?random=41'
  },
  {
    id: 42,
    name: 'Lily',
    surname: 'Smith',
    email: 'lily.smith@example.com',
    role: 4,
    picture_url: 'https://picsum.photos/200/300/?random=42'
  },
  {
    id: 43,
    name: 'Ethan',
    surname: 'Martinez',
    email: 'ethan.martinez@example.com',
    role: 7,
    picture_url: 'https://picsum.photos/200/300/?random=43'
  },
  {
    id: 44,
    name: 'Aria',
    surname: 'Taylor',
    email: 'aria.taylor@example.com',
    role: 1,
    picture_url: 'https://picsum.photos/200/300/?random=44'
  },
  {
    id: 45,
    name: 'Logan',
    surname: 'White',
    email: 'logan.white@example.com',
    role: 10,
    picture_url: 'https://picsum.photos/200/300/?random=45'
  },
  {
    id: 46,
    name: 'Grace',
    surname: 'Martin',
    email: 'grace.martin@example.com',
    role: 5,
    picture_url: 'https://picsum.photos/200/300/?random=46'
  },
  {
    id: 47,
    name: 'Liam',
    surname: 'Harris',
    email: 'liam.harris@example.com',
    role: 3,
    picture_url: 'https://picsum.photos/200/300/?random=47'
  },
  {
    id: 48,
    name: 'Sophia',
    surname: 'Jones',
    email: 'sophia.jones@example.com',
    role: 8,
    picture_url: 'https://picsum.photos/200/300/?random=48'
  },
  {
    id: 49,
    name: 'James',
    surname: 'Thompson',
    email: 'james.thompson@example.com',
    role: 2,
    picture_url: 'https://picsum.photos/200/300/?random=49'
  },
  {
    id: 50,
    name: 'Emily',
    surname: 'Brown',
    email: 'emily.brown@example.com',
    role: 6,
    picture_url: 'https://picsum.photos/200/300/?random=50'
  },
  {
    id: 51,
    name: 'Oliver',
    surname: 'Johnson',
    email: 'oliver.johnson@example.com',
    role: 4,
    picture_url: 'https://picsum.photos/200/300/?random=51'
  },
  {
    id: 52,
    name: 'Ava',
    surname: 'Davis',
    email: 'ava.davis@example.com',
    role: 7,
    picture_url: 'https://picsum.photos/200/300/?random=52'
  },
  {
    id: 53,
    name: 'Mason',
    surname: 'Williams',
    email: 'mason.williams@example.com',
    role: 1,
    picture_url: 'https://picsum.photos/200/300/?random=53'
  },
  {
    id: 54,
    name: 'Isabella',
    surname: 'Jackson',
    email: 'isabella.jackson@example.com',
    role: 10,
    picture_url: 'https://picsum.photos/200/300/?random=54'
  },
  {
    id: 55,
    name: 'Henry',
    surname: 'Taylor',
    email: 'henry.taylor@example.com',
    role: 5,
    picture_url: 'https://picsum.photos/200/300/?random=55'
  },
  {
    id: 56,
    name: 'Sofia',
    surname: 'Anderson',
    email: 'sofia.anderson@example.com',
    role: 3,
    picture_url: 'https://picsum.photos/200/300/?random=56'
  },
  {
    id: 57,
    name: 'Lucas',
    surname: 'Young',
    email: 'lucas.young@example.com',
    role: 8,
    picture_url: 'https://picsum.photos/200/300/?random=57'
  },
  {
    id: 58,
    name: 'Avery',
    surname: 'Thomas',
    email: 'avery.thomas@example.com',
    role: 2,
    picture_url: 'https://picsum.photos/200/300/?random=58'
  },
  {
    id: 59,
    name: 'Daniel',
    surname: 'Garcia',
    email: 'daniel.garcia@example.com',
    role: 6,
    picture_url: 'https://picsum.photos/200/300/?random=59'
  },
  {
    id: 60,
    name: 'Evelyn',
    surname: 'Wilson',
    email: 'evelyn.wilson@example.com',
    role: 4,
    picture_url: 'https://picsum.photos/200/300/?random=60'
  },
  {
    id: 61,
    name: 'Alexander',
    surname: 'Hall',
    email: 'alexander.hall@example.com',
    role: 7,
    picture_url: 'https://picsum.photos/200/300/?random=61'
  },
  {
    id: 62,
    name: 'Ella',
    surname: 'Lee',
    email: 'ella.lee@example.com',
    role: 1,
    picture_url: 'https://picsum.photos/200/300/?random=62'
  },
  {
    id: 63,
    name: 'Carter',
    surname: 'White',
    email: 'carter.white@example.com',
    role: 10,
    picture_url: 'https://picsum.photos/200/300/?random=63'
  },
  {
    id: 64,
    name: 'Aria',
    surname: 'Johnson',
    email: 'aria.johnson@example.com',
    role: 5,
    picture_url: 'https://picsum.photos/200/300/?random=64'
  },
  {
    id: 65,
    name: 'Noah',
    surname: 'Hernandez',
    email: 'noah.hernandez@example.com',
    role: 3,
    picture_url: 'https://picsum.photos/200/300/?random=65'
  },
  {
    id: 66,
    name: 'Chloe',
    surname: 'Smith',
    email: 'chloe.smith@example.com',
    role: 8,
    picture_url: 'https://picsum.photos/200/300/?random=66'
  },
  {
    id: 67,
    name: 'Mia',
    surname: 'Garcia',
    email: 'mia.garcia@example.com',
    role: 2,
    picture_url: 'https://picsum.photos/200/300/?random=67'
  },
  {
    id: 68,
    name: 'James',
    surname: 'Johnson',
    email: 'james.johnson@example.com',
    role: 6,
    picture_url: 'https://picsum.photos/200/300/?random=68'
  },
  {
    id: 69,
    name: 'Ethan',
    surname: 'Clark',
    email: 'ethan.clark@example.com',
    role: 4,
    picture_url: 'https://picsum.photos/200/300/?random=69'
  },
  {
    id: 70,
    name: 'Olivia',
    surname: 'Lopez',
    email: 'olivia.lopez@example.com',
    role: 7,
    picture_url: 'https://picsum.photos/200/300/?random=70'
  },
  {
    id: 71,
    name: 'Elijah',
    surname: 'Young',
    email: 'elijah.young@example.com',
    role: 1,
    picture_url: 'https://picsum.photos/200/300/?random=71'
  },
  {
    id: 72,
    name: 'Sophia',
    surname: 'Wright',
    email: 'sophia.wright@example.com',
    role: 10,
    picture_url: 'https://picsum.photos/200/300/?random=72'
  },
  {
    id: 73,
    name: 'Benjamin',
    surname: 'Adams',
    email: 'benjamin.adams@example.com',
    role: 5,
    picture_url: 'https://picsum.photos/200/300/?random=73'
  },
  {
    id: 74,
    name: 'Aiden',
    surname: 'Hernandez',
    email: 'aiden.hernandez@example.com',
    role: 3,
    picture_url: 'https://picsum.photos/200/300/?random=74'
  },
  {
    id: 75,
    name: 'Oliver',
    surname: 'Harris',
    email: 'oliver.harris@example.com',
    role: 8,
    picture_url: 'https://picsum.photos/200/300/?random=75'
  },
  {
    id: 76,
    name: 'Isabella',
    surname: 'Garcia',
    email: 'isabella.garcia@example.com',
    role: 2,
    picture_url: 'https://picsum.photos/200/300/?random=76'
  },
  {
    id: 77,
    name: 'Ethan',
    surname: 'Brown',
    email: 'ethan.brown@example.com',
    role: 6,
    picture_url: 'https://picsum.photos/200/300/?random=77'
  },
  {
    id: 78,
    name: 'Mia',
    surname: 'Lewis',
    email: 'mia.lewis@example.com',
    role: 4,
    picture_url: 'https://picsum.photos/200/300/?random=78'
  },
  {
    id: 79,
    name: 'Henry',
    surname: 'Smith',
    email: 'henry.smith@example.com',
    role: 7,
    picture_url: 'https://picsum.photos/200/300/?random=79'
  },
  {
    id: 80,
    name: 'Sophia',
    surname: 'Thompson',
    email: 'sophia.thompson@example.com',
    role: 1,
    picture_url: 'https://picsum.photos/200/300/?random=80'
  },
  {
    id: 81,
    name: 'Liam',
    surname: 'Taylor',
    email: 'liam.taylor@example.com',
    role: 10,
    picture_url: 'https://picsum.photos/200/300/?random=81'
  },
  {
    id: 82,
    name: 'Charlotte',
    surname: 'Baker',
    email: 'charlotte.baker@example.com',
    role: 5,
    picture_url: 'https://picsum.photos/200/300/?random=82'
  },
  {
    id: 83,
    name: 'Lucas',
    surname: 'Garcia',
    email: 'lucas.garcia@example.com',
    role: 3,
    picture_url: 'https://picsum.photos/200/300/?random=83'
  },
  {
    id: 84,
    name: 'Sofia',
    surname: 'Brown',
    email: 'sofia.brown@example.com',
    role: 8,
    picture_url: 'https://picsum.photos/200/300/?random=84'
  },
  {
    id: 85,
    name: 'Aiden',
    surname: 'Johnson',
    email: 'aiden.johnson@example.com',
    role: 2,
    picture_url: 'https://picsum.photos/200/300/?random=85'
  },
  {
    id: 86,
    name: 'Ella',
    surname: 'Martinez',
    email: 'ella.martinez@example.com',
    role: 6,
    picture_url: 'https://picsum.photos/200/300/?random=86'
  },
  {
    id: 87,
    name: 'William',
    surname: 'Davis',
    email: 'william.davis@example.com',
    role: 4,
    picture_url: 'https://picsum.photos/200/300/?random=87'
  },
  {
    id: 88,
    name: 'Mason',
    surname: 'Adams',
    email: 'mason.adams@example.com',
    role: 7,
    picture_url: 'https://picsum.photos/200/300/?random=88'
  },
  {
    id: 89,
    name: 'Lily',
    surname: 'Garcia',
    email: 'lily.garcia@example.com',
    role: 1,
    picture_url: 'https://picsum.photos/200/300/?random=89'
  },
  {
    id: 90,
    name: 'Logan',
    surname: 'Thompson',
    email: 'logan.thompson@example.com',
    role: 10,
    picture_url: 'https://picsum.photos/200/300/?random=90'
  },
  {
    id: 91,
    name: 'Oliver',
    surname: 'Lopez',
    email: 'oliver.lopez@example.com',
    role: 5,
    picture_url: 'https://picsum.photos/200/300/?random=91'
  },
  {
    id: 92,
    name: 'Charlotte',
    surname: 'Hall',
    email: 'charlotte.hall@example.com',
    role: 3,
    picture_url: 'https://picsum.photos/200/300/?random=92'
  },
  {
    id: 93,
    name: 'Ethan',
    surname: 'Smith',
    email: 'ethan.smith@example.com',
    role: 8,
    picture_url: 'https://picsum.photos/200/300/?random=93'
  },
  {
    id: 94,
    name: 'Ella',
    surname: 'Johnson',
    email: 'ella.johnson@example.com',
    role: 2,
    picture_url: 'https://picsum.photos/200/300/?random=94'
  },
  {
    id: 95,
    name: 'William',
    surname: 'Brown',
    email: 'william.brown@example.com',
    role: 6,
    picture_url: 'https://picsum.photos/200/300/?random=95'
  },
  {
    id: 96,
    name: 'Sofia',
    surname: 'Clark',
    email: 'sofia.clark@example.com',
    role: 4,
    picture_url: 'https://picsum.photos/200/300/?random=96'
  },
  {
    id: 97,
    name: 'Liam',
    surname: 'Martinez',
    email: 'liam.martinez@example.com',
    role: 7,
    picture_url: 'https://picsum.photos/200/300/?random=97'
  },
  {
    id: 98,
    name: 'Harper',
    surname: 'Davis',
    email: 'harper.davis@example.com',
    role: 1,
    picture_url: 'https://picsum.photos/200/300/?random=98'
  },
  {
    id: 99,
    name: 'Lucas',
    surname: 'Smith',
    email: 'lucas.smith@example.com',
    role: 10,
    picture_url: 'https://picsum.photos/200/300/?random=99'
  }
]

export default users
