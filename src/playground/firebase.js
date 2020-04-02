//   db.ref('expenses')
//     .once('value')
//     .then(snapshot => {
//         const expenses = [];

//         snapshot.forEach(childSnapshot => {
//             expenses.push({
//                 id : childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
//     });

// db.ref('expenses')
// .on('value',snapshot => {
//     const expenses = [];

//     snapshot.forEach(childSnapshot => {
//         expenses.push({
//             id : childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
    
//     console.log(expenses);
// });


db.ref('expenses').on('child_removed', snapshot => {
    console.log(snapshot.key, snapshot.val());
});



db.ref('expenses').on('child_changed', snapshot => {
    console.log(snapshot.key, snapshot.val());
});


db.ref('expenses').on('child_added', snapshot => {
    console.log(snapshot.key, snapshot.val());
});













//   db.ref('expenses').push({
//         description : 'Shawarma',
//         note : '',
//         amount : 100,
//         createdAt : 111551502
//       });
//   db.ref('notes/-M3kF-xC9SyJHULZOvmP').update({
//       body : 'Buy Food'
//   });

//   db.ref('notes').push({
//       title : 'Course topic',
//       body : 'C#, JS, REACT, REACT-NATIVE,MERN'
//   });

//   const onValueChange = db.ref().on('value', snapshot => {
//       let data = snapshot.val();
//       console.log(`${data.name} is the ${data.job.title} of ${data.job.company}`);
//   }, e => {
//       console.log('Error :',e);
//   });

//   setTimeout(() => {
//           db.ref('job/title').set('CEO');
//       }, 5000);

//   const onValueChange =  db.ref().on('value', snapshot => {
//       console.log(snapshot.val());
//   }, e => {
//       console.log('Some thing happened', e);
//   });

//   setTimeout(() => {
//       db.ref('age').set(19);
//   }, 4500);

//   setTimeout(() => {
//         db.ref().off('value', onValueChange);
//     }, 7000);
//     setTimeout(() => {
//         db.ref('age').set(20);
//     }, 10500);


//   db.ref()
//     .once('value')
//     .then(snapshot => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch(e => {
//         console.log('Error :',e);
//     });


//   db.ref().set({
//       name : 'Jasim Al Mubarack',
//       stressLevel : 3,
//       job : {
//           title : 'software developer',
//           company : 'The Creative Men'
//       },
//       age : 18,
//       location : {
//           city : 'Mananthavady',
//           country : 'INDIA'
//       }
//   }).then(() => {
//       console.log('Data is saved');
//   }).catch( e => {
//       console.log('Error :', e);
//   } );

// db.ref().update({
//     'job/title' : 'CEO',
//     stressLevel : 0,
//     location : {
//         city : 'LONDON',
//         country : 'ENGLAND'
//     }
// });

// db.ref()
//   .remove()
//   .then(() => {
//     console.log('The section is removed');
// }).catch(e => {
//     console.log('Error :', e);
// });