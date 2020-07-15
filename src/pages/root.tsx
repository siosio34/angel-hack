import React, { useEffect } from 'react';
import { RootState } from 'store/configureStore';
import { useSelector, useDispatch } from 'react-redux';

import { Spin } from 'antd';
import { AccountActionCreators } from 'store/account/action';

const RootPage: React.FC = (props) => {
    const loadingStore = useSelector((state: RootState) => state.loading);
    const { loading = false } = loadingStore;

    // 아래주석코드는 전체로딩 
    // 직접만든 유아이가 별루라F 일단빼둔 상태
    return (
        <>
            {/* {loading && (
                <>
                    <Spin
                        spinning
                        style={{
                            width: '100%',
                            height: '100vh',
                            position: 'absolute',
                            justifyContent: 'center',
                            alignItems: 'center',
                            zIndex: 1000,
                            display: 'flex',
                            background: '#0000004d',
                        }}
                    />
                </>
            )} */}
            {props.children}
        </>
    );
};

export default RootPage;
