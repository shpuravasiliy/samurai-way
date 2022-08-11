import {addPost, updateNewPostText} from '../../../redux/profile-reducer';
import MyPosts, {MyPostsStateType} from './MyPosts';
import {connect} from 'react-redux';
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

const MyPostsContainer = connect(mapStateToProps, {
    addPost,
    updateNewPostText,
})(MyPosts);

export default MyPostsContainer;