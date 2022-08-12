import {addPost, profileUserType, updateNewPostText} from '../../../redux/profile-reducer';
import MyPosts, {MyPostsStateType} from './MyPosts';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';

type mapStateToPropsType = {
    myPostsPage: MyPostsStateType
    profile: profileUserType
}
type mapDispatchToPropsType = {
    addPost: () => void
    updateNewPostText: (newPostText: string) => void
}

export type MyPostsType = mapStateToPropsType & mapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        myPostsPage: state.profilePage.myPosts,
        profile: state.profilePage.profile,
    }
}

const MyPostsContainer = connect(mapStateToProps, {
    addPost,
    updateNewPostText,
})(MyPosts);

export default MyPostsContainer;