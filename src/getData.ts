export default function getData() {
  return callYelp()
}

function callYelp(lat: Number = 44.9379079, lng: Number = -93.1710553, term: String = "gyro") {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`
    }
  }

  return fetch(`/search?latitude=${lat}&longitude=${lng}&term=${term}&sort_by=distance&limit=20`, options)
    .then(response => response.json())
    .then(json => {
      return json
    })
    .catch(err => console.error(err));
}
