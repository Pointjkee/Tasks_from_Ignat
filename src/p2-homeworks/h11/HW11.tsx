import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import {TwoThumbInputRange} from "react-two-thumb-input-range"

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)
    const max = 100;
    const min = 0;
    const step = 1;
    const changeRange = (value: number) => {
        setValue1(value)
    }
    const changeRange2 = (value: [number, number]) => {
        setValue1(value[0])
        setValue2(value[1])
    }
    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange value={value1} onChangeRange={changeRange}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                {/* <span>{value1}</span>
                <SuperDoubleRange value={[value1, value2]}
                                  onChangeRange={changeRange2}
                                  max={max}
                                  min={min}
                                  step={step}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span>{value2}</span>*/}
            </div>
            <div>
                <span>{value1}</span>
                <TwoThumbInputRange onChange={changeRange2}
                                    values={[value1, value2]}
                                    min={min}
                                    max={max}

                />
                <span>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
