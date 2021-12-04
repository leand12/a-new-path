import "styles/Sections.css";
import { useEffect, useState } from "react";
import classNames from 'classnames';
import * as d3 from "d3";
import { data } from './data';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/material/styles';


const color = (i) => {
    if (i % 3 == 0)
        return "0, 94, 124";
    if (i % 3 == 1)
        return "0, 138, 82";
    return "0, 118, 106";
}

const CustomTabs = styled((props) => (
    <Tabs
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
        maxWidth: 40,
        width: '100%',
        backgroundColor: 'rgb(0, 138, 82)'
    },
});

const CustomTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
        textTransform: 'uppercase',
        fontFamily: 'Poppins',
        fontWeight: theme.typography.fontWeightBold,
        fontSize: theme.typography.pxToRem(15),
        marginRight: theme.spacing(1),
        color: 'rgba(0, 0, 0, 0.3)',
        '&.Mui-selected:nth-of-type(3n)': {
            color: `rgb(${color(0)})`,
        },
        '&.Mui-selected:nth-of-type(3n+1)': {
            color: `rgb(${color(1)})`,
        },
        '&.Mui-selected:nth-of-type(3n+2)': {
            color: `rgb(${color(2)})`,
        },
        '&.Mui-focusVisible': {
            backgroundColor: 'rgba(100, 95, 228, 0.32)',
        },
    }),
);

export default function Sections() {

    const [animation, setAnimation] = useState(true);
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        setAnimation(true);
    };

    useEffect(() => {
        d3.selectAll('.hexagon h1')
            .style("background-color", (d, i) => `rgba(${color(i)}, 0.6)`);
        d3.selectAll('.hexagon p')
            .style("background-color", (d, i) => `rgba(${color(i)}, 0.6)`);
        d3.select('.MuiTabs-indicatorSpan')
            .style("background-color", `rgb(${color(value + 1)})`);
        d3.select('ul li::marker')
            .style("color", `rgb(${color(value + 1)})`);
    }, [value])

    return (
        <div id="Sections">
            <h1 className="py-5 pt-md-0">O que pretendemos?</h1>
            <CustomTabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons
                allowScrollButtonsMobile
                aria-label="scrollable force tabs example"
            >
                {
                    data.map(({ section }, index) =>
                        <CustomTab key={index} label={section} />
                    )
                }
            </CustomTabs>

            <div className="tab-content">

                <div className={classNames("content-container", { "bottom-fade-out": animation })}
                    onAnimationEnd={() => setAnimation(false)}
                >
                    {
                        data[value].content
                    }
                </div>
                <div className="hexa-container">
                    {
                        data[value].members.map((member, index) => (
                            <div key={index}
                                className={classNames("hexagon-wrapper", { "bottom-fade-out": animation })}
                                style={data[value].members.length == 1 ? { marginLeft: "25%" } : {}}
                            >
                                <div className="hexagon"
                                    style={{ backgroundImage: `url(${member.image})` }}
                                >
                                    <h1>{member.name}</h1>
                                    <p>{member.year}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div >
    );
}
