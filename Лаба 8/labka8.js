class Person {
    constructor(firstName, lastName, gender, maritalStatus) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.maritalStatus = maritalStatus;
    }

    toLocaleString(locale) {
        const name = `${this.firstName} ${this.lastName}`;
        let title;

        switch (locale) {
            case 'en-US':
                title = this.gender === 'Male' ? 'Mr.' : this.maritalStatus === 'Married' ? 'Mrs.' : 'Miss';
                break;
            case 'fr-FR':
                title = this.gender === 'Male' ? 'M.' : this.maritalStatus === 'Married' ? 'Mme' : 'Mlle';
                break;
            case 'de-DE':
                title = this.gender === 'Male' ? 'Herr' : this.maritalStatus === 'Married' ? 'Frau' : 'Fräulein';
                break;
            default:
                title = this.gender === 'Male' ? 'Mr.' : this.maritalStatus === 'Married' ? 'Mrs.' : 'Miss';
        }

        return `${title} ${name}`;
    }
}

const person = new Person('John', 'Doe', 'Male', 'Married');
console.log(person.toLocaleString('en-US')); // "Mr. John Doe"
console.log(person.toLocaleString('fr-FR')); // "M. John Doe"
console.log(person.toLocaleString('de-DE')); // "Herr John Doe"


function printNumber(number) {
    const enDigits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const arDigits = ['صفر', 'واحد', 'اثنان', 'ثلاثة', 'أربعة', 'خمسة', 'ستة', 'سبعة', 'ثمانية', 'تسعة'];
    const thDigits = ['๐', '๑', '๒', '๓', '๔', '๕', '๖', '๗', '๘', '๙'];

    console.log(`English: ${number.toString().split('').map(digit => enDigits[parseInt(digit)]).join(' ')}`);
    console.log(`Arabic: ${number.toString().split('').map(digit => arDigits[parseInt(digit)]).join(' ')}`);
    console.log(`Thai: ${number.toString().split('').map(digit => thDigits[parseInt(digit)]).join('')}`);
}

printNumber(1234567890);


// Форматування дати та часу у Франції
const date_fr = new Date().toLocaleDateString('fr-FR');
const time_fr = new Date().toLocaleTimeString('fr-FR');
console.log(`Франція: ${date_fr} ${time_fr}`);

// Форматування дати та часу в Китаї
const date_zh = new Date().toLocaleDateString('zh-CN-u-nu-hanidec');
const time_zh = new Date().toLocaleTimeString('zh-CN-u-nu-hanidec');
console.log(`Китай: ${date_zh} ${time_zh}`);

// Форматування дати та часу в Єгипті
const date_ar = new Date().toLocaleDateString('ar-EG-u-nu-arab');
const time_ar = new Date().toLocaleTimeString('ar-EG-u-nu-arab');
console.log(`Єгипет: ${date_ar} ${time_ar}`);

// Форматування дати та часу в Таїланді
const date_th = new Date().toLocaleDateString('th-TH-u-nu-thai');
const time_th = new Date().toLocaleTimeString('th-TH-u-nu-thai');
console.log(`Таїланд: ${date_th} ${time_th}`);


function compareTexts(text1, text2, ignoreCase = true) {
    const lang = navigator.language;
    if (ignoreCase) {
        text1 = text1.toLowerCase();
        text2 = text2.toLowerCase();
    }
    return text1.localeCompare(text2, lang, { sensitivity: 'base' }) === 0;
}

// Приклад використання:
console.log(compareTexts('Hello', 'hElLo')); // true
console.log(compareTexts('Achète', 'achète')); // true (з урахуванням діакритичних знаків у французькій мові)
console.log(compareTexts('Hello', 'hElLo', false)); // false

const translations = {
    en: '{0} has {1} messages',
    fr: 'Il y a {1} messages pour {0}',
    // add more translations for other languages
};

function messageFormat(template, ...args) {
    const locale = 'fr'; // get locale from user preferences or browser settings
    const translated = translations[locale] || template;
    return translated.format(...args);
}

console.log(messageFormat('{0} has {1} messages', 'Alice', 5)); // Il y a 5 messages pour Alice


class PaperSize {
    constructor(localization, unit = 'mm') {
        this.localization = localization;
        this.unit = unit;
        this.defaultSize = this.getDefaultSize();
    }

    getSize(size = 'A4') {
        const sizes = {
            A0: { width: 841, height: 1189 },
            A1: { width: 594, height: 841 },
            A2: { width: 420, height: 594 },
            A3: { width: 297, height: 420 },
            A4: { width: 210, height: 297 },
            A5: { width: 148, height: 210 },
            A6: { width: 105, height: 148 },
            A7: { width: 74, height: 105 },
            A8: { width: 52, height: 74 },
            A9: { width: 37, height: 52 },
            A10: { width: 26, height: 37 },
        };

        const sizeInMm = {
            width: sizes[size].width / 25.4 * 72,
            height: sizes[size].height / 25.4 * 72,
        };

        const sizeInUnit = {
            width: sizeInMm.width,
            height: sizeInMm.height
        };

        if (this.unit === 'in') {
            sizeInUnit.width = sizeInMm.width / 72;
            sizeInUnit.height = sizeInMm.height / 72;
        }

        return sizeInUnit;
    }

    getDefaultSize() {
        if (this.localization === 'US' || this.localization === 'CA') {
            return 'Letter';
        } else {
            return 'A4';
        }
    }

    displaySize(size = 'A4') {
        const sizeObj = this.getSize(size);

        console.log(`Size of ${size}: ${sizeObj.width.toFixed(2)} ${this.unit} x ${sizeObj.height.toFixed(2)} ${this.unit}`);
    }

    displayDefaultSize() {
        let defaultSize = '';

        if (this.localization === 'US' || this.localization === 'CA') {
            defaultSize = 'Letter';
        } else {
            defaultSize = 'A4';
        }

        console.log(`Default size for ${this.localization}: ${defaultSize}`);
    }
}

// Example usage
const paperSize1 = new PaperSize('US', 'in');
paperSize1.displaySize('Letter'); // Size of Letter: 8.50 in x 11.00 in
paperSize1.displayDefaultSize(); // Default size for US: Letter

const paperSize2 = new PaperSize('FR', 'mm');
paperSize2.displaySize('A4'); // Size of A4: 210.00 mm x 297.00 mm
paperSize2.displayDefaultSize(); // Default size for FR: A4