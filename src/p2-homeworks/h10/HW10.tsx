import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import { loadingAC } from './bll/loadingReducer';
import { AppStoreType } from './bll/store';
import preloader from './bll/preloader.svg'

function HW10() {
    const dispatch = useDispatch()
    const loading = useSelector<AppStoreType>(state => state.loading.isLoading)

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() =>  dispatch(loadingAC(false)), 2000)
        console.log('loading...')
    };
    return (
        <div style={{textAlign: "center"}}>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div><img src={preloader}/></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
