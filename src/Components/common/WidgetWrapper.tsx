import  React from "react";
import Error from "./Error";
import  Loader from "./Loader";


interface WidgetProps {
  title: string;
  children: React.ReactNode,
  isLoading: boolean,
  error: string | null;
  refetch?: () => void,
  dropdown?: React.ReactNode
}

/**
 * WidgetWrapper is a Higher-Order Component (HOC) designed to provide a reusable structure for widgets.
 * It allows for easy integration and consistent wrapping of new widgets across the application.
 *
 * Usage:
 * This HOC can be used to encapsulate common logic or styling shared among different widget components.
 */

const WidgetWrapper : React.FC<WidgetProps> = ({ title, children, dropdown, isLoading = false, error = false, refetch }) => {
    return <div className="widget" id="weatherWidget">
                <div className="widget-header">
                    <div className="widget-title">{title}</div>
                    <div className="widget-filter">
                       {dropdown && dropdown}
                    </div>
                </div>
                <div className="widget-body">
                {
                isLoading ? <Loader/>
                : error ? <Error isRetryEnable onRetry={refetch}/>
                : children
                }
                </div>
            </div>
}

export default WidgetWrapper