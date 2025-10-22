export const dummyWeather = async ({ timePeriod } : { timePeriod?: string | null }) => {
    // Simulate API delay of 2 seconds to display loading state in UI
    await new Promise(resolve => setTimeout(resolve, 2000));

    /**
    * Generate a random error with a certain probability
    * to simulate API failure and show error state in the UI.
    */
    if (Math.random() < 0.1) {
    throw new Error('Random API error occurred. Please try again.');
    }

    switch (timePeriod) {
      case 'day': {
        return {
        id: 2,
        city: "London",
        country: "UK",
        temperature: "15°C",
        condition: "Cloudy",
        humidity: "70%",
        wind: "9 mph",
        pressure: "1017 mb"
        }
      }
      case 'month': {
        return {
        id: 3,
        city: "London",
        country: "UK",
        temperature: "12°C",
        condition: "Rainy",
        humidity: "80%",
        wind: "12 mph",
        pressure: "1012 mb",
      }
      }
      case 'year': {
        return {
        id: 4,
        city: "London",
        country: "UK",
        temperature: "10°C",
        condition: "Snowy",
        humidity: "85%",
        wind: "15 mph",
        pressure: "1008 mb",
      }
      }
      default : {
        return {
          id: 2,
          city: "London",
          country: "UK",
          temperature: "15°C",
          condition: "Cloudy",
          humidity: "70%",
          wind: "9 mph",
          pressure: "1017 mb"
        }
      }
    }
}