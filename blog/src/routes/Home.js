import React, { Component, Fragment, useRef, useState } from 'react'
function AllList() {
    const [isShow, setShow] = useState(true)
    const ref = useRef()

    function handleAllList() {
        if (isShow) {
            ref.current.className = "allList showAllList"
        } else {
            ref.current.className = "allList"
        }
        setShow(!isShow)
    }
    return (
        <Fragment>
            <div>
                <button className='btn showBtn' onClick={() => { handleAllList() }}>目录</button>
                <ul className='allList' ref={ref}>

                    <li>JS
                        <ul>
                            <li style={{ fontSize: '0.8em', marginLeft: '0.8em' }}>promise</li>
                            <li style={{ fontSize: '0.8em', marginLeft: '0.8em' }}>promise</li>
                        </ul>
                    </li>
                    <li>Node</li>
                    <li>React</li>
                    <li>算法</li>
                </ul>
            </div>

        </Fragment>

    )
}

export default class Home extends Component {


    render() {
        return (
            <Fragment>
                <div className='header'>
                    <div className="page-header">
                        <h1>柏林<small>的技术宫殿</small></h1>
                    </div>
                </div>
                <div className='clear'>
                    <AllList></AllList>
                    <div className='center'>
                        <ul className='containList'>
                            <li>JS</li>
                            <li>Node</li>
                            <li>React</li>
                            <li>算法</li>

                        </ul>
                    </div>
                </div>

            </Fragment>
        )
    }
}
