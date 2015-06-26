angular.module('starter.services', [])
.factory('Sessions',['$http','$stateParams', function($http, $stateParams){
  var sessions = []; //private var
  return {
     getSessionData: function(){
      return $http.get('js/dataseed.json').success(function(data){
        // console.log('called getSessionData...')
        // console.log('getSessionData(in factory):', data)
        sessions = data;
        console.log('sessions info:', sessions.length)//why undefined??
        console.log('data info:', data.length)//undefined??
        return data;
      });
    }, //don't forget to separate func with commas!

    getASession: function(sessionId){
      console.log('Testing $stateParams:', $stateParams);

      for(var i=0; i < sessions.length; i++) {
        if (sessions[i].id === parseInt(sessionId)) {
          return sessions[i];
        }
      }
      return null;
    }

  }


}])

// var sessions = [
// {
//   id:0,
//   title:'Registration Sign-in',
//   date:'Mon June 29 - 7:30am-5:00pm',
//   room:'Front lobby',
//   speaker:'-'
// },
// {
//   id:1,
//   title:'New Program Institutes',
//   date:'Mon June 29 - 9:00am-10:00am',
//   room:'Catalina/Madera',
//   speaker:'Rosa Molina'
// },
// {
//   id:2,
//   title:'Cultural Diversity Institute',
//   date:'Mon June 29 - 9:00am-10:00am',
//   room:'Mojave',
//   speaker:'John Doe, Jane Doe'
// },
// {
//   id:3,
//   title:'Nuts & Bolts Middle School Institute',
//   date:'Mon June 29 - 9:00am-10:00am',
//   room:'San Jacinto',
//   speaker:'John Doe'
// },
// {
//   id:4,
//   title:'High School Institute',
//   date:'Mon June 29 - 9:00am-10:00am',
//   room:'Santa Rosa',
//   speaker:''
// },
// {
//   id:5,
//   title:'Exhibitors',
//   date:'Tue June 30 - 7:30am-5:00pm',
//   room:'Renaissance Hotel Hallways in front of the Ballroom',
//   speaker:'-'
// }
// ];

  // return {
  //   // all: function() {
  //   //   return sessions;
  //   // },
  //   get: function(sessionId){
  //     for(var i=0; i < sessions.length; i++) {
  //       if (sessions[i].id === parseInt(sessionId)) {
  //         return sessions[i];
  //       }
  //     }
  //     return null;
  //   }
  // };


.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  },{
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
