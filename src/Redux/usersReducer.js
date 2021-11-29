const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: [
        {id: 1, followed: true, fullName: 'User 1', status: 'OK', location: {city: 'Minsk', country: 'Belarus'}},
        {id: 2, followed: false, fullName: 'User 2', status: 'notOK', location: {city: 'Moscow1', country: 'Russia'}},
        {id: 3, followed: true, fullName: 'User 3', status: 'OK123', location: {city: 'Moscow2', country: 'Russia'}},
        {id: 4, followed: false, fullName: 'User 4', status: 'OK1', location: {city: 'Moscow3', country: 'Russia'}},
        {id: 5, followed: false, fullName: 'User 5', status: 'OK31', location: {city: 'Moscow4', country: 'Russia'}},
        {id: 6, followed: true, fullName: 'User 6', status: 'OK22', location: {city: 'Moscow5', country: 'Russia'}},
        {id: 7, followed: true, fullName: 'User 7', status: 'notOK1', location: {city: 'Moscow6', country: 'Russia'}},
        {id: 8, followed: true, fullName: 'User 8', status: 'OK2', location: {city: 'Minsk2', country: 'Belarus'}}
    ]
};

const usersRecuder = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    return u.id === action.userId ? {...u, followed: true} : u;
                })
            };
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    return u.id === action.userId ? {...u, followed: false} : u;
                })
            };
        }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        default: {
            return state;
        }
            ;
    }
    ;
};

export const followAC = (userId) => ({type: FOLLOW, userId: userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId: userId});
export const setUsersAC = (users) => ({type: SET_USERS, users: users});

export default usersRecuder;