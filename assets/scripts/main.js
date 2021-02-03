
// Global Values
let volume_slider = document.getElementById("volume-slider");
let volume_number = document.getElementById("volume-number");
let volume_image = document.getElementById("volume-image");
let audio = document.getElementById("horn-sound");
let sound_image = document.getElementById("sound-image");
let air_horn = document.getElementById("radio-air-horn");
let car_horn = document.getElementById("radio-car-horn");
let party_horn = document.getElementById("radio-party-horn");
let honk_button = document.getElementById("honk-btn");
let form = document.getElementById("party-horn-form")

// Changing of any ID Values will call their helper function.
volume_slider.addEventListener("input", update_volume_number);
volume_number.addEventListener("input", update_volume_slider);
air_horn.addEventListener("change", update_air_horn);
car_horn.addEventListener("change", update_car_horn);
party_horn.addEventListener("change", update_part_horn);
form.addEventListener("submit", play_audio);

// Any change to volume_slider will update volume_number.
function update_volume_number() {
    volume_number.value = volume_slider.value;
    update_volume_image();
    audio.volume = volume_number.value / 100
}

// Any change to volume_number will update volume_slider.
function update_volume_slider() {
    volume_slider.value = volume_number.value;
    update_volume_image();
    audio.volume = volume_slider.value / 100
}

// Any update to either volumes will update volume_image's src path.
function update_volume_image() {
    if (volume_number.value >= 67) {
        volume_image.src = "./assets/media/icons/volume-level-3.svg";
    } else if (volume_number.value <= 66 && volume_number.value >= 34) {
        volume_image.src = "./assets/media/icons/volume-level-2.svg";
    } else if (volume_number.value <= 33 && volume_number.value >= 1) {
        volume_image.src = "./assets/media/icons/volume-level-1.svg";
    } else if (volume_number.value == 0) {
        volume_image.src = "./assets/media/icons/volume-level-0.svg";
        honk_button.disabled = true;
    }

    // Edge Case: Enable honk_button if not 0.
    if (volume_number.value > 0) {
        honk_button.disabled = false;
    }
}

// On clicking the air_horn radio button, swap the audio & image to air horn.
function update_air_horn() {
    sound_image.src = "./assets/media/images/air-horn.svg";
    audio.src = "./assets/media/audio/air-horn.mp3";
}

// On clicking the car_horn radio button, swap the audio & image to car horn.
function update_car_horn() {
    sound_image.src = "./assets/media/images/car.svg";
    audio.src = "./assets/media/audio/car-horn.mp3";
}

// On clicking the party_horn radio button, swap the audio & image to party horn.
function update_part_horn() {
    sound_image.src = "./assets/media/images/party-horn.svg";
    audio.src = "./assets/media/audio/party-horn.mp3";
}

// On submitting the form, honk the horn.
function play_audio(event) {
    event.preventDefault();
    audio.play();
}
