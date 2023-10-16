export const POST_ACTION_TYPES = {
    SET_POSTS: 'SET_POSTS',
    REMOVE_POST: 'REMOVE_POST',
    ADD_POST: 'ADD_POST',
    FILTER_POST: 'FILTER_POST',
}

const initialState = {
    posts: [],
}

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_ACTION_TYPES.SET_POSTS:
            return {
                ...state,
                posts: action.payload,
            };
        case POST_ACTION_TYPES.REMOVE_POST:
            return {
                ...state,
                posts: state.posts.filter((post) => post.id !== action.payload.id)
            };
        case POST_ACTION_TYPES.ADD_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload],
            }
        case POST_ACTION_TYPES.FILTER_POST:
            const byKey = Object.keys(action.payload)[0];
            const value = action.payload[byKey]
            return {
                ...state,
                filteredPosts: value ? state.posts.filter((post) => post[byKey].includes(value)): undefined
            }
        default:
            return state;
    }
}