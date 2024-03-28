import React, { useEffect } from 'react';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { auth } from '../_actions/user_action';
import { useNavigate } from 'react-router-dom';

// 페이지, 옵션( nul;, true, false), admin 여부 (값이 없으면 null로 대체)
export default function (SpecificComponent, option, adminRoute = null) {

    //null    =>  아무나 출입이 가능한 페이지
    //true    =>  로그인한 유저만 출입이 가능한 페이지
    //false   =>  로그인한 유저는 출입 불가능한 페이지
    function AuthenticationCheck(props) {
        const dispatch = useDispatch();
        const navigate = useNavigate();

        useEffect(() => {
            // 페이지 이동할때마다 dispatch가 백엔드에 request해서 인증 여부를 받아옴
            dispatch(auth()).then(response => {
                console.log(response) // 로그가 2번씩 찍히는데 왜그런지 의문,,

                //로그인 하지 않은 상태 
                if (!response.payload.isAuth) {
                    if (option) {
                        navigate("/login");
                    }
                } else {
                    //로그인 한 상태 
                    if (adminRoute && !response.payload.isAdmin) {
                        navigate("/");
                    } else {
                        if (option === false)
                        navigate("/");
                    }
                }
            })
        }, [])

        return (
            <SpecificComponent />
        )
    }
    return AuthenticationCheck; 
}
