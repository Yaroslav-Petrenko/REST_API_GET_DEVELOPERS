const request = async (url, method = 'GET', data = null) => {
  try {
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    //  return await response.json();
    // return responseFromServer
  } catch (err) {
    console.error(err);
  }
};

export default request;
