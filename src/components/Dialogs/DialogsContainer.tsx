import {DialogsInitialStateType, sendMessageAC, UpdateNewMessageBodyAC} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';

type mapStateToPropsType = {
    dialogsPage: DialogsInitialStateType
}
type mapDispatchToPropsType = {
    sendMessage: () => void
    updateNewMessageBody: (newMessageBody: string) => void
}

export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        sendMessage: () => dispatch(sendMessageAC()),
        updateNewMessageBody: (newMessageBody: string) => dispatch(UpdateNewMessageBodyAC(newMessageBody)),
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
