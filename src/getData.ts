export default async function getData() {
  callYelp()
}

async function callYelp(lat: Number = 44.9379079, lng: Number = -93.1710553, term: String = "gyro") {
  console.log(process.env)

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`
    }
  }

  fetch(`/search?latitude=${lat}&longitude=${lng}&sort_by=distance&limit=20`, options)
  .then(response => response.json())
  .catch(err => console.error(err));
}
