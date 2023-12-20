var connection = new RTCMultiConnection();

connection.socketURL = 'https://muazkhan.com:9001/';

document.querySelector("#envoyer-id").addEventListener("click", () => {

    connection.open(document.querySelector("#input-id").value);
})

connection.session = {
    audio: true,
    video: true,
    oneway: true
};

connection.sdpConstraints.mandatory = {
    OfferToReceiveAudio: false,
    OfferToReceiveVideo: false
};
