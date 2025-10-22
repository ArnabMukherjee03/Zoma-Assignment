import { useState } from "react";
import { fetchStockData } from "../apis/stock";
import useFetch from "../Hooks/useFetch"
import Dropdown from "./common/DropDown";
import WidgetWrapper from "./common/WidgetWrapper"

interface StockItem {
  id: string;
  symbol: string;
  name: string;
  price: number;
  change: number;
}

/**
 * StockWidgetBody is a presentational component responsible for rendering
 * the list of stock data received as props.
 *
 * @param data - An array of StockItem objects or null
 */
const StockWidgetBody : React.FC<{ data: StockItem[] | null }> = ({ data }) => {
    return <div className="content-state">
                    <div className="stock-content">
                        {
                            data?.map(data => (
                            <div key={data?.id} className="stock-item">
                                <div>
                                <div className="stock-symbol">{data?.symbol}</div>
                                <div className="stock-name">{data?.name}.</div>
                            </div>
                            <div style={{ textAlign: "right" }}>
                                <div className="stock-price">${data?.price}</div>
                                <div className="stock-change positive">{data?.change}%</div>
                            </div>
                        </div>
                            ))
                        }
                    </div>
                </div>

}

const ZmStockWidget = () => {
    const [dropDownValue, setDropDownValue] = useState<string>('day')

    /**
    * useFetch is a reusable custom hook that abstracts away the repetitive logic
    * for handling API calls — including loading, error, and data states.
    *
    * By using this hook, you avoid writing boilerplate code multiple times
    * in each component for managing async data fetching.
    */
    const { data, error, loading , refetch} = useFetch(async() => await fetchStockData({ timePeriod: dropDownValue }), [dropDownValue])


    /**
     * WidgetWrapper is used to create reusable widget layouts (e.g. Stock trends widgets).
     * Instead of rewriting boilerplate code, simply pass the widget body as children.
     * Each widget can have a unique body, but share the same layout and logic using this wrapper.
     */
    return <WidgetWrapper
          title="📈 Stock Trends"
          isLoading = {loading}
          error={error}
          refetch={refetch}
          dropdown={<Dropdown 
            value={dropDownValue} 
            onChange={(e) => {setDropDownValue(e.target.value);}}
            options={[{value: 'day', label: 'Last Day'},{value: 'month', label: 'Last Month'}, {value: 'year', label: 'Last Year'}]}
            />}
          >
            <StockWidgetBody data={data as StockItem[]}/>
        </WidgetWrapper>
}

export default ZmStockWidget


