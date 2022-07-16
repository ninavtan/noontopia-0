import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import LoadingSpinner from './hooks/LoadingSpinner/LoadingSpinner';

function useRecentlyPlayed() {
    const [currentSong, setCurrentSong] = useState({});
    const [isBusy, setIsBusy] = useState(true);

    useEffect(() => {
        const url = 'http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=nina_tan&api_key=137fbd608b3d9d348d14f15be4505ae2&format=json&limit=3';

        const first = () => {
            console.log('hi');
            fetchData()
        };
        
        const fetchData = async () => {
            try {
              const response = await fetch(url);
                const json = await response.json();
                console.log(json);
                setCurrentSong({
                    name: json.recenttracks.track[0].name,
                    artist: json.recenttracks.track[0].artist["#text"],
                  albumImage: json.recenttracks.track[0].image[2],
                  link: json.recenttracks.track[0].url
                });
                setIsBusy(false);
            } catch (error) {
              console.log("error", error);
            }
          };
       
        setTimeout(first(), 10000);

    }, [])

    return { currentSong, isBusy }

};

const ListeningNow = () => {

    const { currentSong, isBusy } = useRecentlyPlayed();
    console.log(currentSong);
   
    if (isBusy) {
        return (
          <LoadingSpinner/>
        )
    } else {
        return (
          <ListeningNowContainer>
            <h2>
              <em>Listening Now:</em>
            </h2>
            <a href={currentSong.link}>
              <h4>{currentSong.name}</h4>
            </a>
            <h5>{currentSong.artist}</h5>
            <img
              alt={currentSong.name}
              src={currentSong.albumImage["#text"]}
            ></img>
          </ListeningNowContainer>
        );
  }
    
}

export default ListeningNow;

const ListeningNowContainer = styled.div`
    text-align: center;
    margin-top: 10px;
    border: 1px solid black;
    padding: 2em;
    width: 80%;
    margin: 0 auto;
`