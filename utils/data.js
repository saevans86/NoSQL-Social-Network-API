const usernNames = [
    {
        username: 'user123',
        email: 'user123@example.com',
        password: 'password123',
    },
    {
        username: 'coolUser',
        email: 'cooluser@example.com',
        password: 'securePassword',
    },
    {
        username: 'webMaster',
        email: 'webmaster@example.com',
        password: 'webPass123',
    },
    {
        username: 'codingNinja',
        email: 'codingninja@example.com',
        password: 'codeSecret',
    },
    {
        username: 'geekGirl',
        email: 'geekgirl@example.com',
        password: 'geek123',
    },
    {
        username: 'codeWizard',
        email: 'codewizard@example.com',
        password: 'magicCode',
    },
    {
        username: 'SocialMediaGuru',
        email: 'socialguru@example.com',
        password: 'guruPass',
    },
    {
        username: 'Bookworm',
        email: 'bookworm@example.com',
        password: 'readBooks',
    },
    {
        username: 'CoffeeLover',
        email: 'coffeelover@example.com',
        password: 'coffeeAddict',
    },
    {
        username: 'AdventureSeeker',
        email: 'adventure@example.com',
        password: 'explore123',
    },
];

const thoughts = [
    'Embracing the journey of self-discovery. 🌟 #SelfLove #PersonalGrowth',
    'Gratitude is the key to happiness. What are you thankful for today? 🙏❤️ #Gratitude',
    'Exploring new places and making memories. 🌍✈️ #TravelGoals #Adventure',
    'In love with the simple joys of life - a good book and a hot cup of tea. 📚☕ #ReadingLife',
    'Chasing dreams and setting new goals. 💪✨ #DreamBig #AchieveMore',
    'Spreading kindness, one act at a time. 💖 #KindnessMatters',
    'Friday vibes! Ready for the weekend adventures. 🎉🥂 #WeekendFun',
    'Finding inspiration in everyday moments. ✨ #Inspired',
    'A day well spent with family and friends is a day worth celebrating. 🥰🎉 #FamilyTime',
    'Letting go of what no longer serves me. 🍃 #LettingGo #NewBeginnings',
    'Creating art that speaks to the soul. 🎨✨ #ArtisticExpression',
    'Laughter is the best medicine. 😄 #Happiness',
    'Feeling the rhythm of life and dancing to my own beat. 💃🎶 #DanceLife',
    'Time to recharge and unwind. 🌙💤 #SelfCare',
    'A cup of ambition to kickstart the day. ☕💪 #MorningMotivation',
    'Living for the moments that take your breath away. 🌟❤️ #Memories',

];

const reactions = [
    'Like',
    'Love',
    'Wow',
    'Haha',
    'Sad',
    'Angry',
];
const arrRandomizer = (arr) => arr[Math.floor(Math.random() * arr.length)];

const randomUser = () => arrRandomizer(usernNames);

const randomizer = (int) => {
    const userData = [];
    for (let i = 0; i < int; i++) {
        const user = randomUser(); 
        const thought = arrRandomizer(thoughts); 
        const reaction = arrRandomizer(reactions); 

        userData.push({
            user,
            thought,
            reaction,
        });
    }
    return userData;
};




module.exports = { randomUser, randomizer }