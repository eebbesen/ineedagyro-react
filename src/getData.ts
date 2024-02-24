export default function getData(lat: Number, lng: Number) {
  return callYelp(lat, lng);
}

function callYelp(
  lat: Number = 44.9379079,
  lng: Number = -93.1710553,
  term: String = "gyro",
) {
  if (lat === 0 || lng === 0) {
    return Promise.resolve({ businesses: [] });
  }

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`,
    },
  };

  return fetch(
    `/search?latitude=${lat}&longitude=${lng}&term=${term}&sort_by=distance&limit=20`,
    options,
  )
    .then((response) => response.json())
    .then((json) => {
      return json;
    })
    .catch((err) => console.error(err));
}
