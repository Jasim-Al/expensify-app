import selectExpenses from '../../selectors/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';

test('should filter by text value', () => {

    const filters = {
        text : 'a',
        sortBy : 'date',
        startDate : undefined,
        endDate : undefined
    };

    const action = selectExpenses(expenses, filters);
    expect(action).toEqual([ expenses[2], expenses[0] ]);
});

test('should filter by stratDate', () => {
    const filters = {
        text : '',
        sortBy : 'date',
        startDate : moment(0),
        endDate : undefined
    };
    const action = selectExpenses(expenses, filters)
    expect(action).toEqual([ expenses[2], expenses[0] ]);
});

test('should filter by endDate', () => {
   const filters = {
       text : '',
       sortBy : 'date',
       startDate : undefined,
       endDate : moment(0)
   };
    
   const action = selectExpenses(expenses, filters);
   expect(action).toEqual([ expenses[0], expenses[1] ]);
});

test('should sortBy date', () => {
    const filters = {
        text : '',
        sortBy : 'date',
        startDate : undefined,
        endDate : undefined
    };
    
    const action = selectExpenses(expenses, filters);
    expect(action).toEqual([ expenses[2], expenses[0], expenses[1] ]);
});

test('should sortBy amount', () => {
    const filters = {
        text : '',
        sortBy : 'amount',
        startDate : undefined,
        endDate : undefined
    };
    
    const action = selectExpenses(expenses, filters);
    expect(action).toEqual([ expenses[2], expenses[0], expenses[1] ]);
});

