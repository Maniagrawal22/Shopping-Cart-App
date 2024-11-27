import axios from "axios";

class WebService
{
    getAPICall(url)
    {
        var result = axios.get(url);
        return result;
    }
}
export default new WebService();