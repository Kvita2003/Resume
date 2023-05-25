// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

//=================================================================

var header = {
  address:'Ukraine,IF',
  name:{
    firstname:'Ivan',
    lastname:'Ivanov',
  },

  position:'Junior Fullstack JS Developer',
  salary:"600$ в місяць",
}


var footer = {
  social:{
    email:{
      text:'ivanov@mail.com',
      href:"mailto:ivanov@mail.com",
    },
    phone:{
      text:'+380670000123',
      href:'tel:+380670000123',
    },
    linkedin:{
      text:'LinkedIn',
      href:'mailto:ivanov@mail.com',
    },
  },
}

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані

    page:{
      title:'Resume | Summary',
    },
    header,

    main:{
      summary:{
        title:'Summary',
        text:`Open-minded for new technologies, with 1 years of experience in development. Whenever I start to
        work on a new project I learn the domain and try to understand the idea of the project. Good team
        player, every colleague is a friend to me.`
      },
      experience:{
        title:'Other experience',
        text:`Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
          tournament position, goals etc), analyzing by simple mathematics models and preparing probability
          for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },

    footer,
  })
})

// ================================================================

// Підключаємо роутер до бек-енду
// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані

    page:{
      title:'Resume | Skills',
    },
    header,


    main:{
      hobbies_title:'My hobbies',
      hobbies:[
        {
          name: "football",
          isMain: true,
        },
        {
          name: "dance",
          isMain: false,
        },
        {
          name: "game",
          isMain: false,
        },
      ],

      skills_title:'My skills',
      skills: [
        {
          name: 'HTML', 
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 10,
          isTop: true,
        },
        {
          name: 'VS Code ', 
          point: 8,
        },
        {
          name: 'Git', 
          point: 7,
        },
        {
          name: 'Terminal', 
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],
    },

    footer,
  })
})

//========================================================


router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані

    page:{
      title:'Resume | Education',
    },
    header,

    main: {

      certificates_title:'My certificates',
      certificates:[
      {
        name:'АКЦІОНЕРНЕ ТОВАРИСТВО КОМЕРЦІЙНИЙ БАНК "ПРИВАТБАНК"' ,
        id:23842,
      },
      {
        name:'Державне підприємство "Оператор ринку"',
        id:3477858,
      },
      {
        name:'Інформаційно-довідковий департамент ДПС',
        id:348739875,
      },
      ],

      education_title:'My education',
      education:[
        
      {
        name:'Коледж',
        isEnd: true,
      },
      {
        name:`Дніпровський національний 
        університет імені Олеся Гончара`,
        isEnd: false,
      },
      ],
    },

    footer,
  })
})

//========================================================


router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані

    layout:'big',

    page:{
      title:'Resume | Work',
    },
    header,

    main:{
      works:[
        {
          position:'Junior Fullstack Developer ',
          company:{
            name:'IT Brains',
            url:'https://it-brains.com.ua/',
          },
          duration:{
            from:'10.03.2023',
            to: null,
          },
          projectAmount: 3,

          projects:{
            name:'Resume',
            url:"https://it.com.ua/practicum/",
            about:'Створення першого веб-додатку разом з нашим експертом',
            stackAmount:3,
            stacks: [
              {
              name:"React.js",
              },
              {
                name:"HTML / CSS",
              },
              {
                name:"Node.js",
              },
            ],
            awardAmount:5,
            awards:[
              {
                name:'ТОП-5 помилок новачків на старті',
              },
              {
                name:'Тайм-менеджмент - як керувати часом, щоб все встигати',
              },
            ],
          },
        },
      ],
    },

    footer,
  })
})
//=================================================================

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/person', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('person', {

    layout:'person',
    
    person: {
      name: 'Emma Johnson',
      age: 32,
      gender: 'Female',
      address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        country: 'USA',
      },
      education: [
        {
          degree: 'Bachelor of Science',
          major: 'Computer Science',
          university:
            'Massachusetts Institute of Technology',
          graduationYear: 2012,
        },
      ],
      workExperience: [
        {
          company: 'Google',
          title: 'Software Engineer',
          startDate: '2012-06-01',
          endDate: '2016-12-31',
          responsibilities: [
            'Developed new features for Google Maps',
            'Worked on improving search algorithms',
          ],
          year_founded: 1990,
          industry: 'Technology',
          employees: [
            {
              name: 'John Smith',
              position: 'CEO',
              department: 'Executive',
              projects: [
                {
                  name: 'Project Alpha',
                  description:
                    'Developing new software platform',
                  status: 'In Progress',
                  teams: [
                    {
                      team_name: 'Awesome Team',
                      team_leader: {
                        name: 'John Smith',
                        title: 'Team Leader',
                        email: 'john.smith@example.com',
                      },
                      team_members: [
                        {
                          name: 'Alice Johnson',
                          title: 'Software Engineer',
                          email:
                            'alice.johnson@example.com',
                          skills: ['Java', 'Python', 'SQL'],
                          projects: [
                            {
                              name: 'Project A',
                              description:
                                'Lorem ipsum dolor sit amet',
                              technologies: [
                                'Java',
                                'Spring Framework',
                              ],
                              team_members: [
                                {
                                  name: 'Bob Lee',
                                  title:
                                    'Software Engineer',
                                },
                                {
                                  name: 'Cindy Chen',
                                  title: 'UI Designer',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  })
})

// ================================================================

module.exports = router
