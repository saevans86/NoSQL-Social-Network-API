const usernNames = [
    {
        username: 'user123',
        email: 'user123@example.com',
     
    },
    {
        username: 'coolUser',
        email: 'cooluser@example.com',
     
    },
    {
        username: 'webMaster',
        email: 'webmaster@example.com',
   
    },
    {
        username: 'codingNinja',
        email: 'codingninja@example.com',
      
    },
    {
        username: 'geekGirl',
        email: 'geekgirl@example.com',
     
    },
    {
        username: 'codeWizard',
        email: 'codewizard@example.com',
       
    },
    {
        username: 'SocialMediaGuru',
        email: 'socialguru@example.com',
      
    },
    {
        username: 'Bookworm',
        email: 'bookworm@example.com',
       
    },
    {
        username: 'CoffeeLover',
        email: 'coffeelover@example.com',
      
    },
    {
        username: 'AdventureSeeker',
        email: 'adventure@example.com',
       
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

const randomUserData = () => {
	const user = randomUser();
	const thought = arrRandomizer(thoughts);
	const reaction = arrRandomizer(reactions);

	return {
		user,
		thought,
		reaction
	};
};

module.exports = { randomUserData };