import {DialogsInitialStateType, sendMessage, updateNewMessageBody} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';

type mapStateToPropsType = DialogsInitialStateType
type mapDispatchToPropsType = {
    sendMessage: () => void
    updateNewMessageBody: (newMessageBody: string) => void
}

export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        ...state.dialogsPage,
    }
}

export const DialogsContainer = connect(mapStateToProps, {
    sendMessage,
    updateNewMessageBody,
})(Dialogs)
