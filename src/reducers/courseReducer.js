export default function courseReducer(state = [], action) {
    switch(action.type) {
        case 'CREATE_COURSE':
          // state.push(action.course);
          // return state;  // this is wrong code because in redux state is immutable.
          return [...state, 
            Object.assign({}, action.course)
          ];

        default: 
            return state;
    }
}
// export default courseReducer((state = [], action) => {
//     switch(action.type) {
//         case 'CREATE_COURSE':
//           // state.push(action.course);
//           // return state;  // this is wrong code because in redux state is immutable.
//           return [...state, 
//             Object.assign({}, action.course)
//           ];

//         default: 
//             return state;
//     }
// })