import { useEffect, useState } from "react";

export default function useFetch(url) {

    let [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch(url)
    //         .then(res => {
    //             return res.json();
    //         })
    //         .then(data => {
    //             setData(data);
    //         });
    // }, [url]);

    useEffect(() => {
        console.log(url);
        const reloadProfile = async () => {
            try {
                let profileData = await fetch(url)
                let newData = await profileData.json()
                return setData(newData);
            } catch (error) {
                console.log(error)
            }

        };
        reloadProfile();
    }, [url]);
}