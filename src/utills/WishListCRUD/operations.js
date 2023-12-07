import API_PATH from "../apiPaths";
import axiosInstance from "../axiosInstance";

export const CreateWishItem = async (item) => {
    const response = await axiosInstance.post(API_PATH.WISH_LIST, item);
}

export const UpdateWishItem = async (id, item) => {
    const response = await axiosInstance.post(
        `${API_PATH.WISH_LIST}/${id}?_method=PUT`,
        item
    );
}

export const DeleteWishItem = async (id) => {
    const response = await axiosInstance.delete(
        `${API_PATH.WISH_LIST}/${id}`
    );
}
