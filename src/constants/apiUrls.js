const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const API_ENDPOINT = `${API_BASE_URL}/api`;

export const apiUrls = {
    categories:`${API_ENDPOINT}/categories`,
    posts:`${API_ENDPOINT}/posts`,
    comments:`${API_ENDPOINT}/comments`
}
