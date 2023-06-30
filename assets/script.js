//defines prework study guide topics
let topics = ["HTML", "CSS", "Git", "JavaScript"];

//variable used to pick a random topic to study
let randomTopic = topics[Math.floor(Math.random() * topics.length)];

//lists all topics
function listTopics()
{
    for (topic = 0; topic < topics.length; topic++)
    {
        console.log(topics[topic]);
    }
}

//selects a topic to study
function selectTopic()
{
    if (randomTopic === 'HTML') 
    {
        console.log("Let's study HTML!");
    } 
    else if (randomTopic === 'CSS') 
    {
        console.log("Let's study CSS!");
    } 
    else if (randomTopic === 'Git') 
    {
        console.log("Let's study Git!");
    } 
    else if (randomTopic === 'JavaScript') 
    {
        console.log("Let's study JavaScript!");
    } 
    else
    {
        console.log('Please try again!');
    }
}


console.log("Here are the topics we've learned through prework")
listTopics();
console.log("Which topic should we study first?")
selectTopic();