import {addPostAC, UpdateNewPostTextAC} from '../../../redux/profile-reducer';
import MyPosts, {MyPostsStateType} from './MyPosts';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {AppStateType} from '../../../redux/redux-store';

type mapStateToPropsType = {
    myPostsPage: MyPostsStateType
}
type mapDispatchToPropsType = {
    addPost: () => void
    updateNewPostText: (newPostText: string) => void
}

export type MyPostsType = mapStateToPropsType & mapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        myPostsPage: state.profilePage.myPosts
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPost: () => dispatch(addPostAC()),
        updateNewPostText: (newPostText: string) => dispatch(UpdateNewPostTextAC(newPostText)),
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;