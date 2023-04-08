import React, {memo, useEffect, useRef, useState} from 'react'
import PropTypes from 'prop-types'
import {ViewWrapper} from "@/base-ui/scroll-view/style";
import transition from "react-transition-group/Transition";

const ScrollView = memo((props) => {

    const [showRightStatus, setShowRightStatus] = useState(false)

    const [showLeftStatus, setShowLeftStatus] = useState(false)

    const [positionIndex, setPositionIndex] = useState(0)

    const scrollContentRef = useRef()

    const validDistanceRef = useRef()


    useEffect(() => {

        const scrollWidth = scrollContentRef.current.scrollWidth

        const clientWidth = scrollContentRef.current.clientWidth

        const validDistance = scrollWidth - clientWidth

        validDistanceRef.current = validDistance

        console.log(validDistanceRef.current)

        setShowRightStatus(validDistanceRef.current > 0)


    }, [props.children])

    function rightClickHandler() {

        const newOffset = scrollContentRef.current.children[positionIndex + 1].offsetLeft


        scrollContentRef.current.style.transform = `translate(${-newOffset}px)`

        setPositionIndex(positionIndex + 1)

        setShowRightStatus(validDistanceRef.current > newOffset)

        setShowLeftStatus(newOffset > 0)
    }

    function leftClickHandler() {

        const newOffset = scrollContentRef.current.children[positionIndex - 1].offsetLeft

        scrollContentRef.current.style.transform = `translate(${-newOffset}px)`

        setPositionIndex(positionIndex - 1)

        setShowRightStatus(validDistanceRef.current > newOffset)

        setShowLeftStatus(newOffset > 0)

    }

    return (<ViewWrapper>
        {showLeftStatus && <button className="left" onClick={leftClickHandler}>left</button>}
        {showRightStatus && <button className="right" onClick={rightClickHandler}>right</button>}
        <div className="scroll-content" ref={scrollContentRef}>
            {props.children}
        </div>
    </ViewWrapper>)
})

ScrollView.propTypes = {}

export default ScrollView

