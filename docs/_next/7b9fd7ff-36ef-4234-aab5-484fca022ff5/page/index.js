
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports=webpackJsonp([8],{150:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),i=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=function(){return i.default.createElement("div",{className:"lead-image dark-bg"},i.default.createElement("div",{className:"bg-image"},i.default.createElement("img",{src:"/static/images/header.jpg",alt:""})),i.default.createElement("div",{className:"overlay",style:{opacity:.3}}),i.default.createElement("div",{className:"grid"},i.default.createElement("div",{className:"content-container align-center"},i.default.createElement("div",{className:"container"},i.default.createElement("div",{className:"headings"},i.default.createElement("h1",null,"Lead image title"),i.default.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate nostrum necessitatibus nisi deserunt illum similique, nam eius perspiciatis enim aliquam doloremque accusantium dolorem quos omnis quam, quo corporis aperiam tenetur dolorum cumque.")),i.default.createElement("div",{className:"btn-wrapper"},i.default.createElement("a",{href:"#",className:"btn-primary lg invert"},"Primary"),i.default.createElement("a",{href:"#",className:"btn-secondary lg invert"},"Secondary"))))))}},151:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),i=function(e){return e&&e.__esModule?e:{default:e}}(n),r=function(e){var t=e.title;return i.default.createElement("div",{className:"container"},i.default.createElement("div",{className:"grid"},i.default.createElement("div",{className:"shift-2"},i.default.createElement("div",{className:"section-title"},i.default.createElement("h2",null,t)))))};r.defaultProps={title:"Speakers"},t.default=r},152:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),i=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=function(){return i.default.createElement("div",{className:"container"},i.default.createElement("div",{className:"grid"},i.default.createElement("div",{className:"article-list"},[1,2,3].map(function(e){return i.default.createElement("div",{key:e,className:"article"},i.default.createElement("h3",null,i.default.createElement("a",{href:"#"},"Lorem ipsum dolor sit nostrum necessitatibus ipsum dolor")),i.default.createElement("div",{className:"meta"},"by ",i.default.createElement("a",{href:"#"},"John Doe")),i.default.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate nostrum necessitatibus nisi deserunt illum similique, nam eius perspiciatis enim aliquam doloremque accusantium dolorem quos omnis quam, quo corporis aperiam tenetur dolorum cumque."))}))))}},177:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),i=function(e){return e&&e.__esModule?e:{default:e}}(n),r=function(e){var t=e.list;return i.default.createElement("div",{className:"container"},i.default.createElement("nav",{className:"navigation"},t.map(function(e,t){return i.default.createElement("a",{key:t,href:e.link},e.label)})))};r.defaultProps={list:[{label:"Item 1",link:"#"},{label:"Item 2",link:"#"},{label:"Item 3",link:"#"},{label:"Item 4",link:"#"}]},t.default=r},179:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={speakers:[{image:"/static/images/speakers/holman.png",link:"https://zachholman.com/",name:"Zach Holman",company:"During",bio:'\n        <p>\n          Zach Holman is a developer living in San Francisco. He joined GitHub\n          in 2010 as one of their first engineering hires, and helped build and\n          grow their product and culture over five years. Currently he’s the\n          founder and CEO of   <a href="https://during.com">During</a>, a\n          new calendar to help you during your day. He also advises startups,\n          including <a href="https://gitlab.com">GitLab</a> and  \n          <a href="https://dockbit.com">Dockbit</a>.\n        </p>\n      ',talk:"Keynote",description:"<p>To be announced. Stay tuned!</p>"},{image:"/static/images/speakers/rmosolgo.png",link:"https://rmosolgo.github.io/",name:"Robert Mosolgo",company:"GitHub",bio:"\n        <p>\n          Robert is a Ruby developer at GitHub, focused on the GraphQL API. In\n          his free time, he likes spending time with his family, reading about\n          programming language design, and doing upholstery projects.\n        </p>\n      ",talk:"GraphQL",description:"<p>To be announced. Stay tuned!</p>"},{image:"/static/images/speakers/nick.jpg",link:"https://apotonick.wordpress.com/",name:"Nick Sutterer",company:"Trailblazer",bio:'\n        <p>\n          Whenever Open-Source meets deep and profound debates about architecting\n          software, and there\'s free beers involved, Nick Sutterer must be just\n          around the corner. Say "Hi!" to him, he loves people.\n        </p>\n      ',talk:"Trailblazer",description:"<p>To be announced. Stay tuned!</p>"},{image:"/static/images/speakers/gabriela.jpg",link:"https://github.com/luhova",name:"Gabriela Luhova",company:"Tutuf",bio:"\n        <p>\n          Rails Girls mentor since 2015. Ruby on Rails developer at Tutuf.\n          Faculty of Mathematics and Informatics at the Sofia University\n          graduate. Took part in a lot of conferences as an assistant organizer,\n          because being part of community is giving me motivation and\n          inspiration.\n        </p>\n      ",talk:"JSON API in the Ruby world",description:"\n        <p>\n          What is JSON API? How can it be used? What are the benefits of it? What\n          gems can we use to serialize our ActiveRecord/ActiveModel objects? How\n          fast can it be? The JSON API in the Ruby World talk will give answers to\n          all of these questions and more.\n        </p>\n      "},{image:"/static/images/speakers/marko.jpg",link:"https://github.com/bmarkons",name:"Marko Bogdanović",company:"RenderedText",bio:"\n        <p>\n          Spent last summer crafting RubyBench as a participant of Google Summer\n          of Code. Recently joined guys at the Semaphore CI as a full time Ruby\n          newbie. Most of the non-work time spend on Fruska gora hiking, running\n          or preferably mountain biking.\n        </p>\n      ",talk:"Start your Open Source journey with Ruby Bench",description:"\n        <p>\n          I was last year Google Summer of Code student who joined the Ruby team\n          to work on RubyBench project. I really feel like sharing my last summer\n          contributions and overall experience - since that's what Open Source is\n          mostly about. These were my very first Open Source contributions, and I'd\n          be happy to encourage other newcomers like me to give their take to the\n          community by joining our efforts together on Ruby Bench project. In the\n          first part of the talk I would make a walkthrough of the current state of\n          the project, after which we would examine together what's missing on the\n          platform that needs your help.\n        </p>\n      "},{image:"/static/images/speakers/dinah.jpg",link:"https://dinahshi.github.io",name:"Dinah Shi",company:"University of Waterloo",bio:"\n        <p>\n          Dinah is wrapping up her engineering degree at the University of\n          Waterloo. In 2017, she spent four months backpacking around Europe and\n          China while looking for half-decent WIFI connections to power her\n          open-source contributions. For the last few months, she has been\n          building a public API to expose more preloading options in Ruby on\n          Rails.\n        </p>\n      ",talk:"Eager Loading for ActiveRecord Performance",description:"\n        <p>\n          As soon as a database has more than a few hundreds rows in any given\n          table, it’s time to start thinking about performance in ActiveRecord.\n          But performance is hard, with terms like eager loading, preloading, and\n          N+1 problems. In this talk, we’ll make sense of those terms, learn how to\n          write performant queries, and look at how those query methods work under\n          the hood. We’ll also take a peek into the future of eager loading coming\n          to a Rails release near you.\n        </p>\n      "},{image:"/static/images/speakers/vlad.jpg",link:"https://github.com/palkan",name:"Vladimir Dementyev",company:"Evil Martians",bio:"\n        <p>\n          Vladimir is a mathematician who found his happiness in programming Ruby\n          and Erlang, contributing to open source and being an Evil Martian.\n          Author of AnyCable, TestProf and many yet unknown ukulele melodies.\n        </p>\n      ",talk:"Take your slow tests to the doctor",description:"\n        <p>\n          Writing tests is a significant part of the development process,\n          especially in the Ruby and Rails community. We don’t care about test\n          suite performance until we find ourselves wasting too much time\n          waiting for the green light.\n        </p>\n\n        <p>\n          I’ve spent a lot of time analyzing test suites performance and\n          developed some useful techniques and tools to make tests faster.\n        </p>\n\n        <p>\n          Let's me show some profiling and refactoring techniques to make our\n          tests healed!\n        </p>\n      "},{image:"/static/images/speakers/armin.jpg",link:"https://github.com/Krule",name:"Armin Pašalić",company:"solarisBank AG",bio:'\n        <p>\n          Software builder, mostly Ruby and a bit of Go. Passionate about\n          "proper" testing, clean architecture and DDD. Currently busy\n          constructing a distributed software system with the best colleagues\n          ever at <a href="https://solaris.bank/">solarisBank AG</a>.\n        </p>\n      ',talk:"Beyond the current state: Time travel as answer to hard questions",description:"\n        <p>\n          Current application state; what, in fact, is it? We, as software\n          engineers, usually don’t think much about it (unless we face a\n          consistency issues in a distributed system, in which case we might\n          think about it a LOT). But looking closer, one might realize, in\n          essence what is known as current state is just a product of mutations\n          over time. Mutations which, as they happen, commonly cause the\n          software system to forget about what was, up to that point, known as\n          current state. Once this is clear, one starts to wonder, is there a\n          beneficial way to utilize this fact?\n        </p>\n      "},{image:"/static/images/speakers/rado.jpg",link:"https://rstankov.com",name:"Radoslav Stankov",company:"Product Hunt",bio:"\n        <p>\n          Radoslav is a web developer for more than a decade. He believes that\n          frontend and backend are equally important. In the last several years\n          he juggles between Ruby and JavaScript projects. Organizer of\n          <React.NotAConf />. Currently works at Product Hunt.\n        </p>\n      ",talk:"How to get to zero unhandled exceptions in production",description:"\n        <p>\n          In the talk, I'm going to explain how to categorize exceptions and\n          their level of impact. Present use cases and code samples of common\n          problems in a Rails application. How to make sure your background\n          workers run without issues and how to debug exceptions\n        </p>\n      "},{image:"/static/images/speakers/jan.jpg",link:"https://jan.krutisch.de",name:"Jan Krutisch",company:"Depfu",bio:'\n        <p>\n          I am a <a href="/coding.html">software developer</a>, <a href="/writings.html">tech writer</a>,\n          <a href="/speaking.html">speaker</a> and <a href="http://soundcloud.com/halfbyte">multi</a>\n          <a href="http://flickr.com/photos/jankrutisch">purpose</a> <a href="http://github.com/halfbyte">geek</a>.\n        </p>\n      ',talk:"My Ruby is a Paintbrush. My Ruby is a Synth.",description:"\n        <p>\n          In 2017, Ruby is proven, almost boring technology. We use it mostly\n          to build Backends for Hipster Technology™ JavaScript Frontends. But\n          Ruby can do so much more - so let’s explore that. Ruby can paint\n          pictures. Ruby can make music. As we will see: Ruby can be an\n          engineer’s tool, or an artist’s tool.\n        </p>\n\n        <p>\n          The Ruby community is very much focused on Rails. But while building\n          web applications can be fun, in 2017, it is not always the most\n          exciting of all jobs. I’m going to show you a handful of interesting\n          projects and tools to use Ruby to do things you probably didn’t think\n          about. Like making music. Or creating 3D objects. Or driving a light\n          show. Or …\n        </p>\n\n        <p>\n          This talk is going to be a fast paced ride with lots of demos through\n          things you can do with Ruby outside of the “Web Development” or even\n          the “Scripting Chainsaw” box.\n        </p>\n      "},{image:"/static/images/speakers/sedar.jpg",link:"https://github.com/sdogruyol",name:"Serdar Doğruyol",company:"Self",bio:"\n        <p>\n          Rubyist, Crystal Evangelist, Creator of Kemal – a lightning fast, super\n          simple web framework written in Crystal.\n        </p>\n      ",talk:"Crystal: A language for humans and computers",description:"\n        <p>\n          I love Ruby! So do we! Let's take a look at Crystal, the younger sibling of Ruby, as Matz said. :-)\n        </p>\n      "},{image:"/static/images/speakers/nynne.jpg",link:"https://github.com/nynnejc",name:"Nynne Just Christoffersen",company:"Karnov",bio:"\n        <p>\n          Nynne Just Christoffersen is a Copenhagen-based developer with a\n          background in Art and Design History. In her spare time she enjoys her\n          unhealthy obsession with meetup.com. She's the organiser of Rails Girls\n          Copenhagen and the Copenhagen tech book and film club, among many other\n          things.\n        </p>\n      ",talk:"What I learned from building a twitter Art Bot",description:"\n        <p>\n          Rijksbot, is a twitter bot I built with ruby that responds when you tweet to it\n          with an image culled from the Rijsmuseums collection, scraped from the museums’\n          API. If you tweet the word 'flower' at the bot, It'll bring you an image of a\n          flower etc. For this talk I'll reflect on the following:\n        </p>\n\n        <ul>\n          <li>What is a bot.</li>\n          <li>How to we find creative ways to access vast archives of public data?</li>\n          <li>What is the value of communicating with images?</li>\n          <li>How do we handle messy data?</li>\n        </ul>\n\n        <p>\n          These questions are shaped equally by my background in art history,\n          love of twitter and curiosity.\n        </p>\n\n        <p>\n          Museums, art collections and libraries are increasingly digitising\n          and making their data available to the public. Many museums even offer\n          well-documented APIs to play with! As a trained art and design historian, I'm\n          particularly keen on investigating the opportunities these vast treasure troves\n          of data can offer. But how much fun can we have simply looking at a huge DB?\n          With this project, I wanted to bring some interaction and playfulness to the\n          wonderful collection of the Rijksmuseum in Amsterdam. The project made me\n          appreciative of the many challenges faced by cultural institutions today. With\n          this talk I'd love to share my findings.\n        </p>\n      "},{image:"/static/images/speakers/piotr.jpg",link:"https://chastell.net",name:"Piotr Szotkowski",company:"Rebased",bio:"\n        <p>\n          Hacker scientist. Assistant professor at Warsaw University of Technology\n        </p>\n      ",talk:"The Modern Prometheus",description:"\n        <p>\n          Most non-scripting languages are faster than Ruby (Rust: tremendously so),\n          but few (Crystal?) can match its optimisation for developer happiness and\n          productivity. Let’s try to gauge Ruby’s chances when it comes to matching\n          modern performance expectations: Are the changes in recent CRuby versions\n          significant? Can JRuby bring enough JVM performance? And – to address the\n          titular Frankenstein – how easily can we harness the power of Crystal, Rust, C\n          or even assembly from within our Ruby applications?\n        </p>\n\n        <p>\n          If you’ve hung around our community for a few years you probably saw Ruby rise\n          from being a pleasant, but niche and slow scripting language to a popular\n          choice powering many a web application – and then seemingly overshadowed by a\n          plethora of new contenders, from Scala and Clojure through JavaScript (or its\n          many tools and derivatives) to Go or even Lua. Most of the alternatives are\n          faster or offer compelling design differences (Rust: tremendously so, on both\n          counts), but few (Crystal?) can match Ruby’s optimisation for developer\n          happiness and developer productivity.\n        </p>\n\n        <p>\n          This talk, based on experiences in using Ruby for academic research projects,\n          attempts to gauge Ruby’s chances when it comes to matching modern performance\n          expectations: Are the changes in recent CRuby versions significant? Can JRuby\n          bring enough JVM performance? And – to address the titular Frankenstein – how\n          easily can we harness the power of Crystal, Rust, C or even assembly from\n          within our Ruby applications?\n        </p>\n      "},{image:"/static/images/speakers/vodro.jpg",link:"http://v0dro.in",name:"Sameer Deshmukh",company:"Tokyo Insitute of Technology",bio:"\n        <p>\n          Sameer is a student and a contributor to the Ruby Science Foundation, where he\n          helps build scientific computation tools in Ruby. He is currently working on\n          Rubex, a new language for easily writing C extensions for the CRuby\n          interpreter. He enjoys spending spare time with friends, books and his bass\n          guitar.\n        </p>\n      ",talk:"Ferrari Driven Development: superfast Ruby with Rubex",description:"\n        <p>\n          Did you ever really really want to speed up your Ruby code with C extensions\n          but got baffled by mountains of documentation and scary C programming and chose\n          to move to another language instead? Did you wish that you could just release\n          that GIL and extract all the juice that your processor has to offer without\n          losing your hair? If yes, then come see this talk!\n        </p>\n\n        <p>\n          This talk will introduce you to Rubex, the fastest and happiest way of writing\n          Ruby C extensions. Rubex is a whole new language designed from the ground up\n          keeping in mind Ruby's core philosophy - make programmers happy.\n        </p>\n\n        <p>\n          Rubex allows you to write C extensions using the same syntax that you would\n          use for writing Ruby programs, and also freely mix C data types with arbitrary\n          Ruby objects. It also allows you to easily (and safely) release the Ruby GIL\n          and spawn native threads. The Rubex compiler compiles your Rubex code into\n          meaningful C code that it then interfaces with the CRuby interpreter by\n          implicitly using the CRuby C API in a manner that is completely transparent to\n          the programmer.\n        </p>\n      "}]};t.default=n},275:function(e,t,a){e.exports=a(276)},276:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=a(0),r=n(i),o=a(277),s=n(o),l=a(81),u=n(l),c=a(152),d=(n(c),a(150)),m=(n(d),a(96)),p=n(m),h=a(151),f=n(h),g=a(278),b=n(g),y=a(279),v=n(y),k=a(177),w=n(k),E=a(179),R=n(E),N={list:[{label:"Speakers",link:"/speakers"},{label:"Partners",link:"/sponsors"},{label:"Blog",link:"/blog"},{label:"Tickets",link:"/tickets"}]};t.default=function(){return r.default.createElement(s.default,null,r.default.createElement(u.default,{theme:"blank",spacing:"none"},r.default.createElement("div",{className:"lead-header"},r.default.createElement("div",{className:"hero"},r.default.createElement("img",{src:"/static/assets/balkanruby-header-logo.svg",alt:"Balkan Ruby",className:"logo"}),r.default.createElement("p",null,"25 – 26 May 2018; Sofia, Bulgaria"),r.default.createElement("a",{href:"#newsletter",className:"btn-primary lg"},"Subscribe")),r.default.createElement("div",{className:"video-container"},r.default.createElement("video",{autoPlay:!0,loop:!0,poster:"/static/images/landing-video/Wall-Sketching.jpg"},r.default.createElement("source",{src:"/static/images/landing-video/Wall-Sketching.mp4",type:"video/mp4"}),r.default.createElement("source",{src:"/static/images/landing-video/Wall-Sketching.webm",type:"video/webm"}))))),r.default.createElement(u.default,{theme:"light-bg",spacing:"none"},r.default.createElement(w.default,N)),r.default.createElement("br",null),r.default.createElement("br",null),r.default.createElement(f.default,{title:"About the conference"}),r.default.createElement("br",null),r.default.createElement(p.default,{centered:!0,text:"<p>Balkan Ruby is a brand new conference, dedicated to Ruby and satellite technologies.</p><p>We aim to introduce the local communities to each other and invite companies and developers from all over Europe to visit the Balkan region, learn new technologies and share ideas with us.</p>"}),r.default.createElement("br",null),r.default.createElement(u.default,{id:"speakers",theme:"blank",spacing:"spacing-both",container:!0},r.default.createElement("div",{className:"container"},r.default.createElement("div",{className:"grid"},r.default.createElement("div",{className:"shift-2"},r.default.createElement("div",{className:"section-title"},r.default.createElement("h2",null,"Speakers")))))),r.default.createElement("br",null),r.default.createElement(v.default,{theme:"blank",spacing:"spacing-bottom"},R.default.speakers.map(function(e,t){return r.default.createElement(b.default,{key:t,name:e.name,link:"/speakers#"+t,avatar:e.image},r.default.createElement("p",null,e.talk))})),r.default.createElement(u.default,{theme:"blank",spacing:"spacing-both"},r.default.createElement("div",{className:"container"},r.default.createElement("div",{className:"grid"},r.default.createElement("div",{className:"shift-2"},r.default.createElement("div",{className:"section-title"},r.default.createElement("a",{href:"/tickets",className:"btn-primary lg"},"Get your Ticket")))))),r.default.createElement(u.default,{theme:"light-bg",spacing:"spacing-both"},r.default.createElement("div",{className:"container"},r.default.createElement("div",{className:"grid"},r.default.createElement("div",{className:"shift-2"},r.default.createElement("div",{className:"section-title"},r.default.createElement("br",null),r.default.createElement("h2",null,"Blog"),r.default.createElement("br",null)))))),r.default.createElement(u.default,{theme:"light-bg",spacing:"spacing-bottom"},r.default.createElement("div",{className:"container"},r.default.createElement("div",{className:"grid"},r.default.createElement("div",{className:"article-list"},r.default.createElement("div",{className:"article"},r.default.createElement("h3",null,r.default.createElement("a",{href:"/blog/introducing-generator"},"The Venue")),r.default.createElement("div",{className:"meta"},"by"," ",r.default.createElement("a",{href:"https://twitter.com/vestimir",target:"_blank"},"Vestimir")),r.default.createElement("p",null,"Today we are excited to reveal the venue for Balkan Ruby! The conference will be held on 25th and 26th of May at Generator Sofia.")),r.default.createElement("div",{className:"article"},r.default.createElement("h3",null,r.default.createElement("a",{href:"/blog/cfp-time"},"CFP Time")),r.default.createElement("div",{className:"meta"},"by"," ",r.default.createElement("a",{href:"https://twitter.com/gsamokovarov",target:"_blank"},"Genadi")),r.default.createElement("p",null,"The Balkans are such a nice place to be and we can help you get here for free through our ",r.default.createElement("a",{href:"https://goo.gl/forms/uvxE2CR7I3fwYCtl2",targe:"_blank"},"Call for Papers"),"!")),r.default.createElement("div",{className:"article"},r.default.createElement("h3",null,r.default.createElement("a",{href:"/blog/announcement"},"Introducing Balkan Ruby")),r.default.createElement("div",{className:"meta"},"by"," ",r.default.createElement("a",{href:"https://twitter.com/gsamokovarov",target:"_blank"},"Genadi")),r.default.createElement("p",null,"Meet Balkan Ruby, an event not just for Bulgaria, but the whole Balkan region. With it, we aim to introduce the local communities to each other and invite developers from all over Europe to come, share and exchange ideas with us. The dates are 25th and 26th of May 2018, the city – Sofia, Bulgaria.")))))),r.default.createElement(u.default,{theme:"purple-bg",spacing:"spacing-both",id:"newsletter"},r.default.createElement("div",{className:"container"},r.default.createElement("div",{className:"grid"},r.default.createElement("div",{className:"shift-2"},r.default.createElement("div",{className:"section-title"},r.default.createElement("h2",null,"Subscribe for news")))))),r.default.createElement(u.default,{theme:"purple-bg",spacing:"none"},r.default.createElement("div",{className:"newsletter"},r.default.createElement("form",{action:"//balkanruby.us16.list-manage.com/subscribe/post?u=690a4f9d71c3a29f39792b453&id=d13d0bd575",method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",className:"validate",target:"_blank",noValidate:""},r.default.createElement("div",{className:"form-group"},r.default.createElement("input",{type:"email",value:"",name:"EMAIL",className:"required email",id:"mce-EMAIL",placeholder:"you@awesome.conf"})),r.default.createElement("div",{style:{position:"absolute",left:"-5000px"},"aria-hidden":"true"},r.default.createElement("input",{type:"text",name:"b_690a4f9d71c3a29f39792b453_d13d0bd575",tabIndex:"-1",value:""})),r.default.createElement("button",{type:"submit",value:"Subscribe",name:"subscribe",className:"btn-primary"},"Subscribe")))))}},277:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=a(0),r=n(i),o=a(83),s=n(o),l=a(194),u=n(l);t.default=function(e){var t=e.children;return r.default.createElement("div",null,r.default.createElement(s.default,null,r.default.createElement("title",null,"Balkan Ruby – 25-26 May, Sofia Bulgaria"),r.default.createElement("meta",{name:"description",content:"Brand new conference about Ruby and satellite technologies. Visit Sofia, Bulgaria and meet like-minded Ruby developers from all over Europe."})),t,r.default.createElement(u.default,null))}},278:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),i=function(e){return e&&e.__esModule?e:{default:e}}(n),r=function(e){var t=e.name,a=e.avatar,n=e.link,r=e.children;return i.default.createElement("div",{className:"fourth"},i.default.createElement("div",{className:"speaker"},i.default.createElement("a",{href:n},i.default.createElement("img",{src:a,alt:t})),i.default.createElement("div",{className:"content"},i.default.createElement("h4",null,i.default.createElement("a",{href:n,className:"card"},t)),r)))};t.default=r},279:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=a(43),r=n(i),o=a(280),s=n(o),l=a(0),u=n(l),c=a(81),d=n(c),m=function(e){var t=e.children,a=(0,s.default)(e,["children"]);return u.default.createElement(d.default,(0,r.default)({container:!0},a),u.default.createElement("div",{className:"speakers"},u.default.createElement("div",{className:"grid"},t)))};t.default=m},280:function(e,t,a){"use strict";t.__esModule=!0,t.default=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}},43:function(e,t,a){"use strict";t.__esModule=!0;var n=a(82),i=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=i.default||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}},96:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),i=function(e){return e&&e.__esModule?e:{default:e}}(n),r=function(e){var t=e.text,a=e.centered;return i.default.createElement("div",{className:"container"},i.default.createElement("div",{className:"grid"},i.default.createElement("div",{className:"text "+(a?"align-center":""),dangerouslySetInnerHTML:{__html:t}})))};r.defaultProps={centered:!1,text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate nostrum necessitatibus nisi deserunt illum similique, nam eius perspiciatis enim aliquam doloremque accusantium dolorem quos omnis quam, quo corporis aperiam tenetur dolorum cumque. Quas cum ducimus consequatur nobis explicabo, earum deleniti reiciendis pariatur perferendis quisquam cumque nihil tempore ad, repellendus ut praesentium molestiae deserunt rem sunt. Eius, nihil atque nobis obcaecati adipisci eligendi, inventore. Cupiditate magnam adipisci inventore eius repellat. Non odit, laudantium fugit, ea aut inventore illum amet aspernatur!"},t.default=r}},[275]);
            return { page: comp.default }
          })
        