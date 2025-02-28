import axios from 'axios';
import * as cheerio from 'cheerio';

const getCharacterData = async (username) => {
    const url = `https://account.aq.com/CharPage?id=${username}`;
    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);

        const list = $("div.card-body label").parent().text().trim().split("\n");
        if (list.length == 1) return 404;
        const values = {};
        list.forEach((l) => {
            const label = l.split(":")[0].trim();
            const value = l.split(":")[1]?.trim();
            if (label) values[label] = value;
        });
        return values;

    } catch (error) {
        console.error("Error scraping data:", error);
        throw new Error("Failed to scrape data");
    }
};

export default getCharacterData;