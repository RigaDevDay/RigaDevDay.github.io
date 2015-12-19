export const scheduleDay2Data = {
  "roomNames": [
    "Room 1",
    "Room 2",
    "Room 3",
    "Room 4",
    "Room 5"
  ],
  "trackNames": [
    "Java",
    "Internet of Things",
    "Web",
    "DevOps",
    "Mix"
  ],
  "schedule": [
    {
      "time": "9:00",
      "endTime": "10.00",
      "icon": "registration",
      "color": "light-blue",
      "events": [
        {
          "title": "Registration"
        }
      ]
    },
    {
      "time": "10.00",
      "endTime": "10:20",
      "icon": "clock",
      "color": "dark-blue",
      "events": [
        {
          "title": "Day 2 Opening"
        }
      ]
    },
    {
      "time": "10:20",
      "endTime": "11:00",
      "icon": "speaker",
      "color": "dark-blue",
      "events": [
        {
          "subtitle": "The Web - What it Has, What it Lacks and Where it Must Go",
          "description": "Taking a look at the web where it is today: the myriad of new features and possibilities we have gotten, and how the web needs to evolve to stay relevant. To give a perspective on where it came from and also comparing it to other platforms to see where we need to move forward. Getting a perspective on SLICE, Progressive Apps and thoughts about how the web can, and should be, unique.",
          "speakers": [
            "1"
          ],
          "tags": [
            "Web",
            "Mobile"
          ]
        }
      ]
    },
    {
      "time": "11:00",
      "endTime": "11:30",
      "icon": "coffee",
      "color": "light-blue",
      "events": [
        {
          "title": "Coffee Pause"
        }
      ]
    },
    {
      "time": "11:30",
      "endTime": "12:30",
      "icon": "speaker",
      "color": "dark-blue",
      "events": [
        {
          "subtitle": "Modern Java Component Design with Spring 4.3",
          "description": "Spring's programming and configuration model has a strong design philosophy with respect to application components and configuration artifacts. Spring's annotation-based component story is fine-tuned for source code readability as well as consistency across an entire application's codebase. This session presents selected Spring Framework 4 component model highlights, with a focus on the upcoming Spring Framework 4.3 and a selection of Java 8 enabled features, illustrated with many code examples and noteworthy design considerations.",
          "speakers": [
            "0"
          ],
          "tags": [
            "Java"
          ]
        },
        {
          "subtitle": "Angular 2 Component Router",
          "description": `Angular 2 comes with a new router that replaces previous ngRoute. We will compare the new router with ui-router and show how we can setup multiple views and nested routes.`,
          "speakers": [
            "27"
          ],
          "tags": [
            "Web", "JavaScript"
          ]

        },
        {
          "subtitle": "Kotlin on Android",
          "description": "Développement Android Apple has introduced “a better language” for iOS developers. But what options do we have for Android? Surely Kotlin should be under consideration! Android Studio is now based on Intellij Idea, the “native” environment for Kotlin. Kotlin is a modern language for industry. It can help you reduce the amount of code you write for Android applications and at the same time make it readable and more maintainable. In this session we are going to talk a bit why JetBrains sees the potential in Kotlin comparing to other JVM languages. Then we’ll see how certain language constructs can be used to make Android more enjoyable. Also we’ll look at a DSL for type-safe dynamic layouts and a simple extension plugin that helps to avoid writing ‘findViewById()’ all the time.",
          "speakers": [
            "18"
          ],
          "tags": [
            "Android"
          ]
        },
        {
          "subtitle": "Java, Docker and 'The Cloud'",
          "description": "Deploying your application to the production has failed again. Emailing the developer who commited the last code changes, they send back the classic response... “It works on my machine”. *sigh* Is this scenario a recurring nightmare (and reality) for you? While everyone else is talking about “continuous delivery” do your deployments feel more like an extreme game of Jenga, tittering on the brink of disaster and a nightmare to reconstruct? It doesn’t have to be like this. Launched only two years ago, Docker has revolutionised application deployment. Using this open-source project, applications are packaged into lightweight containers, that are hardware and platform agnostic. Containers move from the local developer machine to a production server and then the cloud without modification! So, how do you migrate a traditional three-tier Java web application to use Docker? Let’s use a sample web application, designed for hosting on a single server, convert it to use Docker and deploy to a cloud platform. We’ll break out the application and component services into individual containers that can be ran and scaled independently. Showing you how to utilise existing pre-built images for rapid development, build custom container images for your application and move seamlessly between deployment platforms, enabling us to use “cloud” to accelerate application development. We will configure automatic build, test and deploy pipelines for continuous deployment and auto-scaling to handle unpredictable application traffic with ease. If you’re an application developer who’s exhausted from battling deployment issues, maintaining ”special” production servers and lives in fear of being on ”pager duty”, come and learn how you can use Docker to banish “works on my machine” syndrome. This talk is for developers who’ve heard about this “Docker thing” and want to see a practical example of converting a traditional monolithic web application to use Docker containers deployed to a scalable cloud platform.",
          "speakers": [
            "15"
          ],
          "tags": [
            "Java",
            "Cloud"
          ]
        },
        {
          "subtitle": "?"
        }
      ]
    },
    {
      "time": "12:30",
      "endTime": "13:30",
      "icon": "lunch",
      "color": "light-blue",
      "events": [
        {
          "title": "Lunch"
        }
      ]
    },
    {
      "time": "13:30",
      "endTime": "14:30",
      "icon": "speaker",
      "color": "black",
      "events": [
        {
          "subtitle": "Spring Data, Hypermedia and the Cloud",
          "description": `HATEOAS, REST, JSON Schema, APLS, Cloud, Docker,... are those just buzzwords? <br/>
No! With Spring Data we allow you to expose your repositories as a REST resource including ALPS metadata,
JSON Schema and simply everything you would probably expect. Join Christoph Strobl on his journey through the Spring stack
while creating and deploying REST Services as Docker containers, on Cloud Foundry and Lattice.`,
          "speakers": [
            "22"
          ],
          "tags": [
            "Java", "Web"
          ]
        },
        {
          "subtitle": "Why postgres SQL deserve noSQL fan respect",
          "description": "Postgres SQL is a plain old SQL DB. Very powerful and very consistent, in some case, project needs an ACID database, but schemaless… With JSON support, postgres is a very interesting tool to provide ACID and some very interesting function (time management, localisation function and data types...) and the schemaless noSQL point of view with json and indexed json. This talk show some great usage and some insigth to build some great application with postgres.",
          "speakers": [
            "17"
          ],
          "tags": [
            "SQL"
          ]
        },
        {
          "subtitle": "Entering the new era of Front-end development with ReactJS",
          "description": "ReactJS is not just yet another framework to be forgotten after few years, it shifts the concepts of modern front-end development giving us the scalability and control we always strived about. Robert will guide you through key concepts of ReactJS based applications covering all aspects of full stack development and maintenance. This includes component development approach, deep integrated into ReactJS architecture and React Native, which allows to reuse most of UI code, still using the power of Native UI.",
          "speakers": [
            "5"
          ],
          "tags": [
            "Web"
          ]
        },
        {
          "subtitle": "Fabric8 Camel Microservices for Docker and Kubernetes",
          "description": `The so-called experts are saying microservices and containers will change the way we build, maintain, operate, and integrate applications. This talk is intended for Java developers who wants to hear and see how you can develop Java microservices that runs in containers.
<br><br>
This talk uses Apache Camel as the Java library to build microservice architectured applications.
At first we introduce you to Apache Camel and show how you can easily get started with Camel on your computer, and build a microservice application that runs on CDI and Spring-Boot.
<br><br>
The second part of this talk is about running Camel (or any Java project) on Docker and Kubernetes.
<br><br>
We start covering the basic concepts you as a Java developer must understand about Kubernetes. Then we show how to migrate Java projects to build as Docker images and deployable on Kubernetes, with help from fabric8 Maven tooling.
<br><br>
You will also hear about how to make your microservices scalable and distributed by leveraging the facilities that Kubernetes provides for truly distributed services with load balancing and location independence.
<br><br>
You will also see how to manage your container using the Kubernetes CLI and the fabric8 web console.
<br><br>
At the end we have a bit of fun with scaling up and down your Camel application to see how resilient the application is, when we kill containers.
<br><br>
This talk is a 50/50 mix between slides and demo.`,
          "speakers": ["28"],
          "tags": ["Java", "DevOps"]
        },
        {
          "subtitle": "?"
        }
      ]
    },
    {
      "time": "14:30",
      "endTime": "15:30",
      "icon": "speaker",
      "color": "dark-blue",
      "events": [
        {
          "subtitle": "Testing with Spock. The logical choice",
          "description": "Remember the old days when you tested using JUnit? How boring it was? You made a lot of excuses to avoid testing your code. Luckily those dark days now belong to the past because Spock is with us.Spock is a Groovy-based testing and specification framework for Java and Groovy applications that makes writing tests fun again. We can write beautiful and highly expressive tests because of its DSL and all the power that Groovy provides us.In this talk you'll learn the basics of Spock and you'll see how easily you can test a Java application. After the talk you won't have any excuse to don't test your applications, so you have been warned before coming to the talk!",
          "speakers": [
            "8"
          ],
          "tags": [
            "Groovy",
            "BDD",
            "Test Automation"
          ]
        },
        {
          "subtitle": "Apache Zeppelin, the missing component for your BigData eco-system",
          "description": "If you are interested in Big Data, you surely have heard about Apache Spark or Apache Cassandra, but do you know Apache Zeppelin ? Do you know that it is possible to draw out beautiful graph using an user-friendly interface out of your Spark RDD  or out of Cassandra queries ? In this session, I will introduce Zeppelin by live coding example and highlight its modular architecture which allows you to plug-in any interpreter for the back-end of your choice.",
          "speakers": [
            "6"
          ],
          "tags": [
            "BigData"
          ]
        },
        {
          "subtitle": "Angular2: key concepts and getting started",
          "description": `On this presentation first we'll go shortly through history of Angular for better understanding what Angular2 was introduced for and why it's not backward-compatible with 1.x.
<br><br>
Then we'll list key concepts of Angular2 like cross-component communication, one-directional data flow, user input handling and url routing and others.
<br><br>
As a result of our practical hands-on tour we'll discuss the main tools for making our Angular2 life easier and build a functioning app.`,
          "speakers": ["29"],
          "tags": ["Web", "JavaScript"]
        },
        {
          "subtitle": "Jenkins at your (continuous) service",
          "description": "Jenkins is always ready to serve your software delivery automation needs. And even though there are other alternatives, it is considered a de facto tool that many teams turn to when they need simplicity and rich set of features for their automation. This talk will give an overview of Jenkins ecosystem and its capabilities. As well as it will provide some tips and tricks on what you probably didn't know about Jenkins and it's use cases.",
          "speakers": [
            "14"
          ],
          "tags": [
            "DevOps"
          ]
        },
        {
          "subtitle": "?"
        }
      ]
    },
    {
      "time": "15:30",
      "endTime": "16:00",
      "icon": "coffee",
      "color": "light-blue",
      "events": [
        {
          "title": "Coffee Pause"
        }
      ]
    },
    {
      "time": "16:00",
      "endTime": "17:00",
      "icon": "speaker",
      "color": "dark-blue",
      "events": [
        {
          "subtitle": "Painfree Object-Document Mapping for MongoDB",
          "description": "Morphia is MongoDB's JPA-like Object-Document Mapping (ODM). However, there is no object-relational impedence mismatch since documents fit the concept of object-orientation much better. This removes a lot of JPA pain, which makes database interactions fun again. On a practical level we take a look at the available annotations and how to map your objects as well as how to easily query data in MongoDB. Next we discuss some patterns on how to solve common requirements, such as the proper use of generics, auto-increments, and the encryption of sensitive data. The talk concludes with some tips and lessons we've learned from using Morphia in production for three years.",
          "speakers": [
            "11"
          ],
          "tags": [
            "Java",
            "NoSQL"
          ]
        },
        {
          "subtitle": "?"
        },
        {
          "subtitle": "WebGL & WebVR: Take the web to the third dimension",
          "description": `In this talk you will learn how to unlock the 3rd dimension on the web and use it to create impressive new visualisations, stories and experiences.
<br><br>
You will see how WebGL can then be taken even further by using technologies such as Oculus Rift, Google Cardboard or LEAPMotion with WebVR to enable truly immersive experiences right from your browser.
<br><br>
We will start with the basics of WebGL and the render pipeline, see how 3D on the web has evolved and what can be done with it and then do a little live coding that will conclude with how Virtual Reality can be implemented with web technologies.`,
          "speakers": [
            "21"
          ],
          "tags": [
            "Web"
          ]
        },
        {
          "subtitle": "Field Notes of Command Line Ninja",
          "description": "Have you ever witnessed someone write fancy commands and perform magic from the console. Have you ever wished you could learn, or brush up on, those skills too? Maybe you want to be more effective at your everyday tasks, or need a new topic for the next family dinner? Join us and learn some awesome command line ninja skills. You will be able to find something new no matter your level of experience. The audience will get a chance to show off their skills as well, and there will be small prizes to contributors. The black belt and a little surprise await you at the end of this talk. You can bring your PC with you and hack-along! All you need is a PC or a Mac running OS of your choice - Windows, Linux, or Mac OS. Windows users are advised to have their cmd.exe ready, and to install Cygwin (32-bit).",
          "speakers": [
            "9"
          ],
          "tags": [
            "DevOps",
            "Tools"
          ]
        },
        {
          "subtitle": "?"
        }
      ]
    },
    {
      "time": "17:00",
      "endTime": "18:00",
      "icon": "speaker",
      "color": "dark-blue",
      "events": [
        {
          "subtitle": "Spring Framework 5 - Preview & Roadmap",
          "description": "The Spring team is busily working on Spring Framework 5.0, with a release candidate scheduled for Q4 2016. This presentation covers the key themes in Spring 5, based on the current state of development: going Java 8+ across the entire framework codebase, comprehensive support for JDK 9, a strong focus on HTTP/2, and first-class support for Spring-style reactive architectures.",
          "speakers": [
            "0"
          ],
          "tags": [
            "Java"
          ]
        },
        {
          "subtitle": "?"
        },
        {
          "subtitle": "Hello EcmaScript2015... and also to you, EcmaScript2016",
          "description": `EcmaScript, the standard which is the base for JavaScript, is finally starting to move
fast. It is making JavaScript better and better, providing various different tools to
solve our common everyday programming tasks.
<br><br>
In this session we will go through what’s new with ES2015 and ES2016, and even
get a glimpse of what the exciting future holds for web development!`,
          "speakers": ["31"],
          "tags": ["JavaScript"]
        },
        {
          "subtitle": "It's not always application's fault",
          "description": `Infrastructure primer for busy developer. Tells what can go wrong when you deploy your application,
where infrastructure may influence the end result.
<br><br>
Tells devops what they need to give/teach their developers, offering hints how to do so.
<br>
Takes viewer through: monitoring, backups, server room, virtualization, sharing, common problems and offers insight.
<br><br>
Flash-based version of this talk is on <a href="http://prezi.com/7usyzvjmj0io/?utm_campaign=share&utm_medium=copy">Prezi</a>.
<br>
Presented on Atmosphere, Java Developer Days, ChamberConf and Java Day Lviv.`,
          "speakers": ["23"],
          "tags": ["DevOps"]
        },
        {
          "subtitle": "?"
        }
      ]
    },
    {
      "time": "18:00",
      "endTime": "19:00",
      "icon": "speaker",
      "color": "light-blue",
      "events": [
        {
          "title": "Closing Keynote"
        }
      ]
    },
    {
      "time": "19:00",
      "endTime": "19:30",
      "icon": "afterparty",
      "color": "light-blue",
      "events": [
        {
          "title": "End of Day 2"
        }
      ]
    }
  ]
};
