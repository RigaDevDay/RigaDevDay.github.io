export const scheduleDay1Data = {
  "roomNames": [
    "Room 1",
    "Room 2",
    "Room 3",
    "Room 4",
    "Room 5"
  ],
  "trackNames": [
    "Java",
    "Mobile",
    "Mix",
    "Test Automation",
    "BI/Oracle"
  ],
  "schedule": [
    {
      "time": "8:30",
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
          "title": "Day 1 Opening"
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
          "title": "Keynote №1"
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
          "subtitle": "The Mayans Lost Guide to RxJava on Android",
          "description": "This is an introduction to RxJava on Android. Basically, we will walk  through the main concepts behind RxJava for Android and Reactive Programming, with examples, use cases and good practices when applying it on our projects. ",
          "speakers": [
            "2"
          ],
          "tags": [
            "Java",
            "Android"
          ]
        },
        {
          "subtitle": "The Language of Regular Expressions. So You Think You Can Speak It?",
          "description": "[Teaser: They are everywhere, they are magical and their knowledge can help you stand out from the crowd. They are also fast and can save time. Lots of time. Do you want to understand and learn to use them properly?]Want to slay the monsters that leave [stack-] traces in your log files or to tackle the naming conventions in your code? Maybe you just want to understand better the charms that has been written (cast) by others?In this workshop, we will be taking a deeper dive into regular expressions, their use and practical examples. We will start with a short intro to the mysterious world of reg.ex. and brush up on our knowledge before continuing on to more advanced topics like groups, greed, and backtracking. It will be an interactive presentation with demos.",
          "speakers": [
            "9"
          ],
          "tags": [
            "Tools"
          ]
        },
        {
          "subtitle": "Oracle 12c for Developers and SQL Model Clause: A Gentle Introduction ",
          "description": "Do you want to get up to speed with the most current release of the Oracle database? Then this session is for you. You will learn the most exciting and most useful new features from the Oracle Database 12c which can make your work as database developer a lot easier. There is more to the Oracle database 12c than just pluggable databases.",
          "speakers": [
            "12"
          ],
          "tags": [
            "Oracle's developer tools"
          ]
        },
        {
          "subtitle": "Migrating to Oracle Cloud using the Oracle Database In-Memory Advisor",
          "description": "The presentation is about best practices for how to test new Oracle options using Oracle database cloud. When a multitenant database running on premise needs to be migrated to the Oracle database cloud one should consider the performance load caused by one or more PDBs inside the container. Especially the impact of upgrading to in-memory (12.1.0.2) on the PDBs. We show how to use the in-memory advisor in order to tune the existing structures for in-memory and how to validate this on the database cloud using RAT & SQL tuning advisor.",
          "speakers": [
            "19"
          ],
          "tags": [
            "Oracle's developer tools"
          ]
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
          "subtitle": "Having fun with Javassist",
          "description": "Javassist makes Java bytecode manipulation simple. At ZeroTurnaround we use Javassist a lot to implement the integrations for our tools. In this talk we will go through the examples of how Javassist can be applied to alter the applications behaviour and do all kind of fun stuff with it. Why is it interesting? Because while trying to do unusual things in Java, you learn much more about the language and the platform itself and learning about Javassist will actually make you a better Java developer!",
          "speakers": [
            "7"
          ],
          "tags": [
            "Java"
          ]
        },
        {
          "subtitle": "Appium: Mobile Automation Made Awesome",
          "description": "The tools and practices refined over the last decade by web developers have not crossed over easily into the mobile community. Mobile devs have been without tools like continuous integration and automated testing, which enable delivery of high-quality apps more rapidly. A key piece of the solution for mobile is Appium, an open-source, cross-platform, language-agnostic mobile automation framework you can use to write automated UI tests for Android and iOS apps (native, hybrid, web), to be run on emulators or devices. In this talk we will explore the philosophy that underlies the work behind Appium, including the open-source nature of Appium’s diverse, active and friendly community. Then, after a brief explanation of the technology that powers Appium, we’ll move into the technical portion of the talk, where attendees will see easy it is to write Appium scripts using the WebDriver protocol in their favorite language.",
          "speakers": [
            "4"
          ],
          "tags": [
            "Android",
            "iOS",
            "Test Automation"
          ]
        },
        {
          "subtitle": "Integration Testing from the Trenches",
          "description": "When one uses Test-Driven Development, has more then 90% test coverage and the best Sonar metrics ever seen, and still finds regular bugs in his application, it is time for something more. Unit Testing is like testing a car's every nuts and bolts while Integration Testing is like leading it on a test drive: one cannot achieve high internal quality without the other. However, Integration Testing might seem very complex when put in place for the first several times; I have made many mistakes and have lost much time. In this presentation, I will present tools that helped me tremendously in Integration Testing, as well as proven tactics to get the best out of your tests.",
          "speakers": [
            "3"
          ],
          "tags": [
            "Test Automation"
          ]
        },
        {
          "subtitle": "Finding All the Red M&Ms: A Story of Indexes and Full Table Scans",
          "description": "'Why isn’t my query using an index?' is a common question people have when tuning SQL. This talk explores the factors that influence the optimizer’s decision behind this question. It does so by comparing fetching rows from a database table to finding all the red M&Ms from their bags. It contrasts using an index range scan and a full table scan to do this. It introduces the concepts of blocks and the clustering factor. It discusses how these affect the optimizer's calculations. It goes on to demonstrate how these concepts work in practice using real SQL queries. This session is intended for developers and DBAs who want to learn the basics of how the optimizer chooses between an index range or full table scan.",
          "speakers": [
            "16"
          ],
          "tags": [
            "Oracle's developer tools"
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
          "subtitle": "JSR377: What's up and what's next",
          "description": "JSR-377, the Desktop|Embedded Application API JSR has as a goal to standardize common behavior shared by many desktop applications. This behavior can also be applied to the emerging Java Embedded and Internet-of-Things applications. Because the JSR targets multiple toolkits (Swing, JavaFX, SWT and more) it's even possible to build applications targeting the mobile space (JavaFX on mobile). There are a good number of framework and platforms that deliver these features in their own way. In this talk we'll discuss the current state of this JSR and explore its features.",
          "speakers": [
            "13"
          ],
          "tags": [
            "IoT",
            "Java",
            "Embedded Programming"
          ]
        },
        {
          "subtitle": "An introduction to cross-platform development with Xamarin",
          "description": `Cross platform development is what many business consider as the holy grail.
There have been many attempts over the years and all have their flaws.
One of the major problems is that many solutions require learning a new language and skillset,
while that is often – if not always – the most valuable asset.
With Xamarin, it becomes possible to re-use C# skills to build iOS and Android applications and
on top of that, re-use much of the code base for both Windows 8 and Windows Phone 8 apps.
In this introduction session, we will take a look at how we can build apps using C#
which run on all platforms. We will also take a look at the different code-sharing strategies
which we have available, including PCLs, shared code and more.
With Xamarin, development can be done from Visual Studio as well as from Xamarin Studio;
we’ll show the different options here as well.
After this session, you’ll have a good overview of what Xamarin can help you with and
also what are the different building blocks of the platform.
`,
          "speakers": ["20"],
          "tags": ["Android", "iOS"]
        },
        {
          "subtitle": "Getting Your IoT Things Talking",
          "description": "As an increasing number of connected devices enter our world, we’re faced with the challenge of making sure these machines are able to quickly and efficiently talk to us and each other. REST APIs are an amazing way to facilitate these exchanges, but building endless custom APIs doesn’t scale. We’ll be looking at how the generation of reusable REST APIs via DreamFactory’s open source platform can be leveraged to get all the IoT things in your life chatting happily.",
          "speakers": [
            "10"
          ],
          "tags": [
            "IoT"
          ]
        },
        {
          "subtitle": "50 Shades of #Fail - OBI worst practices in real life",
          "description": `Lists of "best practices" as well as "how-to's" on the subject of Oracle BI and all its facets
are commonplace and often discussed. Real-life practices, however, are a completely different story.
What happens when implementations go astray or dogmatically follow half-knowledge, misconceptions,
or conveniently cheap shortcuts? Learn about recurring pitfalls, their origins, their impacts,
and most importantly their remedies in an entertaining fashion.
However bad you thought your project was, you’ve seen nothing yet...
<br/><br/>
Turning the standard best-practice/how-to presentation format on its head,
this presentation will look at some real-life OBIEE implementations and where it all went wrong.
We’ll look at the worst, the weirdest, the most absurd and the wackiest ways the Oracle BI tool is abused:
<ul>
    <li>How did projects get to these points?</li>
    <li>What were the original misconceptions?</li>
    <li>How to counter these misconceptions?</li>
    <li>Why are "it works" and "it fulfills the requirements" not only not enough but rather dangerous pitfalls?</li>
    <li>Can I actually jeopardize the future of my BI system by choosing a cheap quick and dirty approach?</li>
    <li>Is it ever OK to simply execute without comprehension?</li>
</ul>
This session will give attendees a deeper understanding of the impact seemingly innocuous design and implementation
decisions can have on the stability and success of an entire BI system.
An end-to-end view of the stack will be taken, covering areas including logical modelling, analysis design,
and architectural topics. The importance of a holistic view and an appreciation of alternatives will be emphasized
as well as the need to understand, comprehend and reflect on the implications of a “best practice” being
followed as well as the technology stack simply being misunderstood.`,
          "speakers": ["24"],
          // todo: add tags
          "tags": []
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
          "subtitle": "Prepare for JDK 9!",
          "description": `The modularization of the Java SE Platform in JDK 9 will bring many benefits, but also many changes.
Existing code that uses only official Java SE Platform APIs and supported JDK-specific APIs should continue to work without change.
Code that uses certain deprecated features, however, or any JDK-internal APIs, is likely to break.
This session will show you how to prepare existing libraries and applications for JDK 9,
and how to get old code working on JDK 9 even when you can't update it.`,
          "speakers": ["25"],
          "tags": ["Java"]
        },
        {
          "subtitle": "?"
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
          "subtitle": "If You Don't Have a Mobile Strategy You Don't Have a Strategy",
          "description": "Regardless of how you slice and dice the figures, facts or opinions, mobile is the “internet” of today’s Millennial generation.   So what is your strategy with dealing with a cloud-embracing, socially-involved, always-connected, mobile consumer base?   The very people who are not only your future customers and employees, are probably already the majority of your consumers today. In this presentation I’m going to give an insight of the challenges presented by mobile then take a dive into the tools and technologies that we are developing here at Oracle to allow you to implement that strategy.  I’ll show you how you can build on-device mobile applications.  I’ll discuss the challenges of web applications on mobile. I’ll ditch the powerpoints  and demo some of our current and future cloud based offerings for exposing your existing legacy assets to mobile consumers.  And I’ll even show you how you can develop mobile and cloud based applications, from a mobile device! The future is here, its mobile and if you don’t have mobile strategy you don’t have a strategy.",
          "speakers": [
            "26"
          ],
          "tags": ["Oracle's developer tools", "Mobile", "Cloud Technologies"]
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
      "endTime": "19:00",
      "icon": "speaker",
      "color": "dark-blue",
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
          "subtitle": "?"
        },
        {
          "subtitle": "?"
        },
        {
          "subtitle": "?"
        },
        {
          "subtitle": "Back2Basics: A day in the life of an Oracle BI query",
          "description": `Oracle BI is in use since years, has gone through many interations and
is wide-spread across projects around the globe. Millions of analyses have been created,
deployed and run billions of times. The actual lifecycle of an Oracle BI query from its inception through
to the effective delivery of results may therefor be regarded as a given commodity not requiring a closer look.
Few people have regarded an OBI query from the point of view "How does it get constructed? How does it get translated between the different architectural components and the RPD layers? How, through what and where does its lifecycle get influenced? Where can we as users/developers/administrators actively intervene with its makeup and structure? Why do we genuinely have to have an understanding of the subtleties of the life-cycle in order to create successful BI solutions?"
<br><br>
The purpose of this presentation is to serve as an introductory session for beginners while at
the same serving as a reflective discussion of a topic regarded as "god-given / it just IS" by the wider
population of users (including intermediates). Theoretical examination of the possible steps and paths the query
lifecycle can take is depicted with simple but speaking examples.
The impact of factors like basic analysis construction in Answers, advanced SQL clauses, caching,
business model peculiarities like multi-star queries, snowflaking and LTS modelling as well as physical
layer settings like call interfaces, data source parametrization or inclusion of hints in the RPD are to be showcased.`,
          "speakers": [
            "24"
          ],
          "tags": [ "Oracle's developer tools"
          ]
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
          "title": "Networking party"
        }
      ]
    }
  ]
};
