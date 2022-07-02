import toast from "react-hot-toast";

export const successToast = (msg) => (toast(msg, {
    style: {
        backgroundColor: "#4BB543",
        color: "#fff",
    },
}));

export const errorToast = (err) => toast(err, {
    style: {
        backgroundColor: "#ff0033",
        color: "#fff",
    },
});