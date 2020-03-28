import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type : 'REMOVE_EXPENSE',
        id : '123abc'
    });
});

test('should setup edit expense action object', () => {
    const action = editExpense('abc123',{note:'HelloWorld!'});

    expect(action).toEqual({
        type : 'EDIT_EXPENSE',
        id : 'abc123',
        updates : {note:'HelloWorld!'}
    });
});

test('should setup add expense action object', () => {
   const action = addExpense({description:'shawarma',note:'enjoying with friends',amount:100,createdAt:1110212011});
   
   expect(action).toEqual({
       type : 'ADD_EXPENSE',
       expense : {
           description : 'shawarma',
           note : 'enjoying with friends',
           amount:100,
           createdAt:1110212011,
           id:expect.any(String)
       } 
   });
});

test('should setup add expense action object with defaults', () => {
    const action = addExpense();
   
   expect(action).toEqual({
       type : 'ADD_EXPENSE',
       expense : {
           description : '',
           note : '',
           amount:0,
           createdAt:0,
           id:expect.any(String)
       } 
   });
});
