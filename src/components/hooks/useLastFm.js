import { useEffect, useState } from "react";

// /2.0/?method=user.getrecenttracks&user=rj&api_key=YOUR_API_KEY&format=json
function useLastFm() {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(
            "http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=nina_tan&api_key=137fbd608b3d9d348d14f15be4505ae2&format=json&limit=3"
        )
            .then((res) => res.json())
            .then((data) => setData(data));
    });
    return [data];
}

export default useLastFm;