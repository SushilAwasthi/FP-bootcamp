export async function fetchData(url, method = "Get", data = {}) {
  let hasBody = Object.keys(data).length > 0;
  let options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    ...(hasBody && { body: JSON.stringify(data) }),
  };
  const response = await fetch(url, options);
  return response.json();
}

// export function request(url, method = "GET", data = {}) {
//   switch (method) {
//     case "GET":
//       return handleGetRequest(url);
//     case "POST":
//       return handlePostRequest(url, data);
//     default:
//       console.log(invalid);
//   }
// }

// async function handleGetRequest(url) {
//   let response;
//   await fetch(url, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((data) => data.json())
//     .then((result) => {
//       response = result;
//     });
//   return response;
// }

// function handlePostRequest(url, data = {}) {
//   return fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
// }
