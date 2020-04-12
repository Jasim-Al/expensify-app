import authReducer from '../../reducers/auth';

test('should set uid when login', () => {
    const uid = '5x45s4';
    const state = authReducer( {} , {type : 'LOGIN', uid});

    expect(state).toEqual({
        uid
    });
});

test('should set state to empty object when logout', () => {
    const state = authReducer( {} , {type : 'LOGOUT'});
    expect(state).toEqual({});
});