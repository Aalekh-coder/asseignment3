import axios from "axios";

const api = axios.create({
    baseURL:"https://hn.algolia.com/api/v1"
})

export const frontPage = () => {
    return api.get("/search?tags=front_page")
} 

export const usersPage = (username) => {
    return api.get(`/users/${username}`)
}

export const searchPage = (query) => {
    return api.get(`/search?query=${query}`)
}

export const paginationPage = (pageNo) => {
    return api.get(`/search?page=${pageNo}`)
}

export const tagFilterPage = (value) => {
    return api.get(`/search?query=?&tags${value}`)
}

