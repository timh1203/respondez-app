// (OAO technique)
// Structure: Object > Array > Object 
// Array methods (shift, unshift, push, pop) for objects inside arr
// Good if you need to add new events to the top of a list
// {
//   arr: [
//     {...newevent} // use unshift
//     {...event2},
//     {...event1}
//   ]
// }

const sampleEvents = {
  arr: [
    {
      eid: "event11",
      eventName: "Code & Coffee #09",
      date: "Saturday, December 2, 2017",
      time: "12:00 pm",
      location: "Starbucks at One Loudoun",
      details: "November sure went by quick, pretty soon it will be X-mas before you know it! Come hang out and code before Jan and Feb weather hits. We've been working on pushing through courses and building projects. Some of us trying to still apply for jobs too. Whatever you're working on, come on through! Come and go as you please, new friends welcome, and have a good time!",
      creator: "Timothy Hoang",
      attendees: [
        {
          uid: "brianuid",
          name: "Brian Mendoza",
          avatar: "https://avatars0.githubusercontent.com/u/31445238",
          bio: "Full stack developer in MEAN (MongoDB, Express, Angular, Node.js), Python (Django, Flask), Java (Spring Boot)",
          github: "https://github.com/bcmendoza",
          blog: ""
        },
        {
          uid: "juanuid",
          name: "Juan Sierra",
          avatar: "https://avatars1.githubusercontent.com/u/8007671",
          bio: "front-end things",
          github: "https://github.com/juan-sierra",
          blog: "",
        },
        {
          uid: "peteruid",
          name: "Peter CruckShank",
          avatar: "https://avatars3.githubusercontent.com/u/26460352",
          bio:"I have an associates in Information Technology, and I excited to get back into coding! I had to take some time off, but I'm back. I live on Cape Cod in MA.",
          github: "https://github.com/petercr",
          blog: ""
        }
      ]
    },
    {
      eid: "event10",
      eventName: "Code & Coffee #08",
      date: "Sunday, November 25, 2017",
      time: "12:00 pm",
      location: "Starbucks at One Loudoun",
      details: "Happy Thanksgiving everyone! Come share company with us over some coffee. We thankful for this space and the people that make up FCCA. Come hang out with us and discuss whatever projects you're working on or just to talk tech! Stay short or long, make friends, and get coding!",
      creator: "Timothy Hoang",
      attendees: [
        // {
        //   uid: "juanuid",
        //   name: "Juan Sierra",
        //   avatar: "https://avatars1.githubusercontent.com/u/8007671",
        //   bio: "front-end things",
        //   github: "https://github.com/juan-sierra",
        //   blog: "",
        // },
      ],
    },
    {
      eid: "event9", 
      eventName: "FIELD TRIP: DC Networking Event",
      date: "Sunday, November 11, 2017",
      time: "11:00 am",
      location: "Meet at Wiehle-Reston Metro, Event held in D.C.",
      details: "Link to the MeetUp event here: https://www.meetup.com/ITprofessionals/events/244235345/. Hey guys, we're headed to a social/networking event for tech folks. We won't be having our Code and Coffee #08 this week obviously. 1) Leaving Wiehle-Reston East Metro station at 11AM 2) Arriving at Foggy-Bottom GWU station and walk over to the event 3) No specified end time for the event so I think we will stay until 3PM 4) Message me on PM or Flock if you need my phone number to link up",
      creator: "Timothy Hoang",
      attendees: [
        {
          uid: "brianuid",
          name: "Brian Mendoza",
          avatar: "https://avatars0.githubusercontent.com/u/31445238",
          bio: "Full stack developer in MEAN (MongoDB, Express, Angular, Node.js), Python (Django, Flask), Java (Spring Boot)",
          github: "https://github.com/bcmendoza",
          blog: ""
        },
        {
          uid: "peteruid",
          name: "Peter CruckShank",
          avatar: "https://avatars3.githubusercontent.com/u/26460352",
          bio:"I have an associates in Information Technology, and I excited to get back into coding! I had to take some time off, but I'm back. I live on Cape Cod in MA.",
          github: "https://github.com/petercr",
          blog: ""
        }
      ]
    }
  ]
}

export default sampleEvents