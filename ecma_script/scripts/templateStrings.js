const templateStrings = () => {
    const userName = "Ahmet";
    const message = `you can use
    multi lines
    and also variables like > Hello ${userName}`;

    console.log(message);
};

templateStrings();