import React, {memo, useState} from "react";
import {CenterWrapper} from "./style";
import SearchLogo from "@/assets/svg/search_logo";
import searchTitles from "@/assets/data/search_titles";
import SearchTabs from "./children-components/search-tabs";
import SearchSections
    from "@/components/app-header/children-components/header-center/children-components/search-sections";
import {CSSTransition} from "react-transition-group";

const HeadCenter = memo((props) => {
    const [tabIndex, setTabIndex] = useState(0);
    const {isSearch, searchBarClick} = props
    const titles = searchTitles.map((item) => item.title);

    function searchBarClickHandler() {

        if (searchBarClick) searchBarClick()
    }

    return (
        <CenterWrapper>
            <CSSTransition
            in={isSearch}
            classNames="detail"
            timeout={250}
            unmountOnExit={true}>
                <div className="search-detail">
                    <SearchTabs titles={titles} tabClick={(index) => setTabIndex(index)}/>
                    <div className="infos">
                        <SearchSections searchInfos={searchTitles[tabIndex].searchInfos}/>
                    </div>
                </div>
            </CSSTransition>

            <CSSTransition
                in={!isSearch}
                classNames="bar"
                timeout={250}
                unmountOnExit={true}>
                <div className="search-bar" onClick={searchBarClickHandler}>
                    <div className="textarea">
                        <span>Anywhere</span>
                        <span>Any Week</span>
                        <span>Add guests</span>
                    </div>
                    <div className="searchBtn">
                        <div className="logo">
                            <SearchLogo/>
                        </div>
                    </div>
                </div>
            </CSSTransition>

        </CenterWrapper>
    );
});

export default HeadCenter;
