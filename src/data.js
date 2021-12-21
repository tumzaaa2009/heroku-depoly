const introInfo = {
    name: "นวพล ย้อยดี",
    title: "นักวิชาการคอมพิวเตอร์ปฏิบัติการ",
    location: "สระบุรี",
    description:
      "<strong>Turpis, sit amet iaculis dui consectetur at.</strong> Cras sagittis molestie orci. <strong>Suspendisse ut laoreet mi</strong>. Phasellus eu tortor vehicula, blandit enim eu, auctor massa. Nulla ultricies tortor dolor, sit amet suscipit enim <strong>condimentum id</strong>. Etiam eget iaculis tellus. Varius sit amet.",
    image: "resize_profile.jpg",
    imgStyle: {
      align: "text-align: center;",
    },
  };
  
  //dynamic icon
  const socialMediaInfo = [
    // {
    //   name: "linkedin",
    //   link: "https://www.linkedin.com/in/coskuncayemre/",
    //   username: "coskuncayemre",
    //   displayName: "linkedin/coskuncayemre",
    // },
  
    {
      name: "github",
      link: "https://github.com/tumzaaa2009",
      username: "tumzaaa2009",
      displayName: "github/tumzaaa2009",
    },
    {
      name: "heroku",
      displayName: "",
      image: "heroku.png",
      imgStyle: {
        width: "30px",
      },
    },
    // {
    //     name: 'globe',
    //     link: 'http://localhost:8080',
    //     username: 'coskuncayemre',
    //     displayName: 'emrecoskuncay.com'
    // },
    // {
    //     name: 'stack-overflow',
    //     link: 'http://localhost:8080',
    //     username: 'coskuncayemre',
    //     displayName:'stackoverflow.com'
    // },
  ];
  
  const contactInfo = [
    {
      name: "home",
      style: "font-size:20px;margin-right: 10px;",
      context: "229/61 ถ.เทศบาล4 ต.ปากเพรียว อ.เมือง จ.สระบุรี",
      size: "50px",
    },
    {
      name: "envelope",
      context: "tumzaaa15@gmail.com",
      size: "20px",
      style: "font-size:20px;margin-right: 10px;",
      link: "mailto:tumzaaa15@gmail.com",
    },
    {
      name: "phone-square",
      context: "086-3880236",
      size: "23px",
      style: "font-size:23px;margin-right: 10px;",
      link: "tel: 086-3880236",
    },
  ];
  
  const summaryInfo =
    "นายนวพล ย้อยดี ตำแหน่ง:นักวิชการคอมพิวเตอร์ปฏิบัติการ อายุ: 28 ปี ความสามารถพิเศษทางด้านกีฬา : แบดมินตัน , ปั่นจักรยาน  ภาษาที่ใช้ในการเขียนโปรแกรม : HTML5, PHP 5-7 , Jquery , Javascript , NodeJsExpress ,vue-cli , Mysql , Mysqlserver , CSS , GitHub , Heroku , Google-Api , Linux-Command ด้านเทคนิค It-Support , IT-HardWare , Zoom CloudMeeting , Webex";
  
  //desc v-html
  const experinceInfo = [
    {
      workAt: "สำนักงานเขตสุขภาพที่ 4 สังกัดปลัดกระทรวงสาธารณะสุข",
      position: "Programer , IT-Support",
      duration: "Dec 2019 – Present",
      description: "Work as a full stack software engineer.",
      techs: [
        "Vue-cli",
        "NodeExpress",
        "Mysql",
        "Mysqlserver",
        "Php",
        "Html5",
        "Css",
        "JavaScript",
        "Jquery",
        "Google-Api",
        "GitHub"
      ],
    },
    {
      workAt: "บริษัท ทีพีไอ โพลีน จำกัด (มหาชน)",
      position: "Programmer",
      duration: "Dec 2019 – Present",
      description: "เขียนโปรแกรมให้กับบริษัท โดยใช้ภาษา PHP และ MysqlServer",
      techs: [
        "Php",
        "MysqlServer",
        "Mysql",
        "Html5",
        "Css",
        "JavaScript",
        "Jquery",
      ],
    },
    {
      workAt: "บริษัท เกษมกิจ จำกัด",
      position: "It-Support",
      duration: "Dec 2017 – Sep 2018",
      description:
        "ซัพพอร์ตระบบ POS ให้กับ โรงแรมในเครือเกษมกิจ เช่น Kantary Hotel,Classic Kameo Hotel",
      techs: ["MySql"],
    },
  ];
  
  const educationInfo = [
    {
      school: "Hacettepe University",
      location: "Ankara,Turkey",
      title: "MSc in Data Engineering",
      duration: "2021 – Current",
      description: "",
    },
    {
      school: "Hacettepe University",
      location: "Ankara,Turkey",
      title: "BSc in Computer Science",
      duration: "2015 – 2020",
      description: "<b>GPA:</b> 3.38/4.00",
    },
    {
      school: "The English Studio Language School",
      location: "London,UK",
      title: "Student",
      duration: "Aug 2018 – Oct 2018",
      description: "",
    },
  ];
  
  const volunteerInfo = [
    // {
    //     organisation: 'The English Studio Language School',
    //     title: 'Student',
    //     duration: 'July 2018 - Sep 2018',
    //     description: 'London,UK',
    // },
    {
      organisation: "Hacettepe University,Social Life Organization",
      title: "Organization Manager",
      duration: "2015 – 2021",
      description: "",
    },
    {
      organisation: "Hacettepe University,Community of Contest",
      title: "Organization Manager",
      duration: "2016 – 2018",
      description: "",
    },
    {
      organisation: "Hacettepe University ACM",
      title: "Member",
      duration: "2015 – 2020",
      description: "",
    },
  ];
  
  const certificateInfo = [
    {
      organisation: "Red Hat",
      title: "Red Hat Certified System Administrator RH124",
      duration: "Feb,2021",
      description: "",
    },
    {
      organisation: "KOSGEB",
      title: "Entrepreneurship Certificate",
      duration: "Jun,2019",
      description: "",
    },
  ];
  
  const projectInfo = [
    {
      title: "Project 1",
      meta: "Propulsion Engineer",
      description:
        "Responsibilities included: writing technical reports and other documentation, such as handbooks and bulletins, for use by engineering staff, management, and customers, analyzing project requests and proposals and engineering data to determine feasibility, predictability, cost, and production time of aerospace or aeronautical product.",
      images: [
        {
          thumbnail:
            "http://placeholdit.imgix.net/~text?txtsize=33&txt=firstimage&w=150&h=150",
          original:
            "http://placeholdit.imgix.net/~text?txtsize=33&txt=firstimage&w=900&h=900",
        },
        {
          thumbnail:
            "http://placeholdit.imgix.net/~text?txtsize=33&txt=secondimage&w=150&h=150",
          original:
            "http://placeholdit.imgix.net/~text?txtsize=33&txt=secondimage&w=900&h=900",
        },
        {
          thumbnail:
            "http://placeholdit.imgix.net/~text?txtsize=33&txt=thirdImage&w=150&h=150",
          original:
            "http://placeholdit.imgix.net/~text?txtsize=33&txt=thirdImage&w=900&h=900",
        },
      ],
    },
    {
      title: "Project 1",
      meta: "Propulsion Engineer",
      description:
        "Responsibilities included: writing technical reports and other documentation, such as handbooks and bulletins, for use by engineering staff, management, and customers, analyzing project requests and proposals and engineering data to determine feasibility, predictability, cost, and production time of aerospace or aeronautical product.",
      images: [
        {
          thumbnail:
            "http://placeholdit.imgix.net/~text?txtsize=33&txt=firstimage&w=150&h=150",
          original:
            "http://placeholdit.imgix.net/~text?txtsize=33&txt=firstimage&w=900&h=900",
        },
        {
          thumbnail:
            "http://placeholdit.imgix.net/~text?txtsize=33&txt=secondimage&w=150&h=150",
          original:
            "http://placeholdit.imgix.net/~text?txtsize=33&txt=secondimage&w=900&h=900",
        },
        {
          thumbnail:
            "http://placeholdit.imgix.net/~text?txtsize=33&txt=thirdImage&w=150&h=150",
          original:
            "http://placeholdit.imgix.net/~text?txtsize=33&txt=thirdImage&w=900&h=900",
        },
      ],
    },
  ];
  
  const skillInfo = [
    {
      name: "Javascript",
      rate: 90,
    },
    {
      name: ".NET Core",
      rate: 65,
    },
    {
      name: "Flutter",
      rate: 78,
    },
    {
      name: "VueJS",
      rate: 90,
    },
    {
      name: "Docker",
      rate: 85,
    },
    {
      name: "HTML/CSS",
      rate: 85,
    },
  ];
  
  const otherSkillInfo = [
    "Kubernetes",
    "Nginx",
    "Git",
    "WebGL",
    "MVC",
    "Bootstrap",
    "Jira",
    "TFS",
  ];
  
  const proSkillInfo = [
    "Leadership",
    "Effective communication",
    "Team player",
    "Strong problem solver",
  ];
  
  // 0,1,2,3,4,5
  const designDev = [
    {
      name: ": https://github.com/coskuncayemre",
      Dev :""
    },
    {
      name : ": Navapon Yoidee",
      Dev :"vue-cli2 , NodeExpress 4.17 , fontawesome 4.7 , Bootstrap 5 , Github , Heroku"
    }
    
  ];
  
  const interestInfo = [
    {
      name: "Traveler",
      description: "22 Countries,for now",
    },
    {
      name: "Swimming",
      description: "",
    },
    {
      name: "Entrepreneurship Ideas",
      description: "",
    },
    {
      name: "Smart Home Ideas",
      description: "",
    },
  ];
  
  export default {
    introInfo: introInfo,
    socialMediaInfo: socialMediaInfo,
    experinceInfo: experinceInfo,
    educationInfo: educationInfo,
    projectInfo: projectInfo,
    skillInfo: skillInfo,
    certificateInfo: certificateInfo,
    volunteerInfo: volunteerInfo,
    designDev: designDev,
    contactInfo: contactInfo,
    interestInfo: interestInfo,
    summaryInfo: summaryInfo,
    otherSkillInfo: otherSkillInfo,
    proSkillInfo: proSkillInfo,
  };
  