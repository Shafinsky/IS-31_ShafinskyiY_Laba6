class Client {
    #login;
    #email;

    /**
     * @param {string} login 
     * @param {string} email 
     */
    constructor(login, email) {
        this.#login = login;
        this.#email = email;
    }

    get login() {
        return this.#login;
    }

    set login(newLogin) {
        if (typeof newLogin === "string" && newLogin.trim().length > 0) {
            this.#login = newLogin;
        } else {
            console.error("Invalid login value");
        }
    }

    get email() {
        return this.#email;
    }

    set email(newEmail) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(newEmail)) {
            this.#email = newEmail;
        } else {
            console.error("Invalid email format");
        }
    }
}

document.getElementById("showClientButton").addEventListener("click", () => {
    const client = new Client("user123", "user123@example.com");

    const output = document.getElementById("output");
    output.textContent = `Початкові дані клієнта:\nЛогін: ${client.login}\nEmail: ${client.email}\n`;

    client.login = "newUser456";
    client.email = "newUser456@example.com";

    output.textContent += `\nОновлені дані клієнта:\nЛогін: ${client.login}\nEmail: ${client.email}`;
});