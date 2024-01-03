import logo from './logo.svg';
import './App.css';
import NewDateRangePicker from '../src/component/NewDateRangePicker';
import moment, { months } from 'moment';
import addDays from 'date-fns/addDays';
import subDays from 'date-fns/subDays';

function App({
  startDate = moment(),
  endDate = moment(),
  maxDate,
  minDate,
  onChangeHandler,
  ranges
}) {
  return (
    // <div className="App">
       <NewDateRangePicker
              startDate={startDate}
              endDate={endDate}
              maxDate={maxDate}
              minDate={minDate}
              dateChangeHandler={onChangeHandler}
              ranges={ranges}
              key={moment()}
            />
    // </div>
  );
}

export default App;
