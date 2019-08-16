import { FETCH_POSTS, NEW_POST} from "../Actions/types";

const initialState = {
    items: [],
    item :  {}
};

export default function (state = initialState, action ) {
    console.log(action);
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                item: action.response
            };
        case NEW_POST:
            return {
                ...state,
                item: action.payload
            };
        default:
            return state;
    }
}