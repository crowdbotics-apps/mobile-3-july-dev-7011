import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView17827Reducer from '../features/CalendarView17827/redux/reducers';
import CalendarView17822Reducer from '../features/CalendarView17822/redux/reducers';
import EmailAuth27821Reducer from '../features/EmailAuth27821/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CalendarView17827: CalendarView17827Reducer,
CalendarView17822: CalendarView17822Reducer,
EmailAuth27821: EmailAuth27821Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});