import PropTypes from "prop-types";
import React, {memo, useState} from "react";
import {SectionTabsWrapper} from "./style";
import classNames from "classnames";
import ScrollView from "@/base-ui/scroll-view";

const SectionTabs = memo((props) => {
    const {tabNames = [], tabChange} = props;
    const [currentIndex, setCurrentIndex] = useState(0);

    function itemClickHandler(item, index) {
        setCurrentIndex(index);
        tabChange(item)
    }

    return (
        <SectionTabsWrapper>
            <ScrollView>  {tabNames.map((item, index) => {
                return (


                    <div
                        className={classNames("item", {active: index === currentIndex})}
                        key={index}
                        onClick={(e) => itemClickHandler(item, index)}
                    >
                        {item}
                    </div>


                );
            })}</ScrollView>
        </SectionTabsWrapper>
    );
});

SectionTabs.propTypes = {
    tabTitle: PropTypes.array,
};

export default SectionTabs;
