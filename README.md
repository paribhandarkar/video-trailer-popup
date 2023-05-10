# Video Trailer Popup

In this project, I created a video trailer popup for the album "Reputation" by Taylor Swift using HTML, CSS, and JavaScript. The popup contains a video trailer of the album and a close icon to exit the popup. I used CSS to style the layout and added transitions to make it look visually appealing. Finally, I used JavaScript to handle the popup functionality, including displaying and hiding the popup and controlling the video playback. Overall, I enjoyed working on this project and am happy with the end result.

## Demo

You can try out the application by visiting [this link](https://paribhandarkar.github.io/video-trailer-popup/).

## Technologies Used

- HTML
- CSS
- JavaScript

## Getting Started

To get started with this project, clone the repository and open the `index.html` file in your preferred web browser.

## New Things I Learned

So, I learned that the **`pause()`** method in JavaScript can be used to pause a video element. In this project, we use it to pause the video when the user clicks the close icon to hide the trailer.

Additionally, I learned that the **`currentTime`** property can be used to set the current playback time of a video element. In this project, we set it to 0 when the user closes the trailer, so that the next time they open it, it starts from the beginning.

Lastly, I learned about the **`controls`** attribute in the **`video`** tag. This attribute adds standard video controls, such as play/pause, volume, and seek bar, to the video element without the need for custom controls. This was used in this project to allow users to play/pause the video and control the playback.

## Challenges I faced

When I was working on this project, I faced a challenge where the video would keep playing even after I closed the video popup using the close icon. To solve this issue, I had to use the pause() method of the video element to stop the video from playing and set the currentTime property to 0 to reset the video back to the beginning. This allowed me to ensure that the video was completely stopped when the user closed the popup, and prevented it from continuing to play in the background.

![image](https://github.com/paribhandarkar/video-trailer-popup/assets/76446574/1ddcf9bc-3023-4cac-9593-6b3bf7e966cd)
