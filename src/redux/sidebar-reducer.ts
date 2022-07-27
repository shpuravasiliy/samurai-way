export type friendsType = {
    id: string
    userName: string
    userImg: string
}

export type initialSidebarStateType = {
    friends: friendsType[]
}

const initialState: initialSidebarStateType = {
    friends: [
        {
            id: '1',
            userName: 'Andrew',
            userImg: 'https://s0.rbk.ru/v6_top_pics/media/img/5/46/756038770746465.jpg',
        },
        {
            id: '2',
            userName: 'Sasha',
            userImg: 'https://medialeaks.ru/wp-content/uploads/2020/10/rsz_212.jpg',
        },
        {
            id: '3',
            userName: 'Sveta',
            userImg: 'https://media.istockphoto.com/photos/coahuilan-box-turtle-picture-id93385233?k=20&m=93385233&s=612x612&w=0&h=7pdWzLGa-XzIdvPvUsXzF91RomisLiGPiDnlr3iP00A=',
        },
    ],
}

type ActionsType = {type: ''}

const sidebarReducer = (state: initialSidebarStateType = initialState, action: ActionsType): initialSidebarStateType => {
    switch (action.type) {
        default:
            return state;
    }
}

export default sidebarReducer;