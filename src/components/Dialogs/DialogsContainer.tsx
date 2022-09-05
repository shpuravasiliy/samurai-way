import {DialogsInitialStateType, sendMessage, updateNewMessageBody} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import withAuthentication from '../HOC/WithAuthentication';
import {compose} from 'redux';
import {FC} from 'react';

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

const connector = connect(mapStateToProps, {sendMessage, updateNewMessageBody,})

export default compose<FC>(connector, withAuthentication)(Dialogs)
