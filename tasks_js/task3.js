const medicines = {
    Агалгін: new Date("2022-05-01"),
    Ношпа: new Date("2025-07-02"),
    Альфахолін: new Date("2024-12-21"),
    Аспірин: new Date("2022-08-15"),
    Аспаркам: new Date("2024-04-18"),
};

const currentDate = new Date();

const validMedicines = Object.entries(medicines)
    .filter(([_, expiryDate]) => expiryDate > currentDate)
    .sort(([, dateA], [, dateB]) => dateA - dateB)
    .map(([name]) => name);

console.log(validMedicines);