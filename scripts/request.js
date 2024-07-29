// export async function fetchData(url, method = "Get", data = {}) {
//   let hasBody = Object.keys(data).length > 0;
//   let options = {
//     method,
//     headers: {
//       "Content-Type": "application/json",
//     },
//     ...(hasBody && { body: JSON.stringify(data) }),
//   };
//   const response = await fetch(url, options);
//   return response.json();
// }

export function request(url, method = "GET", data = {}) {
  switch (method) {
    case "GET":
      return handleGetRequest(url);
    case "POST":
      return handlePostRequest(url, data);
    default:
      console.log("Invalid method");
  }
}

async function handleGetRequest(url) {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return result;
}

async function handlePostRequest(url, data) {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return result;
}
