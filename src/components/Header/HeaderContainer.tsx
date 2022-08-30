import React from 'react';
import Header from './Header';
import {getAuthStatus, initialStateType} from '../../redux/auth-reducer';
import {AppStateType} from '../../redux/redux-store';
import {connect} from 'react-redux';

type mapStateToPropsType = initialStateType
type mapDispatchToPropsType = {
    getAuthStatus: () => void
}

export type HeaderContainerPropsType = mapStateToPropsType & mapDispatchToPropsType;

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {
        this.props.getAuthStatus()
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        ...state.auth
    }
}

export default connect(mapStateToProps, {
    getAuthStatus,
})(HeaderContainer);