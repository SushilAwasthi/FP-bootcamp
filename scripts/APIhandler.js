import { serialize } from "v8";

export function request(url, method = "GET", data = {}) {
  switch (method) {
    case "GET":
      return handleGetRequest(url);
    case "POST":
      return handlePostRequest(url, data);
    default:
      console.log("invalid http method");
  }
}
async function handleGetRequest(url) {
  let response;
  await fetch(url, {
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((data) => data.json())
    .then((result) => {
      response["success"] = true;
      response["data"] = serialize(result);
    })
    .catch((error) => {
      response["success"] = false;
      response["message"] = error.msg;
    });
  return response;
}

async function handlePostRequest(url, data = {}) {
  let response;
  await fetch(url, {
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((data) => data.json())
    .then((result) => {
      response["success"] = true;
      response["data"] = serialize(result);
    })
    .catch((error) => {
      response["success"] = false;
      response["message"] = error.msg;
    });
  return response;
}
