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
          "subtitle": "Spring Framework 5 - Preview & Roadmap",
          "description": "The Spring team is already working on Spring Framework 5.0, with milestones to appear throughout the year and a release candidate scheduled for autumn 2016. This presentation covers the key themes in Spring 5: going Java 8+ across the entire framework codebase, comprehensive support for JDK 9, and first-class support for Spring-style reactive architectures. We'll cover the current state of development as well as the remaining roadmap.",
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
          "subtitle": "Automated Android CI, how hard can it be?",
          "description": "I'm not an Android developer by far, but I'm working in a mobile development team as the DevOps guy, which basically translates to do anything that is not related to development proper. When I was introduced to the team, they had hacked something on a Bamboo server, based on custom Python scripts that uploaded the binaries to a Hockeykit, completely decoupled from the Maven build and the Nexus repository. The they decided to switch to Gradle... In this presentation, I will describe how I migrated from this situation to the following: * a full-fledged Jenkins server provisioned with Puppet * provisioning of the Android SDK manager * provisioning of Gradle * updates of the platforms, extras and repositories behind the entreprise proxy * creation of Gradle jobs managing Hockeykit files creation, upload of the whole outputs to Nexus and tagging Git for releases builds",
          "speakers": [
            "3"
          ],
          "tags": [
            "DevOps",
            "Android"
          ]
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
          "subtitle": "?"
        },
        {
          "subtitle": "?"
        },
        {
          "subtitle": "?"
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
          "subtitle": "?"
        },
        {
          "subtitle": "?"
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
      "time": "17:00",
      "endTime": "18:00",
      "icon": "speaker",
      "color": "dark-blue",
      "events": [
        {
          "subtitle": "?"
        },
        {
          "subtitle": "?"
        },
        {
          "subtitle": "?"
        },
        {
          "subtitle": "?"
        },
        {
          "subtitle": "?"
        }
      ]
    },
    {
      "time": "18:00",
      "endTime": "18:30",
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
