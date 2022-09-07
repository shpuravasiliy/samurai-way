import React, {ChangeEvent} from 'react';
import {stringOrNullType} from '../../../redux/profile-reducer';

type ProfileStatusPropsType = {
    changeStatus: (status: stringOrNullType) => void
    getStatus: () => void
    status: stringOrNullType
}
type ProfileStatusStateType = {
    editMode: boolean
    status: stringOrNullType
}

class ProfileStatus extends React.Component<ProfileStatusPropsType, ProfileStatusStateType> {
    constructor(props: ProfileStatusPropsType) {
        super(props);
        this.state = {
            editMode: false,
            status: this.props.status
        }
    }

    componentDidMount() {
        // this.props.getStatus()
    }

    render() {

        const onDoubleClickHandler = () => {
            this.setState(() => ({
                editMode: true,
                status: this.props.status
            }))
        };
        const onBlurHandler = () => {
            this.setState({
                editMode: false
            })
            this.props.changeStatus(this.state.status)
        };
        const onChangeInputHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
            this.setState({
                status: e.currentTarget.value
            });
        }

        return (
            <>{
                this.state.editMode
                    ?
                    <div>
                        <textarea
                            value={this.state.status ? this.state.status : ''}
                            onBlur={onBlurHandler}
                            onChange={onChangeInputHandler}
                            autoFocus
                        />
                    </div>
                    :
                    <div
                        style={{width: '200px', height: '1rem', border: '1px solid'}}
                        onDoubleClick={onDoubleClickHandler}
                    >
                        <span>{this.props.status}</span>
                    </div>
            }</>
        );

    }
}

export default ProfileStatus;