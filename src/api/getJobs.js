export const getjob = async (payload) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const body = JSON.stringify(payload);
  const url = `https://api.weekday.technology/adhoc/getSampleJdJSON`;
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body,
  };
  const response = await fetch(url, requestOptions)
    .then((response) => response.json())
    .catch((error) => {
      return error;
    });

  return response
};
