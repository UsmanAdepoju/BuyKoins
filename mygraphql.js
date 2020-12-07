const github_data = {
    "token": "465cd29899dabf6b34fe0421814a79043391a63e",
    "username": "usmanadepoju"
};

const fetch = require("node-fetch");


// const body = {
//     "query": `
//     {
//       viewer {
//         name
//         repositories(last: 10) {
//           nodes {
//             name
//             primaryLanguage {
//               color
//               name
//               id
//             }
//             description
//             updatedAt
//           }
//         }
//       }
//     }
//     `
// };

const myProfile={
  "query":`
  query{
    user(login: "usmanadepoju") {
      name
      login
      avatarUrl
      bio
      createdAt
      status {
        emoji
        emojiHTML
      }
    }
  }
  `
}


const baseUrl = "https://api.github.com/graphql";

const headers = {
    "Content-Type": "application/json",
    Authorization: "bearer "+github_data["token"]
}

var info;

(async()=>{
const response = await fetch(baseUrl,{
  method: "POST",
  headers: headers,
  body: JSON.stringify(myProfile)
});
const output = await response.json()
info=data
console.log(output)
})();

// fetch(baseUrl, {
//     method: "POST",
//     headers: headers,
//     body: JSON.stringify(myProfile)
// }).
// then(r =>r.text())
// .then(data=>
//     console.log(JSON.stringify(data))
// );

