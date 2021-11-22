import React, {ChangeEvent, useEffect, useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {requestAPI} from "./RequestAPI";


export const Request = () => {
    const [checked, setChecked] = useState<boolean>(false)
    const [response, setResponse] = useState<string>()
    const [failed, setFailed] = useState<string>()

    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(e.currentTarget.checked)
    }

    let rest: string
    let fail: string
    const postRequest = () => {
        requestAPI.requestPost(checked)
            .then((res) => rest = res.data.info)
            .catch(error => fail = error.response.data.errorText)
               setTimeout(() => {
            setResponse(rest)
        }, 2000)
        setTimeout(() => {
            setFailed(fail)
        }, 2000)
    }

    return (
        <div>
            <div>
                <SuperCheckbox checked={checked}
                               onChange={testOnChange}/>
            </div>
            <div>
                <SuperButton onClick={postRequest}>
                    Post
                </SuperButton>
            </div>
            <div>
               <div>
                   Response: {response}
               </div>
                <div>
                    Catch: {failed}
                </div>
            </div>
        </div>
    )
}

