import {connect} from 'react-redux';
import Sidebar from './Sidebar';
import {sendMessageAC, UpdateNewMessageBodyAC} from '../../../redux/dialogs-reducer';
import {AppStateType} from '../../../redux/redux-store';
import {Dispatch} from 'redux';
import {initialSidebarStateType} from '../../../redux/sidebar-reducer';

type mapStateToPropsType = initialSidebarStateType
type mapDispatchToPropsType = {}

export type SidebarPropsType = mapStateToPropsType & mapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        friends: state.sidebar.friends
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        sendMessage: () => {
            dispatch(sendMessageAC());
        },
        updateNewMessageBody: (newMessageBody: string) => {
            dispatch(UpdateNewMessageBodyAC(newMessageBody));
        },
    }
}

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar)

export default SidebarContainer;