import axios from "axios";

// this method is used to extract the data simple
const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export default fetcher;
