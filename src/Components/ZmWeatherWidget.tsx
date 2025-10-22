import { useState } from "react";
import { dummyWeather } from "../apis/weather";
import useFetch from "../Hooks/useFetch"
import Dropdown from "./common/DropDown";
import WidgetWrapper from "./common/WidgetWrapper"

interface WeatherData {
  temperature: string;
  condition: string;
  city: string;
  country: string;
  humidity: string;
  wind: string;
  pressure: string;
}


/**
 * WeatherWidgetBody is a presentational component that displays the weather data.
 * It receives weather details via the `data` prop and renders 
 * */
const WeatherWidgetBody : React.FC<{ data: WeatherData | null }> = ({ data }) => {
    return <div className="content-state">
                    <div className="weather-content">
                        <div className="weather-main">
                            <div>
                                <div className="weather-temp">{data?.temperature}</div>
                                <div style={{ color: '#666', fontSize: '1.1rem' }}>{data?.condition}</div>
                                <div style={{ color: '#999', fontSize: '0.9rem', marginTop: '5px'}}>{data?.city}, {data?.country}</div>
                            </div>
                            <div className="weather-icon">⛅</div>
                        </div>
                        <div className="weather-details">
                            <div className="weather-detail">
                                <div className="weather-detail-label">Humidity</div>
                                <div className="weather-detail-value">{data?.humidity}</div>
                            </div>
                            <div className="weather-detail">
                                <div className="weather-detail-label">Wind</div>
                                <div className="weather-detail-value">{data?.wind}</div>
                            </div>
                            <div className="weather-detail">
                                <div className="weather-detail-label">Pressure</div>
                                <div className="weather-detail-value">{data?.pressure}</div>
                            </div>
                        </div>
                    </div>
                </div>

}

export const ZmWeatherWidget = () => {
    const [dropDownValue, setDropDownValue] = useState<string>('day')

/**
 * useFetch is a reusable custom hook that abstracts away the repetitive logic
 * for handling API calls — including loading, error, and data states.
 *
 * By using this hook, you avoid writing boilerplate code multiple times
 * in each component for managing async data fetching.
 */
    const { data, error, loading, refetch } = useFetch(async () => await dummyWeather({ timePeriod: dropDownValue }), [dropDownValue])

    /**
     * WidgetWrapper is used to create reusable widget layouts (e.g. weather forecast widgets).
     * Instead of rewriting boilerplate code, simply pass the widget body as children.
     * Each widget can have a unique body, but share the same layout and logic using this wrapper.
     */
    return <WidgetWrapper
          title="🌤️ Weather Forecast"
          isLoading = {loading}
          error={error}
          refetch={refetch}
           dropdown={<Dropdown 
            value={dropDownValue} 
            onChange={(e) => {setDropDownValue(e.target.value);}}
            options={[{value: 'day', label: 'Last Day'},{value: 'month', label: 'Last Month'}, {value: 'year', label: 'Last Year'}]}
            />}
          >
            <WeatherWidgetBody data={data as WeatherData}/>
        </WidgetWrapper>
}


