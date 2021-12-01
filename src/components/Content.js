import "styles/Content.css";
import { useEffect, useState } from "react";
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

export default function Content() {

    const [value, setValue] = useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        d3.selectAll('.hexagon h1')
            .style("background-color", (d, i) => `rgba(${color(i)}, 0.6)`);
        d3.selectAll('.hexagon p')
            .style("background-color", (d, i) => `rgba(${color(i)}, 0.6)`);
        d3.select('.MuiTabs-indicatorSpan')
            .style("background-color", `rgb(${color(value + 1)})`);

    }, [value])

    return (
        <div id="Content">
            {/* <Box sx={{ maxWidth: 480, bgcolor: 'background.paper' }}> */}
            <CustomTabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons
                allowScrollButtonsMobile
                aria-label="scrollable force tabs example"
                sx={{ margin: 'auto' }}
            >
                {
                    data.map(({ section }, index) =>
                        <CustomTab key={index} label={section} />
                    )
                }
            </CustomTabs>

            <div className="tab-content">

                <div className="content-wrapper">
                    {
                        data[value].content
                    }
                </div>
                <div className="hexa-wrapper">
                    {
                        data[value].members.map((member, index) => (
                            <div key={index} className="hexagon"
                                style={data[value].members.length == 1 ?
                                    { backgroundImage: `url(${member.image})`, marginLeft: "25%" } : 
                                    { backgroundImage: `url(${member.image})` }}
                            >
                                <h1>{member.name}</h1>
                                <p>{member.year}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div >
    );
}
