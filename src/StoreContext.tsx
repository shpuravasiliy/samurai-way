import React from 'react';
import {StoreType} from './index';

export const StoreContext = React.createContext<StoreType>({} as StoreType);

type ProviderPropsType = {
    store: StoreType
}

const Provider: React.FC<ProviderPropsType> = (props) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default Provider;