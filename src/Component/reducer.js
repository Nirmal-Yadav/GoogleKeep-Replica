const initialDrawerState = {
    title:"keep"
}

export const drawerReducer = (state = initialDrawerState, action) => {
    switch (action.type) {
        case 'Set_Title_As_Note':
            return {
                ...state,
                title: "note"
            };

        case 'Set_Title_As_Archive':
            return {
                ...state,
                title: "Archive"
            };
        case 'Set_Title_As_Trash':
            return {
                ...state,
                title: "Trash"
            };
        default:
            return state;
    }
}