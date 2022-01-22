const getScriptName = () => {
    const scripts = document.getElementsByTagName('script');
    return scripts[scripts.length - 1].src;
}

const fetchWords = async () => {
    return new Promise((n) => {
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if ((this.readyState = 4 && this.status === 200)) {
                try {
                    n(JSON.parse(xhttp.responseText.slice(28465, 46986)));
                } catch (t) { }
            }
        };
        xhttp.open('GET', getScriptName());
        xhttp.send();
    });
};

let words = [];

const determineWordByDate = (targetDate) => {
    const endDate = new Date(2021, 5, 19, 0, 0, 0, 0);
    const diff = new Date(targetDate).setHours(0, 0, 0, 0) - endDate.setHours(0, 0, 0, 0);
    const index = Math.floor(diff / 864e5);
    return words[index];
};

const determineWord = (dateOffset) => {
    const targetDate = new Date().setDate(new Date().getDate() + dateOffset);
    return determineWordByDate(targetDate);
}

const run = async () => {
    words = await fetchWords();
    console.log("Yesterday's word:", determineWord(-1));
    console.log("Today's word:", determineWord(0));
    console.log("Tomorrow's word:", determineWord(1));
};

void run();