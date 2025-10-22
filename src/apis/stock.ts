/**
 * Simulates a dummy API call that returns mock stock market data.
 *
 * @param param - An object containing an optional `timePeriod` string 
 *                 (e.g., 'day', 'month', 'year') to mimic API behavior based on time filters.
 * @returns A Promise that resolves after a delay with an array of mock stock items.
 */
export const fetchStockData = async ({ timePeriod } : { timePeriod?: string | null }) => {

  // Simulate API delay of 2 seconds to display loading state in UI
  await new Promise(resolve => setTimeout(resolve, 2000));

    /**
    * Generate a random error with a certain probability
    * to simulate API failure and show error state in the UI.
    */

    // * Uncomment the line below to simulate a random error for testing error state
    // if (Math.random() < 0.3) {
    // throw new Error('Random API error occurred. Please try again.');
    // }

    switch (timePeriod) {
      case 'day':  {
        return [
        {
          id: '1',
          symbol: "AAPL",
          name: "Apple Inc.",
          price: 178.45,
          change: +2.34,
        },
        {
          id: '2',
          symbol: "MSFT",
          name: "Microsoft Corp.",
          price: 412.89,
          change: +1.87,
        },
        {
          id: '3',
          symbol: "GOOGL",
          name: "Alphabet Inc.",
          price: 139.23,
          change: -0.54,
        },
        {
          id: '4',
          symbol: "TSLA",
          name: "Tesla Inc.",
          price: 242.67,
          change: +3.21,
        },
      ]
    }

    case 'month' : {
      return [
      {
        id: '1',
        symbol: "AAPL",
        name: "Apple Inc.",
        price: 172.34,
        change: -1.45,
      },
      {
        id: '2',
        symbol: "MSFT",
        name: "Microsoft Corp.",
        price: 408.12,
        change: +0.78,
      },
      {
        id: '3',
        symbol: "GOOGL",
        name: "Alphabet Inc.",
        price: 144.10,
        change: +1.23,
      },
      {
        id: '4',
        symbol: "TSLA",
        name: "Tesla Inc.",
        price: 233.89,
        change: -2.15,
      }]

    }

    case 'year' : {
      return [
      {
        id: '1',
        symbol: "AAPL",
        name: "Apple Inc.",
        price: 162.78,
        change: +6.45,
      },
      {
        id: '2',
        symbol: "MSFT",
        name: "Microsoft Corp.",
        price: 395.34,
        change: +9.12,
      },
      {
        id: '3',
        symbol: "GOOGL",
        name: "Alphabet Inc.",
        price: 128.90,
        change: +4.87,
      },
      {
        id: '4',
        symbol: "TSLA",
        name: "Tesla Inc.",
        price: 210.55,
        change: -3.45,
      }]
    }

    default: {
      return []
    }
  }
}