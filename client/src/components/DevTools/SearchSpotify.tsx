import { useEffect, useState } from "react";
import axios from "axios";

export default function SearchSpotify() {
  const CLIENT_ID = "68ab83ff1bf54f71856b1cec3b8fcba1";
  const REDIRECT_URI = "http://localhost:3000/";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState<string | undefined | null>("");
  const [searchKey, setSearchKey] = useState("");
  const [album, setAlbum] = useState({});

  useEffect(() => {
    const hash = window.location.hash;
    let token: string | null | undefined = window.localStorage.getItem("token");

    if (!token && hash) {
      let urlParams = new URLSearchParams(
        window.location.hash.replace("#", "?")
      );
      let token = urlParams.get("access_token");

      window.location.hash = "";
      window.localStorage.setItem("token", `${token}`);
    }

    setToken(token);
  }, [token]);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  function setSearchInput(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchKey(e.target.value);
  }

  const fetchData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: searchKey,
        type: "album",
      },
    });
    /* const albumData = data.albums.items[0]; */

    const { name, release_date } = data.albums.items[0];
    const spotifyLink = data.albums.items[0].external_urls.spotify;
    const artistName = data.albums.items[0].artists[0].name;
    const imageUrl = data.albums.items[0].images[0].url;
    const price = Math.floor(Math.random() * 100 + 1);

    const albumData = {
      title: name,
      artist: artistName,
      image: imageUrl,
      link: spotifyLink,
      releaseDate: release_date,
      price: price,
    };
    setAlbum(albumData);
    console.log(data);
    console.log(albumData);
  };

  const addAlbumToDatabase = async () => {
    const endpoint = "http://localhost:8000/products";
    await axios
      .post(endpoint, album)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <header>
        <h1> Spotify</h1>
        {!token ? (
          <a
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
          >
            Login to Spotify
          </a>
        ) : (
          <div>
            <button onClick={logout}>Logout</button>
            <button onClick={addAlbumToDatabase}>add album to database</button>
          </div>
        )}
        {token ? (
          <form onSubmit={fetchData}>
            <input type="text" onChange={setSearchInput}></input>
            <button type={"submit"}>Search</button>
          </form>
        ) : (
          <h2>Please login</h2>
        )}
      </header>
    </div>
  );
}
