import React, { useState } from 'react';
import Modal from 'react-modal';
import {
    FiActivity, FiAirplay, FiAlertCircle, FiAlertOctagon, FiAlertTriangle, FiAlignCenter, FiAlignJustify,
    FiAlignLeft, FiAlignRight, FiAnchor, FiAperture, FiArchive, FiArrowDown, FiArrowDownCircle, FiArrowDownLeft, FiArrowDownRight,
    FiArrowLeft, FiArrowLeftCircle, FiArrowRight, FiArrowRightCircle, FiArrowUp, FiArrowUpCircle, FiArrowUpLeft, FiArrowUpRight,
    FiAtSign, FiAward, FiBarChart, FiBarChart2, FiBattery, FiBatteryCharging, FiBell, FiBellOff, FiBluetooth, FiBold, FiBook,
    FiBookOpen, FiBookmark, FiBox, FiBriefcase, FiCalendar, FiCamera, FiCameraOff, FiCast, FiCheck, FiCheckCircle, FiCheckSquare,
    FiChevronDown, FiChevronLeft, FiChevronRight, FiChevronUp, FiChevronsDown, FiChevronsLeft, FiChevronsRight, FiChevronsUp,
    FiChrome, FiCircle, FiClipboard, FiClock, FiCloud, FiCloudDrizzle, FiCloudLightning, FiCloudOff, FiCloudRain, FiCloudSnow
} from 'react-icons/fi';

const IconPicker = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [showIcon, setShowIcon] = useState('');
    const [currPage, setCurrPage] = useState(0);

    const IconComponents = {
        "FiActivity": FiActivity,
        "FiAirplay": FiAirplay,
        "FiAlertCircle": FiAlertCircle,
        "FiAlertOctagon": FiAlertOctagon,
        "FiAlertTriangle": FiAlertTriangle,
        "FiAlignCenter": FiAlignCenter,
        "FiAlignJustify": FiAlignJustify,
        "FiAlignLeft": FiAlignLeft,
        "FiAlignRight": FiAlignRight,
        "FiAnchor": FiAnchor,
        "FiAperture": FiAperture,
        "FiArchive": FiArchive,
        "FiArrowDown": FiArrowDown,
        "FiArrowDownCircle": FiArrowDownCircle,
        "FiArrowDownLeft": FiArrowDownLeft,
        "FiArrowDownRight": FiArrowDownRight,
        "FiArrowLeft": FiArrowLeft,
        "FiArrowLeftCircle": FiArrowLeftCircle,
        "FiArrowRight": FiArrowRight,
        "FiArrowRightCircle": FiArrowRightCircle,
        "FiArrowUp": FiArrowUp,
        "FiArrowUpCircle": FiArrowUpCircle,
        "FiArrowUpLeft": FiArrowUpLeft,
        "FiArrowUpRight": FiArrowUpRight,
        "FiAtSign": FiAtSign,
        "FiAward": FiAward,
        "FiBarChart": FiBarChart,
        "FiBarChart2": FiBarChart2,
        "FiBattery": FiBattery,
        "FiBatteryCharging": FiBatteryCharging,
        "FiBell": FiBell,
        "FiBellOff": FiBellOff,
        "FiBluetooth": FiBluetooth,
        "FiBold": FiBold,
        "FiBook": FiBook,
        "FiBookOpen": FiBookOpen,
        "FiBookmark": FiBookmark,
        "FiBox": FiBox,
        "FiBriefcase": FiBriefcase,
        "FiCalendar": FiCalendar,
        "FiCamera": FiCamera,
        "FiCameraOff": FiCameraOff,
        "FiCast": FiCast,
        "FiCheck": FiCheck,
        "FiCheckCircle": FiCheckCircle,
        "FiCheckSquare": FiCheckSquare,
        "FiChevronDown": FiChevronDown,
        "FiChevronLeft": FiChevronLeft,
        "FiChevronRight": FiChevronRight,
        "FiChevronUp": FiChevronUp,
        "FiChevronsDown": FiChevronsDown,
        "FiChevronsLeft": FiChevronsLeft,
        "FiChevronsRight": FiChevronsRight,
        "FiChevronsUp": FiChevronsUp,
        "FiChrome": FiChrome,
        "FiCircle": FiCircle,
        "FiClipboard": FiClipboard,
        "FiClock": FiClock,
        "FiCloud": FiCloud,
        "FiCloudDrizzle": FiCloudDrizzle,
        "FiCloudLightning": FiCloudLightning,
        "FiCloudOff": FiCloudOff,
        "FiCloudRain": FiCloudRain,
        "FiCloudSnow": FiCloudSnow
    };

    const IconComponentsArray = Object.entries(IconComponents);

    const iconsPerPage = (props.rowsInOnePage * props.columnsInOnePage);
    const totalPages = Math.ceil(IconComponentsArray.length / iconsPerPage);


    const openModal = () => {
        var crPg = currPage;
        if (currPage >= totalPages) {
            crPg = 0;
        }
        setCurrPage(crPg);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const handleOnClickOnIcon = (icon) => {
        // console.log(icon);
        setShowIcon(icon);
        setShowModal(false);
    };

    const toIcon = (icon) => {
        if (icon === '') {
            return null;
        }
        var IconComponent = IconComponents[icon];
        return <IconComponent />;
    };

    const gotoPrevPage = () => {
        if (currPage === 0) {
            return;
        }
        setCurrPage(currPage - 1);
    };

    const gotoNextPage = () => {
        if (currPage === totalPages - 1) {
            return;
        }
        setCurrPage(currPage + 1);
    };

    return (
        <div>
            <div id="show-icon" onClick={ openModal }>
                { toIcon(showIcon) }
            </div>
            <Modal isOpen={ showModal } onRequestClose={ closeModal } contentLabel="Select an icon" >
                <strong>Select an icon</strong>
                <button onClick={ closeModal } style={ { float: "right" } }>Close</button>
                <br />
                <br />
                <div className="pagination">
                    <button onClick={ gotoPrevPage } disabled={ currPage === 0 }>
                        <FiArrowLeft />
                    </button>
                    &nbsp;
                    Page { currPage + 1 } of { totalPages }
                    &nbsp;
                    <button onClick={ gotoNextPage } disabled={ currPage === totalPages - 1 }>
                        <FiArrowRight />
                    </button>
                </div>
                <div className="select-icons">
                    {
                        IconComponentsArray
                            .slice(currPage * iconsPerPage, Math.min((currPage + 1) * iconsPerPage, IconComponentsArray.length))
                            .map((comp, i) => {
                                var IconComponent = comp[1];
                                var brk;
                                if ((i + 1) % props.rowsInOnePage === 0) {
                                    brk = React.createElement("br");
                                }
                                return (
                                    <React.Fragment>
                                        <IconComponent key={ i }
                                            onClick={ () => handleOnClickOnIcon(comp[0]) }
                                            style={ {
                                                height: props.iconHeight + "px",
                                                width: props.iconWidth + "px"
                                            } }
                                            className="icons"
                                        />
                                        { brk }
                                    </React.Fragment>
                                );
                            })
                    }
                </div>
            </Modal>
        </div>
    );
};

export default IconPicker;