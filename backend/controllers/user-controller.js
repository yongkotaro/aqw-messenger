import User from "../models/user-model.js";
import getCharacterData from "../utils/scrape-user-info.js";

export const getUsers = async (req, res) => {
    try {
        const currUser = req.user._id;

        const filteredUsers = await User.find({ _id: { $ne: currUser } }).select("-password");

        const usersWithData = await Promise.all(filteredUsers.map(async (user) => {
            try {
                // Scraping additional data for the user (e.g., level, class)
                const scrapedData = await getCharacterData(user.username);
                const userWithData = { ...user.toObject(), ...scrapedData };
                return userWithData; // Add scraped data to user object
            } catch (err) {
                console.log("Error scraping data for user:", user.username);
                return { ...user.toObject(), level: null, className: null }; // Handle error gracefully
            }
        }));
        console.log(usersWithData);
        res.status(200).json(usersWithData);
    } catch (error) {
        console.error("Error in getting users ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};