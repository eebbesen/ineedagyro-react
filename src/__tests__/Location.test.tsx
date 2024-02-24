import { render, screen } from "@testing-library/react";
import Location from "../Location";

test("renders Location", () => {
  const props = {
    key: "gyro-shop-saint-paul",
    alias: "gyro-shop-saint-paul",
    name: "Gyro Shop",
    location: { address1: "1234 Main Street" },
    distance: 55.12345,
    url: "https://gyros.gyros",
  };
  render(<Location {...props} />);

  const location = screen.getByRole("link");

  expect(location).toBeInTheDocument();
  expect(location).toHaveAttribute("href", props.url);
  expect(location.innerHTML).toBe(
    `<div class="location-name">${props.name}</div><div class="location-address lefty">${props.location.address1}</div><div class="location-distance righty">${props.distance.toFixed(2)} meters</div>`,
  );
});
