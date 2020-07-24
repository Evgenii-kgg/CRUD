export const netWorkService = ({ url, method, body }) => {
  console.log("dfdf", method, body);

  const name = body ? JSON.stringify(body) : null;

  return fetch(`http://localhost:7777/${url}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: name,
  }).then((res) => {
    if (res.status !== 204) {
      console.log(res);
      return res.json();
    } else {
      return res;
    }
  });
};
