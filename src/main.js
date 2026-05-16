import { getImagesByQuery } from "./js/pixabay-api";
import { clearGallery, createGallery, hideLoader, showLoader } from "./js/render-functions";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const inputField = document.querySelector('input[name="search-text"]');
const form = document.querySelector('.form');

let userInput;
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    clearGallery();
    showLoader();
    userInput = inputField.value;
    if (userInput === '') {
        iziToast.show({
            title: 'Empty form',
            message: 'Please add some text and click "Search"',
            color: 'blue',
        });
        hideLoader();
        return;
    }
    try {
    const data = await getImagesByQuery(userInput);
    if (data.total === 0) {
        iziToast.show({
            title: 'Try again',
            message: 'Sorry, there are no images matching your search query. Please try again!',
            color: 'blue',
        });
        hideLoader();
        return;
    }

    createGallery(data.hits);
    } catch (error) {
        iziToast.show({
            title: 'Error',
            message: 'Something went wrong in createGallery',
            color: 'red',
        });
    } finally {
        hideLoader();
    }
    
})