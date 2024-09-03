// 1. Create a class named Video. The class should be constructed with the following parameters:
// - title (a string)
// - uploader (a string, the person who uploaded it)
// - time (a number, the duration of the video - in seconds)
// 2. Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”
// 3. Instantiate a new Video instance and call the watch() method.
// 4. Instantiate a second Video instance with different values.
// 5. Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.
// 6. Bonus: Loop through the array to instantiate those instances.

class Video{
    constructor(title, uploader, time){
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }

    watch(){
        console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
    }
}

// musicvideo1 = new Video('Onew drum beat', 'Dasha', 150);
// musicvideo1.watch();
// musicvideo2 = new Video('Stray Kids Thunderous', 'Katya', 200);
// musicvideo2.watch();

let videoArray = [
    ['video1', 'person1', 100],
    ['video2', 'person2', 200],
    ['video3', 'person3', 300],
    ['video4', 'person4', 400],
    ['video5', 'person5', 500]
]

let videos = [];

for (const item of videoArray){
    let video = new Video(item[0], item[1], item[2]);
    videos.push(video);
}

console.log(videos);