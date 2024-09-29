import React, {useState, useEffect}from "react";
import SecondsCounter from "./secondsCounter";
import "../../styles/index.css";

const Home = () => {
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
        const timeout = setTimeout(() => {
            setSeconds(prev => prev + 1);
        }, 1000);
        return () => clearTimeout(timeout);
    }, [seconds]);

	return (
		<div>
            <SecondsCounter seconds={seconds} />
        </div>
	);
};

export default Home;
