import moment from 'moment';

export default [
    {
        id : '1',
        description : 'shawarma',
        note : '',
        amount : 100,
        createdAt : 0
    },
    {
        id : '2',
        description : 'burger',
        note : '',
        amount : 70,
        createdAt : moment(0).subtract(4, 'days').valueOf()
    },
    {
        id : '3',
        description : 'pizza',
        note : '',
        amount : 120,
        createdAt : moment(0).add(4, 'days').valueOf()
    }
];